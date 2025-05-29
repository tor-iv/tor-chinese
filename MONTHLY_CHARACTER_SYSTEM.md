# Monthly Character Loading System

This document explains how the enhanced character loading system works to read from both weekly and monthly JSON files, providing flexible file management for character data.

## Overview

The system has been enhanced to dynamically load characters from monthly JSON files while maintaining backward compatibility with the existing hardcoded character sets.

## File Structure

### Weekly Character Files (Recommended)
- Location: `character_info/YYYY-MM/`
- Naming convention: `characters-week-N.json` (where N is 1-4)
- Example: `character_info/2025-05/characters-week-1.json` for May 2025, Week 1
- Benefits: Smaller, more manageable files (3-4 characters each)

### Monthly Character Files (Legacy)
- Location: `character_info/`
- Naming convention: `characters-YYYY-MM.json`
- Example: `characters-2025-05.json` for May 2025
- Used as fallback when weekly files are not available

### Key Files Modified
1. `lib/character-file-loader.ts` - Utility functions for loading JSON files
2. `lib/character-loader.ts` - Enhanced character loading with file-based support
3. `lib/character-data.ts` - Updated character selection logic
4. `components/character-context.tsx` - Enhanced context provider with dynamic loading

## How It Works

### 1. Character Loading Priority (`lib/character-loader.ts`)

The `getMonthlyCharacters()` function follows this loading priority:

1. **Try weekly files first**: Load from `character_info/YYYY-MM/characters-week-N.json` files
2. **Fallback to monthly file**: Load from `characters-YYYY-MM.json` for the date's month
3. **Fallback to legacy sets**: Use hardcoded character sets for specific months
4. **Final fallback**: Use the original algorithm with `charactersDatabase`

### 2. Weekly File Loading Process

When loading weekly files:
- Attempts to load 4 weekly files (week-1.json through week-4.json)
- Combines all successfully loaded characters into a single array
- Gracefully handles missing weekly files (loads what's available)
- Caches the combined result for performance

```typescript
// Example: For May 15, 2025
const monthlyCharacter = getCharacterForDaySync(2025, 5, 15)
// Maps to character at index: (15 - 1) % monthlyCharacters.length
```

### 2. Day-to-Character Mapping

Characters are mapped to days using a simple cycling algorithm:
- Day 1 → Character 1 (index 0)
- Day 2 → Character 2 (index 1)
- Day 15 → Character 1 (index 0) if there are 14 characters
- Day 31 → Character 3 (index 2) if there are 14 characters

Formula: `characterIndex = (day - 1) % monthlyCharacters.length`

### 3. Dynamic Loading (`lib/character-file-loader.ts`)

Features:
- **Caching**: Loaded monthly sets are cached to avoid re-loading
- **Validation**: Ensures loaded JSON matches the Character interface
- **Error handling**: Graceful fallbacks when files don't exist
- **Preloading**: Adjacent months are preloaded for better performance

### 4. Enhanced Context Provider (`components/character-context.tsx`)

New features:
- `monthlyDataAvailable`: Boolean indicating if monthly data exists for current date
- `loadingError`: Error state for debugging loading issues
- **Smart month detection**: Automatically updates monthly characters when navigating to new months
- **Background preloading**: Loads adjacent months in the background

## Usage Examples

### For May 2025 (with `characters-2025-05.json`)

```typescript
// May 1, 2025 → First character in the JSON file
// May 15, 2025 → Second character (if 14 characters total)
// May 31, 2025 → Fourth character (if 14 characters total)
```

### For Months Without JSON Files

The system falls back to the original algorithm using `charactersDatabase`.

## Testing

### Weekly File System Testing

Use these test functions to verify the weekly system:

```typescript
// In browser console (after app loads)

// Test weekly character loading
testWeeklyCharacterLoading()

// Test individual weekly files
testIndividualWeeklyFiles()

// Compare file sizes between weekly and monthly approaches
compareFileSizes()

// Run all weekly tests
runAllWeeklyTests()
```

### Legacy Monthly Testing

Use the original test function for monthly files:

```typescript
// In browser console (after app loads)
testMonthlyCharacterLoading()
```

### What the Tests Cover

**Weekly Tests:**
- Weekly file availability and loading
- Character combination from multiple weekly files
- Day-to-character mapping with weekly data
- Integration with main loading function
- File size comparison between approaches
- Individual weekly file validation

**Monthly Tests:**
- Monthly file availability
- Character loading
- Day-to-character mapping
- Integration with `getCharacterForDate()`
- Fallback behavior

## Benefits

1. **Scalable**: Easy to add new months by creating JSON files
2. **Maintainable**: Character data separated from code
3. **Flexible**: Can customize characters for specific months/seasons
4. **Backward Compatible**: Works with existing hardcoded data
5. **Performance**: Caching and preloading for smooth user experience

## Adding New Character Sets

### Weekly Files (Recommended)

1. Create a directory: `character_info/YYYY-MM/`
2. Create 4 weekly files: `characters-week-1.json` through `characters-week-4.json`
3. Distribute 3-4 characters per weekly file
4. Follow the same structure as existing weekly files
5. Ensure each character has a unique `id`

### Monthly Files (Legacy)

1. Create a new JSON file: `character_info/characters-YYYY-MM.json`
2. Follow the same structure as `characters-2025-05.json`
3. Ensure each character has a unique `id`
4. The system will automatically detect and use the new file

## Weekly File System Benefits

### File Management
- **Smaller files**: 3-4 characters per file vs 14+ in monthly files
- **Easier editing**: Focus on one week's characters at a time
- **Better organization**: Natural weekly progression
- **Reduced conflicts**: Multiple people can work on different weeks

### Performance
- **Faster loading**: Smaller individual files load quicker
- **Partial loading**: Can load only needed weeks if desired
- **Better caching**: Granular cache invalidation

### Maintenance
- **Easier updates**: Modify individual weeks without affecting others
- **Better version control**: Cleaner diffs when making changes
- **Modular structure**: Add/remove weeks independently

## Error Handling

The system includes comprehensive error handling:
- Invalid JSON format
- Missing required character fields
- Network errors when loading files
- Graceful fallbacks to hardcoded data

## Performance Considerations

- **Caching**: Monthly character sets are cached after first load
- **Preloading**: Adjacent months are loaded in the background
- **Lazy loading**: Files are only loaded when needed
- **Memory efficient**: Only keeps necessary data in memory

## Future Enhancements

Potential improvements:
- Server-side character generation
- User-customizable character sets
- Progress-based character selection
- Seasonal/themed character collections
