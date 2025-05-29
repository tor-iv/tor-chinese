/**
 * Test file to verify monthly character loading functionality
 * This can be run in the browser console to test the implementation
 */

import { getCharacterForDate } from "./character-data"
import { getCharacterForDaySync, getMonthlyCharactersSync, areCharactersAvailable } from "./character-loader"

export function testMonthlyCharacterLoading() {
  console.log("🧪 Testing Monthly Character Loading System")
  console.log("=" .repeat(50))

  // Test 1: Check if May 2025 characters are available
  console.log("📅 Test 1: Checking May 2025 availability")
  const mayAvailable = areCharactersAvailable(2025, 5)
  console.log(`May 2025 characters available: ${mayAvailable}`)

  if (mayAvailable) {
    // Test 2: Load May 2025 characters
    console.log("\n📚 Test 2: Loading May 2025 characters")
    const mayCharacters = getMonthlyCharactersSync(2025, 5)
    console.log(`Loaded ${mayCharacters.length} characters for May 2025:`)
    mayCharacters.forEach((char, index) => {
      console.log(`  ${index + 1}. ${char.character} (${char.pinyin}) - ${char.english}`)
    })

    // Test 3: Test day-to-character mapping
    console.log("\n🗓️ Test 3: Testing day-to-character mapping")
    const testDays = [1, 5, 10, 15, 20, 25, 31]
    testDays.forEach(day => {
      const character = getCharacterForDaySync(2025, 5, day)
      if (character) {
        const expectedIndex = (day - 1) % mayCharacters.length
        const expectedChar = mayCharacters[expectedIndex]
        const isCorrect = character.id === expectedChar.id
        console.log(`  Day ${day}: ${character.character} (${character.pinyin}) ${isCorrect ? '✅' : '❌'}`)
      } else {
        console.log(`  Day ${day}: No character found ❌`)
      }
    })

    // Test 4: Test getCharacterForDate integration
    console.log("\n📆 Test 4: Testing getCharacterForDate integration")
    const testDates = [
      new Date(2025, 4, 1),  // May 1, 2025
      new Date(2025, 4, 15), // May 15, 2025
      new Date(2025, 4, 31), // May 31, 2025
    ]
    
    testDates.forEach(date => {
      const character = getCharacterForDate(date)
      const day = date.getDate()
      const expectedIndex = (day - 1) % mayCharacters.length
      const expectedChar = mayCharacters[expectedIndex]
      const isCorrect = character.id === expectedChar.id
      console.log(`  ${date.toDateString()}: ${character.character} (${character.pinyin}) ${isCorrect ? '✅' : '❌'}`)
    })
  }

  // Test 5: Test fallback for non-existent month
  console.log("\n🔄 Test 5: Testing fallback for non-existent month")
  const fallbackAvailable = areCharactersAvailable(2025, 12) // December 2025 (likely doesn't exist)
  console.log(`December 2025 characters available: ${fallbackAvailable}`)
  
  const decemberChar = getCharacterForDaySync(2025, 12, 1)
  if (decemberChar) {
    console.log(`  Fallback character: ${decemberChar.character} (${decemberChar.pinyin})`)
  } else {
    console.log(`  No fallback character found`)
  }

  console.log("\n✨ Monthly Character Loading Test Complete!")
  console.log("=" .repeat(50))
}

// Export for browser console testing
if (typeof window !== 'undefined') {
  (window as any).testMonthlyCharacterLoading = testMonthlyCharacterLoading
}
