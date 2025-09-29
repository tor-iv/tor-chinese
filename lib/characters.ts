import type { Character } from "./character-data"

// Mock database of characters
export const charactersDatabase: Character[] = [
  {
    id: "1",
    character: "水",
    pinyin: "shuǐ",
    english: "water",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "氵",
        name: "Three dots water",
        meaning: "water",
        pinyin: "shuǐ",
        color: "#3b82f6",
        position: { top: 50, left: 50 },
        positionName: "left",
      },
    ],
    radicalExplanation:
      "The character 水 (shuǐ) is a pictograph representing flowing water. In its simplified form, it shows water flowing in streams.",
    etymology:
      "Originally a pictograph of flowing water. The three dots (氵) on the left side of many characters indicate a relationship with water or liquids.",
    examples: [
      {
        chinese: "我喝水。",
        pinyin: "Wǒ hē shuǐ.",
        english: "I drink water.",
        note: "A simple sentence using 水 as a direct object.",
      },
      {
        chinese: "这是热水。",
        pinyin: "Zhè shì rè shuǐ.",
        english: "This is hot water.",
        note: "水 is modified by the adjective 热 (hot).",
      },
    ],
    relatedCharacters: [
      {
        character: "河",
        pinyin: "hé",
        english: "river",
      },
      {
        character: "海",
        pinyin: "hǎi",
        english: "sea",
      },
      {
        character: "湖",
        pinyin: "hú",
        english: "lake",
      },
      {
        character: "冰",
        pinyin: "bīng",
        english: "ice",
      },
    ],
    mnemonic: "Imagine water flowing like the strokes of this character, with streams branching out.",
    radicalMnemonic:
      "The three dots on the left (氵) represent droplets of water, which is exactly what this character means!",
    commonWords: [
      {
        chinese: "水果",
        pinyin: "shuǐguǒ",
        english: "fruit",
      },
      {
        chinese: "水平",
        pinyin: "shuǐpíng",
        english: "level",
      },
      {
        chinese: "水费",
        pinyin: "shuǐfèi",
        english: "water bill",
      },
      {
        chinese: "水库",
        pinyin: "shuǐkù",
        english: "reservoir",
      },
    ],
  },
  {
    id: "2",
    character: "火",
    pinyin: "huǒ",
    english: "fire",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "火",
        name: "Fire",
        meaning: "fire, flame",
        pinyin: "huǒ",
        color: "#ef4444",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 火 (huǒ) is a pictograph representing flames rising. The four strokes depict the shape of a fire.",
    etymology:
      "Originally a pictograph of flames. When used as a radical in other characters, it often indicates a relationship with fire, heat, or light.",
    examples: [
      {
        chinese: "小心火。",
        pinyin: "Xiǎoxīn huǒ.",
        english: "Be careful of fire.",
        note: "A warning using 火 as the object of concern.",
      },
      {
        chinese: "这是火山。",
        pinyin: "Zhè shì huǒshān.",
        english: "This is a volcano.",
        note: "火 combines with 山 (mountain) to form 'fire mountain' - volcano.",
      },
    ],
    relatedCharacters: [
      {
        character: "炎",
        pinyin: "yán",
        english: "flame",
      },
      {
        character: "烧",
        pinyin: "shāo",
        english: "to burn",
      },
      {
        character: "煮",
        pinyin: "zhǔ",
        english: "to cook",
      },
      {
        character: "灯",
        pinyin: "dēng",
        english: "lamp",
      },
    ],
    mnemonic:
      "The character looks like flames rising from a fire, with the bottom horizontal stroke representing the ground.",
    radicalMnemonic:
      "The character itself is the radical. Think of the four strokes as flames dancing upward from a campfire.",
    commonWords: [
      {
        chinese: "火车",
        pinyin: "huǒchē",
        english: "train",
      },
      {
        chinese: "火锅",
        pinyin: "huǒguō",
        english: "hot pot",
      },
      {
        chinese: "火柴",
        pinyin: "huǒchái",
        english: "match",
      },
      {
        chinese: "火山",
        pinyin: "huǒshān",
        english: "volcano",
      },
    ],
  },
  {
    id: "3",
    character: "木",
    pinyin: "mù",
    english: "wood, tree",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "木",
        name: "Tree",
        meaning: "tree, wood",
        pinyin: "mù",
        color: "#65a30d",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 木 (mù) is a pictograph of a tree. The horizontal stroke represents the ground, the vertical stroke is the trunk, and the other strokes represent branches.",
    etymology:
      "Originally a pictograph of a tree with roots, trunk, and branches. As a radical, it indicates a relationship with trees, wood, or wooden objects.",
    examples: [
      {
        chinese: "这是木头。",
        pinyin: "Zhè shì mùtou.",
        english: "This is wood.",
        note: "木 combined with 头 (head) forms the common word for 'wood' as a material.",
      },
      {
        chinese: "那棵木很高。",
        pinyin: "Nà kē mù hěn gāo.",
        english: "That tree is very tall.",
        note: "木 used with the measure word 棵 for trees.",
      },
    ],
    relatedCharacters: [
      {
        character: "林",
        pinyin: "lín",
        english: "forest",
      },
      {
        character: "森",
        pinyin: "sēn",
        english: "dense forest",
      },
      {
        character: "桌",
        pinyin: "zhuō",
        english: "table",
      },
      {
        character: "椅",
        pinyin: "yǐ",
        english: "chair",
      },
    ],
    mnemonic:
      "The character looks like a tree with a trunk (vertical line), roots (bottom horizontal), and branches (top strokes).",
    radicalMnemonic:
      "The character itself is the radical. Notice how it resembles a simple drawing of a tree with roots and branches.",
    commonWords: [
      {
        chinese: "木头",
        pinyin: "mùtou",
        english: "wood",
      },
      {
        chinese: "木材",
        pinyin: "mùcái",
        english: "timber",
      },
      {
        chinese: "木匠",
        pinyin: "mùjiang",
        english: "carpenter",
      },
      {
        chinese: "木偶",
        pinyin: "mù'ǒu",
        english: "puppet",
      },
    ],
  },
  {
    id: "4",
    character: "人",
    pinyin: "rén",
    english: "person, people",
    level: "HSK 1",
    strokes: 2,
    radicals: [
      {
        symbol: "人",
        name: "Person",
        meaning: "human, person",
        pinyin: "rén",
        color: "#8b5cf6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 人 (rén) is a pictograph representing a person standing. The two strokes show a person in profile, with legs striding.",
    etymology:
      "Originally a pictograph of a person seen from the side. As a radical, it indicates a relationship with people or human activities.",
    examples: [
      {
        chinese: "他是好人。",
        pinyin: "Tā shì hǎo rén.",
        english: "He is a good person.",
        note: "人 is modified by the adjective 好 (good).",
      },
      {
        chinese: "这里有三个人。",
        pinyin: "Zhèlǐ yǒu sān gè rén.",
        english: "There are three people here.",
        note: "人 used with the measure word 个 for people.",
      },
    ],
    relatedCharacters: [
      {
        character: "从",
        pinyin: "cóng",
        english: "to follow",
      },
      {
        character: "众",
        pinyin: "zhòng",
        english: "crowd",
      },
      {
        character: "仁",
        pinyin: "rén",
        english: "benevolence",
      },
      {
        character: "休",
        pinyin: "xiū",
        english: "to rest",
      },
    ],
    mnemonic:
      "The character looks like a person walking or striding forward, with two legs represented by the two strokes.",
    radicalMnemonic:
      "The character itself is the radical. Think of the two strokes as a stick figure of a person walking.",
    commonWords: [
      {
        chinese: "人民",
        pinyin: "rénmín",
        english: "people",
      },
      {
        chinese: "人口",
        pinyin: "rénkǒu",
        english: "population",
      },
      {
        chinese: "人生",
        pinyin: "rénshēng",
        english: "life",
      },
      {
        chinese: "人才",
        pinyin: "réncái",
        english: "talent",
      },
    ],
  },
  {
    id: "5",
    character: "心",
    pinyin: "xīn",
    english: "heart, mind",
    level: "HSK 2",
    strokes: 4,
    radicals: [
      {
        symbol: "心",
        name: "Heart",
        meaning: "heart, mind",
        pinyin: "xīn",
        color: "#ec4899",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 心 (xīn) is a pictograph representing a heart. The shape resembles the anatomical heart with its chambers and vessels.",
    etymology:
      "Originally a pictograph of a heart with its chambers. As a radical, it indicates a relationship with emotions, feelings, or the mind.",
    examples: [
      {
        chinese: "我的心很快。",
        pinyin: "Wǒ de xīn hěn kuài.",
        english: "My heart is beating fast.",
        note: "心 referring to the physical heart.",
      },
      {
        chinese: "他有好心。",
        pinyin: "Tā yǒu hǎo xīn.",
        english: "He has a good heart.",
        note: "心 referring to one's character or intentions.",
      },
    ],
    relatedCharacters: [
      {
        character: "忆",
        pinyin: "yì",
        english: "to remember",
      },
      {
        character: "怕",
        pinyin: "pà",
        english: "to fear",
      },
      {
        character: "思",
        pinyin: "sī",
        english: "to think",
      },
      {
        character: "恋",
        pinyin: "liàn",
        english: "to love",
      },
    ],
    mnemonic: "The character resembles a heart with its chambers and blood vessels, which is exactly what it means!",
    radicalMnemonic: "The character itself is the radical. The four strokes represent the four chambers of the heart.",
    commonWords: [
      {
        chinese: "心理",
        pinyin: "xīnlǐ",
        english: "psychology",
      },
      {
        chinese: "心情",
        pinyin: "xīnqíng",
        english: "mood",
      },
      {
        chinese: "小心",
        pinyin: "xiǎoxīn",
        english: "careful",
      },
      {
        chinese: "开心",
        pinyin: "kāixīn",
        english: "happy",
      },
    ],
  },
  {
    id: "6",
    character: "山",
    pinyin: "shān",
    english: "mountain",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "山",
        name: "Mountain",
        meaning: "mountain",
        pinyin: "shān",
        color: "#84cc16",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 山 (shān) is a pictograph representing a mountain with three peaks. The three strokes depict the outline of a mountain range.",
    etymology:
      "Originally a pictograph of a mountain with three peaks. As a radical, it indicates a relationship with mountains, hills, or rugged terrain.",
    examples: [
      {
        chinese: "这是高山。",
        pinyin: "Zhè shì gāo shān.",
        english: "This is a high mountain.",
        note: "山 is modified by the adjective 高 (high).",
      },
      {
        chinese: "我们爬山。",
        pinyin: "Wǒmen pá shān.",
        english: "We climb mountains.",
        note: "山 is used as the object of the verb 爬 (to climb).",
      },
    ],
    relatedCharacters: [
      {
        character: "岩",
        pinyin: "yán",
        english: "rock",
      },
      {
        character: "岛",
        pinyin: "dǎo",
        english: "island",
      },
      {
        character: "峰",
        pinyin: "fēng",
        english: "peak",
      },
      {
        character: "崖",
        pinyin: "yá",
        english: "cliff",
      },
    ],
    mnemonic: "The character looks like a mountain with three peaks, which is exactly what it means!",
    radicalMnemonic:
      "The character itself is the radical. The three strokes represent three mountain peaks rising from the ground.",
    commonWords: [
      {
        chinese: "山水",
        pinyin: "shānshuǐ",
        english: "landscape",
      },
      {
        chinese: "火山",
        pinyin: "huǒshān",
        english: "volcano",
      },
      {
        chinese: "山区",
        pinyin: "shānqū",
        english: "mountainous area",
      },
      {
        chinese: "山脉",
        pinyin: "shānmài",
        english: "mountain range",
      },
    ],
  },
  {
    id: "7",
    character: "口",
    pinyin: "kǒu",
    english: "mouth",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 口 (kǒu) is a pictograph representing a mouth or an opening. The square shape depicts an open mouth.",
    etymology:
      "Originally a pictograph of an open mouth. As a radical, it often indicates a relationship with speaking, eating, or openings.",
    examples: [
      {
        chinese: "他的口很大。",
        pinyin: "Tā de kǒu hěn dà.",
        english: "His mouth is very big.",
        note: "口 referring to the physical mouth.",
      },
      {
        chinese: "一口水",
        pinyin: "Yī kǒu shuǐ",
        english: "A mouthful of water",
        note: "口 used as a measure word for mouthfuls.",
      },
    ],
    relatedCharacters: [
      {
        character: "吃",
        pinyin: "chī",
        english: "to eat",
      },
      {
        character: "喝",
        pinyin: "hē",
        english: "to drink",
      },
      {
        character: "叫",
        pinyin: "jiào",
        english: "to call",
      },
      {
        character: "吐",
        pinyin: "tǔ",
        english: "to spit",
      },
    ],
    mnemonic: "The character is a simple square, like an open mouth viewed from the front.",
    radicalMnemonic: "The character itself is the radical. Think of it as an open mouth ready to speak or eat.",
    commonWords: [
      {
        chinese: "口语",
        pinyin: "kǒuyǔ",
        english: "spoken language",
      },
      {
        chinese: "人口",
        pinyin: "rénkǒu",
        english: "population",
      },
      {
        chinese: "出口",
        pinyin: "chūkǒu",
        english: "exit",
      },
      {
        chinese: "入口",
        pinyin: "rùkǒu",
        english: "entrance",
      },
    ],
  },
  {
    id: "8",
    character: "日",
    pinyin: "rì",
    english: "sun, day",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "日",
        name: "Sun",
        meaning: "sun, day",
        pinyin: "rì",
        color: "#eab308",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 日 (rì) is a pictograph representing the sun. The square with a horizontal line through the middle depicts the sun.",
    etymology:
      "Originally a pictograph of the sun with a dot in the center. Over time, it evolved into its current form. As a radical, it indicates a relationship with time, days, or light.",
    examples: [
      {
        chinese: "今日很热。",
        pinyin: "Jīnrì hěn rè.",
        english: "Today is very hot.",
        note: "日 used to mean 'day' in the word 今日 (today).",
      },
      {
        chinese: "日出很美。",
        pinyin: "Rìchū hěn měi.",
        english: "The sunrise is beautiful.",
        note: "日 used to mean 'sun' in the word 日出 (sunrise).",
      },
    ],
    relatedCharacters: [
      {
        character: "明",
        pinyin: "míng",
        english: "bright",
      },
      {
        character: "晴",
        pinyin: "qíng",
        english: "clear weather",
      },
      {
        character: "时",
        pinyin: "shí",
        english: "time",
      },
      {
        character: "晚",
        pinyin: "wǎn",
        english: "evening",
      },
    ],
    mnemonic: "The character looks like a window with sunlight streaming through it, representing the sun or daylight.",
    radicalMnemonic:
      "The character itself is the radical. The square represents the sky, and the horizontal line represents the sun in the sky.",
    commonWords: [
      {
        chinese: "日记",
        pinyin: "rìjì",
        english: "diary",
      },
      {
        chinese: "日期",
        pinyin: "rìqī",
        english: "date",
      },
      {
        chinese: "日常",
        pinyin: "rìcháng",
        english: "daily, everyday",
      },
      {
        chinese: "日本",
        pinyin: "Rìběn",
        english: "Japan",
      },
    ],
  },
  {
    id: "9",
    character: "月",
    pinyin: "yuè",
    english: "moon, month",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "月",
        name: "Moon",
        meaning: "moon, month",
        pinyin: "yuè",
        color: "#a3a3a3",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 月 (yuè) is a pictograph representing the moon. The curved strokes depict the crescent shape of the moon.",
    etymology:
      "Originally a pictograph of a crescent moon. As a radical, it indicates a relationship with the moon, months, or body parts (in some characters).",
    examples: [
      {
        chinese: "今天月亮很圆。",
        pinyin: "Jīntiān yuèliang hěn yuán.",
        english: "The moon is very round today.",
        note: "月 used in the word 月亮 (moon).",
      },
      {
        chinese: "下个月我去北京。",
        pinyin: "Xià gè yuè wǒ qù Běijīng.",
        english: "Next month I will go to Beijing.",
        note: "月 used to mean 'month'.",
      },
    ],
    relatedCharacters: [
      {
        character: "朝",
        pinyin: "cháo",
        english: "morning",
      },
      {
        character: "期",
        pinyin: "qī",
        english: "period",
      },
      {
        character: "有",
        pinyin: "yǒu",
        english: "to have",
      },
      {
        character: "肝",
        pinyin: "gān",
        english: "liver",
      },
    ],
    mnemonic: "The character resembles a crescent moon, which is one of its meanings.",
    radicalMnemonic: "The character itself is the radical. The curved strokes represent the phases of the moon.",
    commonWords: [
      {
        chinese: "月亮",
        pinyin: "yuèliang",
        english: "moon",
      },
      {
        chinese: "月份",
        pinyin: "yuèfèn",
        english: "month",
      },
      {
        chinese: "农历",
        pinyin: "nónglì",
        english: "lunar calendar",
      },
      {
        chinese: "月饼",
        pinyin: "yuèbǐng",
        english: "mooncake",
      },
    ],
  },
  {
    id: "10",
    character: "门",
    pinyin: "mén",
    english: "door, gate",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "门",
        name: "Door",
        meaning: "door, gate",
        pinyin: "mén",
        color: "#7c3aed",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 门 (mén) is a pictograph representing a door or gate. The character depicts a two-door gate seen from above.",
    etymology:
      "Originally a pictograph of a double-door gate. In traditional Chinese, it's written as 門 with the two doors more clearly visible. As a radical, it indicates a relationship with doors, gates, or entrances.",
    examples: [
      {
        chinese: "请关门。",
        pinyin: "Qǐng guān mén.",
        english: "Please close the door.",
        note: "门 as the object of the verb 关 (to close).",
      },
      {
        chinese: "这个门很大。",
        pinyin: "Zhège mén hěn dà.",
        english: "This door is very big.",
        note: "门 modified by the adjective 大 (big).",
      },
    ],
    relatedCharacters: [
      {
        character: "闭",
        pinyin: "bì",
        english: "to close",
      },
      {
        character: "开",
        pinyin: "kāi",
        english: "to open",
      },
      {
        character: "间",
        pinyin: "jiān",
        english: "room",
      },
      {
        character: "闻",
        pinyin: "wén",
        english: "to hear",
      },
    ],
    mnemonic: "The character looks like a door frame with two doors, which is exactly what it means!",
    radicalMnemonic:
      "The character itself is the radical. In its simplified form, it looks like a doorframe with a single door.",
    commonWords: [
      {
        chinese: "门口",
        pinyin: "ménkǒu",
        english: "doorway",
      },
      {
        chinese: "门票",
        pinyin: "ménpiào",
        english: "ticket",
      },
      {
        chinese: "大门",
        pinyin: "dàmén",
        english: "main entrance",
      },
      {
        chinese: "开门",
        pinyin: "kāimén",
        english: "to open the door",
      },
    ],
  },
  {
    id: "11",
    character: "女",
    pinyin: "nǚ",
    english: "woman, female",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "女",
        name: "Woman",
        meaning: "woman, female",
        pinyin: "nǚ",
        color: "#ec4899",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 女 (nǚ) is a pictograph representing a woman. The character depicts a kneeling woman with arms crossed, a traditional posture in ancient China.",
    etymology:
      "Originally a pictograph of a kneeling woman. As a radical, it indicates a relationship with women, femininity, or female attributes.",
    examples: [
      {
        chinese: "她是女人。",
        pinyin: "Tā shì nǚrén.",
        english: "She is a woman.",
        note: "女 used in the word 女人 (woman).",
      },
      {
        chinese: "这是女厕所。",
        pinyin: "Zhè shì nǚ cèsuǒ.",
        english: "This is the women's restroom.",
        note: "女 used as an adjective meaning 'female' or 'women's'.",
      },
    ],
    relatedCharacters: [
      {
        character: "妈",
        pinyin: "mā",
        english: "mother",
      },
      {
        character: "姐",
        pinyin: "jiě",
        english: "older sister",
      },
      {
        character: "妹",
        pinyin: "mèi",
        english: "younger sister",
      },
      {
        character: "好",
        pinyin: "hǎo",
        english: "good",
      },
    ],
    mnemonic: "The character resembles a person with a dress or skirt, representing a woman.",
    radicalMnemonic:
      "The character itself is the radical. The curved strokes represent a kneeling woman with arms crossed.",
    commonWords: [
      {
        chinese: "女人",
        pinyin: "nǚrén",
        english: "woman",
      },
      {
        chinese: "女儿",
        pinyin: "nǚ'ér",
        english: "daughter",
      },
      {
        chinese: "女士",
        pinyin: "nǚshì",
        english: "lady",
      },
      {
        chinese: "女性",
        pinyin: "nǚxìng",
        english: "female",
      },
    ],
  },
  {
    id: "12",
    character: "子",
    pinyin: "zǐ",
    english: "child, seed",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "子",
        name: "Child",
        meaning: "child, seed",
        pinyin: "zǐ",
        color: "#0ea5e9",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 子 (zǐ) is a pictograph representing a child. The character depicts a swaddled infant with a large head.",
    etymology:
      "Originally a pictograph of a newborn baby. As a radical, it indicates a relationship with children, offspring, or seeds. It's also used as a suffix for many nouns.",
    examples: [
      {
        chinese: "这是我的儿子。",
        pinyin: "Zhè shì wǒ de érzi.",
        english: "This is my son.",
        note: "子 used in the word 儿子 (son).",
      },
      {
        chinese: "椅子很舒服。",
        pinyin: "Yǐzi hěn shūfu.",
        english: "The chair is comfortable.",
        note: "子 used as a suffix in the word 椅子 (chair).",
      },
    ],
    relatedCharacters: [
      {
        character: "孩",
        pinyin: "hái",
        english: "child",
      },
      {
        character: "学",
        pinyin: "xué",
        english: "to learn",
      },
      {
        character: "字",
        pinyin: "zì",
        english: "character",
      },
      {
        character: "孙",
        pinyin: "sūn",
        english: "grandson",
      },
    ],
    mnemonic: "The character looks like a child with a large head and small body, which is what it represents.",
    radicalMnemonic:
      "The character itself is the radical. The top stroke represents the child's head, and the bottom part represents the swaddled body.",
    commonWords: [
      {
        chinese: "儿子",
        pinyin: "érzi",
        english: "son",
      },
      {
        chinese: "种子",
        pinyin: "zhǒngzi",
        english: "seed",
      },
      {
        chinese: "孩子",
        pinyin: "háizi",
        english: "child",
      },
      {
        chinese: "筷子",
        pinyin: "kuàizi",
        english: "chopsticks",
      },
    ],
  },
  {
    id: "13",
    character: "田",
    pinyin: "tián",
    english: "field",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "田",
        name: "Field",
        meaning: "field, farmland",
        pinyin: "tián",
        color: "#65a30d",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 田 (tián) is a pictograph representing a field. The character depicts a plot of land divided into sections for cultivation.",
    etymology:
      "Originally a pictograph of a divided field. The square represents the boundary of the field, and the cross represents the irrigation paths. As a radical, it indicates a relationship with agriculture, land, or cultivation.",
    examples: [
      {
        chinese: "这是稻田。",
        pinyin: "Zhè shì dàotián.",
        english: "This is a rice field.",
        note: "田 used in the word 稻田 (rice field).",
      },
      {
        chinese: "他在田里工作。",
        pinyin: "Tā zài tián lǐ gōngzuò.",
        english: "He works in the field.",
        note: "田 used as a location.",
      },
    ],
    relatedCharacters: [
      {
        character: "苗",
        pinyin: "miáo",
        english: "seedling",
      },
      {
        character: "畔",
        pinyin: "pàn",
        english: "field edge",
      },
      {
        character: "町",
        pinyin: "tǐng",
        english: "small town",
      },
      {
        character: "画",
        pinyin: "huà",
        english: "to draw",
      },
    ],
    mnemonic:
      "The character looks like a bird's-eye view of a field divided into plots, which is exactly what it means!",
    radicalMnemonic:
      "The character itself is the radical. The square with internal divisions represents a field divided into plots for different crops.",
    commonWords: [
      {
        chinese: "田地",
        pinyin: "tiándì",
        english: "farmland",
      },
      {
        chinese: "农田",
        pinyin: "nóngtián",
        english: "farmland",
      },
      {
        chinese: "油田",
        pinyin: "yóutián",
        english: "oil field",
      },
      {
        chinese: "田园",
        pinyin: "tiányuán",
        english: "countryside",
      },
    ],
  },
  {
    id: "14",
    character: "手",
    pinyin: "shǒu",
    english: "hand",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "手",
        name: "Hand",
        meaning: "hand",
        pinyin: "shǒu",
        color: "#f97316",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 手 (shǒu) is a pictograph representing a hand. The character depicts a hand with fingers extended.",
    etymology:
      "Originally a pictograph of a hand with five fingers. As a radical, it often appears on the left side of characters as 扌 and indicates a relationship with actions performed by hand.",
    examples: [
      {
        chinese: "我的手很冷。",
        pinyin: "Wǒ de shǒu hěn lěng.",
        english: "My hands are very cold.",
        note: "手 referring to the physical hand.",
      },
      {
        chinese: "请举手。",
        pinyin: "Qǐng jǔ shǒu.",
        english: "Please raise your hand.",
        note: "手 as the object of the verb 举 (to raise).",
      },
    ],
    relatedCharacters: [
      {
        character: "打",
        pinyin: "dǎ",
        english: "to hit",
      },
      {
        character: "抓",
        pinyin: "zhuā",
        english: "to grab",
      },
      {
        character: "指",
        pinyin: "zhǐ",
        english: "finger",
      },
      {
        character: "拿",
        pinyin: "ná",
        english: "to take",
      },
    ],
    mnemonic: "The character resembles a hand with fingers extended, which is exactly what it means!",
    radicalMnemonic:
      "The character itself is the radical. When used as a component in other characters, it often appears as 扌 on the left side.",
    commonWords: [
      {
        chinese: "手机",
        pinyin: "shǒujī",
        english: "mobile phone",
      },
      {
        chinese: "手表",
        pinyin: "shǒubiǎo",
        english: "wristwatch",
      },
      {
        chinese: "洗手",
        pinyin: "xǐshǒu",
        english: "to wash hands",
      },
      {
        chinese: "手套",
        pinyin: "shǒutào",
        english: "gloves",
      },
    ],
  },
  {
    id: "15",
    character: "目",
    pinyin: "mù",
    english: "eye",
    level: "HSK 2",
    strokes: 5,
    radicals: [
      {
        symbol: "目",
        name: "Eye",
        meaning: "eye",
        pinyin: "mù",
        color: "#0ea5e9",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 目 (mù) is a pictograph representing an eye. The character depicts a front view of an eye with the pupil in the center.",
    etymology:
      "Originally a pictograph of an eye. As a radical, it indicates a relationship with seeing, vision, or eyes.",
    examples: [
      {
        chinese: "他的目很大。",
        pinyin: "Tā de mù hěn dà.",
        english: "His eyes are very big.",
        note: "目 referring to the physical eye, though 眼睛 is more common in modern Chinese.",
      },
      {
        chinese: "目前我很忙。",
        pinyin: "Mùqián wǒ hěn máng.",
        english: "Currently I am very busy.",
        note: "目 used in the word 目前 (currently).",
      },
    ],
    relatedCharacters: [
      {
        character: "眼",
        pinyin: "yǎn",
        english: "eye",
      },
      {
        character: "看",
        pinyin: "kàn",
        english: "to look",
      },
      {
        character: "睛",
        pinyin: "jīng",
        english: "eyeball",
      },
      {
        character: "睡",
        pinyin: "shuì",
        english: "to sleep",
      },
    ],
    mnemonic:
      "The character looks like a front view of an eye with horizontal lines representing the eyelids and a square pupil.",
    radicalMnemonic:
      "The character itself is the radical. The square represents the eye, and the horizontal lines represent the eyelids.",
    commonWords: [
      {
        chinese: "目标",
        pinyin: "mùbiāo",
        english: "target, goal",
      },
      {
        chinese: "目录",
        pinyin: "mùlù",
        english: "catalog, directory",
      },
      {
        chinese: "目的",
        pinyin: "mùdì",
        english: "purpose, aim",
      },
      {
        chinese: "注目",
        pinyin: "zhùmù",
        english: "to pay attention to",
      },
    ],
  },
  {
    id: "16",
    character: "耳",
    pinyin: "ěr",
    english: "ear",
    level: "HSK 2",
    strokes: 6,
    radicals: [
      {
        symbol: "耳",
        name: "Ear",
        meaning: "ear",
        pinyin: "ěr",
        color: "#f97316",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 耳 (ěr) is a pictograph representing an ear. The character depicts the shape of a human ear.",
    etymology:
      "Originally a pictograph of a human ear. As a radical, it indicates a relationship with hearing, listening, or ears.",
    examples: [
      {
        chinese: "我的耳朵很大。",
        pinyin: "Wǒ de ěrduo hěn dà.",
        english: "My ears are very big.",
        note: "耳 used in the word 耳朵 (ear).",
      },
      {
        chinese: "请仔细听。",
        pinyin: "Qǐng zǐxì tīng.",
        english: "Please listen carefully.",
        note: "While this example doesn't use 耳 directly, it's related to the function of ears.",
      },
    ],
    relatedCharacters: [
      {
        character: "听",
        pinyin: "tīng",
        english: "to listen",
      },
      {
        character: "聪",
        pinyin: "cōng",
        english: "clever",
      },
      {
        character: "声",
        pinyin: "shēng",
        english: "sound",
      },
      {
        character: "聊",
        pinyin: "liáo",
        english: "to chat",
      },
    ],
    mnemonic: "The character resembles the shape of a human ear, which is exactly what it means!",
    radicalMnemonic: "The character itself is the radical. The curved strokes represent the outer ear and ear canal.",
    commonWords: [
      {
        chinese: "耳朵",
        pinyin: "ěrduo",
        english: "ear",
      },
      {
        chinese: "耳机",
        pinyin: "ěrjī",
        english: "headphones",
      },
      {
        chinese: "耳环",
        pinyin: "ěrhuán",
        english: "earrings",
      },
      {
        chinese: "充耳不闻",
        pinyin: "chōng'ěrbùwén",
        english: "to turn a deaf ear",
      },
    ],
  },
  {
    id: "17",
    character: "雨",
    pinyin: "yǔ",
    english: "rain",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "雨",
        name: "Rain",
        meaning: "rain",
        pinyin: "yǔ",
        color: "#3b82f6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 雨 (yǔ) is a pictograph representing rain. The top part represents clouds, and the four dots below represent raindrops falling from the clouds.",
    etymology:
      "Originally a pictograph of rain falling from clouds. As a radical, it indicates a relationship with rain, precipitation, or weather phenomena.",
    examples: [
      {
        chinese: "今天下雨了。",
        pinyin: "Jīntiān xià yǔ le.",
        english: "It's raining today.",
        note: "雨 used with the verb 下 (to fall) to describe rain falling.",
      },
      {
        chinese: "这是雨伞。",
        pinyin: "Zhè shì yǔsǎn.",
        english: "This is an umbrella.",
        note: "雨 used in the word 雨伞 (umbrella).",
      },
    ],
    relatedCharacters: [
      {
        character: "雪",
        pinyin: "xuě",
        english: "snow",
      },
      {
        character: "雷",
        pinyin: "léi",
        english: "thunder",
      },
      {
        character: "雾",
        pinyin: "wù",
        english: "fog",
      },
      {
        character: "霜",
        pinyin: "shuāng",
        english: "frost",
      },
    ],
    mnemonic:
      "The character shows clouds at the top and raindrops (the four dots) falling below, which is exactly what rain is!",
    radicalMnemonic:
      "The character itself is the radical. The top part represents clouds, and the four dots represent raindrops falling from the clouds.",
    commonWords: [
      {
        chinese: "下雨",
        pinyin: "xià yǔ",
        english: "to rain",
      },
      {
        chinese: "雨伞",
        pinyin: "yǔsǎn",
        english: "umbrella",
      },
      {
        chinese: "雨水",
        pinyin: "yǔshuǐ",
        english: "rainwater",
      },
      {
        chinese: "雨季",
        pinyin: "yǔjì",
        english: "rainy season",
      },
    ],
  },
  {
    id: "18",
    character: "风",
    pinyin: "fēng",
    english: "wind",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "风",
        name: "Wind",
        meaning: "wind",
        pinyin: "fēng",
        color: "#22c55e",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 风 (fēng) is a simplified form of the traditional character 風. In its simplified form, it consists of the 'several' radical (几) and the 'wind' component (乂).",
    etymology:
      "The traditional form 風 depicts a sail or flag being blown by the wind. The simplified form 风 is a more abstract representation. As a radical, it indicates a relationship with wind, air, or customs.",
    examples: [
      {
        chinese: "今天风很大。",
        pinyin: "Jīntiān fēng hěn dà.",
        english: "The wind is very strong today.",
        note: "风 modified by the adjective 大 (big/strong).",
      },
      {
        chinese: "这是风车。",
        pinyin: "Zhè shì fēngchē.",
        english: "This is a windmill.",
        note: "风 used in the word 风车 (windmill).",
      },
    ],
    relatedCharacters: [
      {
        character: "飘",
        pinyin: "piāo",
        english: "to float",
      },
      {
        character: "吹",
        pinyin: "chuī",
        english: "to blow",
      },
      {
        character: "凤",
        pinyin: "fèng",
        english: "phoenix",
      },
      {
        character: "讽",
        pinyin: "fěng",
        english: "to satirize",
      },
    ],
    mnemonic: "The simplified character 风 looks like a flag or sail being blown by the wind.",
    radicalMnemonic:
      "The character itself is the radical in simplified Chinese. The top part 几 represents movement, and the bottom part 乂 represents flowing air.",
    commonWords: [
      {
        chinese: "风雨",
        pinyin: "fēngyǔ",
        english: "wind and rain",
      },
      {
        chinese: "风景",
        pinyin: "fēngjǐng",
        english: "scenery",
      },
      {
        chinese: "风格",
        pinyin: "fēnggé",
        english: "style",
      },
      {
        chinese: "台风",
        pinyin: "táifēng",
        english: "typhoon",
      },
    ],
  },
  {
    id: "19",
    character: "云",
    pinyin: "yún",
    english: "cloud",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "云",
        name: "Cloud",
        meaning: "cloud",
        pinyin: "yún",
        color: "#a3a3a3",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 云 (yún) is a simplified form of the traditional character 雲. In its simplified form, it resembles floating clouds with its curved strokes.",
    etymology:
      "The traditional form 雲 contains the rain radical (雨) at the top, indicating its relationship with weather. The simplified form 云 is more abstract. As a radical, it indicates a relationship with clouds, sky, or to say.",
    examples: [
      {
        chinese: "天上有云。",
        pinyin: "Tiān shàng yǒu yún.",
        english: "There are clouds in the sky.",
        note: "云 as the subject of the sentence.",
      },
      {
        chinese: "他云他很忙。",
        pinyin: "Tā yún tā hěn máng.",
        english: "He says he is very busy.",
        note: "云 used as a formal or literary verb meaning 'to say' (though 说 is more common in modern Chinese).",
      },
    ],
    relatedCharacters: [
      {
        character: "雨",
        pinyin: "yǔ",
        english: "rain",
      },
      {
        character: "雾",
        pinyin: "wù",
        english: "fog",
      },
      {
        character: "电",
        pinyin: "diàn",
        english: "electricity",
      },
      {
        character: "霄",
        pinyin: "xiāo",
        english: "sky",
      },
    ],
    mnemonic: "The simplified character 云 looks like clouds floating in the sky with its curved strokes.",
    radicalMnemonic:
      "The character itself is the radical in simplified Chinese. The curved strokes represent the shape of clouds.",
    commonWords: [
      {
        chinese: "云彩",
        pinyin: "yúncai",
        english: "clouds",
      },
      {
        chinese: "云端",
        pinyin: "yúnduān",
        english: "cloud (computing)",
      },
      {
        chinese: "白云",
        pinyin: "báiyún",
        english: "white clouds",
      },
      {
        chinese: "云雾",
        pinyin: "yúnwù",
        english: "clouds and mist",
      },
    ],
  },
  {
    id: "20",
    character: "花",
    pinyin: "huā",
    english: "flower",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "艹",
        name: "Grass",
        meaning: "grass, plant",
        pinyin: "cǎo",
        color: "#65a30d",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "化",
        name: "Change",
        meaning: "to change, to transform",
        pinyin: "huà",
        color: "#f97316",
        position: { top: 65, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 花 (huā) consists of the 'grass' radical (艹) at the top and the 'change' component (化) at the bottom. The grass radical indicates its relationship with plants, and the change component suggests the transformative nature of flowers.",
    etymology:
      "The character combines the grass radical (艹) with the character for change (化). This composition suggests the idea of plants transforming or changing into flowers. As a whole, it represents flowers or blossoms.",
    examples: [
      {
        chinese: "这是美丽的花。",
        pinyin: "Zhè shì měilì de huā.",
        english: "This is a beautiful flower.",
        note: "花 modified by the adjective 美丽 (beautiful).",
      },
      {
        chinese: "我喜欢红花。",
        pinyin: "Wǒ xǐhuan hóng huā.",
        english: "I like red flowers.",
        note: "花 modified by the color 红 (red).",
      },
    ],
    relatedCharacters: [
      {
        character: "草",
        pinyin: "cǎo",
        english: "grass",
      },
      {
        character: "树",
        pinyin: "shù",
        english: "tree",
      },
      {
        character: "苗",
        pinyin: "miáo",
        english: "seedling",
      },
      {
        character: "芳",
        pinyin: "fāng",
        english: "fragrant",
      },
    ],
    mnemonic:
      "The character has the grass radical (艹) on top, showing it's a plant, and the 'change' component (化) below, suggesting how plants transform into flowers.",
    radicalMnemonic:
      "The grass radical (艹) at the top indicates it's a plant, while the 'change' component (化) below suggests the transformation process of blooming.",
    commonWords: [
      {
        chinese: "花园",
        pinyin: "huāyuán",
        english: "garden",
      },
      {
        chinese: "花朵",
        pinyin: "huāduǒ",
        english: "flower",
      },
      {
        chinese: "花瓶",
        pinyin: "huāpíng",
        english: "vase",
      },
      {
        chinese: "花费",
        pinyin: "huāfèi",
        english: "to spend (money)",
      },
    ],
  },
  {
    id: "21",
    character: "茶",
    pinyin: "chá",
    english: "tea",
    level: "HSK 3",
    strokes: 9,
    radicals: [
      {
        symbol: "艹",
        name: "Grass",
        meaning: "grass, plant",
        pinyin: "cǎo",
        color: "#65a30d",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "人",
        name: "Person",
        meaning: "person, human",
        pinyin: "rén",
        color: "#8b5cf6",
        position: { top: 65, left: 30 },
        positionName: "bottom-left",
      },
      {
        symbol: "木",
        name: "Tree",
        meaning: "tree, wood",
        pinyin: "mù",
        color: "#65a30d",
        position: { top: 65, left: 70 },
        positionName: "bottom-right",
      },
    ],
    radicalExplanation:
      "The character 茶 (chá) consists of the 'grass' radical (艹) at the top and the components 人 (person) and 木 (tree) at the bottom. The grass radical indicates its relationship with plants, and the person and tree components suggest the origin of tea leaves from a tree and its consumption by people.",
    etymology:
      "The character combines the grass radical (艹) with the characters for person (人) and tree (木). This composition suggests the idea of a plant (tea) that is consumed by people and originates from a tree. As a whole, it represents tea.",
    examples: [
      {
        chinese: "我喜欢喝茶。",
        pinyin: "Wǒ xǐhuan hē chá.",
        english: "I like to drink tea.",
        note: "茶 used as the object of the verb 喝 (to drink).",
      },
      {
        chinese: "这是绿茶。",
        pinyin: "Zhè shì lǜ chá.",
        english: "This is green tea.",
        note: "茶 modified by the color 绿 (green).",
      },
    ],
    relatedCharacters: [
      {
        character: "草",
        pinyin: "cǎo",
        english: "grass",
      },
      {
        character: "树",
        pinyin: "shù",
        english: "tree",
      },
      {
        character: "叶",
        pinyin: "yè",
        english: "leaf",
      },
      {
        character: "饮",
        pinyin: "yǐn",
        english: "to drink",
      },
    ],
    mnemonic:
      "The character has the grass radical (艹) on top, showing it's a plant, and the 'person' (人) and 'tree' (木) components below, suggesting tea leaves from a tree consumed by people.",
    radicalMnemonic:
      "The grass radical (艹) at the top indicates it's a plant, while the 'person' (人) and 'tree' (木) components below suggest the origin and consumption of tea.",
    commonWords: [
      {
        chinese: "茶叶",
        pinyin: "cháyè",
        english: "tea leaves",
      },
      {
        chinese: "茶杯",
        pinyin: "chábēi",
        english: "tea cup",
      },
      {
        chinese: "茶馆",
        pinyin: "cháguǎn",
        english: "tea house",
      },
      {
        chinese: "红茶",
        pinyin: "hóngchá",
        english: "black tea",
      },
    ],
  },
  {
    id: "22",
    character: "大",
    pinyin: "dà",
    english: "big, large",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "大",
        name: "Big",
        meaning: "big, large",
        pinyin: "dà",
        color: "#ef4444",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 大 (dà) is a pictograph representing a person with arms and legs spread wide, indicating something big or large.",
    etymology:
      "Originally a pictograph of a person with outstretched arms and legs. As a radical, it indicates size, importance, or magnitude.",
    examples: [
      {
        chinese: "这是大房子。",
        pinyin: "Zhè shì dà fángzi.",
        english: "This is a big house.",
        note: "大 used as an adjective to describe size.",
      },
      {
        chinese: "大学很有名。",
        pinyin: "Dàxué hěn yǒumíng.",
        english: "The university is very famous.",
        note: "大 used in the compound word 大学 (university).",
      },
    ],
    relatedCharacters: [
      {
        character: "小",
        pinyin: "xiǎo",
        english: "small",
      },
      {
        character: "太",
        pinyin: "tài",
        english: "too, very",
      },
      {
        character: "天",
        pinyin: "tiān",
        english: "sky, day",
      },
      {
        character: "夫",
        pinyin: "fū",
        english: "husband",
      },
    ],
    mnemonic: "The character looks like a person with arms and legs spread wide, showing something big.",
    radicalMnemonic: "Think of a person stretching their arms wide to show how big something is.",
    commonWords: [
      {
        chinese: "大学",
        pinyin: "dàxué",
        english: "university",
      },
      {
        chinese: "大家",
        pinyin: "dàjiā",
        english: "everyone",
      },
      {
        chinese: "大概",
        pinyin: "dàgài",
        english: "probably",
      },
      {
        chinese: "大小",
        pinyin: "dàxiǎo",
        english: "size",
      },
    ],
  },
  {
    id: "23",
    character: "小",
    pinyin: "xiǎo",
    english: "small, little",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "小",
        name: "Small",
        meaning: "small, little",
        pinyin: "xiǎo",
        color: "#8b5cf6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 小 (xiǎo) represents something small. The three strokes suggest something diminutive or reduced in size.",
    etymology:
      "The character depicts small particles or dots, representing the concept of smallness. As a radical, it indicates size or youth.",
    examples: [
      {
        chinese: "小猫很可爱。",
        pinyin: "Xiǎo māo hěn kě'ài.",
        english: "The little cat is very cute.",
        note: "小 used as an adjective to describe size.",
      },
      {
        chinese: "小心开车。",
        pinyin: "Xiǎoxīn kāichē.",
        english: "Drive carefully.",
        note: "小 used in the compound word 小心 (careful).",
      },
    ],
    relatedCharacters: [
      {
        character: "大",
        pinyin: "dà",
        english: "big",
      },
      {
        character: "少",
        pinyin: "shǎo",
        english: "few, little",
      },
      {
        character: "尖",
        pinyin: "jiān",
        english: "sharp, pointed",
      },
      {
        character: "尘",
        pinyin: "chén",
        english: "dust",
      },
    ],
    mnemonic: "The character looks like small dots or particles, representing something tiny.",
    radicalMnemonic: "Think of three small dots coming together to form something small.",
    commonWords: [
      {
        chinese: "小学",
        pinyin: "xiǎoxué",
        english: "elementary school",
      },
      {
        chinese: "小时",
        pinyin: "xiǎoshí",
        english: "hour",
      },
      {
        chinese: "小心",
        pinyin: "xiǎoxīn",
        english: "careful",
      },
      {
        chinese: "小姐",
        pinyin: "xiǎojiě",
        english: "miss, young lady",
      },
    ],
  },
  {
    id: "24",
    character: "好",
    pinyin: "hǎo",
    english: "good, well",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "女",
        name: "Woman",
        meaning: "woman, female",
        pinyin: "nǚ",
        color: "#ec4899",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "子",
        name: "Child",
        meaning: "child, seed",
        pinyin: "zǐ",
        color: "#0ea5e9",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 好 (hǎo) combines 女 (woman) and 子 (child), suggesting the goodness of a mother with her child.",
    etymology:
      "The combination of woman and child represents the ideal of maternal love and care, which is considered good and beautiful in Chinese culture.",
    examples: [
      {
        chinese: "今天天气很好。",
        pinyin: "Jīntiān tiānqì hěn hǎo.",
        english: "The weather is very good today.",
        note: "好 used as an adjective meaning 'good'.",
      },
      {
        chinese: "你好！",
        pinyin: "Nǐ hǎo!",
        english: "Hello!",
        note: "好 used in the common greeting 你好.",
      },
    ],
    relatedCharacters: [
      {
        character: "女",
        pinyin: "nǚ",
        english: "woman",
      },
      {
        character: "子",
        pinyin: "zǐ",
        english: "child",
      },
      {
        character: "妈",
        pinyin: "mā",
        english: "mother",
      },
      {
        character: "如",
        pinyin: "rú",
        english: "like, as",
      },
    ],
    mnemonic: "A woman with her child represents something good and beautiful.",
    radicalMnemonic: "The woman (女) and child (子) together symbolize the goodness of family.",
    commonWords: [
      {
        chinese: "你好",
        pinyin: "nǐhǎo",
        english: "hello",
      },
      {
        chinese: "好吃",
        pinyin: "hǎochī",
        english: "delicious",
      },
      {
        chinese: "好看",
        pinyin: "hǎokàn",
        english: "good-looking",
      },
      {
        chinese: "好听",
        pinyin: "hǎotīng",
        english: "pleasant to hear",
      },
    ],
  },
  {
    id: "25",
    character: "来",
    pinyin: "lái",
    english: "to come",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "来",
        name: "Come",
        meaning: "to come",
        pinyin: "lái",
        color: "#22c55e",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 来 (lái) is a pictograph representing wheat or grain, but has evolved to mean 'to come'.",
    etymology:
      "Originally depicted wheat stalks, but through phonetic borrowing, it came to represent the concept of coming or arriving.",
    examples: [
      {
        chinese: "他来了。",
        pinyin: "Tā lái le.",
        english: "He came/has come.",
        note: "来 used as a verb meaning 'to come'.",
      },
      {
        chinese: "来中国学习。",
        pinyin: "Lái Zhōngguó xuéxí.",
        english: "Come to China to study.",
        note: "来 indicating direction of movement.",
      },
    ],
    relatedCharacters: [
      {
        character: "去",
        pinyin: "qù",
        english: "to go",
      },
      {
        character: "回",
        pinyin: "huí",
        english: "to return",
      },
      {
        character: "到",
        pinyin: "dào",
        english: "to arrive",
      },
      {
        character: "走",
        pinyin: "zǒu",
        english: "to walk",
      },
    ],
    mnemonic: "Think of wheat growing and 'coming' up from the ground.",
    radicalMnemonic: "The character itself is the radical, representing the concept of arrival or coming.",
    commonWords: [
      {
        chinese: "来到",
        pinyin: "láidào",
        english: "to arrive",
      },
      {
        chinese: "原来",
        pinyin: "yuánlái",
        english: "originally",
      },
      {
        chinese: "未来",
        pinyin: "wèilái",
        english: "future",
      },
      {
        chinese: "起来",
        pinyin: "qǐlái",
        english: "to get up",
      },
    ],
  },
  {
    id: "26",
    character: "去",
    pinyin: "qù",
    english: "to go",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "去",
        name: "Go",
        meaning: "to go",
        pinyin: "qù",
        color: "#f97316",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation: "The character 去 (qù) represents the concept of going away or departing from a place.",
    etymology: "The character shows movement away from a starting point, representing the action of going or leaving.",
    examples: [
      {
        chinese: "我去学校。",
        pinyin: "Wǒ qù xuéxiào.",
        english: "I go to school.",
        note: "去 used as a verb meaning 'to go'.",
      },
      {
        chinese: "去年很忙。",
        pinyin: "Qùnián hěn máng.",
        english: "Last year was very busy.",
        note: "去 used in the compound word 去年 (last year).",
      },
    ],
    relatedCharacters: [
      {
        character: "来",
        pinyin: "lái",
        english: "to come",
      },
      {
        character: "走",
        pinyin: "zǒu",
        english: "to walk",
      },
      {
        character: "到",
        pinyin: "dào",
        english: "to arrive",
      },
      {
        character: "回",
        pinyin: "huí",
        english: "to return",
      },
    ],
    mnemonic: "The character shows movement away from a starting point.",
    radicalMnemonic: "Think of the character as showing the path of going away.",
    commonWords: [
      {
        chinese: "去年",
        pinyin: "qùnián",
        english: "last year",
      },
      {
        chinese: "过去",
        pinyin: "guòqù",
        english: "past",
      },
      {
        chinese: "进去",
        pinyin: "jìnqù",
        english: "to go in",
      },
      {
        chinese: "出去",
        pinyin: "chūqù",
        english: "to go out",
      },
    ],
  },
  {
    id: "27",
    character: "吃",
    pinyin: "chī",
    english: "to eat",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "乞",
        name: "Beg",
        meaning: "to beg",
        pinyin: "qǐ",
        color: "#8b5cf6",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 吃 (chī) combines 口 (mouth) with 乞 (to beg), suggesting the act of putting food in the mouth.",
    etymology:
      "The mouth radical indicates the action involves the mouth, while the phonetic component provides the sound.",
    examples: [
      {
        chinese: "我吃饭。",
        pinyin: "Wǒ chī fàn.",
        english: "I eat rice/meal.",
        note: "吃 used as a verb meaning 'to eat'.",
      },
      {
        chinese: "吃苹果很健康。",
        pinyin: "Chī píngguǒ hěn jiànkāng.",
        english: "Eating apples is healthy.",
        note: "吃 used with a specific food item.",
      },
    ],
    relatedCharacters: [
      {
        character: "喝",
        pinyin: "hē",
        english: "to drink",
      },
      {
        character: "饭",
        pinyin: "fàn",
        english: "rice, meal",
      },
      {
        character: "食",
        pinyin: "shí",
        english: "food",
      },
      {
        character: "咬",
        pinyin: "yǎo",
        english: "to bite",
      },
    ],
    mnemonic: "The mouth (口) is used for eating, which is what this character represents.",
    radicalMnemonic: "The mouth radical (口) clearly indicates this action involves the mouth.",
    commonWords: [
      {
        chinese: "吃饭",
        pinyin: "chīfàn",
        english: "to eat a meal",
      },
      {
        chinese: "好吃",
        pinyin: "hǎochī",
        english: "delicious",
      },
      {
        chinese: "吃药",
        pinyin: "chīyào",
        english: "to take medicine",
      },
      {
        chinese: "吃苦",
        pinyin: "chīkǔ",
        english: "to endure hardship",
      },
    ],
  },
  {
    id: "28",
    character: "喝",
    pinyin: "hē",
    english: "to drink",
    level: "HSK 1",
    strokes: 12,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 50, left: 15 },
        positionName: "left",
      },
      {
        symbol: "曷",
        name: "What",
        meaning: "what, how",
        pinyin: "hé",
        color: "#8b5cf6",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 喝 (hē) combines 口 (mouth) with 曷 (what), where the mouth radical indicates the action involves drinking.",
    etymology:
      "The mouth radical shows this is an oral action, while the right component provides the phonetic element.",
    examples: [
      {
        chinese: "我喝水。",
        pinyin: "Wǒ hē shuǐ.",
        english: "I drink water.",
        note: "喝 used as a verb meaning 'to drink'.",
      },
      {
        chinese: "喝茶很舒服。",
        pinyin: "Hē chá hěn shūfu.",
        english: "Drinking tea is comfortable.",
        note: "喝 used with a specific beverage.",
      },
    ],
    relatedCharacters: [
      {
        character: "吃",
        pinyin: "chī",
        english: "to eat",
      },
      {
        character: "水",
        pinyin: "shuǐ",
        english: "water",
      },
      {
        character: "茶",
        pinyin: "chá",
        english: "tea",
      },
      {
        character: "酒",
        pinyin: "jiǔ",
        english: "alcohol",
      },
    ],
    mnemonic: "The mouth (口) is used for drinking liquids.",
    radicalMnemonic: "The mouth radical (口) indicates this action involves the mouth for liquids.",
    commonWords: [
      {
        chinese: "喝水",
        pinyin: "hēshuǐ",
        english: "to drink water",
      },
      {
        chinese: "喝茶",
        pinyin: "hēchá",
        english: "to drink tea",
      },
      {
        chinese: "喝酒",
        pinyin: "hējiǔ",
        english: "to drink alcohol",
      },
      {
        chinese: "喝咖啡",
        pinyin: "hē kāfēi",
        english: "to drink coffee",
      },
    ],
  },
  {
    id: "29",
    character: "看",
    pinyin: "kàn",
    english: "to look, to see",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "手",
        name: "Hand",
        meaning: "hand",
        pinyin: "shǒu",
        color: "#f97316",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "目",
        name: "Eye",
        meaning: "eye",
        pinyin: "mù",
        color: "#0ea5e9",
        position: { top: 75, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 看 (kàn) combines 手 (hand) and 目 (eye), suggesting the action of shading the eyes with the hand to see better.",
    etymology:
      "The combination represents putting a hand over the eyes to look into the distance or to see more clearly.",
    examples: [
      {
        chinese: "我看书。",
        pinyin: "Wǒ kàn shū.",
        english: "I read books.",
        note: "看 used as a verb meaning 'to look at' or 'to read'.",
      },
      {
        chinese: "看电影很有趣。",
        pinyin: "Kàn diànyǐng hěn yǒuqù.",
        english: "Watching movies is interesting.",
        note: "看 used to mean 'to watch'.",
      },
    ],
    relatedCharacters: [
      {
        character: "见",
        pinyin: "jiàn",
        english: "to see",
      },
      {
        character: "观",
        pinyin: "guān",
        english: "to observe",
      },
      {
        character: "视",
        pinyin: "shì",
        english: "to view",
      },
      {
        character: "望",
        pinyin: "wàng",
        english: "to look at",
      },
    ],
    mnemonic: "Using your hand to shade your eyes while looking at something.",
    radicalMnemonic: "The hand (手) over the eye (目) helps you see better.",
    commonWords: [
      {
        chinese: "看书",
        pinyin: "kànshū",
        english: "to read books",
      },
      {
        chinese: "看见",
        pinyin: "kànjiàn",
        english: "to see",
      },
      {
        chinese: "好看",
        pinyin: "hǎokàn",
        english: "good-looking",
      },
      {
        chinese: "看病",
        pinyin: "kànbìng",
        english: "to see a doctor",
      },
    ],
  },
  {
    id: "30",
    character: "听",
    pinyin: "tīng",
    english: "to listen, to hear",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "斤",
        name: "Axe",
        meaning: "axe, catty",
        pinyin: "jīn",
        color: "#8b5cf6",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 听 (tīng) is the simplified form. The mouth radical suggests the action of listening or hearing.",
    etymology:
      "In traditional Chinese (聽), it contains the ear radical. The simplified form uses mouth and axe components.",
    examples: [
      {
        chinese: "我听音乐。",
        pinyin: "Wǒ tīng yīnyuè.",
        english: "I listen to music.",
        note: "听 used as a verb meaning 'to listen'.",
      },
      {
        chinese: "听说他很聪明。",
        pinyin: "Tīngshuō tā hěn cōngming.",
        english: "I heard that he is very smart.",
        note: "听 used in the compound word 听说 (to hear that).",
      },
    ],
    relatedCharacters: [
      {
        character: "耳",
        pinyin: "ěr",
        english: "ear",
      },
      {
        character: "声",
        pinyin: "shēng",
        english: "sound",
      },
      {
        character: "音",
        pinyin: "yīn",
        english: "sound, tone",
      },
      {
        character: "闻",
        pinyin: "wén",
        english: "to hear",
      },
    ],
    mnemonic: "Using your mouth and ears together to listen and understand.",
    radicalMnemonic: "The mouth (口) is involved in the process of listening and responding.",
    commonWords: [
      {
        chinese: "听说",
        pinyin: "tīngshuō",
        english: "to hear that",
      },
      {
        chinese: "听见",
        pinyin: "tīngjiàn",
        english: "to hear",
      },
      {
        chinese: "好听",
        pinyin: "hǎotīng",
        english: "pleasant to hear",
      },
      {
        chinese: "听话",
        pinyin: "tīnghuà",
        english: "obedient",
      },
    ],
  },
  {
    id: "31",
    character: "说",
    pinyin: "shuō",
    english: "to speak, to say",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "讠",
        name: "Speech",
        meaning: "speech, words",
        pinyin: "yán",
        color: "#22c55e",
        position: { top: 50, left: 15 },
        positionName: "left",
      },
      {
        symbol: "兑",
        name: "Exchange",
        meaning: "to exchange",
        pinyin: "duì",
        color: "#8b5cf6",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 说 (shuō) combines the speech radical (讠) with 兑 (exchange), indicating the exchange of words or speech.",
    etymology:
      "The speech radical indicates this involves talking, while the right component provides phonetic information.",
    examples: [
      {
        chinese: "他说中文。",
        pinyin: "Tā shuō Zhōngwén.",
        english: "He speaks Chinese.",
        note: "说 used as a verb meaning 'to speak'.",
      },
      {
        chinese: "说话要小心。",
        pinyin: "Shuōhuà yào xiǎoxīn.",
        english: "Be careful when speaking.",
        note: "说 used in the compound word 说话 (to speak).",
      },
    ],
    relatedCharacters: [
      {
        character: "话",
        pinyin: "huà",
        english: "words, speech",
      },
      {
        character: "言",
        pinyin: "yán",
        english: "words, speech",
      },
      {
        character: "讲",
        pinyin: "jiǎng",
        english: "to speak",
      },
      {
        character: "谈",
        pinyin: "tán",
        english: "to talk",
      },
    ],
    mnemonic: "The speech radical shows this is about talking and exchanging words.",
    radicalMnemonic: "The speech radical (讠) clearly indicates this involves speaking.",
    commonWords: [
      {
        chinese: "说话",
        pinyin: "shuōhuà",
        english: "to speak",
      },
      {
        chinese: "听说",
        pinyin: "tīngshuō",
        english: "to hear that",
      },
      {
        chinese: "小说",
        pinyin: "xiǎoshuō",
        english: "novel",
      },
      {
        chinese: "说明",
        pinyin: "shuōmíng",
        english: "to explain",
      },
    ],
  },
  {
    id: "32",
    character: "学",
    pinyin: "xué",
    english: "to study, to learn",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "子",
        name: "Child",
        meaning: "child, seed",
        pinyin: "zǐ",
        color: "#0ea5e9",
        position: { top: 75, left: 50 },
        positionName: "bottom",
      },
      {
        symbol: "学",
        name: "Learn",
        meaning: "to learn",
        pinyin: "xué",
        color: "#22c55e",
        position: { top: 35, left: 50 },
        positionName: "top",
      },
    ],
    radicalExplanation:
      "The character 学 (xué) shows a child (子) under a roof-like structure, representing a child learning in school.",
    etymology:
      "The character depicts a child in a learning environment, emphasizing education and knowledge acquisition.",
    examples: [
      {
        chinese: "我学中文。",
        pinyin: "Wǒ xué Zhōngwén.",
        english: "I study Chinese.",
        note: "学 used as a verb meaning 'to study' or 'to learn'.",
      },
      {
        chinese: "学生很努力。",
        pinyin: "Xuésheng hěn nǔlì.",
        english: "Students work very hard.",
        note: "学 used in the compound word 学生 (student).",
      },
    ],
    relatedCharacters: [
      {
        character: "校",
        pinyin: "xiào",
        english: "school",
      },
      {
        character: "教",
        pinyin: "jiāo",
        english: "to teach",
      },
      {
        character: "习",
        pinyin: "xí",
        english: "to practice",
      },
      {
        character: "知",
        pinyin: "zhī",
        english: "to know",
      },
    ],
    mnemonic: "A child under a roof learning and studying.",
    radicalMnemonic: "The child (子) at the bottom represents the learner in the learning process.",
    commonWords: [
      {
        chinese: "学生",
        pinyin: "xuésheng",
        english: "student",
      },
      {
        chinese: "学校",
        pinyin: "xuéxiào",
        english: "school",
      },
      {
        chinese: "大学",
        pinyin: "dàxué",
        english: "university",
      },
      {
        chinese: "学习",
        pinyin: "xuéxí",
        english: "to study",
      },
    ],
  },
  {
    id: "33",
    character: "工",
    pinyin: "gōng",
    english: "work, worker",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "工",
        name: "Work",
        meaning: "work, labor",
        pinyin: "gōng",
        color: "#ef4444",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 工 (gōng) represents a tool or instrument used for work, symbolizing labor and craftsmanship.",
    etymology: "Originally depicted a carpenter's square or tool, representing skilled work and craftsmanship.",
    examples: [
      {
        chinese: "他是工人。",
        pinyin: "Tā shì gōngrén.",
        english: "He is a worker.",
        note: "工 used in the compound word 工人 (worker).",
      },
      {
        chinese: "工作很忙。",
        pinyin: "Gōngzuò hěn máng.",
        english: "Work is very busy.",
        note: "工 used in the compound word 工作 (work).",
      },
    ],
    relatedCharacters: [
      {
        character: "作",
        pinyin: "zuò",
        english: "to do, to make",
      },
      {
        character: "功",
        pinyin: "gōng",
        english: "merit, achievement",
      },
      {
        character: "巧",
        pinyin: "qiǎo",
        english: "skillful",
      },
      {
        character: "左",
        pinyin: "zuǒ",
        english: "left",
      },
    ],
    mnemonic: "The character looks like a tool or instrument used for work.",
    radicalMnemonic: "Think of it as a carpenter's square, representing skilled work.",
    commonWords: [
      {
        chinese: "工作",
        pinyin: "gōngzuò",
        english: "work, job",
      },
      {
        chinese: "工人",
        pinyin: "gōngrén",
        english: "worker",
      },
      {
        chinese: "工厂",
        pinyin: "gōngchǎng",
        english: "factory",
      },
      {
        chinese: "工程",
        pinyin: "gōngchéng",
        english: "engineering",
      },
    ],
  },
  {
    id: "34",
    character: "家",
    pinyin: "jiā",
    english: "home, family",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "宀",
        name: "Roof",
        meaning: "roof, house",
        pinyin: "mián",
        color: "#8b5cf6",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "豕",
        name: "Pig",
        meaning: "pig",
        pinyin: "shǐ",
        color: "#f97316",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 家 (jiā) combines 宀 (roof) with 豕 (pig), representing a house with livestock, symbolizing home and family.",
    etymology: "In ancient times, having a pig under one's roof was a sign of prosperity and a settled home life.",
    examples: [
      {
        chinese: "我回家了。",
        pinyin: "Wǒ huí jiā le.",
        english: "I went home.",
        note: "家 used as a noun meaning 'home'.",
      },
      {
        chinese: "家人很重要。",
        pinyin: "Jiārén hěn zhòngyào.",
        english: "Family is very important.",
        note: "家 used in the compound word 家人 (family members).",
      },
    ],
    relatedCharacters: [
      {
        character: "房",
        pinyin: "fáng",
        english: "house, room",
      },
      {
        character: "屋",
        pinyin: "wū",
        english: "house",
      },
      {
        character: "宅",
        pinyin: "zhái",
        english: "residence",
      },
      {
        character: "室",
        pinyin: "shì",
        english: "room",
      },
    ],
    mnemonic: "A roof over a pig represents a prosperous home with livestock.",
    radicalMnemonic: "The roof (宀) provides shelter for the family, including their pig (豕).",
    commonWords: [
      {
        chinese: "家人",
        pinyin: "jiārén",
        english: "family members",
      },
      {
        chinese: "国家",
        pinyin: "guójiā",
        english: "country",
      },
      {
        chinese: "大家",
        pinyin: "dàjiā",
        english: "everyone",
      },
      {
        chinese: "在家",
        pinyin: "zàijiā",
        english: "at home",
      },
    ],
  },
  {
    id: "35",
    character: "车",
    pinyin: "chē",
    english: "car, vehicle",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "车",
        name: "Vehicle",
        meaning: "car, vehicle",
        pinyin: "chē",
        color: "#22c55e",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 车 (chē) is a pictograph representing a cart or vehicle viewed from above, showing the axle and wheels.",
    etymology:
      "Originally depicted a cart with wheels and an axle. The simplified form maintains the basic structure of a vehicle.",
    examples: [
      {
        chinese: "我坐车去。",
        pinyin: "Wǒ zuò chē qù.",
        english: "I go by car.",
        note: "车 used as a noun meaning 'car' or 'vehicle'.",
      },
      {
        chinese: "火车很快。",
        pinyin: "Huǒchē hěn kuài.",
        english: "The train is very fast.",
        note: "车 used in the compound word 火车 (train).",
      },
    ],
    relatedCharacters: [
      {
        character: "轮",
        pinyin: "lún",
        english: "wheel",
      },
      {
        character: "路",
        pinyin: "lù",
        english: "road",
      },
      {
        character: "运",
        pinyin: "yùn",
        english: "to transport",
      },
      {
        character: "载",
        pinyin: "zài",
        english: "to carry",
      },
    ],
    mnemonic: "The character looks like a cart viewed from above with an axle and wheels.",
    radicalMnemonic: "Think of it as a simple drawing of a cart with wheels on both sides.",
    commonWords: [
      {
        chinese: "汽车",
        pinyin: "qìchē",
        english: "car",
      },
      {
        chinese: "火车",
        pinyin: "huǒchē",
        english: "train",
      },
      {
        chinese: "自行车",
        pinyin: "zìxíngchē",
        english: "bicycle",
      },
      {
        chinese: "开车",
        pinyin: "kāichē",
        english: "to drive",
      },
    ],
  },
]

// Example of how to create a monthly character set
// This could be in a separate file like characters-2023-05.ts
export const may2023Characters: Character[] = [
  // Subset of characters for May 2023
  charactersDatabase[0], // 水 (water)
  charactersDatabase[1], // 火 (fire)
  charactersDatabase[2], // 木 (wood)
  charactersDatabase[16], // 雨 (rain)
  charactersDatabase[17], // 风 (wind)
  charactersDatabase[18], // 云 (cloud)
  charactersDatabase[19], // 花 (flower)
]

// Example of how to create a monthly character set
// This could be in a separate file like characters-2023-06.ts
export const june2023Characters: Character[] = [
  // Subset of characters for June 2023
  charactersDatabase[3], // 人 (person)
  charactersDatabase[10], // 女 (woman)
  charactersDatabase[11], // 子 (child)
  charactersDatabase[13], // 手 (hand)
  charactersDatabase[14], // 目 (eye)
  charactersDatabase[15], // 耳 (ear)
  charactersDatabase[4], // 心 (heart)
]
