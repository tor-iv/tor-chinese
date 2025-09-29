# Tor Chinese - 每日汉字 (Daily Chinese Characters)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/vcox484-gmailcoms-projects/v0-wei-le-lei-en-xi-oy-x1)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

A beautiful, interactive Chinese character learning application that helps you master Chinese characters through daily practice, visual radical breakdowns, and spaced repetition.

## 🎯 Purpose & Goals

**Tor Chinese** is designed to make learning Chinese characters systematic, visual, and engaging. The application focuses on:

- **Daily Character Study**: Learn one character thoroughly each day with comprehensive explanations
- **Visual Learning**: Color-coded radical breakdowns help you understand character composition
- **Contextual Understanding**: Real example sentences show characters in practical usage
- **Progress Tracking**: Review system with spaced repetition for long-term retention
- **Systematic Progression**: Structured learning path from HSK 1-3 characters

## ✨ Features

### 🗓️ Daily Character System
- **Rotating Character Selection**: New character each day based on calendar date
- **Comprehensive Information**: Pinyin, meaning, stroke count, HSK level
- **Visual Character Display**: Large, clear character presentation with radical overlays

### 🧩 Interactive Radical Breakdown
- **Color-Coded Radicals**: Each radical highlighted with distinct colors
- **Positional Learning**: Understand where radicals appear in characters
- **Radical Explanations**: Detailed etymology and meaning for each component
- **Toggle View**: Show/hide radical overlays for focused study

### 📚 Rich Learning Materials
- **Example Sentences**: Real Chinese sentences with pinyin and English translations
- **Related Characters**: Discover characters that share similar radicals or meanings
- **Common Words**: Learn compound words using the daily character
- **Mnemonics**: Memory aids to help remember character meanings and structure

### 📈 Progress Tracking
- **Review System**: Mark characters as reviewed and track learning progress
- **Spaced Repetition**: Review previously learned characters at optimal intervals
- **Progress Dashboard**: Visual stats showing learning achievements

## 🔧 How It Works

### Character Loading System

Tor Chinese uses a sophisticated character loading system that supports multiple data sources:

1. **Weekly Files** (Recommended): `character_info/YYYY-MM/characters-week-N.json`
2. **Monthly Files**: `character_info/characters-YYYY-MM.json`
3. **Hardcoded Database**: Fallback character sets in the codebase

### Daily Character Mapping

Characters are mapped to calendar days using the formula:
```
characterIndex = (dayOfMonth - 1) % totalCharacters
```

This ensures consistent character selection while allowing for cycling through the character set.

### Learning Methodology

1. **Visual First**: Large character display with optional radical breakdown
2. **Contextual Learning**: Multiple example sentences showing real usage
3. **Component Understanding**: Detailed radical explanations with etymology
4. **Memory Reinforcement**: Mnemonics and visual memory aids
5. **Spaced Review**: Systematic review of previously learned characters

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/tor-iv/tor-chinese.git
cd tor-chinese

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to begin learning!

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Usage Guide

### Daily Learning Flow

1. **Visit Today's Character**: The homepage shows the character for today's date
2. **Study the Character**: Review pinyin, meaning, and stroke information
3. **Explore Radicals**: Toggle radical breakdown to understand character composition
4. **Read Examples**: Study example sentences in the "Example Sentences" tab
5. **Learn Connections**: Discover related characters in the "Learning Connections" tab
6. **Mark as Reviewed**: Click "Mark as Reviewed" when you've mastered the character

### Navigation

- **Today**: Return to today's character
- **Review**: Access previously learned characters for review
- **Progress**: View your learning statistics and achievements
- **Previous/Next**: Navigate between different dates manually

## 🏗️ Character Data System

### Adding New Characters

**Weekly Files (Recommended):**
```
character_info/
  2025-01/
    characters-week-1.json
    characters-week-2.json
    characters-week-3.json
    characters-week-4.json
```

**Monthly Files:**
```
character_info/
  characters-2025-01.json
  characters-2025-02.json
```

### Character Structure

Each character includes:
```typescript
{
  id: string
  character: string
  pinyin: string
  english: string
  level: string (HSK level)
  strokes: number
  radicals: Radical[]
  examples: Example[]
  relatedCharacters: RelatedCharacter[]
  commonWords: CommonWord[]
  mnemonic: string
  etymology: string
}
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with shadcn/ui
- **State Management**: React Context
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🎨 Design Philosophy

- **Minimalist Interface**: Clean, distraction-free learning environment
- **Visual Learning**: Color-coded elements and clear typography
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Cultural Respect**: Authentic Chinese language presentation
- **Accessibility**: High contrast and readable text throughout

## 🗺️ Roadmap

### Planned Features

- **Audio Pronunciation**: Web Speech API integration with adjustable speed
- **Character Writing Practice**: Interactive stroke order practice
- **Personalized Learning Paths**: Adaptive content based on progress
- **Social Features**: Share progress and compete with friends
- **Offline Support**: Download characters for offline study
- **Advanced Search**: Find characters by radical, pinyin, or meaning

### Upcoming Enhancements

- **Themed Character Sets**: Seasonal or topical character collections
- **Difficulty Scaling**: Automatic progression based on performance
- **Custom Character Lists**: User-created study sets
- **Export Progress**: Download learning data and certificates

## 🤝 Contributing

We welcome contributions to make Tor Chinese even better! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Character Data Contributions

Help expand the character database by:
- Adding new monthly/weekly character sets
- Improving character explanations and examples
- Contributing mnemonics and learning aids
- Fixing character data errors

---

**Start your Chinese learning journey today with Tor Chinese!** 🇨🇳✨