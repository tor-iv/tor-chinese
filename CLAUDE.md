# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese language learning app focused on daily character study called "每日汉字" (Daily Chinese). The app presents a daily Chinese character with detailed learning materials including radical breakdowns, example sentences, and learning connections.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server (Next.js)

# Build and deployment
npm run build        # Build for production
npm start           # Start production server

# Code quality
npm run lint        # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: Radix UI components with shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm (with pnpm-lock.yaml present)

### Character Data System

The app implements a sophisticated character loading system that supports multiple data sources:

1. **Monthly Character Files**: JSON files in `character_info/characters-YYYY-MM.json` format (e.g., `characters-2025-05.json`)
2. **Weekly Character Files**: JSON files in `character_info/YYYY-MM/characters-week-N.json` format for more granular organization
3. **Hardcoded Characters**: Fallback character database in `lib/characters.ts`

**Loading Priority**:
1. Try weekly files first (`character_info/YYYY-MM/characters-week-1.json` through `characters-week-4.json`)
2. Fallback to monthly file (`characters-YYYY-MM.json`)
3. Fallback to hardcoded character sets for specific months
4. Final fallback to the original algorithm with `charactersDatabase`

### Key Files and Components

**Data Layer**:
- `lib/characters.ts` - Main character database and type definitions
- `lib/generate-monthly-characters.ts` - Character generation utilities
- `lib/utils.ts` - Utility functions

**Context Management**:
- `components/character-context.tsx` - Character state management with React Context

**Core Components**:
- `components/daily-character.tsx` - Main character display component
- `components/character-with-radicals.tsx` - Character visualization with radical overlays
- `components/radical-breakdown.tsx` - Detailed radical explanations
- `components/example-sentences.tsx` - Example usage in sentences
- `components/learning-connections.tsx` - Related characters and connections

**Pages**:
- `app/page.tsx` - Home page with daily character
- `app/review/page.tsx` - Review interface
- `app/progress/page.tsx` - Progress tracking

### Character Data Structure

Each character includes:
- Basic info: `character`, `pinyin`, `english`, `level`, `strokes`
- Radicals: Array of radical objects with positioning and colors
- Learning materials: `examples`, `relatedCharacters`, `commonWords`
- Mnemonics: `mnemonic`, `radicalMnemonic`
- Etymology and explanations

### Day-to-Character Mapping

Characters are mapped to calendar days using: `characterIndex = (day - 1) % monthlyCharacters.length`

This creates a cycling system where characters repeat if there are fewer characters than days in the month.

## Development Guidelines

### Adding New Character Sets

**Weekly Files (Recommended)**:
1. Create directory: `character_info/YYYY-MM/`
2. Create 4 weekly files: `characters-week-1.json` through `characters-week-4.json`
3. Distribute 3-4 characters per weekly file
4. Follow existing character structure

**Monthly Files (Legacy)**:
1. Create: `character_info/characters-YYYY-MM.json`
2. Include 14+ characters for full month coverage
3. Follow existing character structure

### UI Components

The app uses shadcn/ui components built on Radix UI. All UI components are in `components/ui/`. When creating new components, follow the established patterns:
- Use Tailwind CSS for styling
- Implement proper TypeScript interfaces
- Follow the existing design system with red accent colors

### Testing Character Loading

Use browser console functions to test character loading:
- `testWeeklyCharacterLoading()` - Test weekly file system
- `testMonthlyCharacterLoading()` - Test monthly files
- `testIndividualWeeklyFiles()` - Test individual weekly files

## Next Steps

Based on `next-steps.md`, planned enhancements include:
- Web Speech API integration for pronunciation
- Adjustable speech speed controls