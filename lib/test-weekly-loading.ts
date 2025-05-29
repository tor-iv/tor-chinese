/**
 * Test script for weekly character loading system
 */

import { loadMonthlyCharactersFromWeeklyFiles } from './character-file-loader'
import { getMonthlyCharacters } from './character-loader'

/**
 * Test the weekly character loading system
 */
export async function testWeeklyCharacterLoading(): Promise<void> {
  console.log('🧪 Testing Weekly Character Loading System')
  console.log('=' .repeat(50))

  try {
    // Test loading May 2025 characters from weekly files
    console.log('📅 Testing May 2025 character loading...')
    
    const may2025Characters = await loadMonthlyCharactersFromWeeklyFiles(2025, 5)
    
    console.log(`✅ Successfully loaded ${may2025Characters.length} characters from weekly files`)
    console.log('📋 Character summary:')
    
    may2025Characters.forEach((char, index) => {
      console.log(`  ${index + 1}. ${char.character} (${char.pinyin}) - ${char.english}`)
    })

    // Test the main loading function (should use weekly files first)
    console.log('\n🔄 Testing main character loading function...')
    const mainLoadedCharacters = await getMonthlyCharacters(2025, 5)
    
    console.log(`✅ Main loader returned ${mainLoadedCharacters.length} characters`)
    
    // Verify they match
    if (may2025Characters.length === mainLoadedCharacters.length) {
      console.log('✅ Character counts match between direct weekly loading and main loader')
    } else {
      console.log('❌ Character counts do not match!')
    }

    // Test character mapping for specific days
    console.log('\n📅 Testing day-to-character mapping:')
    const testDays = [1, 5, 15, 28, 31]
    
    for (const day of testDays) {
      const characterIndex = (day - 1) % may2025Characters.length
      const character = may2025Characters[characterIndex]
      console.log(`  Day ${day}: ${character.character} (${character.pinyin}) - ${character.english}`)
    }

    console.log('\n🎉 All tests completed successfully!')

  } catch (error) {
    console.error('❌ Test failed:', error)
    throw error
  }
}

/**
 * Test loading individual weekly files
 */
export async function testIndividualWeeklyFiles(): Promise<void> {
  console.log('\n🧪 Testing Individual Weekly Files')
  console.log('=' .repeat(50))

  const weeks = [1, 2, 3, 4]
  
  for (const week of weeks) {
    try {
      const response = await fetch(`/character_info/2025-05/characters-week-${week}.json`)
      
      if (response.ok) {
        const characters = await response.json()
        console.log(`✅ Week ${week}: ${characters.length} characters loaded`)
        
        // Show first character from each week
        if (characters.length > 0) {
          const firstChar = characters[0]
          console.log(`   First character: ${firstChar.character} (${firstChar.pinyin}) - ${firstChar.english}`)
        }
      } else {
        console.log(`❌ Week ${week}: Failed to load (${response.status})`)
      }
    } catch (error) {
      console.log(`❌ Week ${week}: Error loading - ${error}`)
    }
  }
}

/**
 * Compare file sizes between weekly and monthly approaches
 */
export async function compareFileSizes(): Promise<void> {
  console.log('\n📊 Comparing File Sizes')
  console.log('=' .repeat(50))

  try {
    // Test monthly file
    const monthlyResponse = await fetch('/character_info/characters-2025-05.json')
    const monthlySize = monthlyResponse.headers.get('content-length')
    
    // Test weekly files
    let totalWeeklySize = 0
    const weekSizes: number[] = []
    
    for (let week = 1; week <= 4; week++) {
      try {
        const weeklyResponse = await fetch(`/character_info/2025-05/characters-week-${week}.json`)
        const weekSize = parseInt(weeklyResponse.headers.get('content-length') || '0')
        weekSizes.push(weekSize)
        totalWeeklySize += weekSize
      } catch (error) {
        console.log(`❌ Could not get size for week ${week}`)
      }
    }

    console.log(`📄 Monthly file size: ${monthlySize ? `${monthlySize} bytes` : 'Unknown'}`)
    console.log(`📄 Weekly files total: ${totalWeeklySize} bytes`)
    weekSizes.forEach((size, index) => {
      console.log(`   Week ${index + 1}: ${size} bytes`)
    })

    if (monthlySize) {
      const monthlyBytes = parseInt(monthlySize)
      const savings = monthlyBytes - totalWeeklySize
      const percentage = ((savings / monthlyBytes) * 100).toFixed(1)
      
      if (savings > 0) {
        console.log(`💾 Weekly approach saves ${savings} bytes (${percentage}% smaller)`)
      } else {
        console.log(`📈 Weekly approach uses ${Math.abs(savings)} bytes more (${Math.abs(parseFloat(percentage))}% larger)`)
      }
    }

  } catch (error) {
    console.error('❌ Error comparing file sizes:', error)
  }
}

/**
 * Run all tests
 */
export async function runAllWeeklyTests(): Promise<void> {
  try {
    await testWeeklyCharacterLoading()
    await testIndividualWeeklyFiles()
    await compareFileSizes()
    
    console.log('\n🎉 All weekly loading tests completed!')
  } catch (error) {
    console.error('❌ Test suite failed:', error)
  }
}

// Export for browser console testing
if (typeof window !== 'undefined') {
  (window as any).testWeeklyCharacterLoading = testWeeklyCharacterLoading;
  (window as any).testIndividualWeeklyFiles = testIndividualWeeklyFiles;
  (window as any).compareFileSizes = compareFileSizes;
  (window as any).runAllWeeklyTests = runAllWeeklyTests;
}
