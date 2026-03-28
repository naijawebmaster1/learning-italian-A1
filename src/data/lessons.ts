import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "The Alphabet, Pronunciation & Greetings",
    slug: "alphabet-greetings",
    grammar: {
      title: "Italian Alphabet & Pronunciation",
      content: "Italian uses 21 letters. Vowels are pure: A (father), E (bed), I (me), O (pot), U (moon). Consonants like C/G change sound with E/I. CH and GH are always hard (K/G)."
    },
    vocabulary: [
      { italian: "Ciao", english: "Hello/Goodbye", pronunciation: "CHOW" },
      { italian: "Buongiorno", english: "Good morning", pronunciation: "BWON-JOR-NO" },
      { italian: "Grazie", english: "Thank you", pronunciation: "GRAT-SEE-EH" },
      { italian: "Per favore", english: "Please", pronunciation: "PER FA-VO-RE" },
    ],
    examples: [{ italian: "Ciao, come stai?", english: "Hi, how are you?" }],
    dialogue: { title: "In un bar", lines: [{ speaker: "Marco", italian: "Ciao!", english: "Hi!" }] },
    comprehensionQuestions: [{ question: "Is Ciao formal?", options: ["Yes", "No"], correctAnswer: "No" }],
    exercises: [{ id: "1_1", type: "multiple-choice", question: "Which is 1st letter?", options: ["A", "B"], correctAnswer: "A" }]
  },
  {
    id: 2,
    title: "Subject Pronouns & Essere",
    slug: "pronouns-essere",
    grammar: {
      title: "Essere (To Be)",
      content: "Io sono, Tu sei, Lui/Lei è, Noi siamo, Voi siete, Loro sono."
    },
    vocabulary: [{ italian: "Sono", english: "I am" }],
    examples: [{ italian: "Io sono americano.", english: "I am American." }],
    dialogue: { title: "Conoscersi", lines: [{ speaker: "Luca", italian: "Sei italiano?", english: "Are you Italian?" }] },
    comprehensionQuestions: [{ question: "We are?", options: ["Siamo", "Siete"], correctAnswer: "Siamo" }],
    exercises: [{ id: "2_1", type: "fill-in-the-blank", question: "Io ___ (am)", correctAnswer: "sono" }]
  },
  {
    id: 3,
    title: "Determinative Articles (Articoli Determinativi)",
    slug: "articles",
    grammar: {
      title: "The Italian Definite Article",
      content: `Like 'the' in English, but Italian has 7 forms depending on the gender, number, and starting letter of the noun.
      
**Masculine Singular:**
- **il**: most consonants (il libro)
- **lo**: s+consonant, z, ps, gn, x, y (lo zio, lo studente)
- **l'**: vowels (l'amico, l'uomo)

**Masculine Plural:**
- **i**: plural of 'il' (i libri)
- **gli**: plural of 'lo' and 'l'' (gli studenti, gli amici)

**Feminine Singular:**
- **la**: most consonants (la casa)
- **l'**: vowels (l'idea, l'agenda)

**Feminine Plural:**
- **le**: all feminine nouns (le case, le idee, le amiche)`
    },
    vocabulary: [
      { italian: "Il libro", english: "The book" },
      { italian: "Lo zio", english: "The uncle" },
      { italian: "L'amico", english: "The friend (male)" },
      { italian: "La casa", english: "The house" },
      { italian: "L'idea", english: "The idea" },
      { italian: "Lo studente", english: "The student" },
      { italian: "La mamma", english: "The mom" },
      { italian: "Il treno", english: "The train" },
      { italian: "L'ufficio", english: "The office" },
      { italian: "Il panino", english: "The sandwich" },
    ],
    examples: [
      { italian: "Il ragazzo è a scuola.", english: "The boy is at school." },
      { italian: "Gli amici sono simpatici.", english: "The friends are nice." },
      { italian: "La pizza è buonissima!", english: "The pizza is very good!" },
    ],
    dialogue: {
      title: "In Biblioteca (In the Library)",
      lines: [
        { speaker: "Studente", italian: "Scusi, dov'è il libro di storia?", english: "Excuse me, where is the history book?" },
        { speaker: "Bibliotecaria", italian: "Il libro è sul tavolo, vicino alla finestra.", english: "The book is on the table, near the window." },
        { speaker: "Studente", italian: "E l'agenda?", english: "And the planner?" },
        { speaker: "Bibliotecaria", italian: "L'agenda è qui.", english: "The planner is here." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Which article do you use for 'zio'?",
        options: ["Il", "Lo", "La"],
        correctAnswer: "Lo"
      },
      {
        question: "What is the plural of 'il libro'?",
        options: ["I libri", "Gli libri", "Le libri"],
        correctAnswer: "I libri"
      }
    ],
    exercises: [
      {
        id: "3_1",
        type: "multiple-choice",
        question: "Choose the article for 'studenti':",
        options: ["I", "Gli", "Le"],
        correctAnswer: "Gli"
      },
      {
        id: "3_2",
        type: "fill-in-the-blank",
        question: "___ automobile (The car)",
        correctAnswer: "L'",
        explanation: "Feminine singular starting with a vowel."
      },
      {
        id: "3_3",
        type: "translation",
        question: "Translate: 'The friends (masc)'",
        correctAnswer: "Gli amici"
      },
      {
        id: "3_4",
        type: "reorder",
        question: "Reorder: is / the / sandwich / good",
        words: ["Il", "panino", "è", "buono"],
        correctAnswer: ["Il", "panino", "è", "buono"]
      }
    ]
  },
  {
    id: 4,
    title: "Present Tense Verbs (-are, -ere, -ire)",
    slug: "regular-verbs",
    grammar: {
      title: "Regular Conjugations",
      content: "-ARE: o, i, a, iamo, ate, ano. -ERE: o, i, e, iamo, ete, ono. -IRE: o, i, e, iamo, ite, ono."
    },
    vocabulary: [
      { italian: "Parlare", english: "To speak" },
      { italian: "Mangiare", english: "To eat" },
      { italian: "Dormire", english: "To sleep" },
    ],
    examples: [{ italian: "Io parlo italiano.", english: "I speak Italian." }],
    dialogue: { title: "Al ristorante", lines: [{ speaker: "Anna", italian: "Mangi la pasta?", english: "Are you eating pasta?" }] },
    comprehensionQuestions: [{ question: "They speak?", options: ["Parlano", "Parlate"], correctAnswer: "Parlano" }],
    exercises: [{ id: "4_1", type: "fill-in-the-blank", question: "Noi ___ (speak) italiano.", correctAnswer: "parliamo" }]
  },
  {
    id: 5,
    title: "Numbers, Time & Dates",
    slug: "numbers-time",
    grammar: {
      title: "Telling Time & Dates",
      content: "Numbers: uno, due, tre... Time: Che ore sono? È l'una, sono le due. Dates: Il [number] di [month]."
    },
    vocabulary: [
      { italian: "Uno", english: "One" },
      { italian: "Lunedì", english: "Monday" },
      { italian: "Gennaio", english: "January" },
    ],
    examples: [{ italian: "Sono le otto.", english: "It's eight o'clock." }],
    dialogue: { title: "Un appuntamento", lines: [{ speaker: "Sara", italian: "Che ore sono?", english: "What time is it?" }] },
    comprehensionQuestions: [{ question: "Monday is?", options: ["Lunedì", "Martedì"], correctAnswer: "Lunedì" }],
    exercises: [{ id: "5_1", type: "translation", question: "It is one o'clock", correctAnswer: "È l'una" }]
  },
  {
    id: 6,
    title: "Gender & Plural Rules",
    slug: "gender-plurals",
    grammar: {
      title: "Masculine, Feminine, and Plurals",
      content: "Masc: -o -> -i. Fem: -a -> -e. Both: -e -> -i. Adjectives must match."
    },
    vocabulary: [
      { italian: "Ragazzo", english: "Boy" },
      { italian: "Ragazza", english: "Girl" },
      { italian: "Gatto", english: "Cat" },
    ],
    examples: [{ italian: "I ragazzi sono alti.", english: "The boys are tall." }],
    dialogue: { title: "In piazza", lines: [{ speaker: "Paolo", italian: "Quanti gatti hai?", english: "How many cats do you have?" }] },
    comprehensionQuestions: [{ question: "Plural of 'casa'?", options: ["Case", "Casi"], correctAnswer: "Case" }],
    exercises: [{ id: "6_1", type: "reorder", question: "are / girls / the / beautiful", words: ["Le", "ragazze", "sono", "belle"], correctAnswer: ["Le", "ragazze", "sono", "belle"] }]
  },
  {
    id: 7,
    title: "Prepositions (Simple & Articulated)",
    slug: "prepositions",
    grammar: {
      title: "Di, A, Da, In, Su...",
      content: "Prepositions often combine with articles: di + il = del, a + il = al, in + la = nella."
    },
    vocabulary: [
      { italian: "Di", english: "Of" },
      { italian: "A", english: "To/At" },
      { italian: "Nel", english: "In the (masc)" },
    ],
    examples: [{ italian: "Vado al bar.", english: "I go to the bar." }],
    dialogue: { title: "Viaggio", lines: [{ speaker: "Mino", italian: "Vai in Italia?", english: "Are you going to Italy?" }] },
    comprehensionQuestions: [{ question: "A + Il = ?", options: ["Al", "Del"], correctAnswer: "Al" }],
    exercises: [{ id: "7_1", type: "multiple-choice", question: "Where is the cat? (In the house)", options: ["nella casa", "di casa"], correctAnswer: "nella casa" }]
  },
  {
    id: 8,
    title: "Questions & Negatives",
    slug: "questions-negatives",
    grammar: {
      title: "Non and Question Words",
      content: "Negative: Put 'non' before the verb. Questions: Change intonation or use Chi, Cosa, Dove, Quando, Perché."
    },
    vocabulary: [
      { italian: "Non", english: "Not" },
      { italian: "Chi", english: "Who" },
      { italian: "Dove", english: "Where" },
    ],
    examples: [{ italian: "Non capisco.", english: "I don't understand." }],
    dialogue: { title: "Domande", lines: [{ speaker: "Eva", italian: "Dove abiti?", english: "Where do you live?" }] },
    comprehensionQuestions: [{ question: "How to say 'I don't speak'?", options: ["Non parlo", "Parlo non"], correctAnswer: "Non parlo" }],
    exercises: [{ id: "8_1", type: "fill-in-the-blank", question: "___ capisco. (I don't understand)", correctAnswer: "Non" }]
  },
  {
    id: 9,
    title: "Daily Routine & Reflexive Verbs",
    slug: "routine-reflexives",
    grammar: {
      title: "Verbi Riflessivi",
      content: "Verbs where the action returns to the subject: mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano."
    },
    vocabulary: [
      { italian: "Svegliarsi", english: "To wake up" },
      { italian: "Lavarsi", english: "To wash oneself" },
      { italian: "Dormire", english: "To sleep" },
    ],
    examples: [{ italian: "Mi sveglio alle sette.", english: "I wake up at seven." }],
    dialogue: { title: "La mattina", lines: [{ speaker: "Leo", italian: "A che ora ti svegli?", english: "What time do you wake up?" }] },
    comprehensionQuestions: [{ question: "I wash myself?", options: ["Mi lavo", "Si lava"], correctAnswer: "Mi lavo" }],
    exercises: [{ id: "9_1", type: "multiple-choice", question: "Reflexive pronoun for 'Noi'?", options: ["Mi", "Ci"], correctAnswer: "Ci" }]
  },
  {
    id: 10,
    title: "Survival Italian",
    slug: "survival-italian",
    grammar: {
      title: "Essential Phrases",
      content: "Mixing everything for real life: ordering food, asking directions, emergency phrases."
    },
    vocabulary: [
      { italian: "Aiuto!", english: "Help!" },
      { italian: "Il conto", english: "The bill" },
      { italian: "Dov'è il bagno?", english: "Where is the bathroom?" },
    ],
    examples: [{ italian: "Vorrei un caffè, per favore.", english: "I would like a coffee, please." }],
    dialogue: { title: "Al ristorante", lines: [{ speaker: "Cameriere", italian: "Cosa desidera?", english: "What would you like?" }] },
    comprehensionQuestions: [{ question: "How to ask for the bill?", options: ["Il conto, per favore", "Ciao"], correctAnswer: "Il conto, per favore" }],
    exercises: [{ id: "10_1", type: "translation", question: "Where is the bathroom?", correctAnswer: "Dov'è il bagno?" }]
  }
];
