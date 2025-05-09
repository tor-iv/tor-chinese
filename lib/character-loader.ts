import type { Character } from "./character-data"
import { charactersDatabase, may2023Characters, june2023Characters } from "./characters"

// Map of year-month to character sets
const monthlyCharacterSets: Record<string, Character[]> = {
  "2023-05": may2023Characters,
  "2023-06": june2023Characters,
  // Add more monthly sets as needed
}

// Get characters for a specific month
export function getMonthlyCharacters(year: number, month: number): Character[] {
  const key = `${year}-${month.toString().padStart(2, "0")}`
  return monthlyCharacterSets[key] || charactersDatabase
}

// Get the current month's characters
export function getCurrentMonthCharacters(): Character[] {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 // JavaScript months are 0-indexed
  return getMonthlyCharacters(year, month)
}

// Generate a new monthly character set
export function generateMonthlyCharacterSet(year: number, month: number, count = 7): Character[] {
  // This is a simple implementation that selects random characters
  // In a real app, you might want to select characters based on difficulty, category, etc.
  const shuffled = [...charactersDatabase].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Export a monthly character set as JSON
export function exportMonthlyCharacterSetAsJSON(characters: Character[]): string {
  return JSON.stringify(characters, null, 2)
}
