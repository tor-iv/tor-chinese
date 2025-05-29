import type { Character } from "./character-data"
import { charactersDatabase, may2023Characters, june2023Characters } from "./characters"
import {
  loadMonthlyCharactersFromFile,
  loadMonthlyCharactersSync,
  areMonthlyCharactersCached,
  preloadMonthlyCharacters,
  loadAndValidateMonthlyCharacters
} from "./character-file-loader"

// Legacy map of year-month to character sets (kept for backward compatibility)
const legacyMonthlyCharacterSets: Record<string, Character[]> = {
  "2023-05": may2023Characters,
  "2023-06": june2023Characters,
  // Add more monthly sets as needed
}

/**
 * Get characters for a specific month
 * First tries to load from JSON file, then falls back to legacy hardcoded sets, then to full database
 */
export async function getMonthlyCharacters(year: number, month: number): Promise<Character[]> {
  try {
    // Try to load from JSON file first
    const characters = await loadAndValidateMonthlyCharacters(year, month)
    return characters
  } catch (error) {
    console.warn(`Could not load characters from file for ${year}-${month}, trying legacy sets:`, error)
    
    // Fall back to legacy hardcoded sets
    const key = `${year}-${month.toString().padStart(2, "0")}`
    if (legacyMonthlyCharacterSets[key]) {
      return legacyMonthlyCharacterSets[key]
    }
    
    // Final fallback to full database
    console.warn(`No character set found for ${year}-${month}, using full database`)
    return charactersDatabase
  }
}

/**
 * Get characters for a specific month (synchronous version)
 * This version checks cache first, then falls back to legacy sets or database
 */
export function getMonthlyCharactersSync(year: number, month: number): Character[] {
  // Try to get from cache first
  const cachedCharacters = loadMonthlyCharactersSync(year, month)
  if (cachedCharacters) {
    return cachedCharacters
  }
  
  // Fall back to legacy hardcoded sets
  const key = `${year}-${month.toString().padStart(2, "0")}`
  if (legacyMonthlyCharacterSets[key]) {
    return legacyMonthlyCharacterSets[key]
  }
  
  // Final fallback to full database
  return charactersDatabase
}

/**
 * Get the current month's characters
 */
export async function getCurrentMonthCharacters(): Promise<Character[]> {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 // JavaScript months are 0-indexed
  return await getMonthlyCharacters(year, month)
}

/**
 * Get the current month's characters (synchronous version)
 */
export function getCurrentMonthCharactersSync(): Character[] {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 // JavaScript months are 0-indexed
  return getMonthlyCharactersSync(year, month)
}

/**
 * Preload characters for the current month and adjacent months
 * This can be called during app initialization to improve performance
 */
export async function preloadAdjacentMonths(): Promise<void> {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  
  // Preload current month, previous month, and next month
  const monthsToPreload = [
    { year, month },
    { year: month === 1 ? year - 1 : year, month: month === 1 ? 12 : month - 1 },
    { year: month === 12 ? year + 1 : year, month: month === 12 ? 1 : month + 1 }
  ]
  
  await Promise.allSettled(
    monthsToPreload.map(({ year, month }) => preloadMonthlyCharacters(year, month))
  )
}

/**
 * Check if characters are available for a specific month
 */
export function areCharactersAvailable(year: number, month: number): boolean {
  // Check if cached
  if (areMonthlyCharactersCached(year, month)) {
    return true
  }
  
  // Check if in legacy sets
  const key = `${year}-${month.toString().padStart(2, "0")}`
  return key in legacyMonthlyCharacterSets
}

/**
 * Generate a new monthly character set
 */
export function generateMonthlyCharacterSet(year: number, month: number, count = 7): Character[] {
  // This is a simple implementation that selects random characters
  // In a real app, you might want to select characters based on difficulty, category, etc.
  const shuffled = [...charactersDatabase].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

/**
 * Export a monthly character set as JSON
 */
export function exportMonthlyCharacterSetAsJSON(characters: Character[]): string {
  return JSON.stringify(characters, null, 2)
}

/**
 * Get character for a specific day within a month
 * Uses the monthly character set and maps the day to a character
 */
export async function getCharacterForDay(year: number, month: number, day: number): Promise<Character | null> {
  try {
    const monthlyCharacters = await getMonthlyCharacters(year, month)
    
    if (monthlyCharacters.length === 0) {
      return null
    }
    
    // Map day to character index (1-based day to 0-based index)
    // If there are more days than characters, cycle through the characters
    const characterIndex = (day - 1) % monthlyCharacters.length
    return monthlyCharacters[characterIndex]
  } catch (error) {
    console.error(`Error getting character for ${year}-${month}-${day}:`, error)
    return null
  }
}

/**
 * Get character for a specific day within a month (synchronous version)
 */
export function getCharacterForDaySync(year: number, month: number, day: number): Character | null {
  try {
    const monthlyCharacters = getMonthlyCharactersSync(year, month)
    
    if (monthlyCharacters.length === 0) {
      return null
    }
    
    // Map day to character index (1-based day to 0-based index)
    // If there are more days than characters, cycle through the characters
    const characterIndex = (day - 1) % monthlyCharacters.length
    return monthlyCharacters[characterIndex]
  } catch (error) {
    console.error(`Error getting character for ${year}-${month}-${day}:`, error)
    return null
  }
}
