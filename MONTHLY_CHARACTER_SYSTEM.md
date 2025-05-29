# Monthly Character Loading System

This document explains how the enhanced character loading system works to read from monthly JSON files like `characters-2025-05.json`.

## Overview

The system has been enhanced to dynamically load characters from monthly JSON files while maintaining backward compatibility with the existing hardcoded character sets.

## File Structure

### Monthly Character Files
- Location: `character_info/`
- Naming convention: `characters-YYYY-MM.json`
- Example: `characters-2025-05.json` for May 2025

### Key Files Modified
1. `lib/character-file-loader.ts` - Utility functions for loading JSON files
2. `lib/character-loader.ts` - Enhanced character loading with file-based support
3. `lib/character-data.ts` - Updated character selection logic
4. `components/character-context.tsx` - Enhanced context provider with dynamic loading

## How It Works

### 1. Character Selection Logic (`lib/character-data.ts`)

The `getCharacterForDate()` function now follows this priority:

1. **Check cached selection**: If a character was already selected for this date
2. **Try monthly file**: Load from `characters-YYYY-MM.json` for the date's month
3. **Fallback to hardcoded**: Use the original algorithm with `charactersDatabase`

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

Use the test function to verify the system:

```typescript
// In browser console (after app loads)
testMonthlyCharacterLoading()
```

This will test:
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

## Adding New Monthly Character Sets

1. Create a new JSON file: `character_info/characters-YYYY-MM.json`
2. Follow the same structure as `characters-2025-05.json`
3. Ensure each character has a unique `id`
4. The system will automatically detect and use the new file

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
