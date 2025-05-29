import { charactersDatabase } from "./characters"
import { getCharacterForDaySync } from "./character-loader"

export interface Position {
  top: number
  left: number
}

export interface Radical {
  symbol: string
  name: string
  meaning: string
  pinyin: string
  color: string
  position: Position
  positionName: string
}

export interface Example {
  chinese: string
  pinyin: string
  english: string
  note: string
}

export interface RelatedCharacter {
  character: string
  pinyin: string
  english: string
}

export interface CommonWord {
  chinese: string
  pinyin: string
  english: string
}

export interface Character {
  id: string
  character: string
  pinyin: string
  english: string
  level: string
  strokes: number
  radicals: Radical[]
  radicalExplanation: string
  etymology: string
  examples: Example[]
  relatedCharacters: RelatedCharacter[]
  mnemonic: string
  radicalMnemonic: string
  commonWords: CommonWord[]
}

export interface UserProgress {
  characterId: string
  status: "new" | "learning" | "reviewing" | "mastered"
  lastReviewed: string | null
  nextReview: string | null
  reviewCount: number
  correctCount: number
}

export interface UserStreak {
  currentStreak: number
  longestStreak: number
  lastActivityDate: string | null
}

export interface UserData {
  progress: Record<string, UserProgress>
  streak: UserStreak
  dailyCharacters: Record<string, string> // date -> characterId
}

// Local storage keys
const USER_DATA_KEY = "chinese-learning-app-user-data"

// Initialize user data
const defaultUserData: UserData = {
  progress: {},
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: null,
  },
  dailyCharacters: {},
}

// Get user data from local storage
export function getUserData(): UserData {
  if (typeof window === "undefined") {
    return defaultUserData
  }

  const storedData = localStorage.getItem(USER_DATA_KEY)
  if (!storedData) {
    return defaultUserData
  }

  try {
    return JSON.parse(storedData) as UserData
  } catch (error) {
    console.error("Error parsing user data from local storage:", error)
    return defaultUserData
  }
}

// Save user data to local storage
export function saveUserData(userData: UserData): void {
  if (typeof window === "undefined") {
    return
  }

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData))
}

// Get a character based on the date
export function getCharacterForDate(date: Date): Character {
  const dateString = date.toISOString().split("T")[0]
  const userData = getUserData()

  // Check if we already have a character for this date
  if (userData.dailyCharacters[dateString]) {
    const characterId = userData.dailyCharacters[dateString]
    // First try to find in the full database
    let character = charactersDatabase.find((c) => c.id === characterId)
    if (character) {
      return character
    }
    
    // If not found in database, try to get from monthly file
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const monthlyCharacter = getCharacterForDaySync(year, month, day)
    if (monthlyCharacter && monthlyCharacter.id === characterId) {
      return monthlyCharacter
    }
  }

  // Try to get character from monthly file first
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  const monthlyCharacter = getCharacterForDaySync(year, month, day)
  if (monthlyCharacter) {
    // Save this selection for future reference
    userData.dailyCharacters[dateString] = monthlyCharacter.id
    saveUserData(userData)
    return monthlyCharacter
  }

  // Fallback to original logic if no monthly character file exists
  // Try to avoid repeating characters from the past week
  const oneWeekAgo = new Date(date)
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const recentCharacterIds = new Set<string>()
  for (let d = new Date(date); d >= oneWeekAgo; d.setDate(d.getDate() - 1)) {
    const ds = d.toISOString().split("T")[0]
    if (userData.dailyCharacters[ds]) {
      recentCharacterIds.add(userData.dailyCharacters[ds])
    }
  }

  // Filter out recently used characters
  const availableCharacters = charactersDatabase.filter((c) => !recentCharacterIds.has(c.id))

  // If all characters were used recently, just use any character
  const characterPool = availableCharacters.length > 0 ? availableCharacters : charactersDatabase

  // Use a deterministic selection based on the date
  const dayOfYear = getDayOfYear(date)
  const selectedIndex = dayOfYear % characterPool.length
  const selectedCharacter = characterPool[selectedIndex]

  // Save this selection for future reference
  userData.dailyCharacters[dateString] = selectedCharacter.id
  saveUserData(userData)

  return selectedCharacter
}

// Get characters for review
export function getReviewCharacters(): Character[] {
  const userData = getUserData()
  const now = new Date()

  // Get characters that are due for review
  const dueCharacterIds = Object.entries(userData.progress)
    .filter(([_, progress]) => {
      if (!progress.nextReview) return false
      const nextReview = new Date(progress.nextReview)
      return nextReview <= now
    })
    .map(([characterId]) => characterId)

  // If we have fewer than 3 due characters, add some recently viewed characters
  if (dueCharacterIds.length < 3) {
    const recentDates = Object.keys(userData.dailyCharacters).sort().reverse().slice(0, 7) // Last week

    for (const date of recentDates) {
      const characterId = userData.dailyCharacters[date]
      if (!dueCharacterIds.includes(characterId)) {
        dueCharacterIds.push(characterId)
      }

      if (dueCharacterIds.length >= 3) break
    }
  }

  // If we still don't have enough, just use the first few characters
  if (dueCharacterIds.length < 3) {
    for (const character of charactersDatabase) {
      if (!dueCharacterIds.includes(character.id)) {
        dueCharacterIds.push(character.id)
      }

      if (dueCharacterIds.length >= 3) break
    }
  }

  // Get the actual character objects - try both database and monthly files
  const reviewCharacters: Character[] = []
  
  for (const id of dueCharacterIds) {
    // First try to find in the database
    let character = charactersDatabase.find((c) => c.id === id)
    
    // If not found in database, try to find in monthly files by checking recent dates
    if (!character) {
      for (const [dateStr, charId] of Object.entries(userData.dailyCharacters)) {
        if (charId === id) {
          const date = new Date(dateStr)
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          const monthlyCharacter = getCharacterForDaySync(year, month, day)
          if (monthlyCharacter && monthlyCharacter.id === id) {
            character = monthlyCharacter
            break
          }
        }
      }
    }
    
    if (character) {
      reviewCharacters.push(character)
    }
  }
  
  return reviewCharacters.slice(0, 5) // Limit to 5 characters for review
}

// Mark a character as reviewed
export function markCharacterAsReviewed(characterId: string, remembered: boolean): void {
  const userData = getUserData()
  const now = new Date().toISOString()

  // Update character progress
  if (!userData.progress[characterId]) {
    userData.progress[characterId] = {
      characterId,
      status: remembered ? "reviewing" : "learning",
      lastReviewed: now,
      nextReview: getNextReviewDate(0, remembered),
      reviewCount: 1,
      correctCount: remembered ? 1 : 0,
    }
  } else {
    const progress = userData.progress[characterId]
    progress.reviewCount += 1
    if (remembered) {
      progress.correctCount += 1
    }
    progress.lastReviewed = now
    progress.nextReview = getNextReviewDate(progress.reviewCount, remembered)
    progress.status = getStatusFromReviews(progress.reviewCount, progress.correctCount)
  }

  // Update streak
  updateStreak(userData)

  // Save changes
  saveUserData(userData)
}

// Get user progress statistics
export function getUserProgressStats() {
  const userData = getUserData()
  const totalCharacters = charactersDatabase.length

  // Calculate statistics
  const charactersLearned = Object.keys(userData.progress).length
  const masteredCharacters = Object.values(userData.progress).filter((p) => p.status === "mastered").length
  const reviewingCharacters = Object.values(userData.progress).filter((p) => p.status === "reviewing").length
  const learningCharacters = Object.values(userData.progress).filter((p) => p.status === "learning").length

  // Calculate review accuracy
  let reviewAccuracy = 0
  const totalReviews = Object.values(userData.progress).reduce((sum, p) => sum + p.reviewCount, 0)
  const correctReviews = Object.values(userData.progress).reduce((sum, p) => sum + p.correctCount, 0)
  reviewAccuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0

  return {
    totalCharacters,
    charactersLearned,
    masteredCharacters,
    reviewingCharacters,
    learningCharacters,
    reviewAccuracy,
    streakDays: userData.streak.currentStreak,
    longestStreak: userData.streak.longestStreak,
    lastActivityDate: userData.streak.lastActivityDate,
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
function getStatusFromReviews(
  reviewCount: number,
  correctCount: number,
): "new" | "learning" | "reviewing" | "mastered" {
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
function updateStreak(userData: UserData): void {
  const today = new Date().toISOString().split("T")[0]

  // If this is the first activity, start the streak
  if (!userData.streak.lastActivityDate) {
    userData.streak.currentStreak = 1
    userData.streak.longestStreak = 1
    userData.streak.lastActivityDate = today
    return
  }

  // If already logged activity today, no streak update needed
  if (userData.streak.lastActivityDate === today) {
    return
  }

  // Check if last activity was yesterday
  const lastActivity = new Date(userData.streak.lastActivityDate)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  const lastActivityDate = lastActivity.toISOString().split("T")[0]
  const yesterdayDate = yesterday.toISOString().split("T")[0]

  if (lastActivityDate === yesterdayDate) {
    // Continuing the streak
    userData.streak.currentStreak += 1
    userData.streak.longestStreak = Math.max(userData.streak.currentStreak, userData.streak.longestStreak)
  } else {
    // Streak broken, start a new one
    userData.streak.currentStreak = 1
  }

  userData.streak.lastActivityDate = today
}

// Helper function to get day of year (0-365)
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

// Get all characters
export function getAllCharacters(): Character[] {
  return charactersDatabase
}

// Load characters for a specific month (for future implementation)
export function loadMonthlyCharacters(year: number, month: number): void {
  // This function could be implemented to dynamically load character sets
  // based on the year and month, potentially from an API or different files
  console.log(`Loading characters for ${year}-${month}`)
  // For now, we're using the static charactersDatabase
}
