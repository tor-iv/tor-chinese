import { generateMonthlyCharacterSet, exportMonthlyCharacterSetAsJSON } from "./character-loader"

// This function would be used in a Node.js script to generate monthly character sets
export function generateCharacterSetForMonth(year: number, month: number): string {
  const characters = generateMonthlyCharacterSet(year, month)
  const json = exportMonthlyCharacterSetAsJSON(characters)

  // In a real script, you would save this to a file
  // For example: fs.writeFileSync(`characters-${year}-${month.toString().padStart(2, '0')}.json`, json)

  return json
}

// Example usage:
// generateCharacterSetForMonth(2023, 7) // Generate for July 2023
