import type { Character } from "./character-data"

/**
 * Utility functions for loading character data from JSON files
 */

// Cache for loaded monthly character sets to avoid re-loading
const monthlyCharacterCache = new Map<string, Character[]>()

/**
 * Generate the filename for a given year and month
 */
export function getMonthlyCharacterFilename(year: number, month: number): string {
  const monthStr = month.toString().padStart(2, "0")
  return `characters-${year}-${monthStr}.json`
}

/**
 * Generate the filename for a weekly character file
 */
export function getWeeklyCharacterFilename(year: number, month: number, week: number): string {
  const monthStr = month.toString().padStart(2, "0")
  return `${year}-${monthStr}/characters-week-${week}.json`
}

/**
 * Load characters from weekly files for a specific month
 */
export async function loadMonthlyCharactersFromWeeklyFiles(year: number, month: number): Promise<Character[]> {
  const cacheKey = `${year}-${month.toString().padStart(2, "0")}-weekly`
  
  // Check cache first
  if (monthlyCharacterCache.has(cacheKey)) {
    return monthlyCharacterCache.get(cacheKey)!
  }

  const allCharacters: Character[] = []
  const errors: string[] = []

  // Try to load from 4 weekly files
  for (let week = 1; week <= 4; week++) {
    try {
      const filename = getWeeklyCharacterFilename(year, month, week)
      const filePath = `/character_info/${filename}`
      
      const response = await fetch(filePath)
      
      if (!response.ok) {
        errors.push(`Week ${week}: ${response.status} ${response.statusText}`)
        continue
      }

      const weeklyCharacters: Character[] = await response.json()
      
      // Validate the loaded data
      if (!Array.isArray(weeklyCharacters)) {
        errors.push(`Week ${week}: Invalid data format - expected array of characters`)
        continue
      }

      // Basic validation of character structure
      for (const char of weeklyCharacters) {
        if (!char.id || !char.character || !char.pinyin || !char.english) {
          errors.push(`Week ${week}: Invalid character data - missing required fields`)
          continue
        }
      }

      allCharacters.push(...weeklyCharacters)
    } catch (error) {
      errors.push(`Week ${week}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  if (allCharacters.length === 0) {
    throw new Error(`No characters could be loaded from weekly files for ${year}-${month}. Errors: ${errors.join('; ')}`)
  }

  if (errors.length > 0) {
    console.warn(`Some weekly files could not be loaded for ${year}-${month}:`, errors)
  }

  // Cache the combined characters
  monthlyCharacterCache.set(cacheKey, allCharacters)
  
  return allCharacters
}

/**
 * Load characters from a JSON file for a specific month
 */
export async function loadMonthlyCharactersFromFile(year: number, month: number): Promise<Character[]> {
  const cacheKey = `${year}-${month.toString().padStart(2, "0")}`
  
  // Check cache first
  if (monthlyCharacterCache.has(cacheKey)) {
    return monthlyCharacterCache.get(cacheKey)!
  }

  const filename = getMonthlyCharacterFilename(year, month)
  const filePath = `/character_info/${filename}`

  try {
    const response = await fetch(filePath)
    
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.status} ${response.statusText}`)
    }

    const characters: Character[] = await response.json()
    
    // Validate the loaded data
    if (!Array.isArray(characters)) {
      throw new Error(`Invalid data format in ${filename}: expected array of characters`)
    }

    // Basic validation of character structure
    for (const char of characters) {
      if (!char.id || !char.character || !char.pinyin || !char.english) {
        throw new Error(`Invalid character data in ${filename}: missing required fields`)
      }
    }

    // Cache the loaded characters
    monthlyCharacterCache.set(cacheKey, characters)
    
    return characters
  } catch (error) {
    console.error(`Error loading monthly characters for ${year}-${month}:`, error)
    throw error
  }
}

/**
 * Load characters from a JSON file for a specific month (synchronous version for client-side)
 * This version is for use in client components where we can't use async/await
 */
export function loadMonthlyCharactersSync(year: number, month: number): Character[] | null {
  const weeklyCacheKey = `${year}-${month.toString().padStart(2, "0")}-weekly`
  const monthlyCacheKey = `${year}-${month.toString().padStart(2, "0")}`
  
  // Check weekly cache first
  if (monthlyCharacterCache.has(weeklyCacheKey)) {
    return monthlyCharacterCache.get(weeklyCacheKey)!
  }
  
  // Then check monthly cache
  if (monthlyCharacterCache.has(monthlyCacheKey)) {
    return monthlyCharacterCache.get(monthlyCacheKey)!
  }

  // For client-side, we'll need to handle this differently
  // This function will return null if not cached, and the caller should handle loading
  return null
}

/**
 * Preload characters for a specific month into cache
 * This can be called during app initialization or when navigating to a new month
 */
export async function preloadMonthlyCharacters(year: number, month: number): Promise<void> {
  try {
    // Try weekly files first
    await loadMonthlyCharactersFromWeeklyFiles(year, month)
  } catch (weeklyError) {
    try {
      // Fall back to monthly file
      await loadMonthlyCharactersFromFile(year, month)
    } catch (monthlyError) {
      console.warn(`Could not preload characters for ${year}-${month}:`, monthlyError)
    }
  }
}

/**
 * Check if characters for a specific month are available in cache
 */
export function areMonthlyCharactersCached(year: number, month: number): boolean {
  const weeklyCacheKey = `${year}-${month.toString().padStart(2, "0")}-weekly`
  const monthlyCacheKey = `${year}-${month.toString().padStart(2, "0")}`
  return monthlyCharacterCache.has(weeklyCacheKey) || monthlyCharacterCache.has(monthlyCacheKey)
}

/**
 * Clear the character cache (useful for testing or memory management)
 */
export function clearCharacterCache(): void {
  monthlyCharacterCache.clear()
}

/**
 * Get all available months from the cache
 */
export function getCachedMonths(): string[] {
  return Array.from(monthlyCharacterCache.keys())
}

/**
 * Validate that a character object has all required fields
 */
export function validateCharacter(character: any): character is Character {
  return (
    typeof character === 'object' &&
    character !== null &&
    typeof character.id === 'string' &&
    typeof character.character === 'string' &&
    typeof character.pinyin === 'string' &&
    typeof character.english === 'string' &&
    typeof character.level === 'string' &&
    typeof character.strokes === 'number' &&
    Array.isArray(character.radicals) &&
    typeof character.radicalExplanation === 'string' &&
    typeof character.etymology === 'string' &&
    Array.isArray(character.examples) &&
    Array.isArray(character.relatedCharacters) &&
    typeof character.mnemonic === 'string' &&
    typeof character.radicalMnemonic === 'string' &&
    Array.isArray(character.commonWords)
  )
}

/**
 * Load and validate characters from a JSON file with comprehensive error handling
 */
export async function loadAndValidateMonthlyCharacters(year: number, month: number): Promise<Character[]> {
  try {
    const characters = await loadMonthlyCharactersFromFile(year, month)
    
    // Validate each character
    const validCharacters = characters.filter(char => {
      const isValid = validateCharacter(char)
      if (!isValid) {
        console.warn(`Invalid character data found:`, char)
      }
      return isValid
    })

    if (validCharacters.length === 0) {
      throw new Error(`No valid characters found in file for ${year}-${month}`)
    }

    if (validCharacters.length !== characters.length) {
      console.warn(`Some characters were filtered out due to validation errors. Valid: ${validCharacters.length}, Total: ${characters.length}`)
    }

    return validCharacters
  } catch (error) {
    console.error(`Failed to load and validate characters for ${year}-${month}:`, error)
    throw error
  }
}
