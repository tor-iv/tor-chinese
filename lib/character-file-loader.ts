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
  const cacheKey = `${year}-${month.toString().padStart(2, "0")}`
  
  // Return from cache if available
  if (monthlyCharacterCache.has(cacheKey)) {
    return monthlyCharacterCache.get(cacheKey)!
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
    await loadMonthlyCharactersFromFile(year, month)
  } catch (error) {
    console.warn(`Could not preload characters for ${year}-${month}:`, error)
  }
}

/**
 * Check if characters for a specific month are available in cache
 */
export function areMonthlyCharactersCached(year: number, month: number): boolean {
  const cacheKey = `${year}-${month.toString().padStart(2, "0")}`
  return monthlyCharacterCache.has(cacheKey)
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
