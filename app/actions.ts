"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import type { Character } from "@/lib/character-data"

// Get the character for a specific date
export async function getDailyCharacter(date: string): Promise<Character | null> {
  const supabase = createServerSupabaseClient()

  // Get the character for the specified date
  const { data: dailyCharData, error: dailyError } = await supabase
    .from("daily_characters")
    .select("character_id")
    .eq("date", date)
    .single()

  if (dailyError || !dailyCharData) {
    // If no character is set for today, get a random one and set it
    const { data: randomChar, error: randomError } = await supabase.from("characters").select("id").limit(1).single()

    if (randomError || !randomChar) {
      console.error("Error fetching random character:", randomError)
      return null
    }

    // Insert this character as today's character
    const { error: insertError } = await supabase.from("daily_characters").insert({ date, character_id: randomChar.id })

    if (insertError) {
      console.error("Error inserting daily character:", insertError)
      return null
    }

    const characterId = randomChar.id
    return await getCharacterById(characterId)
  }

  return await getCharacterById(dailyCharData.character_id)
}

// Get a character by ID with all related data
export async function getCharacterById(characterId: string): Promise<Character | null> {
  const supabase = createServerSupabaseClient()

  // Get the character details
  const { data: charData, error: charError } = await supabase
    .from("characters")
    .select("*")
    .eq("id", characterId)
    .single()

  if (charError || !charData) {
    console.error("Error fetching character:", charError)
    return null
  }

  // Get radicals
  const { data: radicals, error: radicalError } = await supabase
    .from("radicals")
    .select("*")
    .eq("character_id", charData.id)

  if (radicalError) {
    console.error("Error fetching radicals:", radicalError)
    return null
  }

  // Get examples
  const { data: examples, error: exampleError } = await supabase
    .from("examples")
    .select("*")
    .eq("character_id", charData.id)

  if (exampleError) {
    console.error("Error fetching examples:", exampleError)
    return null
  }

  // Get related characters
  const { data: relatedChars, error: relatedError } = await supabase
    .from("related_characters")
    .select("*")
    .eq("character_id", charData.id)

  if (relatedError) {
    console.error("Error fetching related characters:", relatedError)
    return null
  }

  // Get common words
  const { data: commonWords, error: commonWordsError } = await supabase
    .from("common_words")
    .select("*")
    .eq("character_id", charData.id)

  if (commonWordsError) {
    console.error("Error fetching common words:", commonWordsError)
    return null
  }

  // Transform the data to match our Character interface
  const formattedRadicals = radicals.map((r) => ({
    symbol: r.symbol,
    name: r.name,
    meaning: r.meaning,
    pinyin: r.pinyin,
    color: r.color,
    position: {
      top: r.position_top,
      left: r.position_left,
    },
    positionName: r.position_name,
  }))

  return {
    id: charData.id,
    character: charData.character,
    pinyin: charData.pinyin,
    english: charData.english,
    level: charData.level,
    strokes: charData.strokes,
    radicals: formattedRadicals,
    radicalExplanation: charData.radical_explanation,
    etymology: charData.etymology,
    examples: examples.map((e) => ({
      chinese: e.chinese,
      pinyin: e.pinyin,
      english: e.english,
      note: e.note,
    })),
    relatedCharacters: relatedChars.map((rc) => ({
      character: rc.related_character,
      pinyin: rc.pinyin,
      english: rc.english,
    })),
    mnemonic: charData.mnemonic,
    radicalMnemonic: charData.radical_mnemonic,
    commonWords: commonWords.map((cw) => ({
      chinese: cw.chinese,
      pinyin: cw.pinyin,
      english: cw.english,
    })),
  }
}

// Get characters for review
export async function getReviewCharacters(): Promise<Character[]> {
  const supabase = createServerSupabaseClient()

  // In a real app with authentication, we would filter by user_id
  // For now, we'll just get characters that have been shown in the past week
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const oneWeekAgoStr = oneWeekAgo.toISOString().split("T")[0]

  const { data: recentChars, error: recentError } = await supabase
    .from("daily_characters")
    .select("character_id")
    .gte("date", oneWeekAgoStr)
    .limit(5)

  if (recentError || !recentChars || recentChars.length === 0) {
    console.error("Error fetching recent characters:", recentError)

    // Fallback: get any 3 characters
    const { data: fallbackChars, error: fallbackError } = await supabase.from("characters").select("id").limit(3)

    if (fallbackError || !fallbackChars || fallbackChars.length === 0) {
      console.error("Error fetching fallback characters:", fallbackError)
      return []
    }

    const characters: Character[] = []
    for (const { id } of fallbackChars) {
      const character = await getCharacterById(id)
      if (character) {
        characters.push(character)
      }
    }

    return characters
  }

  const characters: Character[] = []
  for (const { character_id } of recentChars) {
    const character = await getCharacterById(character_id)
    if (character) {
      characters.push(character)
    }
  }

  return characters
}

// Ensure we have a daily character for today
export async function ensureDailyCharacter() {
  const today = new Date().toISOString().split("T")[0]
  const supabase = createServerSupabaseClient()

  // Check if we already have a character for today
  const { data, error } = await supabase.from("daily_characters").select("*").eq("date", today).single()

  if (error || !data) {
    // No character for today, let's pick one
    const { data: characters, error: charError } = await supabase.from("characters").select("id")

    if (charError || !characters || characters.length === 0) {
      console.error("Error fetching characters:", charError)
      return
    }

    // Get yesterday's character to avoid repeating
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split("T")[0]

    const { data: yesterdayChar } = await supabase
      .from("daily_characters")
      .select("character_id")
      .eq("date", yesterdayStr)
      .single()

    // Filter out yesterday's character if it exists
    let availableChars = characters
    if (yesterdayChar) {
      availableChars = characters.filter((c) => c.id !== yesterdayChar.character_id)
    }

    // Pick a random character
    const randomIndex = Math.floor(Math.random() * availableChars.length)
    const selectedChar = availableChars[randomIndex]

    // Insert as today's character
    await supabase.from("daily_characters").insert({ date: today, character_id: selectedChar.id })
  }
}

// Mark a character as reviewed
export async function markCharacterAsReviewed(characterId: string, remembered: boolean) {
  const supabase = createServerSupabaseClient()

  // In a real app with authentication, we would use the user's ID
  // For now, we'll use a placeholder user ID
  const userId = "anonymous-user"

  // Check if we already have a progress record for this character
  const { data: existingProgress, error: progressError } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("character_id", characterId)
    .single()

  const now = new Date().toISOString()

  if (progressError || !existingProgress) {
    // Create a new progress record
    await supabase.from("user_progress").insert({
      user_id: userId,
      character_id: characterId,
      status: remembered ? "reviewing" : "learning",
      last_reviewed: now,
      next_review: getNextReviewDate(0, remembered),
      review_count: 1,
      correct_count: remembered ? 1 : 0,
    })
  } else {
    // Update existing progress
    const reviewCount = existingProgress.review_count + 1
    const correctCount = existingProgress.correct_count + (remembered ? 1 : 0)

    await supabase
      .from("user_progress")
      .update({
        status: getStatusFromReviews(reviewCount, correctCount),
        last_reviewed: now,
        next_review: getNextReviewDate(reviewCount, remembered),
        review_count: reviewCount,
        correct_count: correctCount,
        updated_at: now,
      })
      .eq("id", existingProgress.id)
  }

  // Update user streak
  await updateUserStreak(userId)
}

// Get user progress statistics
export async function getUserProgressStats() {
  const supabase = createServerSupabaseClient()

  // In a real app with authentication, we would use the user's ID
  // For now, we'll use a placeholder user ID
  const userId = "anonymous-user"

  // Get total characters count
  const { count: totalCharacters, error: countError } = await supabase
    .from("characters")
    .select("*", { count: "exact", head: true })

  if (countError) {
    console.error("Error counting characters:", countError)
    return null
  }

  // Get user progress
  const { data: progress, error: progressError } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)

  if (progressError) {
    console.error("Error fetching user progress:", progressError)
    return null
  }

  // Get user streak
  const { data: streak, error: streakError } = await supabase
    .from("user_streaks")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (streakError && streakError.code !== "PGRST116") {
    // PGRST116 is "no rows returned"
    console.error("Error fetching user streak:", streakError)
  }

  // Calculate statistics
  const charactersLearned = progress.length
  const masteredCharacters = progress.filter((p) => p.status === "mastered").length
  const reviewingCharacters = progress.filter((p) => p.status === "reviewing").length
  const learningCharacters = progress.filter((p) => p.status === "learning").length

  // Calculate review accuracy
  let reviewAccuracy = 0
  if (progress.length > 0) {
    const totalReviews = progress.reduce((sum, p) => sum + p.review_count, 0)
    const correctReviews = progress.reduce((sum, p) => sum + p.correct_count, 0)
    reviewAccuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0
  }

  return {
    totalCharacters: totalCharacters || 0,
    charactersLearned,
    masteredCharacters,
    reviewingCharacters,
    learningCharacters,
    reviewAccuracy,
    streakDays: streak?.current_streak || 0,
    longestStreak: streak?.longest_streak || 0,
    lastActivityDate: streak?.last_activity_date || null,
  }
}

// Helper function to determine the next review date based on spaced repetition
function getNextReviewDate(reviewCount: number, remembered: boolean): string {
  const now = new Date()

  // Simple spaced repetition algorithm
  // If not remembered, review again in 1 day
  if (!remembered) {
    now.setDate(now.getDate() + 1)
    return now.toISOString()
  }

  // Otherwise, increase interval based on review count
  // 1st review: 3 days, 2nd: 7 days, 3rd: 14 days, 4th: 30 days, 5th+: 60 days
  const intervals = [3, 7, 14, 30, 60]
  const intervalIndex = Math.min(reviewCount, intervals.length - 1)

  now.setDate(now.getDate() + intervals[intervalIndex])
  return now.toISOString()
}

// Helper function to determine status based on review history
function getStatusFromReviews(reviewCount: number, correctCount: number): string {
  const accuracy = correctCount / reviewCount

  if (reviewCount >= 5 && accuracy >= 0.8) {
    return "mastered"
  } else if (reviewCount >= 2 && accuracy >= 0.5) {
    return "reviewing"
  } else {
    return "learning"
  }
}

// Update user streak
async function updateUserStreak(userId: string) {
  const supabase = createServerSupabaseClient()
  const today = new Date().toISOString().split("T")[0]

  // Get current streak info
  const { data: streak, error: streakError } = await supabase
    .from("user_streaks")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (streakError && streakError.code !== "PGRST116") {
    // PGRST116 is "no rows returned"
    console.error("Error fetching user streak:", streakError)
    return
  }

  if (!streak) {
    // Create new streak record
    await supabase.from("user_streaks").insert({
      user_id: userId,
      current_streak: 1,
      longest_streak: 1,
      last_activity_date: today,
    })
    return
  }

  // Check if last activity was yesterday or today
  const lastActivity = new Date(streak.last_activity_date)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  const lastActivityDate = lastActivity.toISOString().split("T")[0]
  const yesterdayDate = yesterday.toISOString().split("T")[0]

  let currentStreak = streak.current_streak

  if (lastActivityDate === today) {
    // Already logged activity today, no streak update needed
    return
  } else if (lastActivityDate === yesterdayDate) {
    // Continuing the streak
    currentStreak += 1
  } else {
    // Streak broken, start a new one
    currentStreak = 1
  }

  // Update streak record
  await supabase
    .from("user_streaks")
    .update({
      current_streak: currentStreak,
      longest_streak: Math.max(currentStreak, streak.longest_streak),
      last_activity_date: today,
      updated_at: new Date().toISOString(),
    })
    .eq("id", streak.id)
}
