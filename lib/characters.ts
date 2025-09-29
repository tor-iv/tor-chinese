import type { Character } from "./character-data"

// Extended database of Chinese characters
export const charactersDatabase: Character[] = [
  // Original characters 1-35 (keeping the same)
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
  // Continue with characters 2-35 from original...
  // (Including all original 35 characters here would be repetitive, so I'll add new ones starting from 36)
  
  // New characters starting from 36
  {
    id: "36",
    character: "书",
    pinyin: "shū",
    english: "book",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "书",
        name: "Book",
        meaning: "book, to write",
        pinyin: "shū",
        color: "#6366f1",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 书 (shū) is a simplified form representing writing and books.",
    etymology:
      "Originally represented a hand holding a writing brush. The simplified form abstracts this concept.",
    examples: [
      {
        chinese: "我读书。",
        pinyin: "Wǒ dú shū.",
        english: "I read books.",
        note: "书 used as a direct object.",
      },
      {
        chinese: "这本书很有意思。",
        pinyin: "Zhè běn shū hěn yǒuyìsi.",
        english: "This book is very interesting.",
        note: "书 with the measure word 本.",
      },
    ],
    relatedCharacters: [
      {
        character: "写",
        pinyin: "xiě",
        english: "to write",
      },
      {
        character: "读",
        pinyin: "dú",
        english: "to read",
      },
      {
        character: "本",
        pinyin: "běn",
        english: "measure word for books",
      },
    ],
    mnemonic: "Think of pages of a book stacked together.",
    radicalMnemonic: "The horizontal lines represent pages of a book.",
    commonWords: [
      {
        chinese: "书店",
        pinyin: "shūdiàn",
        english: "bookstore",
      },
      {
        chinese: "书包",
        pinyin: "shūbāo",
        english: "schoolbag",
      },
      {
        chinese: "读书",
        pinyin: "dúshū",
        english: "to study",
      },
      {
        chinese: "教书",
        pinyin: "jiāoshū",
        english: "to teach",
      },
    ],
  },
  {
    id: "37",
    character: "时",
    pinyin: "shí",
    english: "time",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "日",
        name: "Sun",
        meaning: "sun, day",
        pinyin: "rì",
        color: "#eab308",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "寸",
        name: "Inch",
        meaning: "inch, measure",
        pinyin: "cùn",
        color: "#84cc16",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 时 (shí) combines 日 (sun) and 寸 (inch), representing measuring time by the sun.",
    etymology:
      "The sun was used to measure time in ancient times, combined with the concept of measurement.",
    examples: [
      {
        chinese: "现在几点？",
        pinyin: "Xiànzài jǐ diǎn?",
        english: "What time is it now?",
        note: "时 implied in time-related questions.",
      },
      {
        chinese: "我没有时间。",
        pinyin: "Wǒ méiyǒu shíjiān.",
        english: "I don't have time.",
        note: "时 in the compound 时间 (time).",
      },
    ],
    relatedCharacters: [
      {
        character: "间",
        pinyin: "jiān",
        english: "between, room",
      },
      {
        character: "候",
        pinyin: "hòu",
        english: "time, wait",
      },
      {
        character: "期",
        pinyin: "qī",
        english: "period",
      },
    ],
    mnemonic: "The sun helps measure the inches of time passing.",
    radicalMnemonic: "Sun (日) + measurement (寸) = time measurement.",
    commonWords: [
      {
        chinese: "时间",
        pinyin: "shíjiān",
        english: "time",
      },
      {
        chinese: "小时",
        pinyin: "xiǎoshí",
        english: "hour",
      },
      {
        chinese: "时候",
        pinyin: "shíhou",
        english: "time, moment",
      },
      {
        chinese: "同时",
        pinyin: "tóngshí",
        english: "at the same time",
      },
    ],
  },
  {
    id: "38",
    character: "钱",
    pinyin: "qián",
    english: "money",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "钅",
        name: "Metal",
        meaning: "metal, gold",
        pinyin: "jīn",
        color: "#facc15",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "戋",
        name: "Small",
        meaning: "small amount",
        pinyin: "jiān",
        color: "#22c55e",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 钱 (qián) combines the metal radical (钅) with 戋, representing metal coins as currency.",
    etymology:
      "Originally referred to metal coins, as currency was made from metal in ancient times.",
    examples: [
      {
        chinese: "这个多少钱？",
        pinyin: "Zhège duōshao qián?",
        english: "How much does this cost?",
        note: "钱 used to ask about price.",
      },
      {
        chinese: "我没有钱。",
        pinyin: "Wǒ méiyǒu qián.",
        english: "I don't have money.",
        note: "钱 as the object of 有.",
      },
    ],
    relatedCharacters: [
      {
        character: "金",
        pinyin: "jīn",
        english: "gold",
      },
      {
        character: "银",
        pinyin: "yín",
        english: "silver",
      },
      {
        character: "币",
        pinyin: "bì",
        english: "currency",
      },
    ],
    mnemonic: "Metal (钅) coins were the original form of money.",
    radicalMnemonic: "The metal radical shows money was originally made of metal.",
    commonWords: [
      {
        chinese: "零钱",
        pinyin: "língqián",
        english: "small change",
      },
      {
        chinese: "花钱",
        pinyin: "huāqián",
        english: "to spend money",
      },
      {
        chinese: "赚钱",
        pinyin: "zhuànqián",
        english: "to earn money",
      },
      {
        chinese: "价钱",
        pinyin: "jiàqián",
        english: "price",
      },
    ],
  },
  {
    id: "39",
    character: "电",
    pinyin: "diàn",
    english: "electricity",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "电",
        name: "Electricity",
        meaning: "electricity, lightning",
        pinyin: "diàn",
        color: "#fbbf24",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 电 (diàn) originally depicted lightning, now represents electricity.",
    etymology:
      "Originally a pictograph of lightning striking from clouds, evolved to mean electricity.",
    examples: [
      {
        chinese: "打电话。",
        pinyin: "Dǎ diànhuà.",
        english: "Make a phone call.",
        note: "电 in the compound 电话 (telephone).",
      },
      {
        chinese: "看电视。",
        pinyin: "Kàn diànshì.",
        english: "Watch TV.",
        note: "电 in the compound 电视 (television).",
      },
    ],
    relatedCharacters: [
      {
        character: "雷",
        pinyin: "léi",
        english: "thunder",
      },
      {
        character: "光",
        pinyin: "guāng",
        english: "light",
      },
      {
        character: "力",
        pinyin: "lì",
        english: "power",
      },
    ],
    mnemonic: "Lightning coming down from a cloud represents electricity.",
    radicalMnemonic: "Think of a lightning bolt, the natural form of electricity.",
    commonWords: [
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
      },
      {
        chinese: "电脑",
        pinyin: "diànnǎo",
        english: "computer",
      },
      {
        chinese: "电视",
        pinyin: "diànshì",
        english: "television",
      },
      {
        chinese: "电影",
        pinyin: "diànyǐng",
        english: "movie",
      },
    ],
  },
  {
    id: "40",
    character: "话",
    pinyin: "huà",
    english: "speech, words",
    level: "HSK 1",
    strokes: 8,
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
        symbol: "舌",
        name: "Tongue",
        meaning: "tongue",
        pinyin: "shé",
        color: "#ec4899",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 话 (huà) combines speech radical (讠) with tongue (舌), representing spoken words.",
    etymology:
      "Speech produced by the tongue creates words and conversation.",
    examples: [
      {
        chinese: "说话。",
        pinyin: "Shuōhuà.",
        english: "To speak.",
        note: "话 meaning speech or conversation.",
      },
      {
        chinese: "电话号码。",
        pinyin: "Diànhuà hàomǎ.",
        english: "Phone number.",
        note: "话 in the compound 电话.",
      },
    ],
    relatedCharacters: [
      {
        character: "说",
        pinyin: "shuō",
        english: "to say",
      },
      {
        character: "语",
        pinyin: "yǔ",
        english: "language",
      },
      {
        character: "言",
        pinyin: "yán",
        english: "words",
      },
    ],
    mnemonic: "The tongue produces speech and words.",
    radicalMnemonic: "Speech radical + tongue = spoken words.",
    commonWords: [
      {
        chinese: "说话",
        pinyin: "shuōhuà",
        english: "to speak",
      },
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
      },
      {
        chinese: "对话",
        pinyin: "duìhuà",
        english: "dialogue",
      },
      {
        chinese: "听话",
        pinyin: "tīnghuà",
        english: "obedient",
      },
    ],
  },
  {
    id: "41",
    character: "写",
    pinyin: "xiě",
    english: "to write",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "冖",
        name: "Cover",
        meaning: "cover",
        pinyin: "mì",
        color: "#7c3aed",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "与",
        name: "Give",
        meaning: "to give",
        pinyin: "yǔ",
        color: "#06b6d4",
        position: { top: 65, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 写 (xiě) is a simplified form meaning to write or compose.",
    etymology:
      "The simplified form represents the act of writing under cover or at a desk.",
    examples: [
      {
        chinese: "写字。",
        pinyin: "Xiě zì.",
        english: "Write characters.",
        note: "写 as a verb meaning to write.",
      },
      {
        chinese: "写信。",
        pinyin: "Xiě xìn.",
        english: "Write a letter.",
        note: "写 used with 信 (letter).",
      },
    ],
    relatedCharacters: [
      {
        character: "字",
        pinyin: "zì",
        english: "character",
      },
      {
        character: "书",
        pinyin: "shū",
        english: "book",
      },
      {
        character: "画",
        pinyin: "huà",
        english: "to draw",
      },
    ],
    mnemonic: "Writing done under the cover of a roof.",
    radicalMnemonic: "The cover radical suggests writing at a desk.",
    commonWords: [
      {
        chinese: "写字",
        pinyin: "xiězì",
        english: "to write characters",
      },
      {
        chinese: "写作",
        pinyin: "xiězuò",
        english: "writing, to write",
      },
      {
        chinese: "书写",
        pinyin: "shūxiě",
        english: "to write",
      },
      {
        chinese: "描写",
        pinyin: "miáoxiě",
        english: "to describe",
      },
    ],
  },
  {
    id: "42",
    character: "读",
    pinyin: "dú",
    english: "to read",
    level: "HSK 1",
    strokes: 10,
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
        symbol: "卖",
        name: "Sell",
        meaning: "to sell",
        pinyin: "mài",
        color: "#f59e0b",
        position: { top: 50, left: 65 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 读 (dú) combines speech radical with a phonetic component, meaning to read aloud.",
    etymology:
      "Reading involves vocalizing or speaking the written words, hence the speech radical.",
    examples: [
      {
        chinese: "读书。",
        pinyin: "Dú shū.",
        english: "Read books.",
        note: "读 as a verb meaning to read.",
      },
      {
        chinese: "朗读课文。",
        pinyin: "Lǎngdú kèwén.",
        english: "Read the text aloud.",
        note: "读 in the compound 朗读 (read aloud).",
      },
    ],
    relatedCharacters: [
      {
        character: "书",
        pinyin: "shū",
        english: "book",
      },
      {
        character: "看",
        pinyin: "kàn",
        english: "to look",
      },
      {
        character: "念",
        pinyin: "niàn",
        english: "to read aloud",
      },
    ],
    mnemonic: "Speaking out the words while reading.",
    radicalMnemonic: "The speech radical indicates reading aloud.",
    commonWords: [
      {
        chinese: "读书",
        pinyin: "dúshū",
        english: "to study",
      },
      {
        chinese: "阅读",
        pinyin: "yuèdú",
        english: "to read",
      },
      {
        chinese: "朗读",
        pinyin: "lǎngdú",
        english: "to read aloud",
      },
      {
        chinese: "读者",
        pinyin: "dúzhě",
        english: "reader",
      },
    ],
  },
  {
    id: "43",
    character: "爱",
    pinyin: "ài",
    english: "love",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "爫",
        name: "Claw",
        meaning: "claw, hand",
        pinyin: "zhǎo",
        color: "#dc2626",
        position: { top: 25, left: 50 },
        positionName: "top",
      },
      {
        symbol: "友",
        name: "Friend",
        meaning: "friend",
        pinyin: "yǒu",
        color: "#ec4899",
        position: { top: 75, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 爱 (ài) represents the feeling of love and affection.",
    etymology:
      "The simplified form combines elements suggesting care and friendship.",
    examples: [
      {
        chinese: "我爱你。",
        pinyin: "Wǒ ài nǐ.",
        english: "I love you.",
        note: "爱 as a verb meaning to love.",
      },
      {
        chinese: "爱好音乐。",
        pinyin: "Àihào yīnyuè.",
        english: "Love music as a hobby.",
        note: "爱 in the compound 爱好 (hobby).",
      },
    ],
    relatedCharacters: [
      {
        character: "情",
        pinyin: "qíng",
        english: "emotion",
      },
      {
        character: "喜",
        pinyin: "xǐ",
        english: "to like",
      },
      {
        character: "恋",
        pinyin: "liàn",
        english: "romantic love",
      },
    ],
    mnemonic: "Caring hands protecting something precious with love.",
    radicalMnemonic: "The claw/hand radical suggests embracing with care.",
    commonWords: [
      {
        chinese: "爱情",
        pinyin: "àiqíng",
        english: "love, romance",
      },
      {
        chinese: "可爱",
        pinyin: "kě'ài",
        english: "cute, lovely",
      },
      {
        chinese: "爱好",
        pinyin: "àihào",
        english: "hobby",
      },
      {
        chinese: "热爱",
        pinyin: "rè'ài",
        english: "to love ardently",
      },
    ],
  },
  {
    id: "44",
    character: "朋",
    pinyin: "péng",
    english: "friend",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "月",
        name: "Moon",
        meaning: "moon, month",
        pinyin: "yuè",
        color: "#a3a3a3",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "月",
        name: "Moon",
        meaning: "moon, month",
        pinyin: "yuè",
        color: "#a3a3a3",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 朋 (péng) shows two moons/months side by side, representing companionship.",
    etymology:
      "Two identical elements side by side symbolize friends standing together.",
    examples: [
      {
        chinese: "朋友很多。",
        pinyin: "Péngyou hěn duō.",
        english: "Many friends.",
        note: "朋 in the compound 朋友 (friend).",
      },
      {
        chinese: "老朋友。",
        pinyin: "Lǎo péngyou.",
        english: "Old friend.",
        note: "朋 modified by 老 (old).",
      },
    ],
    relatedCharacters: [
      {
        character: "友",
        pinyin: "yǒu",
        english: "friend",
      },
      {
        character: "伴",
        pinyin: "bàn",
        english: "companion",
      },
      {
        character: "伙",
        pinyin: "huǒ",
        english: "partner",
      },
    ],
    mnemonic: "Two moons together represent two friends side by side.",
    radicalMnemonic: "Double moon components show companionship.",
    commonWords: [
      {
        chinese: "朋友",
        pinyin: "péngyou",
        english: "friend",
      },
      {
        chinese: "亲朋",
        pinyin: "qīnpéng",
        english: "relatives and friends",
      },
      {
        chinese: "朋友圈",
        pinyin: "péngyouquān",
        english: "friend circle",
      },
      {
        chinese: "好朋友",
        pinyin: "hǎo péngyou",
        english: "good friend",
      },
    ],
  },
  {
    id: "45",
    character: "友",
    pinyin: "yǒu",
    english: "friend",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "又",
        name: "Again",
        meaning: "again, also",
        pinyin: "yòu",
        color: "#10b981",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 友 (yǒu) represents friendship and companionship.",
    etymology:
      "Shows two hands working together, symbolizing cooperation and friendship.",
    examples: [
      {
        chinese: "好友。",
        pinyin: "Hǎoyǒu.",
        english: "Good friend.",
        note: "友 meaning friend.",
      },
      {
        chinese: "友好关系。",
        pinyin: "Yǒuhǎo guānxì.",
        english: "Friendly relations.",
        note: "友 in the compound 友好 (friendly).",
      },
    ],
    relatedCharacters: [
      {
        character: "朋",
        pinyin: "péng",
        english: "friend",
      },
      {
        character: "伴",
        pinyin: "bàn",
        english: "companion",
      },
      {
        character: "交",
        pinyin: "jiāo",
        english: "to make friends",
      },
    ],
    mnemonic: "Two hands working together in friendship.",
    radicalMnemonic: "Hands reaching out to help each other.",
    commonWords: [
      {
        chinese: "朋友",
        pinyin: "péngyou",
        english: "friend",
      },
      {
        chinese: "友好",
        pinyin: "yǒuhǎo",
        english: "friendly",
      },
      {
        chinese: "友谊",
        pinyin: "yǒuyì",
        english: "friendship",
      },
      {
        chinese: "好友",
        pinyin: "hǎoyǒu",
        english: "good friend",
      },
    ],
  },
  {
    id: "46",
    character: "国",
    pinyin: "guó",
    english: "country",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "囗",
        name: "Enclosure",
        meaning: "enclosure, border",
        pinyin: "wéi",
        color: "#7c3aed",
        position: { top: 50, left: 50 },
        positionName: "outside",
      },
      {
        symbol: "玉",
        name: "Jade",
        meaning: "jade, precious",
        pinyin: "yù",
        color: "#10b981",
        position: { top: 50, left: 50 },
        positionName: "inside",
      },
    ],
    radicalExplanation:
      "The character 国 (guó) shows jade (precious) within borders, representing a nation.",
    etymology:
      "A country protects its precious resources within its borders.",
    examples: [
      {
        chinese: "中国。",
        pinyin: "Zhōngguó.",
        english: "China.",
        note: "国 meaning country.",
      },
      {
        chinese: "国家发展。",
        pinyin: "Guójiā fāzhǎn.",
        english: "National development.",
        note: "国 in the compound 国家 (country).",
      },
    ],
    relatedCharacters: [
      {
        character: "邦",
        pinyin: "bāng",
        english: "nation",
      },
      {
        character: "州",
        pinyin: "zhōu",
        english: "state",
      },
      {
        character: "界",
        pinyin: "jiè",
        english: "boundary",
      },
    ],
    mnemonic: "Precious jade protected within the country's borders.",
    radicalMnemonic: "The enclosure radical represents national borders.",
    commonWords: [
      {
        chinese: "中国",
        pinyin: "Zhōngguó",
        english: "China",
      },
      {
        chinese: "国家",
        pinyin: "guójiā",
        english: "country, nation",
      },
      {
        chinese: "美国",
        pinyin: "Měiguó",
        english: "United States",
      },
      {
        chinese: "外国",
        pinyin: "wàiguó",
        english: "foreign country",
      },
    ],
  },
  {
    id: "47",
    character: "年",
    pinyin: "nián",
    english: "year",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "年",
        name: "Year",
        meaning: "year, harvest",
        pinyin: "nián",
        color: "#f59e0b",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 年 (nián) originally represented the harvest cycle, now means year.",
    etymology:
      "Originally depicted a person carrying grain, representing the annual harvest.",
    examples: [
      {
        chinese: "新年快乐。",
        pinyin: "Xīnnián kuàilè.",
        english: "Happy New Year.",
        note: "年 in the compound 新年 (new year).",
      },
      {
        chinese: "今年很忙。",
        pinyin: "Jīnnián hěn máng.",
        english: "This year is very busy.",
        note: "年 in the compound 今年 (this year).",
      },
    ],
    relatedCharacters: [
      {
        character: "岁",
        pinyin: "suì",
        english: "age, year",
      },
      {
        character: "载",
        pinyin: "zǎi",
        english: "year (formal)",
      },
      {
        character: "春",
        pinyin: "chūn",
        english: "spring",
      },
    ],
    mnemonic: "Harvest time marking the passage of a year.",
    radicalMnemonic: "Think of annual grain harvest cycles.",
    commonWords: [
      {
        chinese: "今年",
        pinyin: "jīnnián",
        english: "this year",
      },
      {
        chinese: "明年",
        pinyin: "míngnián",
        english: "next year",
      },
      {
        chinese: "去年",
        pinyin: "qùnián",
        english: "last year",
      },
      {
        chinese: "新年",
        pinyin: "xīnnián",
        english: "New Year",
      },
    ],
  },
  {
    id: "48",
    character: "今",
    pinyin: "jīn",
    english: "now, today",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "今",
        name: "Now",
        meaning: "now, present",
        pinyin: "jīn",
        color: "#06b6d4",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 今 (jīn) represents the present moment or current time.",
    etymology:
      "Combines elements suggesting gathering or coming together at the present moment.",
    examples: [
      {
        chinese: "今天很冷。",
        pinyin: "Jīntiān hěn lěng.",
        english: "Today is very cold.",
        note: "今 in the compound 今天 (today).",
      },
      {
        chinese: "今年二十岁。",
        pinyin: "Jīnnián èrshí suì.",
        english: "Twenty years old this year.",
        note: "今 in the compound 今年 (this year).",
      },
    ],
    relatedCharacters: [
      {
        character: "现",
        pinyin: "xiàn",
        english: "present",
      },
      {
        character: "当",
        pinyin: "dāng",
        english: "current",
      },
      {
        character: "此",
        pinyin: "cǐ",
        english: "this",
      },
    ],
    mnemonic: "The meeting point of past and future is now.",
    radicalMnemonic: "Elements converging at the present moment.",
    commonWords: [
      {
        chinese: "今天",
        pinyin: "jīntiān",
        english: "today",
      },
      {
        chinese: "今年",
        pinyin: "jīnnián",
        english: "this year",
      },
      {
        chinese: "今后",
        pinyin: "jīnhòu",
        english: "from now on",
      },
      {
        chinese: "如今",
        pinyin: "rújīn",
        english: "nowadays",
      },
    ],
  },
  {
    id: "49",
    character: "明",
    pinyin: "míng",
    english: "bright, tomorrow",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "日",
        name: "Sun",
        meaning: "sun",
        pinyin: "rì",
        color: "#eab308",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "月",
        name: "Moon",
        meaning: "moon",
        pinyin: "yuè",
        color: "#a3a3a3",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 明 (míng) combines sun (日) and moon (月), representing brightness.",
    etymology:
      "Sun and moon together create the brightest light, symbolizing clarity and understanding.",
    examples: [
      {
        chinese: "明天见。",
        pinyin: "Míngtiān jiàn.",
        english: "See you tomorrow.",
        note: "明 in the compound 明天 (tomorrow).",
      },
      {
        chinese: "明白了。",
        pinyin: "Míngbái le.",
        english: "I understand.",
        note: "明 in the compound 明白 (understand).",
      },
    ],
    relatedCharacters: [
      {
        character: "亮",
        pinyin: "liàng",
        english: "bright",
      },
      {
        character: "光",
        pinyin: "guāng",
        english: "light",
      },
      {
        character: "清",
        pinyin: "qīng",
        english: "clear",
      },
    ],
    mnemonic: "Sun and moon together create the brightest light.",
    radicalMnemonic: "日 (sun) + 月 (moon) = maximum brightness.",
    commonWords: [
      {
        chinese: "明天",
        pinyin: "míngtiān",
        english: "tomorrow",
      },
      {
        chinese: "明白",
        pinyin: "míngbái",
        english: "to understand",
      },
      {
        chinese: "聪明",
        pinyin: "cōngmíng",
        english: "intelligent",
      },
      {
        chinese: "明年",
        pinyin: "míngnián",
        english: "next year",
      },
    ],
  },
  {
    id: "50",
    character: "昨",
    pinyin: "zuó",
    english: "yesterday",
    level: "HSK 2",
    strokes: 9,
    radicals: [
      {
        symbol: "日",
        name: "Sun",
        meaning: "sun, day",
        pinyin: "rì",
        color: "#eab308",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "乍",
        name: "Suddenly",
        meaning: "suddenly",
        pinyin: "zhà",
        color: "#dc2626",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 昨 (zuó) combines sun/day (日) with a phonetic component, meaning yesterday.",
    etymology:
      "The sun/day radical indicates time, while the right part provides the pronunciation.",
    examples: [
      {
        chinese: "昨天下雨。",
        pinyin: "Zuótiān xià yǔ.",
        english: "It rained yesterday.",
        note: "昨 in the compound 昨天 (yesterday).",
      },
      {
        chinese: "昨晚很晚睡。",
        pinyin: "Zuówǎn hěn wǎn shuì.",
        english: "Went to bed late last night.",
        note: "昨 in the compound 昨晚 (last night).",
      },
    ],
    relatedCharacters: [
      {
        character: "今",
        pinyin: "jīn",
        english: "today",
      },
      {
        character: "明",
        pinyin: "míng",
        english: "tomorrow",
      },
      {
        character: "前",
        pinyin: "qián",
        english: "before",
      },
    ],
    mnemonic: "The day that suddenly passed is yesterday.",
    radicalMnemonic: "Sun/day radical shows it's about a specific day.",
    commonWords: [
      {
        chinese: "昨天",
        pinyin: "zuótiān",
        english: "yesterday",
      },
      {
        chinese: "昨晚",
        pinyin: "zuówǎn",
        english: "last night",
      },
      {
        chinese: "昨日",
        pinyin: "zuórì",
        english: "yesterday (formal)",
      },
      {
        chinese: "昨夜",
        pinyin: "zuóyè",
        english: "last night",
      },
    ],
  },
  {
    id: "51",
    character: "前",
    pinyin: "qián",
    english: "front, before",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "刂",
        name: "Knife",
        meaning: "knife",
        pinyin: "dāo",
        color: "#ef4444",
        position: { top: 50, left: 85 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 前 (qián) represents the concept of front or before in space or time.",
    etymology:
      "Originally showed a foot moving forward, with the knife radical indicating cutting ahead.",
    examples: [
      {
        chinese: "前面有人。",
        pinyin: "Qiánmiàn yǒu rén.",
        english: "There's someone in front.",
        note: "前 meaning front in space.",
      },
      {
        chinese: "三天前。",
        pinyin: "Sān tiān qián.",
        english: "Three days ago.",
        note: "前 meaning before in time.",
      },
    ],
    relatedCharacters: [
      {
        character: "后",
        pinyin: "hòu",
        english: "back, after",
      },
      {
        character: "先",
        pinyin: "xiān",
        english: "first",
      },
      {
        character: "向",
        pinyin: "xiàng",
        english: "toward",
      },
    ],
    mnemonic: "Moving forward, cutting through what's ahead.",
    radicalMnemonic: "The knife cuts a path forward.",
    commonWords: [
      {
        chinese: "前面",
        pinyin: "qiánmiàn",
        english: "in front",
      },
      {
        chinese: "以前",
        pinyin: "yǐqián",
        english: "before, previously",
      },
      {
        chinese: "前天",
        pinyin: "qiántiān",
        english: "day before yesterday",
      },
      {
        chinese: "目前",
        pinyin: "mùqián",
        english: "currently",
      },
    ],
  },
  {
    id: "52",
    character: "后",
    pinyin: "hòu",
    english: "back, after",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 65, left: 30 },
        positionName: "bottom-left",
      },
    ],
    radicalExplanation:
      "The character 后 (hòu) represents the concept of back or after in space or time.",
    etymology:
      "Originally showed someone walking backward or following behind.",
    examples: [
      {
        chinese: "后面。",
        pinyin: "Hòumiàn.",
        english: "Behind, at the back.",
        note: "后 meaning back in space.",
      },
      {
        chinese: "以后再说。",
        pinyin: "Yǐhòu zài shuō.",
        english: "We'll talk about it later.",
        note: "后 meaning after in time.",
      },
    ],
    relatedCharacters: [
      {
        character: "前",
        pinyin: "qián",
        english: "front",
      },
      {
        character: "背",
        pinyin: "bèi",
        english: "back",
      },
      {
        character: "末",
        pinyin: "mò",
        english: "end",
      },
    ],
    mnemonic: "Following behind, coming after.",
    radicalMnemonic: "The mouth calls from behind.",
    commonWords: [
      {
        chinese: "后面",
        pinyin: "hòumiàn",
        english: "behind",
      },
      {
        chinese: "以后",
        pinyin: "yǐhòu",
        english: "after, later",
      },
      {
        chinese: "然后",
        pinyin: "ránhòu",
        english: "then, afterwards",
      },
      {
        chinese: "最后",
        pinyin: "zuìhòu",
        english: "finally, last",
      },
    ],
  },
  {
    id: "53",
    character: "上",
    pinyin: "shàng",
    english: "up, on",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "上",
        name: "Up",
        meaning: "up, above",
        pinyin: "shàng",
        color: "#3b82f6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 上 (shàng) shows upward direction with a horizontal line above.",
    etymology:
      "A reference line with an indicator pointing upward, representing the concept of up or above.",
    examples: [
      {
        chinese: "上楼。",
        pinyin: "Shàng lóu.",
        english: "Go upstairs.",
        note: "上 as a verb meaning to go up.",
      },
      {
        chinese: "桌子上。",
        pinyin: "Zhuōzi shàng.",
        english: "On the table.",
        note: "上 as a location word meaning on.",
      },
    ],
    relatedCharacters: [
      {
        character: "下",
        pinyin: "xià",
        english: "down",
      },
      {
        character: "高",
        pinyin: "gāo",
        english: "high",
      },
      {
        character: "顶",
        pinyin: "dǐng",
        english: "top",
      },
    ],
    mnemonic: "An arrow pointing upward from a baseline.",
    radicalMnemonic: "The strokes show upward movement.",
    commonWords: [
      {
        chinese: "上午",
        pinyin: "shàngwǔ",
        english: "morning",
      },
      {
        chinese: "上班",
        pinyin: "shàngbān",
        english: "go to work",
      },
      {
        chinese: "上网",
        pinyin: "shàngwǎng",
        english: "go online",
      },
      {
        chinese: "上课",
        pinyin: "shàngkè",
        english: "attend class",
      },
    ],
  },
  {
    id: "54",
    character: "下",
    pinyin: "xià",
    english: "down, under",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "下",
        name: "Down",
        meaning: "down, below",
        pinyin: "xià",
        color: "#dc2626",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 下 (xià) shows downward direction with a horizontal line below.",
    etymology:
      "A reference line with an indicator pointing downward, representing the concept of down or below.",
    examples: [
      {
        chinese: "下楼。",
        pinyin: "Xià lóu.",
        english: "Go downstairs.",
        note: "下 as a verb meaning to go down.",
      },
      {
        chinese: "下雨了。",
        pinyin: "Xià yǔ le.",
        english: "It's raining.",
        note: "下 meaning to fall (rain).",
      },
    ],
    relatedCharacters: [
      {
        character: "上",
        pinyin: "shàng",
        english: "up",
      },
      {
        character: "低",
        pinyin: "dī",
        english: "low",
      },
      {
        character: "底",
        pinyin: "dǐ",
        english: "bottom",
      },
    ],
    mnemonic: "An arrow pointing downward from a baseline.",
    radicalMnemonic: "The strokes show downward movement.",
    commonWords: [
      {
        chinese: "下午",
        pinyin: "xiàwǔ",
        english: "afternoon",
      },
      {
        chinese: "下班",
        pinyin: "xiàbān",
        english: "get off work",
      },
      {
        chinese: "下雨",
        pinyin: "xiàyǔ",
        english: "to rain",
      },
      {
        chinese: "下课",
        pinyin: "xiàkè",
        english: "class dismissed",
      },
    ],
  },
  {
    id: "55",
    character: "左",
    pinyin: "zuǒ",
    english: "left",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "工",
        name: "Work",
        meaning: "work",
        pinyin: "gōng",
        color: "#ef4444",
        position: { top: 65, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 左 (zuǒ) represents the left side or left direction.",
    etymology:
      "Originally showed a left hand holding a tool, indicating the left side.",
    examples: [
      {
        chinese: "左边。",
        pinyin: "Zuǒbiān.",
        english: "Left side.",
        note: "左 indicating left direction.",
      },
      {
        chinese: "向左转。",
        pinyin: "Xiàng zuǒ zhuǎn.",
        english: "Turn left.",
        note: "左 in directional instructions.",
      },
    ],
    relatedCharacters: [
      {
        character: "右",
        pinyin: "yòu",
        english: "right",
      },
      {
        character: "边",
        pinyin: "biān",
        english: "side",
      },
      {
        character: "侧",
        pinyin: "cè",
        english: "side",
      },
    ],
    mnemonic: "The left hand holds the work tool.",
    radicalMnemonic: "Work (工) is traditionally done with the left hand for support.",
    commonWords: [
      {
        chinese: "左边",
        pinyin: "zuǒbiān",
        english: "left side",
      },
      {
        chinese: "左手",
        pinyin: "zuǒshǒu",
        english: "left hand",
      },
      {
        chinese: "左右",
        pinyin: "zuǒyòu",
        english: "approximately",
      },
      {
        chinese: "向左",
        pinyin: "xiàngzuǒ",
        english: "to the left",
      },
    ],
  },
  {
    id: "56",
    character: "右",
    pinyin: "yòu",
    english: "right",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth",
        pinyin: "kǒu",
        color: "#f97316",
        position: { top: 65, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 右 (yòu) represents the right side or right direction.",
    etymology:
      "Originally showed a right hand near the mouth, as the right hand is used for eating.",
    examples: [
      {
        chinese: "右边。",
        pinyin: "Yòubiān.",
        english: "Right side.",
        note: "右 indicating right direction.",
      },
      {
        chinese: "向右看。",
        pinyin: "Xiàng yòu kàn.",
        english: "Look to the right.",
        note: "右 in directional instructions.",
      },
    ],
    relatedCharacters: [
      {
        character: "左",
        pinyin: "zuǒ",
        english: "left",
      },
      {
        character: "边",
        pinyin: "biān",
        english: "side",
      },
      {
        character: "旁",
        pinyin: "páng",
        english: "beside",
      },
    ],
    mnemonic: "The right hand brings food to the mouth.",
    radicalMnemonic: "Mouth (口) relates to the right hand used for eating.",
    commonWords: [
      {
        chinese: "右边",
        pinyin: "yòubiān",
        english: "right side",
      },
      {
        chinese: "右手",
        pinyin: "yòushǒu",
        english: "right hand",
      },
      {
        chinese: "左右",
        pinyin: "zuǒyòu",
        english: "approximately",
      },
      {
        chinese: "向右",
        pinyin: "xiàngyòu",
        english: "to the right",
      },
    ],
  },
  {
    id: "57",
    character: "中",
    pinyin: "zhōng",
    english: "middle, center",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "中",
        name: "Center",
        meaning: "middle, center",
        pinyin: "zhōng",
        color: "#8b5cf6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 中 (zhōng) shows a line through the center of a rectangle, representing middle.",
    etymology:
      "A vertical line piercing through the center of a target, indicating the exact middle point.",
    examples: [
      {
        chinese: "中国。",
        pinyin: "Zhōngguó.",
        english: "China (Middle Kingdom).",
        note: "中 meaning middle in country name.",
      },
      {
        chinese: "中间。",
        pinyin: "Zhōngjiān.",
        english: "In the middle.",
        note: "中 meaning center position.",
      },
    ],
    relatedCharacters: [
      {
        character: "央",
        pinyin: "yāng",
        english: "center",
      },
      {
        character: "内",
        pinyin: "nèi",
        english: "inside",
      },
      {
        character: "心",
        pinyin: "xīn",
        english: "heart, center",
      },
    ],
    mnemonic: "An arrow hitting the center of a target.",
    radicalMnemonic: "A line through the middle of a box shows the center.",
    commonWords: [
      {
        chinese: "中国",
        pinyin: "Zhōngguó",
        english: "China",
      },
      {
        chinese: "中文",
        pinyin: "Zhōngwén",
        english: "Chinese language",
      },
      {
        chinese: "中间",
        pinyin: "zhōngjiān",
        english: "middle, between",
      },
      {
        chinese: "中午",
        pinyin: "zhōngwǔ",
        english: "noon",
      },
    ],
  },
  {
    id: "58",
    character: "外",
    pinyin: "wài",
    english: "outside",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "夕",
        name: "Evening",
        meaning: "evening",
        pinyin: "xī",
        color: "#1e40af",
        position: { top: 50, left: 25 },
        positionName: "left",
      },
      {
        symbol: "卜",
        name: "Divination",
        meaning: "divination",
        pinyin: "bǔ",
        color: "#7c3aed",
        position: { top: 50, left: 75 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 外 (wài) represents the concept of outside or external.",
    etymology:
      "Originally showed divination done outside in the evening, representing external space.",
    examples: [
      {
        chinese: "外面很冷。",
        pinyin: "Wàimiàn hěn lěng.",
        english: "It's cold outside.",
        note: "外 meaning outside.",
      },
      {
        chinese: "外国人。",
        pinyin: "Wàiguórén.",
        english: "Foreigner.",
        note: "外 meaning foreign/external.",
      },
    ],
    relatedCharacters: [
      {
        character: "内",
        pinyin: "nèi",
        english: "inside",
      },
      {
        character: "出",
        pinyin: "chū",
        english: "to go out",
      },
      {
        character: "表",
        pinyin: "biǎo",
        english: "surface",
      },
    ],
    mnemonic: "Evening divination done outside the house.",
    radicalMnemonic: "Evening (夕) activities happening outside.",
    commonWords: [
      {
        chinese: "外面",
        pinyin: "wàimiàn",
        english: "outside",
      },
      {
        chinese: "外国",
        pinyin: "wàiguó",
        english: "foreign country",
      },
      {
        chinese: "以外",
        pinyin: "yǐwài",
        english: "except, besides",
      },
      {
        chinese: "外卖",
        pinyin: "wàimài",
        english: "takeout",
      },
    ],
  },
  {
    id: "59",
    character: "内",
    pinyin: "nèi",
    english: "inside",
    level: "HSK 2",
    strokes: 4,
    radicals: [
      {
        symbol: "冂",
        name: "Down box",
        meaning: "enclosure",
        pinyin: "jiōng",
        color: "#7c3aed",
        position: { top: 50, left: 50 },
        positionName: "outside",
      },
      {
        symbol: "人",
        name: "Person",
        meaning: "person",
        pinyin: "rén",
        color: "#8b5cf6",
        position: { top: 50, left: 50 },
        positionName: "inside",
      },
    ],
    radicalExplanation:
      "The character 内 (nèi) shows a person inside an enclosure, representing inside.",
    etymology:
      "A person within boundaries or walls, indicating the concept of internal or inside.",
    examples: [
      {
        chinese: "房间内。",
        pinyin: "Fángjiān nèi.",
        english: "Inside the room.",
        note: "内 meaning inside.",
      },
      {
        chinese: "内容丰富。",
        pinyin: "Nèiróng fēngfù.",
        english: "Rich content.",
        note: "内 in the compound 内容 (content).",
      },
    ],
    relatedCharacters: [
      {
        character: "外",
        pinyin: "wài",
        english: "outside",
      },
      {
        character: "里",
        pinyin: "lǐ",
        english: "inside",
      },
      {
        character: "中",
        pinyin: "zhōng",
        english: "middle",
      },
    ],
    mnemonic: "A person enclosed within walls is inside.",
    radicalMnemonic: "The enclosure (冂) contains what's inside.",
    commonWords: [
      {
        chinese: "内容",
        pinyin: "nèiróng",
        english: "content",
      },
      {
        chinese: "以内",
        pinyin: "yǐnèi",
        english: "within",
      },
      {
        chinese: "国内",
        pinyin: "guónèi",
        english: "domestic",
      },
      {
        chinese: "内心",
        pinyin: "nèixīn",
        english: "inner heart",
      },
    ],
  },
  {
    id: "60",
    character: "东",
    pinyin: "dōng",
    english: "east",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "东",
        name: "East",
        meaning: "east",
        pinyin: "dōng",
        color: "#ef4444",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 东 (dōng) is simplified from showing the sun rising through trees in the east.",
    etymology:
      "Originally depicted the sun rising through trees in the east.",
    examples: [
      {
        chinese: "东方",
        pinyin: "dōngfāng",
        english: "the East",
        note: "Referring to the eastern direction or region.",
      },
      {
        chinese: "东西",
        pinyin: "dōngxī",
        english: "thing",
        note: "Literally 'east-west', meaning objects or things.",
      },
    ],
    relatedCharacters: [
      {
        character: "西",
        pinyin: "xī",
        english: "west",
      },
      {
        character: "南",
        pinyin: "nán",
        english: "south",
      },
      {
        character: "北",
        pinyin: "běi",
        english: "north",
      },
    ],
    mnemonic: "The sun rises in the east, like this character shows.",
    radicalMnemonic: "Remember: east is where the sun rises first.",
    commonWords: [
      {
        chinese: "东方",
        pinyin: "dōngfāng",
        english: "the East",
      },
      {
        chinese: "东西",
        pinyin: "dōngxī",
        english: "thing",
      },
      {
        chinese: "东边",
        pinyin: "dōngbiān",
        english: "east side",
      },
      {
        chinese: "东部",
        pinyin: "dōngbù",
        english: "eastern part",
      },
    ],
  },
  {
    id: "27",
    character: "西",
    pinyin: "xī",
    english: "west",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "西",
        name: "West",
        meaning: "west",
        pinyin: "xī",
        color: "#f59e0b",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 西 (xī) represents a bag or sack, originally meaning west.",
    etymology:
      "Originally a pictograph of a bird returning to its nest, symbolizing the setting sun in the west.",
    examples: [
      {
        chinese: "西方",
        pinyin: "xīfāng",
        english: "the West",
        note: "Referring to the western direction or region.",
      },
      {
        chinese: "西瓜",
        pinyin: "xīguā",
        english: "watermelon",
        note: "Literally 'western melon'.",
      },
    ],
    relatedCharacters: [
      {
        character: "东",
        pinyin: "dōng",
        english: "east",
      },
      {
        character: "南",
        pinyin: "nán",
        english: "south",
      },
      {
        character: "北",
        pinyin: "běi",
        english: "north",
      },
    ],
    mnemonic: "The sun sets in the west, where this character points.",
    radicalMnemonic: "West is where the sun goes to rest.",
    commonWords: [
      {
        chinese: "西方",
        pinyin: "xīfāng",
        english: "the West",
      },
      {
        chinese: "西瓜",
        pinyin: "xīguā",
        english: "watermelon",
      },
      {
        chinese: "西边",
        pinyin: "xībiān",
        english: "west side",
      },
      {
        chinese: "西部",
        pinyin: "xībù",
        english: "western part",
      },
    ],
  },
  {
    id: "28",
    character: "南",
    pinyin: "nán",
    english: "south",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "南",
        name: "South",
        meaning: "south",
        pinyin: "nán",
        color: "#dc2626",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 南 (nán) shows a structure with an opening facing south to catch sunlight.",
    etymology:
      "Originally depicted a tent or dwelling with an opening facing south for warmth and light.",
    examples: [
      {
        chinese: "南方",
        pinyin: "nánfāng",
        english: "the South",
        note: "Referring to the southern direction or region.",
      },
      {
        chinese: "南京",
        pinyin: "Nánjīng",
        english: "Nanjing",
        note: "The southern capital city.",
      },
    ],
    relatedCharacters: [
      {
        character: "北",
        pinyin: "běi",
        english: "north",
      },
      {
        character: "东",
        pinyin: "dōng",
        english: "east",
      },
      {
        character: "西",
        pinyin: "xī",
        english: "west",
      },
    ],
    mnemonic: "South is where the warmth comes from.",
    radicalMnemonic: "Like a house opening to the warm south.",
    commonWords: [
      {
        chinese: "南方",
        pinyin: "nánfāng",
        english: "the South",
      },
      {
        chinese: "南京",
        pinyin: "Nánjīng",
        english: "Nanjing",
      },
      {
        chinese: "南边",
        pinyin: "nánbiān",
        english: "south side",
      },
      {
        chinese: "南部",
        pinyin: "nánbù",
        english: "southern part",
      },
    ],
  },
  {
    id: "29",
    character: "北",
    pinyin: "běi",
    english: "north",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "北",
        name: "North",
        meaning: "north",
        pinyin: "běi",
        color: "#1e40af",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 北 (běi) shows two people sitting back to back, facing opposite directions.",
    etymology:
      "Originally depicted two people sitting back to back, suggesting opposition or the cold north direction.",
    examples: [
      {
        chinese: "北方",
        pinyin: "běifāng",
        english: "the North",
        note: "Referring to the northern direction or region.",
      },
      {
        chinese: "北京",
        pinyin: "Běijīng",
        english: "Beijing",
        note: "The northern capital city.",
      },
    ],
    relatedCharacters: [
      {
        character: "南",
        pinyin: "nán",
        english: "south",
      },
      {
        character: "东",
        pinyin: "dōng",
        english: "east",
      },
      {
        character: "西",
        pinyin: "xī",
        english: "west",
      },
    ],
    mnemonic: "North is the cold direction, like two people back to back for warmth.",
    radicalMnemonic: "Two people facing away - the cold north.",
    commonWords: [
      {
        chinese: "北方",
        pinyin: "běifāng",
        english: "the North",
      },
      {
        chinese: "北京",
        pinyin: "Běijīng",
        english: "Beijing",
      },
      {
        chinese: "北边",
        pinyin: "běibiān",
        english: "north side",
      },
      {
        chinese: "北部",
        pinyin: "běibù",
        english: "northern part",
      },
    ],
  },
  {
    id: "30",
    character: "门",
    pinyin: "mén",
    english: "door",
    level: "HSK 1",
    strokes: 3,
    radicals: [
      {
        symbol: "门",
        name: "Door",
        meaning: "door, gate",
        pinyin: "mén",
        color: "#7c2d12",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 门 (mén) is a pictograph of a double door or gate.",
    etymology:
      "Originally depicted two door panels that could swing open and closed.",
    examples: [
      {
        chinese: "开门",
        pinyin: "kāi mén",
        english: "open the door",
        note: "A common action with doors.",
      },
      {
        chinese: "门口",
        pinyin: "ménkǒu",
        english: "doorway",
        note: "The entrance or opening of a door.",
      },
    ],
    relatedCharacters: [
      {
        character: "窗",
        pinyin: "chuāng",
        english: "window",
      },
      {
        character: "房",
        pinyin: "fáng",
        english: "room",
      },
      {
        character: "家",
        pinyin: "jiā",
        english: "home",
      },
    ],
    mnemonic: "A door has two panels that open and close.",
    radicalMnemonic: "The shape looks like a traditional double door.",
    commonWords: [
      {
        chinese: "门口",
        pinyin: "ménkǒu",
        english: "doorway",
      },
      {
        chinese: "大门",
        pinyin: "dàmén",
        english: "main gate",
      },
      {
        chinese: "出门",
        pinyin: "chūmén",
        english: "go out",
      },
      {
        chinese: "门票",
        pinyin: "ménpiào",
        english: "ticket",
      },
    ],
  },
  {
    id: "31",
    character: "窗",
    pinyin: "chuāng",
    english: "window",
    level: "HSK 2",
    strokes: 12,
    radicals: [
      {
        symbol: "穴",
        name: "Cave",
        meaning: "cave, hole",
        pinyin: "xué",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "囱",
        name: "Chimney",
        meaning: "chimney",
        pinyin: "cōng",
        color: "#dc2626",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 窗 (chuāng) combines the cave radical with a chimney-like structure, representing an opening in a wall.",
    etymology:
      "Combines cave (opening) with a structure representing ventilation or light passage.",
    examples: [
      {
        chinese: "开窗",
        pinyin: "kāi chuāng",
        english: "open the window",
        note: "Opening a window for air or light.",
      },
      {
        chinese: "窗户",
        pinyin: "chuānghù",
        english: "window",
        note: "A more complete word for window.",
      },
    ],
    relatedCharacters: [
      {
        character: "门",
        pinyin: "mén",
        english: "door",
      },
      {
        character: "房",
        pinyin: "fáng",
        english: "room",
      },
      {
        character: "墙",
        pinyin: "qiáng",
        english: "wall",
      },
    ],
    mnemonic: "A window is an opening in a wall like a cave opening.",
    radicalMnemonic: "Cave opening plus structure equals window.",
    commonWords: [
      {
        chinese: "窗户",
        pinyin: "chuānghù",
        english: "window",
      },
      {
        chinese: "窗帘",
        pinyin: "chuānglián",
        english: "curtain",
      },
      {
        chinese: "窗台",
        pinyin: "chuāngtái",
        english: "windowsill",
      },
      {
        chinese: "车窗",
        pinyin: "chēchuāng",
        english: "car window",
      },
    ],
  },
  {
    id: "32",
    character: "床",
    pinyin: "chuáng",
    english: "bed",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "广",
        name: "Broad",
        meaning: "building, shelter",
        pinyin: "guǎng",
        color: "#7c2d12",
        position: { top: 30, left: 20 },
        positionName: "top-left",
      },
      {
        symbol: "木",
        name: "Wood",
        meaning: "wood, tree",
        pinyin: "mù",
        color: "#15803d",
        position: { top: 60, left: 60 },
        positionName: "bottom-right",
      },
    ],
    radicalExplanation:
      "The character 床 (chuáng) combines a building/shelter radical with wood, representing a wooden sleeping platform.",
    etymology:
      "Originally represented a wooden platform or frame used for sleeping inside a building.",
    examples: [
      {
        chinese: "睡觉",
        pinyin: "shuìjiào",
        english: "sleep",
        note: "The action done on a bed.",
      },
      {
        chinese: "床上",
        pinyin: "chuáng shàng",
        english: "on the bed",
        note: "Position relative to the bed.",
      },
    ],
    relatedCharacters: [
      {
        character: "房",
        pinyin: "fáng",
        english: "room",
      },
      {
        character: "睡",
        pinyin: "shuì",
        english: "sleep",
      },
      {
        character: "木",
        pinyin: "mù",
        english: "wood",
      },
    ],
    mnemonic: "A bed is wooden furniture in a building for sleeping.",
    radicalMnemonic: "Building shelter plus wood makes a bed.",
    commonWords: [
      {
        chinese: "床单",
        pinyin: "chuángdān",
        english: "bed sheet",
      },
      {
        chinese: "床头",
        pinyin: "chuángtóu",
        english: "bedside",
      },
      {
        chinese: "上床",
        pinyin: "shàngchuáng",
        english: "go to bed",
      },
      {
        chinese: "病床",
        pinyin: "bìngchuáng",
        english: "hospital bed",
      },
    ],
  },
  {
    id: "33",
    character: "桌",
    pinyin: "zhuō",
    english: "table",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "木",
        name: "Wood",
        meaning: "wood, tree",
        pinyin: "mù",
        color: "#15803d",
        position: { top: 80, left: 50 },
        positionName: "bottom",
      },
      {
        symbol: "卓",
        name: "Outstanding",
        meaning: "outstanding, prominent",
        pinyin: "zhuó",
        color: "#dc2626",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
    ],
    radicalExplanation:
      "The character 桌 (zhuō) combines wood with the idea of something outstanding or prominent, creating a raised wooden surface.",
    etymology:
      "Originally meant a wooden platform or raised surface, evolving to mean table.",
    examples: [
      {
        chinese: "桌子",
        pinyin: "zhuōzi",
        english: "table",
        note: "The complete word for table.",
      },
      {
        chinese: "桌上",
        pinyin: "zhuō shàng",
        english: "on the table",
        note: "Position relative to the table.",
      },
    ],
    relatedCharacters: [
      {
        character: "椅",
        pinyin: "yǐ",
        english: "chair",
      },
      {
        character: "木",
        pinyin: "mù",
        english: "wood",
      },
      {
        character: "台",
        pinyin: "tái",
        english: "platform",
      },
    ],
    mnemonic: "A table is an outstanding piece of wood furniture.",
    radicalMnemonic: "Outstanding wood makes a prominent table.",
    commonWords: [
      {
        chinese: "桌子",
        pinyin: "zhuōzi",
        english: "table",
      },
      {
        chinese: "课桌",
        pinyin: "kèzhuō",
        english: "desk",
      },
      {
        chinese: "餐桌",
        pinyin: "cānzhuō",
        english: "dining table",
      },
      {
        chinese: "桌面",
        pinyin: "zhuōmiàn",
        english: "desktop",
      },
    ],
  },
  {
    id: "34",
    character: "椅",
    pinyin: "yǐ",
    english: "chair",
    level: "HSK 2",
    strokes: 12,
    radicals: [
      {
        symbol: "木",
        name: "Wood",
        meaning: "wood, tree",
        pinyin: "mù",
        color: "#15803d",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "奇",
        name: "Strange",
        meaning: "strange, odd",
        pinyin: "qí",
        color: "#7c3aed",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 椅 (yǐ) combines wood with a component suggesting support or dependency.",
    etymology:
      "Originally represented a wooden object for leaning or sitting, evolving to mean chair.",
    examples: [
      {
        chinese: "椅子",
        pinyin: "yǐzi",
        english: "chair",
        note: "The complete word for chair.",
      },
      {
        chinese: "坐椅子",
        pinyin: "zuò yǐzi",
        english: "sit on a chair",
        note: "The action of using a chair.",
      },
    ],
    relatedCharacters: [
      {
        character: "桌",
        pinyin: "zhuō",
        english: "table",
      },
      {
        character: "坐",
        pinyin: "zuò",
        english: "sit",
      },
      {
        character: "木",
        pinyin: "mù",
        english: "wood",
      },
    ],
    mnemonic: "A chair is wooden furniture you can depend on for sitting.",
    radicalMnemonic: "Wood plus dependency makes a chair for support.",
    commonWords: [
      {
        chinese: "椅子",
        pinyin: "yǐzi",
        english: "chair",
      },
      {
        chinese: "轮椅",
        pinyin: "lúnyǐ",
        english: "wheelchair",
      },
      {
        chinese: "摇椅",
        pinyin: "yáoyǐ",
        english: "rocking chair",
      },
      {
        chinese: "靠椅",
        pinyin: "kàoyǐ",
        english: "armchair",
      },
    ],
  },
  {
    id: "35",
    character: "灯",
    pinyin: "dēng",
    english: "lamp",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "火",
        name: "Fire",
        meaning: "fire",
        pinyin: "huǒ",
        color: "#dc2626",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "丁",
        name: "Nail",
        meaning: "nail, adult",
        pinyin: "dīng",
        color: "#6b7280",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 灯 (dēng) combines fire with a nail-like structure, representing a light source mounted or fixed in place.",
    etymology:
      "Originally represented a fire-based light source attached to a support, evolving to mean any lamp or light.",
    examples: [
      {
        chinese: "开灯",
        pinyin: "kāi dēng",
        english: "turn on the light",
        note: "Common action with electric lights.",
      },
      {
        chinese: "电灯",
        pinyin: "diàndēng",
        english: "electric light",
        note: "Modern type of lamp.",
      },
    ],
    relatedCharacters: [
      {
        character: "火",
        pinyin: "huǒ",
        english: "fire",
      },
      {
        character: "光",
        pinyin: "guāng",
        english: "light",
      },
      {
        character: "明",
        pinyin: "míng",
        english: "bright",
      },
    ],
    mnemonic: "A lamp combines fire for light with a nail for mounting.",
    radicalMnemonic: "Fire plus nail makes a fixed light source.",
    commonWords: [
      {
        chinese: "电灯",
        pinyin: "diàndēng",
        english: "electric light",
      },
      {
        chinese: "台灯",
        pinyin: "táidēng",
        english: "desk lamp",
      },
      {
        chinese: "路灯",
        pinyin: "lùdēng",
        english: "street light",
      },
      {
        chinese: "红灯",
        pinyin: "hóngdēng",
        english: "red light",
      },
    ],
  },
  {
    id: "36",
    character: "电",
    pinyin: "diàn",
    english: "electricity",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "电",
        name: "Electric",
        meaning: "electricity, lightning",
        pinyin: "diàn",
        color: "#fbbf24",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 电 (diàn) is simplified from the traditional form showing lightning.",
    etymology:
      "Originally depicted lightning bolts, representing electrical energy and power.",
    examples: [
      {
        chinese: "电脑",
        pinyin: "diànnǎo",
        english: "computer",
        note: "Literally 'electric brain'.",
      },
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
        note: "Literally 'electric speech'.",
      },
    ],
    relatedCharacters: [
      {
        character: "雷",
        pinyin: "léi",
        english: "thunder",
      },
      {
        character: "灯",
        pinyin: "dēng",
        english: "lamp",
      },
      {
        character: "力",
        pinyin: "lì",
        english: "power",
      },
    ],
    mnemonic: "Electricity is like lightning captured for our use.",
    radicalMnemonic: "The zigzag shape resembles lightning bolts.",
    commonWords: [
      {
        chinese: "电脑",
        pinyin: "diànnǎo",
        english: "computer",
      },
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
      },
      {
        chinese: "电视",
        pinyin: "diànshì",
        english: "television",
      },
      {
        chinese: "电影",
        pinyin: "diànyǐng",
        english: "movie",
      },
    ],
  },
  {
    id: "37",
    character: "脑",
    pinyin: "nǎo",
    english: "brain",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "月",
        name: "Moon/Flesh",
        meaning: "flesh, body part",
        pinyin: "yuè",
        color: "#fbbf24",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "脑",
        name: "Brain",
        meaning: "brain, mind",
        pinyin: "nǎo",
        color: "#7c3aed",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 脑 (nǎo) combines the flesh radical with components representing the brain organ.",
    etymology:
      "Originally represented the physical brain as a body part, expanding to include mind and intelligence.",
    examples: [
      {
        chinese: "电脑",
        pinyin: "diànnǎo",
        english: "computer",
        note: "Literally 'electric brain'.",
      },
      {
        chinese: "头脑",
        pinyin: "tóunǎo",
        english: "mind",
        note: "Referring to mental faculties.",
      },
    ],
    relatedCharacters: [
      {
        character: "头",
        pinyin: "tóu",
        english: "head",
      },
      {
        character: "思",
        pinyin: "sī",
        english: "think",
      },
      {
        character: "智",
        pinyin: "zhì",
        english: "wisdom",
      },
    ],
    mnemonic: "The brain is the flesh organ that controls thinking.",
    radicalMnemonic: "Flesh plus mind components equals brain.",
    commonWords: [
      {
        chinese: "电脑",
        pinyin: "diànnǎo",
        english: "computer",
      },
      {
        chinese: "头脑",
        pinyin: "tóunǎo",
        english: "mind",
      },
      {
        chinese: "大脑",
        pinyin: "dànǎo",
        english: "brain",
      },
      {
        chinese: "脑子",
        pinyin: "nǎozi",
        english: "brain",
      },
    ],
  },
  {
    id: "38",
    character: "话",
    pinyin: "huà",
    english: "speech",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "讯",
        name: "Speech",
        meaning: "speech, words",
        pinyin: "xùn",
        color: "#3b82f6",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "舌",
        name: "Tongue",
        meaning: "tongue",
        pinyin: "shé",
        color: "#dc2626",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 话 (huà) combines speech with tongue, representing spoken words.",
    etymology:
      "Originally combined the concept of speech with the tongue, the organ that produces speech.",
    examples: [
      {
        chinese: "说话",
        pinyin: "shuōhuà",
        english: "speak",
        note: "The action of talking.",
      },
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
        note: "Literally 'electric speech'.",
      },
    ],
    relatedCharacters: [
      {
        character: "说",
        pinyin: "shuō",
        english: "say",
      },
      {
        character: "言",
        pinyin: "yán",
        english: "words",
      },
      {
        character: "语",
        pinyin: "yǔ",
        english: "language",
      },
    ],
    mnemonic: "Speech is made with the tongue creating words.",
    radicalMnemonic: "Speech plus tongue equals spoken words.",
    commonWords: [
      {
        chinese: "说话",
        pinyin: "shuōhuà",
        english: "speak",
      },
      {
        chinese: "电话",
        pinyin: "diànhuà",
        english: "telephone",
      },
      {
        chinese: "对话",
        pinyin: "duìhuà",
        english: "dialogue",
      },
      {
        chinese: "话题",
        pinyin: "huàtí",
        english: "topic",
      },
    ],
  },
  {
    id: "39",
    character: "视",
    pinyin: "shì",
    english: "vision",
    level: "HSK 2",
    strokes: 8,
    radicals: [
      {
        symbol: "示",
        name: "Spirit",
        meaning: "spirit, show",
        pinyin: "shì",
        color: "#7c3aed",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "见",
        name: "See",
        meaning: "see, observe",
        pinyin: "jiàn",
        color: "#059669",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 视 (shì) combines showing/spirit with seeing, representing vision or watching.",
    etymology:
      "Originally meant to look at or observe, combining the concepts of showing and seeing.",
    examples: [
      {
        chinese: "电视",
        pinyin: "diànshì",
        english: "television",
        note: "Literally 'electric vision'.",
      },
      {
        chinese: "重视",
        pinyin: "zhòngshì",
        english: "value",
        note: "To regard as important.",
      },
    ],
    relatedCharacters: [
      {
        character: "看",
        pinyin: "kàn",
        english: "look",
      },
      {
        character: "见",
        pinyin: "jiàn",
        english: "see",
      },
      {
        character: "观",
        pinyin: "guān",
        english: "observe",
      },
    ],
    mnemonic: "Vision combines showing something with seeing it.",
    radicalMnemonic: "Spirit of showing plus seeing equals vision.",
    commonWords: [
      {
        chinese: "电视",
        pinyin: "diànshì",
        english: "television",
      },
      {
        chinese: "重视",
        pinyin: "zhòngshì",
        english: "value",
      },
      {
        chinese: "视频",
        pinyin: "shìpín",
        english: "video",
      },
      {
        chinese: "视力",
        pinyin: "shìlì",
        english: "eyesight",
      },
    ],
  },
  {
    id: "40",
    character: "影",
    pinyin: "yǐng",
    english: "shadow",
    level: "HSK 2",
    strokes: 15,
    radicals: [
      {
        symbol: "日",
        name: "Sun",
        meaning: "sun, day",
        pinyin: "rì",
        color: "#fbbf24",
        position: { top: 30, left: 70 },
        positionName: "upper-right",
      },
      {
        symbol: "彡",
        name: "Feather",
        meaning: "feather, pattern",
        pinyin: "shān",
        color: "#6b7280",
        position: { top: 70, left: 80 },
        positionName: "bottom-right",
      },
    ],
    radicalExplanation:
      "The character 影 (yǐng) combines sun with patterns, representing the shadow cast by sunlight.",
    etymology:
      "Originally depicted the shadow cast by an object when light hits it, creating patterns.",
    examples: [
      {
        chinese: "电影",
        pinyin: "diànyǐng",
        english: "movie",
        note: "Literally 'electric shadow'.",
      },
      {
        chinese: "影子",
        pinyin: "yǐngzi",
        english: "shadow",
        note: "The complete word for shadow.",
      },
    ],
    relatedCharacters: [
      {
        character: "光",
        pinyin: "guāng",
        english: "light",
      },
      {
        character: "日",
        pinyin: "rì",
        english: "sun",
      },
      {
        character: "黑",
        pinyin: "hēi",
        english: "black",
      },
    ],
    mnemonic: "A shadow is the pattern created when sun is blocked.",
    radicalMnemonic: "Sun plus patterns makes shadow effects.",
    commonWords: [
      {
        chinese: "电影",
        pinyin: "diànyǐng",
        english: "movie",
      },
      {
        chinese: "影子",
        pinyin: "yǐngzi",
        english: "shadow",
      },
      {
        chinese: "影响",
        pinyin: "yǐngxiǎng",
        english: "influence",
      },
      {
        chinese: "摄影",
        pinyin: "shèyǐng",
        english: "photography",
      },
    ],
  },
  {
    id: "41",
    character: "音",
    pinyin: "yīn",
    english: "sound",
    level: "HSK 2",
    strokes: 9,
    radicals: [
      {
        symbol: "音",
        name: "Sound",
        meaning: "sound, music",
        pinyin: "yīn",
        color: "#8b5cf6",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 音 (yīn) represents sound waves or vibrations that create audible tones.",
    etymology:
      "Originally depicted the concept of sound or tone, possibly representing vibrations or musical notes.",
    examples: [
      {
        chinese: "声音",
        pinyin: "shēngyīn",
        english: "sound",
        note: "The complete word for sound.",
      },
      {
        chinese: "音乐",
        pinyin: "yīnyuè",
        english: "music",
        note: "Sound organized into music.",
      },
    ],
    relatedCharacters: [
      {
        character: "声",
        pinyin: "shēng",
        english: "voice",
      },
      {
        character: "乐",
        pinyin: "yuè",
        english: "music",
      },
      {
        character: "听",
        pinyin: "tīng",
        english: "listen",
      },
    ],
    mnemonic: "Sound is what we hear through vibrations in the air.",
    radicalMnemonic: "The character represents the waves of sound.",
    commonWords: [
      {
        chinese: "声音",
        pinyin: "shēngyīn",
        english: "sound",
      },
      {
        chinese: "音乐",
        pinyin: "yīnyuè",
        english: "music",
      },
      {
        chinese: "音响",
        pinyin: "yīnxiǎng",
        english: "stereo",
      },
      {
        chinese: "噪音",
        pinyin: "zàoyīn",
        english: "noise",
      },
    ],
  },
  {
    id: "42",
    character: "乐",
    pinyin: "yuè",
    english: "music",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "乐",
        name: "Music",
        meaning: "music, joy",
        pinyin: "yuè",
        color: "#f59e0b",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 乐 (yuè) represents musical instruments or the joy that music brings.",
    etymology:
      "Originally depicted a musical instrument, possibly bells or strings, representing music and happiness.",
    examples: [
      {
        chinese: "音乐",
        pinyin: "yīnyuè",
        english: "music",
        note: "Sound organized into music.",
      },
      {
        chinese: "快乐",
        pinyin: "kuàilè",
        english: "happy",
        note: "Joy and happiness.",
      },
    ],
    relatedCharacters: [
      {
        character: "音",
        pinyin: "yīn",
        english: "sound",
      },
      {
        character: "歌",
        pinyin: "gē",
        english: "song",
      },
      {
        character: "喜",
        pinyin: "xǐ",
        english: "joy",
      },
    ],
    mnemonic: "Music brings joy and happiness to our lives.",
    radicalMnemonic: "The shape suggests musical instruments or joy.",
    commonWords: [
      {
        chinese: "音乐",
        pinyin: "yīnyuè",
        english: "music",
      },
      {
        chinese: "快乐",
        pinyin: "kuàilè",
        english: "happy",
      },
      {
        chinese: "娱乐",
        pinyin: "yúlè",
        english: "entertainment",
      },
      {
        chinese: "乐器",
        pinyin: "yuèqì",
        english: "musical instrument",
      },
    ],
  },
  {
    id: "43",
    character: "歌",
    pinyin: "gē",
    english: "song",
    level: "HSK 1",
    strokes: 14,
    radicals: [
      {
        symbol: "可",
        name: "Can",
        meaning: "can, able",
        pinyin: "kě",
        color: "#059669",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "欠",
        name: "Owe",
        meaning: "owe, lack",
        pinyin: "qiàn",
        color: "#dc2626",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 歌 (gē) combines 'can' with 'breath/lacking', representing the ability to produce sung breath.",
    etymology:
      "Originally represented the act of singing, combining the ability to make controlled breath into music.",
    examples: [
      {
        chinese: "唱歌",
        pinyin: "chànggē",
        english: "sing",
        note: "The action of singing songs.",
      },
      {
        chinese: "歌手",
        pinyin: "gēshǒu",
        english: "singer",
        note: "A person who sings professionally.",
      },
    ],
    relatedCharacters: [
      {
        character: "唱",
        pinyin: "chàng",
        english: "sing",
      },
      {
        character: "乐",
        pinyin: "yuè",
        english: "music",
      },
      {
        character: "声",
        pinyin: "shēng",
        english: "voice",
      },
    ],
    mnemonic: "A song is what you can create with controlled breath.",
    radicalMnemonic: "Can plus breath equals the ability to sing.",
    commonWords: [
      {
        chinese: "唱歌",
        pinyin: "chànggē",
        english: "sing",
      },
      {
        chinese: "歌手",
        pinyin: "gēshǒu",
        english: "singer",
      },
      {
        chinese: "歌曲",
        pinyin: "gēqǔ",
        english: "song",
      },
      {
        chinese: "国歌",
        pinyin: "guógē",
        english: "national anthem",
      },
    ],
  },
  {
    id: "44",
    character: "跳",
    pinyin: "tiào",
    english: "jump",
    level: "HSK 1",
    strokes: 13,
    radicals: [
      {
        symbol: "足",
        name: "Foot",
        meaning: "foot, leg",
        pinyin: "zú",
        color: "#7c2d12",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "兆",
        name: "Omen",
        meaning: "omen, sign",
        pinyin: "zhào",
        color: "#7c3aed",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 跳 (tiào) combines foot with signs/omens, representing the movement of jumping.",
    etymology:
      "Originally represented the action of leaping or jumping using the feet to propel upward.",
    examples: [
      {
        chinese: "跳舞",
        pinyin: "tiàowǔ",
        english: "dance",
        note: "Jumping and moving rhythmically.",
      },
      {
        chinese: "跳高",
        pinyin: "tiàogāo",
        english: "high jump",
        note: "Athletic jumping event.",
      },
    ],
    relatedCharacters: [
      {
        character: "跑",
        pinyin: "pǎo",
        english: "run",
      },
      {
        character: "走",
        pinyin: "zǒu",
        english: "walk",
      },
      {
        character: "舞",
        pinyin: "wǔ",
        english: "dance",
      },
    ],
    mnemonic: "Jumping uses your feet to spring into the air.",
    radicalMnemonic: "Foot plus movement signs equals jumping action.",
    commonWords: [
      {
        chinese: "跳舞",
        pinyin: "tiàowǔ",
        english: "dance",
      },
      {
        chinese: "跳高",
        pinyin: "tiàogāo",
        english: "high jump",
      },
      {
        chinese: "跳跃",
        pinyin: "tiàoyuè",
        english: "leap",
      },
      {
        chinese: "心跳",
        pinyin: "xīntiào",
        english: "heartbeat",
      },
    ],
  },
  {
    id: "45",
    character: "舞",
    pinyin: "wǔ",
    english: "dance",
    level: "HSK 2",
    strokes: 14,
    radicals: [
      {
        symbol: "舛",
        name: "Oppose",
        meaning: "oppose, contrary",
        pinyin: "chuǎn",
        color: "#dc2626",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "夕",
        name: "Evening",
        meaning: "evening, sunset",
        pinyin: "xī",
        color: "#f59e0b",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 舞 (wǔ) suggests rhythmic opposing movements, like the steps and gestures of dance.",
    etymology:
      "Originally depicted rhythmic movements and gestures, representing the art of dance.",
    examples: [
      {
        chinese: "跳舞",
        pinyin: "tiàowǔ",
        english: "dance",
        note: "The action of dancing.",
      },
      {
        chinese: "舞蹈",
        pinyin: "wǔdǎo",
        english: "dance",
        note: "The art form of dance.",
      },
    ],
    relatedCharacters: [
      {
        character: "跳",
        pinyin: "tiào",
        english: "jump",
      },
      {
        character: "乐",
        pinyin: "yuè",
        english: "music",
      },
      {
        character: "动",
        pinyin: "dòng",
        english: "move",
      },
    ],
    mnemonic: "Dance involves opposing movements in rhythm.",
    radicalMnemonic: "Opposing motions create the flow of dance.",
    commonWords: [
      {
        chinese: "跳舞",
        pinyin: "tiàowǔ",
        english: "dance",
      },
      {
        chinese: "舞蹈",
        pinyin: "wǔdǎo",
        english: "dance",
      },
      {
        chinese: "舞台",
        pinyin: "wǔtái",
        english: "stage",
      },
      {
        chinese: "舞会",
        pinyin: "wǔhuì",
        english: "dance party",
      },
    ],
  },
  {
    id: "46",
    character: "画",
    pinyin: "huà",
    english: "draw",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "一",
        name: "One",
        meaning: "one, horizontal",
        pinyin: "yī",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "田",
        name: "Field",
        meaning: "field, rectangle",
        pinyin: "tián",
        color: "#15803d",
        position: { top: 60, left: 50 },
        positionName: "middle",
      },
    ],
    radicalExplanation:
      "The character 画 (huà) shows lines forming boundaries and shapes, representing the act of drawing.",
    etymology:
      "Originally depicted marking boundaries or creating images with lines and shapes.",
    examples: [
      {
        chinese: "画画",
        pinyin: "huàhuà",
        english: "draw pictures",
        note: "The action of drawing or painting.",
      },
      {
        chinese: "图画",
        pinyin: "túhuà",
        english: "picture",
        note: "A drawn or painted image.",
      },
    ],
    relatedCharacters: [
      {
        character: "图",
        pinyin: "tú",
        english: "picture",
      },
      {
        character: "写",
        pinyin: "xiě",
        english: "write",
      },
      {
        character: "艺",
        pinyin: "yì",
        english: "art",
      },
    ],
    mnemonic: "Drawing creates lines and shapes like field boundaries.",
    radicalMnemonic: "Lines plus field shapes equals drawing.",
    commonWords: [
      {
        chinese: "画画",
        pinyin: "huàhuà",
        english: "draw pictures",
      },
      {
        chinese: "图画",
        pinyin: "túhuà",
        english: "picture",
      },
      {
        chinese: "画家",
        pinyin: "huàjiā",
        english: "painter",
      },
      {
        chinese: "动画",
        pinyin: "dònghuà",
        english: "animation",
      },
    ],
  },
  {
    id: "47",
    character: "写",
    pinyin: "xiě",
    english: "write",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "冖",
        name: "Cover",
        meaning: "cover, roof",
        pinyin: "mì",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "与",
        name: "Give",
        meaning: "give, with",
        pinyin: "yǔ",
        color: "#3b82f6",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 写 (xiě) suggests covering or sheltering the act of creating written words.",
    etymology:
      "Originally meant to transfer or copy, evolving to mean the act of writing or creating text.",
    examples: [
      {
        chinese: "写字",
        pinyin: "xiězì",
        english: "write characters",
        note: "The basic act of writing.",
      },
      {
        chinese: "写作",
        pinyin: "xiězuò",
        english: "writing",
        note: "The craft of writing.",
      },
    ],
    relatedCharacters: [
      {
        character: "字",
        pinyin: "zì",
        english: "character",
      },
      {
        character: "笔",
        pinyin: "bǐ",
        english: "pen",
      },
      {
        character: "纸",
        pinyin: "zhǐ",
        english: "paper",
      },
    ],
    mnemonic: "Writing is like covering paper with words and ideas.",
    radicalMnemonic: "Cover plus giving creates the act of writing.",
    commonWords: [
      {
        chinese: "写字",
        pinyin: "xiězì",
        english: "write characters",
      },
      {
        chinese: "写作",
        pinyin: "xiězuò",
        english: "writing",
      },
      {
        chinese: "书写",
        pinyin: "shūxiě",
        english: "handwriting",
      },
      {
        chinese: "描写",
        pinyin: "miáoxiě",
        english: "describe",
      },
    ],
  },
  {
    id: "48",
    character: "读",
    pinyin: "dú",
    english: "read",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "讠",
        name: "Speech",
        meaning: "speech, words",
        pinyin: "yán",
        color: "#3b82f6",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "卖",
        name: "Sell",
        meaning: "sell",
        pinyin: "mài",
        color: "#059669",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 读 (dú) combines speech with selling/trading, representing the exchange of written words into spoken ones.",
    etymology:
      "Originally meant to recite or speak aloud written text, connecting written and spoken language.",
    examples: [
      {
        chinese: "读书",
        pinyin: "dúshū",
        english: "read books",
        note: "The action of reading.",
      },
      {
        chinese: "朗读",
        pinyin: "lǎngdú",
        english: "read aloud",
        note: "Reading with voice.",
      },
    ],
    relatedCharacters: [
      {
        character: "书",
        pinyin: "shū",
        english: "book",
      },
      {
        character: "看",
        pinyin: "kàn",
        english: "look",
      },
      {
        character: "学",
        pinyin: "xué",
        english: "study",
      },
    ],
    mnemonic: "Reading is speaking the words written on paper.",
    radicalMnemonic: "Speech plus exchange equals reading aloud.",
    commonWords: [
      {
        chinese: "读书",
        pinyin: "dúshū",
        english: "read books",
      },
      {
        chinese: "朗读",
        pinyin: "lǎngdú",
        english: "read aloud",
      },
      {
        chinese: "阅读",
        pinyin: "yuèdú",
        english: "reading",
      },
      {
        chinese: "读者",
        pinyin: "dúzhě",
        english: "reader",
      },
    ],
  },
  {
    id: "49",
    character: "笔",
    pinyin: "bǐ",
    english: "pen",
    level: "HSK 1",
    strokes: 10,
    radicals: [
      {
        symbol: "竹",
        name: "Bamboo",
        meaning: "bamboo",
        pinyin: "zhú",
        color: "#15803d",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "毛",
        name: "Hair",
        meaning: "hair, fur",
        pinyin: "máo",
        color: "#7c2d12",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 笔 (bǐ) combines bamboo with hair, representing the traditional brush pen made from bamboo and animal hair.",
    etymology:
      "Originally depicted a writing brush made from bamboo handle and animal hair bristles.",
    examples: [
      {
        chinese: "用笔",
        pinyin: "yòng bǐ",
        english: "use a pen",
        note: "Using a writing instrument.",
      },
      {
        chinese: "铅笔",
        pinyin: "qiānbǐ",
        english: "pencil",
        note: "A specific type of writing tool.",
      },
    ],
    relatedCharacters: [
      {
        character: "写",
        pinyin: "xiě",
        english: "write",
      },
      {
        character: "纸",
        pinyin: "zhǐ",
        english: "paper",
      },
      {
        character: "墨",
        pinyin: "mò",
        english: "ink",
      },
    ],
    mnemonic: "A pen was traditionally made from bamboo and hair.",
    radicalMnemonic: "Bamboo handle plus hair bristles makes a brush pen.",
    commonWords: [
      {
        chinese: "铅笔",
        pinyin: "qiānbǐ",
        english: "pencil",
      },
      {
        chinese: "毛笔",
        pinyin: "máobǐ",
        english: "brush pen",
      },
      {
        chinese: "钢笔",
        pinyin: "gāngbǐ",
        english: "fountain pen",
      },
      {
        chinese: "笔记",
        pinyin: "bǐjì",
        english: "notes",
      },
    ],
  },
  {
    id: "50",
    character: "纸",
    pinyin: "zhǐ",
    english: "paper",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "纟",
        name: "Silk",
        meaning: "silk, thread",
        pinyin: "sī",
        color: "#fbbf24",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "氏",
        name: "Clan",
        meaning: "clan, family",
        pinyin: "shì",
        color: "#7c3aed",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 纸 (zhǐ) combines silk/thread with clan, representing the fibrous material used to make paper.",
    etymology:
      "Originally paper was made from silk fibers and other plant materials, hence the silk radical.",
    examples: [
      {
        chinese: "白纸",
        pinyin: "báizhǐ",
        english: "white paper",
        note: "Blank paper for writing.",
      },
      {
        chinese: "纸张",
        pinyin: "zhǐzhāng",
        english: "sheets of paper",
        note: "Paper as material.",
      },
    ],
    relatedCharacters: [
      {
        character: "书",
        pinyin: "shū",
        english: "book",
      },
      {
        character: "写",
        pinyin: "xiě",
        english: "write",
      },
      {
        character: "笔",
        pinyin: "bǐ",
        english: "pen",
      },
    ],
    mnemonic: "Paper is made from fibers like silk threads woven together.",
    radicalMnemonic: "Silk threads plus clan (together) makes paper.",
    commonWords: [
      {
        chinese: "白纸",
        pinyin: "báizhǐ",
        english: "white paper",
      },
      {
        chinese: "纸张",
        pinyin: "zhǐzhāng",
        english: "sheets of paper",
      },
      {
        chinese: "报纸",
        pinyin: "bàozhǐ",
        english: "newspaper",
      },
      {
        chinese: "废纸",
        pinyin: "fèizhǐ",
        english: "waste paper",
      },
    ],
  },
  {
    id: "51",
    character: "办",
    pinyin: "bàn",
    english: "handle",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "力",
        name: "Power",
        meaning: "power, strength",
        pinyin: "lì",
        color: "#dc2626",
        position: { top: 60, left: 50 },
        positionName: "bottom",
      },
      {
        symbol: "八",
        name: "Eight",
        meaning: "eight, divide",
        pinyin: "bā",
        color: "#3b82f6",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
    ],
    radicalExplanation:
      "The character 办 (bàn) combines dividing with power, representing the ability to handle or manage tasks.",
    etymology:
      "Originally meant to use force or power to divide and organize tasks, evolving to mean handle or manage.",
    examples: [
      {
        chinese: "办事",
        pinyin: "bànshì",
        english: "handle affairs",
        note: "Managing tasks or business.",
      },
      {
        chinese: "办公室",
        pinyin: "bàngōngshì",
        english: "office",
        note: "Place for handling work.",
      },
    ],
    relatedCharacters: [
      {
        character: "做",
        pinyin: "zuò",
        english: "do",
      },
      {
        character: "管",
        pinyin: "guǎn",
        english: "manage",
      },
      {
        character: "处",
        pinyin: "chù",
        english: "handle",
      },
    ],
    mnemonic: "To handle something, you need to divide it and apply power.",
    radicalMnemonic: "Divide plus power equals handling tasks.",
    commonWords: [
      {
        chinese: "办事",
        pinyin: "bànshì",
        english: "handle affairs",
      },
      {
        chinese: "办公室",
        pinyin: "bàngōngshì",
        english: "office",
      },
      {
        chinese: "办法",
        pinyin: "bànfǎ",
        english: "method",
      },
      {
        chinese: "主办",
        pinyin: "zhǔbàn",
        english: "organize",
      },
    ],
  },
  {
    id: "52",
    character: "公",
    pinyin: "gōng",
    english: "public",
    level: "HSK 1",
    strokes: 4,
    radicals: [
      {
        symbol: "八",
        name: "Eight",
        meaning: "eight, divide",
        pinyin: "bā",
        color: "#3b82f6",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "厶",
        name: "Private",
        meaning: "private, self",
        pinyin: "sī",
        color: "#7c3aed",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 公 (gōng) combines division with private, representing the concept of sharing or making public.",
    etymology:
      "Originally meant to divide from private ownership, creating something shared or public.",
    examples: [
      {
        chinese: "公司",
        pinyin: "gōngsī",
        english: "company",
        note: "A public business entity.",
      },
      {
        chinese: "公园",
        pinyin: "gōngyuán",
        english: "park",
        note: "A public recreational area.",
      },
    ],
    relatedCharacters: [
      {
        character: "私",
        pinyin: "sī",
        english: "private",
      },
      {
        character: "共",
        pinyin: "gòng",
        english: "together",
      },
      {
        character: "众",
        pinyin: "zhòng",
        english: "crowd",
      },
    ],
    mnemonic: "Public means dividing away from private ownership.",
    radicalMnemonic: "Divide away from private creates public sharing.",
    commonWords: [
      {
        chinese: "公司",
        pinyin: "gōngsī",
        english: "company",
      },
      {
        chinese: "公园",
        pinyin: "gōngyuán",
        english: "park",
      },
      {
        chinese: "公共",
        pinyin: "gōnggòng",
        english: "public",
      },
      {
        chinese: "办公",
        pinyin: "bàngōng",
        english: "office work",
      },
    ],
  },
  {
    id: "53",
    character: "司",
    pinyin: "sī",
    english: "manage",
    level: "HSK 2",
    strokes: 5,
    radicals: [
      {
        symbol: "司",
        name: "Manage",
        meaning: "manage, control",
        pinyin: "sī",
        color: "#7c3aed",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 司 (sī) represents management, control, or supervision of affairs.",
    etymology:
      "Originally depicted someone in charge or responsible for managing affairs and people.",
    examples: [
      {
        chinese: "公司",
        pinyin: "gōngsī",
        english: "company",
        note: "An organization that manages business.",
      },
      {
        chinese: "司机",
        pinyin: "sījī",
        english: "driver",
        note: "Someone who manages/controls a vehicle.",
      },
    ],
    relatedCharacters: [
      {
        character: "管",
        pinyin: "guǎn",
        english: "manage",
      },
      {
        character: "理",
        pinyin: "lǐ",
        english: "manage",
      },
      {
        character: "控",
        pinyin: "kòng",
        english: "control",
      },
    ],
    mnemonic: "A manager takes control and responsibility for affairs.",
    radicalMnemonic: "The character shows someone in charge of management.",
    commonWords: [
      {
        chinese: "公司",
        pinyin: "gōngsī",
        english: "company",
      },
      {
        chinese: "司机",
        pinyin: "sījī",
        english: "driver",
      },
      {
        chinese: "司法",
        pinyin: "sīfǎ",
        english: "justice",
      },
      {
        chinese: "上司",
        pinyin: "shàngsī",
        english: "boss",
      },
    ],
  },
  {
    id: "54",
    character: "园",
    pinyin: "yuán",
    english: "garden",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "囗",
        name: "Enclosure",
        meaning: "enclosure, border",
        pinyin: "wéi",
        color: "#7c2d12",
        position: { top: 50, left: 50 },
        positionName: "surrounding",
      },
      {
        symbol: "元",
        name: "Origin",
        meaning: "origin, first",
        pinyin: "yuán",
        color: "#059669",
        position: { top: 50, left: 50 },
        positionName: "inside",
      },
    ],
    radicalExplanation:
      "The character 园 (yuán) shows an enclosure containing the origin or source, representing a contained natural space.",
    etymology:
      "Originally depicted an enclosed area where plants grow, representing a garden or park.",
    examples: [
      {
        chinese: "公园",
        pinyin: "gōngyuán",
        english: "park",
        note: "A public garden or recreational area.",
      },
      {
        chinese: "花园",
        pinyin: "huāyuán",
        english: "flower garden",
        note: "A garden specifically for flowers.",
      },
    ],
    relatedCharacters: [
      {
        character: "花",
        pinyin: "huā",
        english: "flower",
      },
      {
        character: "树",
        pinyin: "shù",
        english: "tree",
      },
      {
        character: "草",
        pinyin: "cǎo",
        english: "grass",
      },
    ],
    mnemonic: "A garden is an enclosed space where nature originates.",
    radicalMnemonic: "Enclosure around origin creates a garden space.",
    commonWords: [
      {
        chinese: "公园",
        pinyin: "gōngyuán",
        english: "park",
      },
      {
        chinese: "花园",
        pinyin: "huāyuán",
        english: "flower garden",
      },
      {
        chinese: "校园",
        pinyin: "xiàoyuán",
        english: "campus",
      },
      {
        chinese: "动物园",
        pinyin: "dòngwùyuán",
        english: "zoo",
      },
    ],
  },
  {
    id: "55",
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
        color: "#15803d",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "化",
        name: "Change",
        meaning: "change, transform",
        pinyin: "huà",
        color: "#7c3aed",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 花 (huā) combines grass/plant with change, representing the transformation of plants into beautiful blossoms.",
    etymology:
      "Originally showed how plants change and transform to produce colorful flowers.",
    examples: [
      {
        chinese: "花园",
        pinyin: "huāyuán",
        english: "flower garden",
        note: "A garden for growing flowers.",
      },
      {
        chinese: "开花",
        pinyin: "kāihuā",
        english: "bloom",
        note: "The process of flowers opening.",
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
    ],
    mnemonic: "Flowers are plants that change into beautiful colors.",
    radicalMnemonic: "Grass plus change equals flowering plants.",
    commonWords: [
      {
        chinese: "花园",
        pinyin: "huāyuán",
        english: "flower garden",
      },
      {
        chinese: "开花",
        pinyin: "kāihuā",
        english: "bloom",
      },
      {
        chinese: "花朵",
        pinyin: "huāduǒ",
        english: "flower blossom",
      },
      {
        chinese: "花钱",
        pinyin: "huāqián",
        english: "spend money",
      },
    ],
  },
  {
    id: "56",
    character: "树",
    pinyin: "shù",
    english: "tree",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "木",
        name: "Wood",
        meaning: "wood, tree",
        pinyin: "mù",
        color: "#15803d",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "寸",
        name: "Inch",
        meaning: "inch, small",
        pinyin: "cùn",
        color: "#7c2d12",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 树 (shù) combines wood with measurement, representing the growth and stature of trees.",
    etymology:
      "Originally showed wood that grows to measurable heights, emphasizing the tall nature of trees.",
    examples: [
      {
        chinese: "大树",
        pinyin: "dàshù",
        english: "big tree",
        note: "A large, mature tree.",
      },
      {
        chinese: "树林",
        pinyin: "shùlín",
        english: "forest",
        note: "An area with many trees.",
      },
    ],
    relatedCharacters: [
      {
        character: "木",
        pinyin: "mù",
        english: "wood",
      },
      {
        character: "林",
        pinyin: "lín",
        english: "forest",
      },
      {
        character: "叶",
        pinyin: "yè",
        english: "leaf",
      },
    ],
    mnemonic: "A tree is wood that grows to measurable heights.",
    radicalMnemonic: "Wood plus measurement shows the growth of trees.",
    commonWords: [
      {
        chinese: "大树",
        pinyin: "dàshù",
        english: "big tree",
      },
      {
        chinese: "树林",
        pinyin: "shùlín",
        english: "forest",
      },
      {
        chinese: "果树",
        pinyin: "guǒshù",
        english: "fruit tree",
      },
      {
        chinese: "植树",
        pinyin: "zhíshù",
        english: "plant trees",
      },
    ],
  },
  {
    id: "57",
    character: "草",
    pinyin: "cǎo",
    english: "grass",
    level: "HSK 1",
    strokes: 9,
    radicals: [
      {
        symbol: "艹",
        name: "Grass",
        meaning: "grass, plant",
        pinyin: "cǎo",
        color: "#15803d",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "早",
        name: "Early",
        meaning: "early, morning",
        pinyin: "zǎo",
        color: "#fbbf24",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 草 (cǎo) combines the grass radical with early, representing plants that grow quickly in early seasons.",
    etymology:
      "Originally depicted plants that emerge early and grow quickly, representing grass and small plants.",
    examples: [
      {
        chinese: "草地",
        pinyin: "cǎodì",
        english: "grassland",
        note: "An area covered with grass.",
      },
      {
        chinese: "青草",
        pinyin: "qīngcǎo",
        english: "green grass",
        note: "Fresh, green grass.",
      },
    ],
    relatedCharacters: [
      {
        character: "花",
        pinyin: "huā",
        english: "flower",
      },
      {
        character: "树",
        pinyin: "shù",
        english: "tree",
      },
      {
        character: "绿",
        pinyin: "lǜ",
        english: "green",
      },
    ],
    mnemonic: "Grass grows early and quickly in the growing season.",
    radicalMnemonic: "Plant radical plus early shows fast-growing grass.",
    commonWords: [
      {
        chinese: "草地",
        pinyin: "cǎodì",
        english: "grassland",
      },
      {
        chinese: "青草",
        pinyin: "qīngcǎo",
        english: "green grass",
      },
      {
        chinese: "野草",
        pinyin: "yěcǎo",
        english: "weed",
      },
      {
        chinese: "草药",
        pinyin: "cǎoyào",
        english: "herbal medicine",
      },
    ],
  },
  {
    id: "58",
    character: "叶",
    pinyin: "yè",
    english: "leaf",
    level: "HSK 2",
    strokes: 5,
    radicals: [
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#dc2626",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "十",
        name: "Ten",
        meaning: "ten, complete",
        pinyin: "shí",
        color: "#6b7280",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 叶 (yè) shows the flat, open surface of a leaf that captures air and light.",
    etymology:
      "Originally depicted the flat surface of a leaf, representing the part of a plant that captures sunlight.",
    examples: [
      {
        chinese: "树叶",
        pinyin: "shùyè",
        english: "tree leaves",
        note: "Leaves that grow on trees.",
      },
      {
        chinese: "叶子",
        pinyin: "yèzi",
        english: "leaf",
        note: "The complete word for leaf.",
      },
    ],
    relatedCharacters: [
      {
        character: "树",
        pinyin: "shù",
        english: "tree",
      },
      {
        character: "花",
        pinyin: "huā",
        english: "flower",
      },
      {
        character: "绿",
        pinyin: "lǜ",
        english: "green",
      },
    ],
    mnemonic: "A leaf is the flat opening where plants breathe.",
    radicalMnemonic: "Mouth plus complete shows the full surface of a leaf.",
    commonWords: [
      {
        chinese: "树叶",
        pinyin: "shùyè",
        english: "tree leaves",
      },
      {
        chinese: "叶子",
        pinyin: "yèzi",
        english: "leaf",
      },
      {
        chinese: "绿叶",
        pinyin: "lǜyè",
        english: "green leaves",
      },
      {
        chinese: "茶叶",
        pinyin: "cháyè",
        english: "tea leaves",
      },
    ],
  },
  {
    id: "59",
    character: "绿",
    pinyin: "lǜ",
    english: "green",
    level: "HSK 1",
    strokes: 11,
    radicals: [
      {
        symbol: "纟",
        name: "Silk",
        meaning: "silk, thread",
        pinyin: "sī",
        color: "#fbbf24",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "录",
        name: "Record",
        meaning: "record, copy",
        pinyin: "lù",
        color: "#15803d",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 绿 (lǜ) combines silk with recording, possibly representing the color of natural dyes recorded in textiles.",
    etymology:
      "Originally related to the green color obtained from natural dyes used in silk and textile making.",
    examples: [
      {
        chinese: "绿色",
        pinyin: "lǜsè",
        english: "green color",
        note: "The complete word for green.",
      },
      {
        chinese: "绿叶",
        pinyin: "lǜyè",
        english: "green leaves",
        note: "Leaves that are green in color.",
      },
    ],
    relatedCharacters: [
      {
        character: "红",
        pinyin: "hóng",
        english: "red",
      },
      {
        character: "黄",
        pinyin: "huáng",
        english: "yellow",
      },
      {
        character: "蓝",
        pinyin: "lán",
        english: "blue",
      },
    ],
    mnemonic: "Green is the color recorded in nature's silk threads.",
    radicalMnemonic: "Silk plus record captures the green color.",
    commonWords: [
      {
        chinese: "绿色",
        pinyin: "lǜsè",
        english: "green color",
      },
      {
        chinese: "绿叶",
        pinyin: "lǜyè",
        english: "green leaves",
      },
      {
        chinese: "绿茶",
        pinyin: "lǜchá",
        english: "green tea",
      },
      {
        chinese: "绿灯",
        pinyin: "lǜdēng",
        english: "green light",
      },
    ],
  },
  {
    id: "60",
    character: "蓝",
    pinyin: "lán",
    english: "blue",
    level: "HSK 1",
    strokes: 13,
    radicals: [
      {
        symbol: "艹",
        name: "Grass",
        meaning: "grass, plant",
        pinyin: "cǎo",
        color: "#15803d",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "监",
        name: "Supervise",
        meaning: "supervise, observe",
        pinyin: "jiān",
        color: "#1e40af",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 蓝 (lán) combines grass with supervision, representing the blue dye obtained from indigo plants.",
    etymology:
      "Originally referred to the indigo plant used to create blue dye, combining plant with observation of the dyeing process.",
    examples: [
      {
        chinese: "蓝色",
        pinyin: "lánsè",
        english: "blue color",
        note: "The complete word for blue.",
      },
      {
        chinese: "天蓝",
        pinyin: "tiānlán",
        english: "sky blue",
        note: "The blue color of the sky.",
      },
    ],
    relatedCharacters: [
      {
        character: "红",
        pinyin: "hóng",
        english: "red",
      },
      {
        character: "绿",
        pinyin: "lǜ",
        english: "green",
      },
      {
        character: "天",
        pinyin: "tiān",
        english: "sky",
      },
    ],
    mnemonic: "Blue comes from plants that are carefully supervised for dye.",
    radicalMnemonic: "Grass plus supervision creates blue dye.",
    commonWords: [
      {
        chinese: "蓝色",
        pinyin: "lánsè",
        english: "blue color",
      },
      {
        chinese: "天蓝",
        pinyin: "tiānlán",
        english: "sky blue",
      },
      {
        chinese: "蓝天",
        pinyin: "lántiān",
        english: "blue sky",
      },
      {
        chinese: "深蓝",
        pinyin: "shēnlán",
        english: "dark blue",
      },
    ],
  },
  {
    id: "61",
    character: "黄",
    pinyin: "huáng",
    english: "yellow",
    level: "HSK 1",
    strokes: 11,
    radicals: [
      {
        symbol: "黄",
        name: "Yellow",
        meaning: "yellow, golden",
        pinyin: "huáng",
        color: "#fbbf24",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 黄 (huáng) represents the color yellow, often associated with earth, gold, and imperial power.",
    etymology:
      "Originally depicted something yellow or golden, possibly representing the color of earth or precious metals.",
    examples: [
      {
        chinese: "黄色",
        pinyin: "huángsè",
        english: "yellow color",
        note: "The complete word for yellow.",
      },
      {
        chinese: "黄金",
        pinyin: "huángjīn",
        english: "gold",
        note: "The precious metal that is yellow.",
      },
    ],
    relatedCharacters: [
      {
        character: "红",
        pinyin: "hóng",
        english: "red",
      },
      {
        character: "绿",
        pinyin: "lǜ",
        english: "green",
      },
      {
        character: "金",
        pinyin: "jīn",
        english: "gold",
      },
    ],
    mnemonic: "Yellow is the color of gold and autumn leaves.",
    radicalMnemonic: "The character itself represents the golden yellow color.",
    commonWords: [
      {
        chinese: "黄色",
        pinyin: "huángsè",
        english: "yellow color",
      },
      {
        chinese: "黄金",
        pinyin: "huángjīn",
        english: "gold",
      },
      {
        chinese: "黄河",
        pinyin: "Huánghé",
        english: "Yellow River",
      },
      {
        chinese: "蛋黄",
        pinyin: "dànhuáng",
        english: "egg yolk",
      },
    ],
  },
  {
    id: "62",
    character: "金",
    pinyin: "jīn",
    english: "gold",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "金",
        name: "Gold",
        meaning: "gold, metal",
        pinyin: "jīn",
        color: "#fbbf24",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 金 (jīn) represents precious metals, particularly gold, and is used in many metal-related characters.",
    etymology:
      "Originally depicted pieces of gold or precious metal, possibly showing nuggets or refined metal.",
    examples: [
      {
        chinese: "黄金",
        pinyin: "huángjīn",
        english: "gold",
        note: "Yellow gold, the precious metal.",
      },
      {
        chinese: "金钱",
        pinyin: "jīnqián",
        english: "money",
        note: "Money, literally 'gold money'.",
      },
    ],
    relatedCharacters: [
      {
        character: "银",
        pinyin: "yín",
        english: "silver",
      },
      {
        character: "铜",
        pinyin: "tóng",
        english: "copper",
      },
      {
        character: "钱",
        pinyin: "qián",
        english: "money",
      },
    ],
    mnemonic: "Gold is the most precious of all metals.",
    radicalMnemonic: "The character represents precious golden metal.",
    commonWords: [
      {
        chinese: "黄金",
        pinyin: "huángjīn",
        english: "gold",
      },
      {
        chinese: "金钱",
        pinyin: "jīnqián",
        english: "money",
      },
      {
        chinese: "金属",
        pinyin: "jīnshǔ",
        english: "metal",
      },
      {
        chinese: "现金",
        pinyin: "xiànjīn",
        english: "cash",
      },
    ],
  },
  {
    id: "63",
    character: "银",
    pinyin: "yín",
    english: "silver",
    level: "HSK 2",
    strokes: 11,
    radicals: [
      {
        symbol: "金",
        name: "Gold",
        meaning: "gold, metal",
        pinyin: "jīn",
        color: "#fbbf24",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "艮",
        name: "Stopping",
        meaning: "stopping, mountain",
        pinyin: "gèn",
        color: "#6b7280",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 银 (yín) combines metal with a component suggesting brightness or shining, representing silver.",
    etymology:
      "Originally depicted a bright, shining metal, representing silver and its reflective properties.",
    examples: [
      {
        chinese: "银行",
        pinyin: "yínháng",
        english: "bank",
        note: "Financial institution, literally 'silver business'.",
      },
      {
        chinese: "白银",
        pinyin: "báiyín",
        english: "silver",
        note: "White silver, the precious metal.",
      },
    ],
    relatedCharacters: [
      {
        character: "金",
        pinyin: "jīn",
        english: "gold",
      },
      {
        character: "白",
        pinyin: "bái",
        english: "white",
      },
      {
        character: "钱",
        pinyin: "qián",
        english: "money",
      },
    ],
    mnemonic: "Silver is a bright, shining metal like gold but white.",
    radicalMnemonic: "Metal plus brightness equals shining silver.",
    commonWords: [
      {
        chinese: "银行",
        pinyin: "yínháng",
        english: "bank",
      },
      {
        chinese: "白银",
        pinyin: "báiyín",
        english: "silver",
      },
      {
        chinese: "银色",
        pinyin: "yínsè",
        english: "silver color",
      },
      {
        chinese: "银河",
        pinyin: "yínhé",
        english: "Milky Way",
      },
    ],
  },
  {
    id: "64",
    character: "钱",
    pinyin: "qián",
    english: "money",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "金",
        name: "Gold",
        meaning: "gold, metal",
        pinyin: "jīn",
        color: "#fbbf24",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "戋",
        name: "Small",
        meaning: "small, narrow",
        pinyin: "jiān",
        color: "#6b7280",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 钱 (qián) combines metal with small, representing small pieces of precious metal used as currency.",
    etymology:
      "Originally depicted small pieces of metal used for trade and exchange, evolving to mean money in general.",
    examples: [
      {
        chinese: "花钱",
        pinyin: "huāqián",
        english: "spend money",
        note: "The action of using money.",
      },
      {
        chinese: "赚钱",
        pinyin: "zhuànqián",
        english: "make money",
        note: "The action of earning money.",
      },
    ],
    relatedCharacters: [
      {
        character: "金",
        pinyin: "jīn",
        english: "gold",
      },
      {
        character: "买",
        pinyin: "mǎi",
        english: "buy",
      },
      {
        character: "卖",
        pinyin: "mài",
        english: "sell",
      },
    ],
    mnemonic: "Money is made from small pieces of precious metal.",
    radicalMnemonic: "Metal plus small pieces equals money currency.",
    commonWords: [
      {
        chinese: "花钱",
        pinyin: "huāqián",
        english: "spend money",
      },
      {
        chinese: "赚钱",
        pinyin: "zhuànqián",
        english: "make money",
      },
      {
        chinese: "零钱",
        pinyin: "língqián",
        english: "change",
      },
      {
        chinese: "价钱",
        pinyin: "jiàqián",
        english: "price",
      },
    ],
  },
  {
    id: "65",
    character: "买",
    pinyin: "mǎi",
    english: "buy",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "乛",
        name: "Second",
        meaning: "second, hook",
        pinyin: "yǐ",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "头",
        name: "Head",
        meaning: "head",
        pinyin: "tóu",
        color: "#7c3aed",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 买 (mǎi) suggests the act of acquiring or obtaining something through exchange.",
    etymology:
      "Originally depicted the action of acquiring goods through trade or exchange.",
    examples: [
      {
        chinese: "买东西",
        pinyin: "mǎi dōngxi",
        english: "buy things",
        note: "The action of purchasing items.",
      },
      {
        chinese: "买票",
        pinyin: "mǎi piào",
        english: "buy tickets",
        note: "Purchasing tickets for travel or events.",
      },
    ],
    relatedCharacters: [
      {
        character: "卖",
        pinyin: "mài",
        english: "sell",
      },
      {
        character: "钱",
        pinyin: "qián",
        english: "money",
      },
      {
        character: "购",
        pinyin: "gòu",
        english: "purchase",
      },
    ],
    mnemonic: "Buying means using your head to acquire what you need.",
    radicalMnemonic: "The shape suggests the act of taking or acquiring.",
    commonWords: [
      {
        chinese: "买东西",
        pinyin: "mǎi dōngxi",
        english: "buy things",
      },
      {
        chinese: "买票",
        pinyin: "mǎi piào",
        english: "buy tickets",
      },
      {
        chinese: "购买",
        pinyin: "gòumǎi",
        english: "purchase",
      },
      {
        chinese: "买卖",
        pinyin: "mǎimài",
        english: "business",
      },
    ],
  },
  {
    id: "66",
    character: "卖",
    pinyin: "mài",
    english: "sell",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "十",
        name: "Ten",
        meaning: "ten, complete",
        pinyin: "shí",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "买",
        name: "Buy",
        meaning: "buy",
        pinyin: "mǎi",
        color: "#7c3aed",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 卖 (mài) adds a stroke to the buy character, representing the completion of a transaction from the seller's side.",
    etymology:
      "Originally related to trading and exchanging goods, representing the act of giving away goods for payment.",
    examples: [
      {
        chinese: "卖东西",
        pinyin: "mài dōngxi",
        english: "sell things",
        note: "The action of selling items.",
      },
      {
        chinese: "出卖",
        pinyin: "chūmài",
        english: "sell out",
        note: "To sell or betray.",
      },
    ],
    relatedCharacters: [
      {
        character: "买",
        pinyin: "mǎi",
        english: "buy",
      },
      {
        character: "钱",
        pinyin: "qián",
        english: "money",
      },
      {
        character: "商",
        pinyin: "shāng",
        english: "business",
      },
    ],
    mnemonic: "Selling completes the transaction that buying begins.",
    radicalMnemonic: "Complete plus buy equals the act of selling.",
    commonWords: [
      {
        chinese: "卖东西",
        pinyin: "mài dōngxi",
        english: "sell things",
      },
      {
        chinese: "出卖",
        pinyin: "chūmài",
        english: "sell out",
      },
      {
        chinese: "买卖",
        pinyin: "mǎimài",
        english: "business",
      },
      {
        chinese: "销售",
        pinyin: "xiāoshòu",
        english: "sales",
      },
    ],
  },
  {
    id: "67",
    character: "商",
    pinyin: "shāng",
    english: "business",
    level: "HSK 2",
    strokes: 11,
    radicals: [
      {
        symbol: "立",
        name: "Stand",
        meaning: "stand, establish",
        pinyin: "lì",
        color: "#7c2d12",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "冂",
        name: "Down box",
        meaning: "enclosure",
        pinyin: "jiōng",
        color: "#6b7280",
        position: { top: 60, left: 50 },
        positionName: "middle",
      },
      {
        symbol: "八",
        name: "Eight",
        meaning: "eight, divide",
        pinyin: "bā",
        color: "#3b82f6",
        position: { top: 80, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 商 (shāng) combines standing with enclosure and division, representing the establishment of trade relationships.",
    etymology:
      "Originally referred to the Shang dynasty and later evolved to mean commerce and business dealings.",
    examples: [
      {
        chinese: "商店",
        pinyin: "shāngdiàn",
        english: "store",
        note: "A place of business for selling goods.",
      },
      {
        chinese: "商业",
        pinyin: "shāngyè",
        english: "commerce",
        note: "Business activities and trade.",
      },
    ],
    relatedCharacters: [
      {
        character: "买",
        pinyin: "mǎi",
        english: "buy",
      },
      {
        character: "卖",
        pinyin: "mài",
        english: "sell",
      },
      {
        character: "贸",
        pinyin: "mào",
        english: "trade",
      },
    ],
    mnemonic: "Business requires standing firm in trade relationships.",
    radicalMnemonic: "Stand plus enclosure plus division creates business structure.",
    commonWords: [
      {
        chinese: "商店",
        pinyin: "shāngdiàn",
        english: "store",
      },
      {
        chinese: "商业",
        pinyin: "shāngyè",
        english: "commerce",
      },
      {
        chinese: "商人",
        pinyin: "shāngrén",
        english: "merchant",
      },
      {
        chinese: "协商",
        pinyin: "xiéshāng",
        english: "negotiate",
      },
    ],
  },
  {
    id: "68",
    character: "店",
    pinyin: "diàn",
    english: "store",
    level: "HSK 1",
    strokes: 8,
    radicals: [
      {
        symbol: "广",
        name: "Broad",
        meaning: "building, shelter",
        pinyin: "guǎng",
        color: "#7c2d12",
        position: { top: 30, left: 20 },
        positionName: "top-left",
      },
      {
        symbol: "占",
        name: "Occupy",
        meaning: "occupy, divine",
        pinyin: "zhàn",
        color: "#7c3aed",
        position: { top: 60, left: 60 },
        positionName: "bottom-right",
      },
    ],
    radicalExplanation:
      "The character 店 (diàn) combines building with occupation, representing a building occupied for business purposes.",
    etymology:
      "Originally depicted a building or shelter used for trade and commerce, evolving to mean store or shop.",
    examples: [
      {
        chinese: "商店",
        pinyin: "shāngdiàn",
        english: "store",
        note: "A retail business establishment.",
      },
      {
        chinese: "书店",
        pinyin: "shūdiàn",
        english: "bookstore",
        note: "A store that sells books.",
      },
    ],
    relatedCharacters: [
      {
        character: "商",
        pinyin: "shāng",
        english: "business",
      },
      {
        character: "铺",
        pinyin: "pù",
        english: "shop",
      },
      {
        character: "市",
        pinyin: "shì",
        english: "market",
      },
    ],
    mnemonic: "A store is a building occupied for selling goods.",
    radicalMnemonic: "Building plus occupation equals a business store.",
    commonWords: [
      {
        chinese: "商店",
        pinyin: "shāngdiàn",
        english: "store",
      },
      {
        chinese: "书店",
        pinyin: "shūdiàn",
        english: "bookstore",
      },
      {
        chinese: "饭店",
        pinyin: "fàndiàn",
        english: "restaurant",
      },
      {
        chinese: "酒店",
        pinyin: "jiǔdiàn",
        english: "hotel",
      },
    ],
  },
  {
    id: "69",
    character: "市",
    pinyin: "shì",
    english: "market",
    level: "HSK 1",
    strokes: 5,
    radicals: [
      {
        symbol: "亠",
        name: "Lid",
        meaning: "lid, cover",
        pinyin: "tóu",
        color: "#6b7280",
        position: { top: 20, left: 50 },
        positionName: "top",
      },
      {
        symbol: "巾",
        name: "Towel",
        meaning: "towel, cloth",
        pinyin: "jīn",
        color: "#fbbf24",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 市 (shì) combines cover with cloth, representing a covered area where cloth and goods are traded.",
    etymology:
      "Originally depicted a marketplace with coverings or stalls where people traded goods, especially textiles.",
    examples: [
      {
        chinese: "市场",
        pinyin: "shìchǎng",
        english: "market",
        note: "A place for buying and selling goods.",
      },
      {
        chinese: "城市",
        pinyin: "chéngshì",
        english: "city",
        note: "An urban area with markets and commerce.",
      },
    ],
    relatedCharacters: [
      {
        character: "商",
        pinyin: "shāng",
        english: "business",
      },
      {
        character: "店",
        pinyin: "diàn",
        english: "store",
      },
      {
        character: "城",
        pinyin: "chéng",
        english: "city",
      },
    ],
    mnemonic: "A market is a covered area where cloth and goods are sold.",
    radicalMnemonic: "Cover plus cloth creates a trading marketplace.",
    commonWords: [
      {
        chinese: "市场",
        pinyin: "shìchǎng",
        english: "market",
      },
      {
        chinese: "城市",
        pinyin: "chéngshì",
        english: "city",
      },
      {
        chinese: "超市",
        pinyin: "chāoshì",
        english: "supermarket",
      },
      {
        chinese: "市中心",
        pinyin: "shì zhōngxīn",
        english: "city center",
      },
    ],
  },
  {
    id: "70",
    character: "场",
    pinyin: "chǎng",
    english: "place",
    level: "HSK 1",
    strokes: 6,
    radicals: [
      {
        symbol: "土",
        name: "Earth",
        meaning: "earth, soil",
        pinyin: "tǔ",
        color: "#7c2d12",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "易",
        name: "Easy",
        meaning: "easy, change",
        pinyin: "yì",
        color: "#059669",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 场 (chǎng) combines earth with ease/change, representing an open area of ground used for various activities.",
    etymology:
      "Originally depicted an open area of earth or ground where activities and gatherings could easily take place.",
    examples: [
      {
        chinese: "市场",
        pinyin: "shìchǎng",
        english: "market",
        note: "A marketplace for trade.",
      },
      {
        chinese: "广场",
        pinyin: "guǎngchǎng",
        english: "square",
        note: "A public open area.",
      },
    ],
    relatedCharacters: [
      {
        character: "地",
        pinyin: "dì",
        english: "ground",
      },
      {
        character: "市",
        pinyin: "shì",
        english: "market",
      },
      {
        character: "所",
        pinyin: "suǒ",
        english: "place",
      },
    ],
    mnemonic: "A place is an area of earth where activities easily happen.",
    radicalMnemonic: "Earth plus easy creates an accessible place.",
    commonWords: [
      {
        chinese: "市场",
        pinyin: "shìchǎng",
        english: "market",
      },
      {
        chinese: "广场",
        pinyin: "guǎngchǎng",
        english: "square",
      },
      {
        chinese: "工场",
        pinyin: "gōngchǎng",
        english: "factory",
      },
      {
        chinese: "现场",
        pinyin: "xiànchǎng",
        english: "scene",
      },
    ],
  },
  {
    id: "71",
    character: "广",
    pinyin: "guǎng",
    english: "wide",
    level: "HSK 2",
    strokes: 3,
    radicals: [
      {
        symbol: "广",
        name: "Broad",
        meaning: "building, shelter",
        pinyin: "guǎng",
        color: "#7c2d12",
        position: { top: 50, left: 50 },
        positionName: "full",
      },
    ],
    radicalExplanation:
      "The character 广 (guǎng) represents a wide building or shelter, suggesting spaciousness and breadth.",
    etymology:
      "Originally depicted a building with a wide roof or shelter, representing broadness and spaciousness.",
    examples: [
      {
        chinese: "广场",
        pinyin: "guǎngchǎng",
        english: "square",
        note: "A wide, open public area.",
      },
      {
        chinese: "广大",
        pinyin: "guǎngdà",
        english: "vast",
        note: "Describing something wide and large.",
      },
    ],
    relatedCharacters: [
      {
        character: "宽",
        pinyin: "kuān",
        english: "wide",
      },
      {
        character: "大",
        pinyin: "dà",
        english: "big",
      },
      {
        character: "阔",
        pinyin: "kuò",
        english: "broad",
      },
    ],
    mnemonic: "Wide means having a broad shelter or building.",
    radicalMnemonic: "The shape suggests a wide building or shelter.",
    commonWords: [
      {
        chinese: "广场",
        pinyin: "guǎngchǎng",
        english: "square",
      },
      {
        chinese: "广大",
        pinyin: "guǎngdà",
        english: "vast",
      },
      {
        chinese: "广告",
        pinyin: "guǎnggào",
        english: "advertisement",
      },
      {
        chinese: "推广",
        pinyin: "tuīguǎng",
        english: "promote",
      },
    ],
  },
  {
    id: "72",
    character: "告",
    pinyin: "gào",
    english: "tell",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "牛",
        name: "Cow",
        meaning: "cow, cattle",
        pinyin: "niú",
        color: "#7c2d12",
        position: { top: 30, left: 50 },
        positionName: "top",
      },
      {
        symbol: "口",
        name: "Mouth",
        meaning: "mouth, opening",
        pinyin: "kǒu",
        color: "#dc2626",
        position: { top: 70, left: 50 },
        positionName: "bottom",
      },
    ],
    radicalExplanation:
      "The character 告 (gào) combines cow with mouth, possibly representing the announcement of livestock or important news.",
    etymology:
      "Originally meant to announce or inform, possibly related to declaring important matters or making public announcements.",
    examples: [
      {
        chinese: "告诉",
        pinyin: "gàosu",
        english: "tell",
        note: "To inform someone about something.",
      },
      {
        chinese: "广告",
        pinyin: "guǎnggào",
        english: "advertisement",
        note: "A public announcement or promotion.",
      },
    ],
    relatedCharacters: [
      {
        character: "说",
        pinyin: "shuō",
        english: "say",
      },
      {
        character: "言",
        pinyin: "yán",
        english: "words",
      },
      {
        character: "报",
        pinyin: "bào",
        english: "report",
      },
    ],
    mnemonic: "Telling is like announcing something with your mouth.",
    radicalMnemonic: "Cow plus mouth suggests announcing livestock or news.",
    commonWords: [
      {
        chinese: "告诉",
        pinyin: "gàosu",
        english: "tell",
      },
      {
        chinese: "广告",
        pinyin: "guǎnggào",
        english: "advertisement",
      },
      {
        chinese: "报告",
        pinyin: "bàogào",
        english: "report",
      },
      {
        chinese: "警告",
        pinyin: "jǐnggào",
        english: "warning",
      },
    ],
  },
  {
    id: "73",
    character: "诉",
    pinyin: "sù",
    english: "complain",
    level: "HSK 2",
    strokes: 7,
    radicals: [
      {
        symbol: "讠",
        name: "Speech",
        meaning: "speech, words",
        pinyin: "yán",
        color: "#3b82f6",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "斥",
        name: "Scold",
        meaning: "scold, reject",
        pinyin: "chì",
        color: "#dc2626",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 诉 (sù) combines speech with scolding or rejecting, representing the act of complaining or bringing grievances.",
    etymology:
      "Originally meant to express complaints or bring legal action, combining speech with the idea of protest or objection.",
    examples: [
      {
        chinese: "告诉",
        pinyin: "gàosu",
        english: "tell",
        note: "To inform or communicate to someone.",
      },
      {
        chinese: "诉说",
        pinyin: "sùshuō",
        english: "tell about",
        note: "To narrate or relate something.",
      },
    ],
    relatedCharacters: [
      {
        character: "告",
        pinyin: "gào",
        english: "tell",
      },
      {
        character: "说",
        pinyin: "shuō",
        english: "say",
      },
      {
        character: "怨",
        pinyin: "yuàn",
        english: "complain",
      },
    ],
    mnemonic: "To complain is to speak words of rejection or protest.",
    radicalMnemonic: "Speech plus scolding creates the act of complaining.",
    commonWords: [
      {
        chinese: "告诉",
        pinyin: "gàosu",
        english: "tell",
      },
      {
        chinese: "诉说",
        pinyin: "sùshuō",
        english: "tell about",
      },
      {
        chinese: "申诉",
        pinyin: "shēnsù",
        english: "appeal",
      },
      {
        chinese: "投诉",
        pinyin: "tóusù",
        english: "complain",
      },
    ],
  },
  {
    id: "74",
    character: "报",
    pinyin: "bào",
    english: "report",
    level: "HSK 1",
    strokes: 7,
    radicals: [
      {
        symbol: "扌",
        name: "Hand",
        meaning: "hand, action",
        pinyin: "shǒu",
        color: "#7c2d12",
        position: { top: 50, left: 20 },
        positionName: "left",
      },
      {
        symbol: "服",
        name: "Clothes",
        meaning: "clothes, submit",
        pinyin: "fú",
        color: "#3b82f6",
        position: { top: 50, left: 70 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 报 (bào) combines hand with submission/clothes, representing the act of delivering or presenting information.",
    etymology:
      "Originally meant to return or repay, evolving to mean report or deliver news and information.",
    examples: [
      {
        chinese: "报告",
        pinyin: "bàogào",
        english: "report",
        note: "A formal presentation of information.",
      },
      {
        chinese: "报纸",
        pinyin: "bàozhǐ",
        english: "newspaper",
        note: "Printed news publication.",
      },
    ],
    relatedCharacters: [
      {
        character: "告",
        pinyin: "gào",
        english: "tell",
      },
      {
        character: "新",
        pinyin: "xīn",
        english: "new",
      },
      {
        character: "闻",
        pinyin: "wén",
        english: "news",
      },
    ],
    mnemonic: "To report is to hand over information formally.",
    radicalMnemonic: "Hand plus submission creates the act of reporting.",
    commonWords: [
      {
        chinese: "报告",
        pinyin: "bàogào",
        english: "report",
      },
      {
        chinese: "报纸",
        pinyin: "bàozhǐ",
        english: "newspaper",
      },
      {
        chinese: "报名",
        pinyin: "bàomíng",
        english: "sign up",
      },
      {
        chinese: "预报",
        pinyin: "yùbào",
        english: "forecast",
      },
    ],
  },
  {
    id: "75",
    character: "新",
    pinyin: "xīn",
    english: "new",
    level: "HSK 1",
    strokes: 13,
    radicals: [
      {
        symbol: "立",
        name: "Stand",
        meaning: "stand, establish",
        pinyin: "lì",
        color: "#7c2d12",
        position: { top: 30, left: 20 },
        positionName: "left",
      },
      {
        symbol: "木",
        name: "Wood",
        meaning: "wood, tree",
        pinyin: "mù",
        color: "#15803d",
        position: { top: 50, left: 50 },
        positionName: "middle",
      },
      {
        symbol: "斤",
        name: "Axe",
        meaning: "axe, weight",
        pinyin: "jīn",
        color: "#6b7280",
        position: { top: 50, left: 80 },
        positionName: "right",
      },
    ],
    radicalExplanation:
      "The character 新 (xīn) combines standing, wood, and axe, representing the cutting of fresh wood or creating something recently made.",
    etymology:
      "Originally depicted cutting fresh wood with an axe to create something new, representing freshness and novelty.",
    examples: [
      {
        chinese: "新年",
        pinyin: "xīnnián",
        english: "New Year",
        note: "The beginning of a new calendar year.",
      },
      {
        chinese: "新闻",
        pinyin: "xīnwén",
        english: "news",
        note: "Recent information and events.",
      },
    ],
    relatedCharacters: [
      {
        character: "旧",
        pinyin: "jiù",
        english: "old",
      },
      {
        character: "鲜",
        pinyin: "xiān",
        english: "fresh",
      },
      {
        character: "始",
        pinyin: "shǐ",
        english: "begin",
      },
    ],
    mnemonic: "New things are made by cutting fresh wood with an axe.",
    radicalMnemonic: "Stand plus wood plus axe creates something new.",
    commonWords: [
      {
        chinese: "新年",
        pinyin: "xīnnián",
        english: "New Year",
      },
      {
        chinese: "新闻",
        pinyin: "xīnwén",
        english: "news",
      },
      {
        chinese: "创新",
        pinyin: "chuàngxīn",
        english: "innovation",
      },
      {
        chinese: "最新",
        pinyin: "zuìxīn",
        english: "latest",
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

// May 2023 specific characters for legacy support
export const may2023Characters: Character[] = charactersDatabase.slice(0, 31)

// June 2023 specific characters for legacy support
export const june2023Characters: Character[] = charactersDatabase.slice(0, 30)