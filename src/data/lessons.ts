import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "The Alphabet, Pronunciation & Greetings",
    slug: "alphabet-greetings",
    grammar: {
      title: "The Italian Foundation: Sounds & Letters",
      content: `Italian is a phonetic language, meaning it is mostly pronounced exactly as it is written. 

**The Alphabet:**
The standard Italian alphabet has **21 letters**. The letters J, K, W, X, and Y only appear in foreign words.
- **Vowels (A, E, I, O, U)**: Always pure. A (ah), E (eh), I (ee), O (oh), U (oo).

**The Hard & Soft Sounds:**
- **C** and **G**:
    - **Soft** (CH / J sound) before **E** or **I** (e.g., *Ciao*, *Gelato*).
    - **Hard** (K / G sound) before **A, O, U** or **H** (e.g., *Casa*, *Gatto*, *Chiesa*, *Spaghetti*).
- **CH** and **GH**: Always hard! The 'H' protects the consonant from the 'E/I' soft rule.
- **SC**: 
    - Soft (SH sound) before **E** or **I** (e.g., *Pesce*).
    - Hard (SK sound) before **A, O, U** or **H** (e.g., *Scuola*).

**Special Sounds:**
- **GLI**: Like 'lli' in 'million' (e.g., *Famiglia*).
- **GN**: Like 'ny' in 'canyon' (e.g., *Gnocchi*).
- **Double Consonants**: Pronounced with a short pause or extra emphasis (e.g., *Palla* vs *Pala*).`
    },
    vocabulary: [
      { italian: "Ciao", english: "Hello / Hi / Bye (Informal)", pronunciation: "CHOW" },
      { italian: "Buongiorno", english: "Good morning / Hello (Formal)", pronunciation: "BWON-JOR-NO" },
      { italian: "Buonasera", english: "Good evening", pronunciation: "BWONA-SAY-RA" },
      { italian: "Come ti chiami?", english: "What is your name? (Informal)", pronunciation: "KO-ME TEE KEY-AH-ME" },
      { italian: "Mi chiamo...", english: "My name is...", pronunciation: "MEE KEY-AH-MO" },
      { italian: "Piacere", english: "Pleased to meet you", pronunciation: "PYAH-CHAY-RAY" },
      { italian: "Come stai?", english: "How are you? (Informal)", pronunciation: "KO-ME STAH-EE" },
      { italian: "Come sta?", english: "How are you? (Formal)", pronunciation: "KO-ME STAH" },
      { italian: "Bene, grazie", english: "Fine, thank you", pronunciation: "BAY-NAY GRAT-SEE-EH" },
      { italian: "E tu?", english: "And you? (Informal)", pronunciation: "EH TOO" },
      { italian: "Per favore", english: "Please", pronunciation: "PER FA-VO-RAY" },
      { italian: "Grazie mille", english: "Many thanks", pronunciation: "GRAT-SEE-EH MEE-LAY" },
      { italian: "Prego", english: "You're welcome", pronunciation: "PRAY-GO" },
      { italian: "Scusa", english: "Excuse me / Sorry (Informal)", pronunciation: "SKOO-ZAH" },
      { italian: "Scusi", english: "Excuse me (Formal)", pronunciation: "SKOO-ZEE" },
      { italian: "Arrivederci", english: "Goodbye (Formal)", pronunciation: "AH-REE-VAY-DER-CHEE" },
      { italian: "A presto", english: "See you soon", pronunciation: "AH PRES-TO" },
      { italian: "Sì / No", english: "Yes / No", pronunciation: "SEE / NO" },
    ],
    examples: [
      { italian: "Buongiorno, come sta?", english: "Good morning, how are you? (Formal)" },
      { italian: "Ciao! Io sono Marco, e tu?", english: "Hi! I am Marco, and you?" },
      { italian: "Mi chiamo Sofia, piacere di conoscerti.", english: "My name is Sofia, nice to meet you." },
      { italian: "Grazie mille per l'aiuto.", english: "Thank you very much for the help." },
    ],
    dialogue: {
      title: "Un Primo Incontro (A First Meeting)",
      lines: [
        { speaker: "Giulia", italian: "Ciao! Io sono Giulia. Come ti chiami?", english: "Hi! I'm Giulia. What's your name?" },
        { speaker: "Matteo", italian: "Ciao Giulia, piacere! Mi chiamo Matteo.", english: "Hi Giulia, nice to meet you! My name is Matteo." },
        { speaker: "Giulia", italian: "Piacere mio, Matteo. Come stai?", english: "My pleasure, Matteo. How are you?" },
        { speaker: "Matteo", italian: "Bene, grazie. E tu?", english: "Fine, thank you. And you?" },
        { speaker: "Giulia", italian: "Benissimo! Di dove sei?", english: "Very well! Where are you from?" },
        { speaker: "Matteo", italian: "Sono di Roma. E tu?", english: "I'm from Rome. And you?" },
        { speaker: "Giulia", italian: "Io sono di Milano. Ora devo andare. A presto!", english: "I'm from Milan. Now I must go. See you soon!" },
        { speaker: "Matteo", italian: "Ciao Giulia, a presto!", english: "Bye Giulia, see you soon!" },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Where is Giulia from?",
        options: ["Rome", "Milan", "Venice"],
        correctAnswer: "Milan"
      },
      {
        question: "Is 'Piacere' used when meeting someone for the first time?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
      }
    ],
    exercises: [
      {
        id: "1_1",
        type: "multiple-choice",
        question: "How is the 'C' pronounced in 'Gelato'?",
        options: ["Like 'K' (Hard)", "Like 'J' (Soft)", "Like 'S'"],
        correctAnswer: "Like 'J' (Soft)",
        explanation: "G and C are soft (J/CH) before E and I."
      },
      {
        id: "1_2",
        type: "multiple-choice",
        question: "Which of these is the correct way to say 'Good evening'?",
        options: ["Buongiorno", "Buonasera", "Buonanotte"],
        correctAnswer: "Buonasera"
      },
      {
        id: "1_3",
        type: "fill-in-the-blank",
        question: "Complete the greeting: 'Come ___ chiami?'",
        correctAnswer: "ti",
        explanation: "'Come ti chiami?' is the informal way to ask for a name."
      },
      {
        id: "1_4",
        type: "fill-in-the-blank",
        question: "Translate 'My name is': '___ chiamo...'",
        correctAnswer: "Mi"
      },
      {
        id: "1_5",
        type: "reorder",
        question: "Reorder: nice / meet / to / you",
        words: ["Piacere", "di", "conoscerti"],
        correctAnswer: ["Piacere", "di", "conoscerti"]
      },
      {
        id: "1_6",
        type: "translation",
        question: "Translate: 'Good morning, how are you?' (Formal)",
        correctAnswer: "Buongiorno, come sta?"
      }
    ]
  },
  {
    id: 2,
    title: "Subject Pronouns & Essere (To Be)",
    slug: "pronouns-essere",
    grammar: {
      title: "The Core of Italian: Subject Pronouns & 'Essere'",
      content: `In Italian, verbs change their endings based on the subject (I, you, he/she, etc.). This makes the **Subject Pronouns** essential, though they are often omitted in speech because the verb ending already tells you who is speaking!

**Subject Pronouns:**
- **Io** (I)
- **Tu** (You - *Informal, singular*)
- **Lui / Lei** (He / She)
- **Lei** (You - *Formal, singular*) - *Always capitalized in writing!*
- **Noi** (We)
- **Voi** (You all - *Plural*)
- **Loro** (They)

**The Verb 'Essere' (To Be):**
'Essere' is an irregular verb and is used for nationalities, professions, and identifying people or things.

| Pronoun | Essere | English |
| :--- | :--- | :--- |
| Io | **sono** | I am |
| Tu | **sei** | You are |
| Lui/Lei | **è** | He/She is |
| Noi | **siamo** | We are |
| Voi | **siete** | You all are |
| Loro | **sono** | They are |

**Formal vs. Informal:**
- Use **Tu** with friends, family, and children.
- Use **Lei** (with the 3rd person singular verb form 'è') with strangers, superiors, or in professional settings.`
    },
    vocabulary: [
      { italian: "Italiano / Italiana", english: "Italian", pronunciation: "EE-TAH-LYAH-NO" },
      { italian: "Americano / Americana", english: "American", pronunciation: "AH-MEH-REE-KAH-NO" },
      { italian: "Studente / Studentessa", english: "Student", pronunciation: "STOO-DEN-TAY" },
      { italian: "Insegnante", english: "Teacher", pronunciation: "EEN-SAY-NYAHN-TAY" },
      { italian: "Dottore / Dottoressa", english: "Doctor", pronunciation: "DOT-TO-RAY" },
      { italian: "Felice", english: "Happy", pronunciation: "FAY-LEE-CHAY" },
      { italian: "Triste", pronunciation: "TREESS-TAY", english: "Sad" },
      { italian: "Stanco / Stanca", english: "Tired", pronunciation: "STAHN-KO" },
      { italian: "Bello / Bella", english: "Beautiful / Nice", pronunciation: "BEL-LO" },
      { italian: "Grande", english: "Big / Great", pronunciation: "GRAHN-DAY" },
      { italian: "Piccolo / Piccola", english: "Small", pronunciation: "PEEK-KO-LO" },
      { italian: "Famoso / Famosa", english: "Famous", pronunciation: "FA-MO-ZO" },
    ],
    examples: [
      { italian: "Io sono americano.", english: "I am American (male)." },
      { italian: "Tu sei molto gentile.", english: "You are very kind." },
      { italian: "Lei è un'insegnante bravissima.", english: "She is a very good teacher." },
      { italian: "Noi siamo felici di essere qui.", english: "We are happy to be here." },
      { italian: "Siete stanchi?", english: "Are you all tired?" },
    ],
    dialogue: {
      title: "Un Incontro Formale (A Formal Meeting)",
      lines: [
        { speaker: "Signora Bianchi", italian: "Buongiorno! Lei è lo studente americano?", english: "Good morning! Are you the American student?" },
        { speaker: "John", italian: "Sì, buongiorno. Io sono John. E Lei?", english: "Yes, good morning. I am John. And you?" },
        { speaker: "Signora Bianchi", italian: "Io sono la professoressa Bianchi. Piacere.", english: "I am Professor Bianchi. Nice to meet you." },
        { speaker: "John", italian: "Piacere mio, professoressa. Lei è italiana?", english: "The pleasure is mine, professor. Are you Italian?" },
        { speaker: "Signora Bianchi", italian: "Sì, sono di Firenze. Benvenuto in Italia!", english: "Yes, I am from Florence. Welcome to Italy!" },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Is John the American student?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
      },
      {
        question: "Where is the professor from?",
        options: ["Milan", "Florence", "Rome"],
        correctAnswer: "Florence"
      }
    ],
    exercises: [
      {
        id: "2_1",
        type: "multiple-choice",
        question: "Select the correct form: 'Noi ___ felici.'",
        options: ["sono", "siamo", "siete"],
        correctAnswer: "siamo"
      },
      {
        id: "2_2",
        type: "fill-in-the-blank",
        question: "Tu ___ (are) italiano.",
        correctAnswer: "sei"
      },
      {
        id: "2_3",
        type: "fill-in-the-blank",
        question: "Loro ___ (are) stanchi.",
        correctAnswer: "sono"
      },
      {
        id: "2_4",
        type: "translation",
        question: "Translate: 'He is a doctor'",
        correctAnswer: "Lui è un dottore"
      },
      {
        id: "2_5",
        type: "reorder",
        question: "Reorder: tired / are / you all",
        words: ["Voi", "siete", "stanchi"],
        correctAnswer: ["Voi", "siete", "stanchi"]
      },
      {
        id: "2_6",
        type: "multiple-choice",
        question: "Which pronoun is used for the FORMAL 'you'?",
        options: ["Tu", "Voi", "Lei"],
        correctAnswer: "Lei"
      },
      {
        id: "2_7",
        type: "multiple-choice",
        question: "Choose the correct form: 'Voi ___ bravi.'",
        options: ["sono", "siamo", "siete"],
        correctAnswer: "siete"
      },
      {
        id: "2_8",
        type: "fill-in-the-blank",
        question: "Io ___ (am) un professore.",
        correctAnswer: "sono"
      },
      {
        id: "2_9",
        type: "fill-in-the-blank",
        question: "Lui ___ (is) molto famoso.",
        correctAnswer: "è"
      },
      {
        id: "2_10",
        type: "fill-in-the-blank",
        question: "Signora Miller, Lei ___ (are - formal) americana?",
        correctAnswer: "è"
      },
      {
        id: "2_11",
        type: "translation",
        question: "Translate: 'We are students'",
        correctAnswer: "Noi siamo studenti"
      },
      {
        id: "2_12",
        type: "reorder",
        question: "Reorder: I / am / Italian",
        words: ["Io", "sono", "italiano"],
        correctAnswer: ["Io", "sono", "italiano"]
      },
      {
        id: "2_13",
        type: "multiple-choice",
        question: "Which is correct for a woman?",
        options: ["Io sono italiano", "Io sono italiana"],
        correctAnswer: "Io sono italiana"
      },
      {
        id: "2_14",
        type: "fill-in-the-blank",
        question: "Noi ___ (are) grandi amici.",
        correctAnswer: "siamo"
      },
      {
        id: "2_15",
        type: "translation",
        question: "Translate: 'They are famous'",
        correctAnswer: "Loro sono famosi"
      },
      {
        id: "2_16",
        type: "reorder",
        question: "Reorder: you / are / tired / ?",
        words: ["Tu", "sei", "stanco", "?"],
        correctAnswer: ["Tu", "sei", "stanco", "?"]
      },
      {
        id: "2_17",
        type: "fill-in-the-blank",
        question: "Voi ___ (are) in Italia.",
        correctAnswer: "siete"
      },
      {
        id: "2_18",
        type: "multiple-choice",
        question: "Opposite of 'Felice':",
        options: ["Grande", "Triste", "Stanco"],
        correctAnswer: "Triste"
      },
      {
        id: "2_19",
        type: "translation",
        question: "Translate: 'The house is big'",
        correctAnswer: "La casa è grande"
      },
      {
        id: "2_20",
        type: "fill-in-the-blank",
        question: "Signora Bianchi ___ (is) italiana.",
        correctAnswer: "è"
      }
    ]
  },
  {
    id: 3,
    title: "Articles Mastery (Determinativi & Indeterminativi)",
    slug: "articles",
    grammar: {
      title: "The Ultimate Guide to Italian Articles",
      content: `In Italian, articles are NOT optional! They must agree with the noun's gender, number, and its first letter.

### 1. The Definite Articles (The)
Definite articles refer to specific things. Italian has 7 forms:

| Gender | Starting with... | Singular | Plural |
| :--- | :--- | :--- | :--- |
| **Masc.** | Most Consonants | **il** (il libro) | **i** (i libri) |
| **Masc.** | z, s+cons, ps, gn, x, y | **lo** (lo stadio) | **gli** (gli stadi) |
| **Masc.** | Vowel | **l'** (l'amico) | **gli** (gli amici) |
| **Fem.** | Consonant | **la** (la casa) | **le** (le case) |
| **Fem.** | Vowel | **l'** (l'idea) | **le** (le idee) |

### 2. The Indefinite Articles (A / An)
Used for non-specific things. These are only used in the **singular**:

| Gender | Starting with... | Article | Example |
| :--- | :--- | :--- | :--- |
| **Masc.** | Most Consonants & Vowels | **un** | un pane, un ufficio |
| **Masc.** | z, s+cons, ps, gn, x, y | **uno** | uno zaino, uno studente |
| **Fem.** | Consonant | **una** | una pizza, una banca |
| **Fem.** | Vowel | **un'** | un'arancia, un'agenda |

**CRITICAL RULE:**
- Masculine **un** NEVER takes an apostrophe (un amico).
- Feminine **una** MUST take an apostrophe before a vowel (un'amica).`
    },
    vocabulary: [
      { italian: "Il libro / I libri", english: "The book / The books" },
      { italian: "Lo studente / Gli studenti", english: "The student / The students" },
      { italian: "L'amico / Gli amici", english: "The friend / The friends (masc)" },
      { italian: "La casa / Le case", english: "The house / The houses" },
      { italian: "Un ragazzo / Una ragazza", english: "A boy / A girl" },
      { italian: "Uno zaino", english: "A backpack" },
      { italian: "Un'idea", english: "An idea" },
      { italian: "Un amico / Un'amica", english: "A friend (m) / A friend (f)" },
      { italian: "L'ufficio", english: "The office" },
      { italian: "Psicologo", english: "Psychologist", pronunciation: "SEE-KO-LO-GO" },
    ],
    examples: [
      { italian: "Lo psicologo parla con lo studente.", english: "The psychologist speaks with the student." },
      { italian: "Ho un'amica italiana e un amico americano.", english: "I have an Italian female friend and an American male friend." },
      { italian: "Gli zaini sono nell'armadio.", english: "The backpacks are in the closet." },
    ],
    dialogue: {
      title: "In Cartoleria",
      lines: [
        { speaker: "Cliente", italian: "Buongiorno! Vorrei un quaderno e una penna.", english: "Good morning! I would like a notebook and a pen." },
        { speaker: "Commesso", italian: "Certamente. Ecco il quaderno e la penna.", english: "Certainly. Here is the notebook and the pen." },
        { speaker: "Cliente", italian: "Prendo anche lo zaino blu e l'agenda rossa.", english: "I'll also take the blue backpack and the red planner." },
        { speaker: "Commesso", italian: "Ottima scelta! Sono 35 euro.", english: "Great choice! That's 35 euros." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Which masculine nouns take 'lo' or 'uno'?",
        options: ["Vowels only", "z, ps, gn, x, y, and s+consonant", "All consonants"],
        correctAnswer: "z, ps, gn, x, y, and s+consonant"
      }
    ],
    exercises: [
      // — Indefinite Articles (best 10, covering all 4 forms) —
      { id: "3_ind_1", type: "fill-in-the-blank", question: "___ ragazzo (a boy)", correctAnswer: "un", explanation: "'un' — masculine, starts with a regular consonant." },
      { id: "3_ind_2", type: "fill-in-the-blank", question: "___ ragazza (a girl)", correctAnswer: "una", explanation: "'una' — feminine, starts with a consonant." },
      { id: "3_ind_3", type: "fill-in-the-blank", question: "___ amico (a male friend)", correctAnswer: "un", explanation: "'un' — masculine before a vowel. Never 'un'' for masculine!" },
      { id: "3_ind_4", type: "fill-in-the-blank", question: "___ amica (a female friend)", correctAnswer: "un'", explanation: "'un'' — feminine before a vowel always takes an apostrophe." },
      { id: "3_ind_5", type: "fill-in-the-blank", question: "___ studente (a student)", correctAnswer: "uno", explanation: "'uno' — masculine before s+consonant (st-)." },
      { id: "3_ind_6", type: "fill-in-the-blank", question: "___ zaino (a backpack)", correctAnswer: "uno", explanation: "'uno' — masculine before z." },
      { id: "3_ind_7", type: "fill-in-the-blank", question: "___ idea (an idea)", correctAnswer: "un'", explanation: "'un'' — feminine before a vowel." },
      { id: "3_ind_8", type: "fill-in-the-blank", question: "___ arancia (an orange)", correctAnswer: "un'", explanation: "'un'' — feminine before a vowel (ar-)." },
      { id: "3_ind_9", type: "fill-in-the-blank", question: "___ isola (an island)", correctAnswer: "un'", explanation: "'un'' — feminine before a vowel (is-)." },
      { id: "3_ind_10", type: "fill-in-the-blank", question: "___ psicologo (a psychologist)", correctAnswer: "uno", explanation: "'uno' — masculine before ps- (treated like s+consonant)." },

      // — Definite Articles (best 10, covering il / lo / l' masc / la / l' fem) —
      { id: "3_def_1", type: "fill-in-the-blank", question: "___ ragazzo (the boy)", correctAnswer: "il", explanation: "'il' — masculine, regular consonant." },
      { id: "3_def_2", type: "fill-in-the-blank", question: "___ ragazza (the girl)", correctAnswer: "la", explanation: "'la' — feminine, consonant." },
      { id: "3_def_3", type: "fill-in-the-blank", question: "___ amico (the male friend)", correctAnswer: "l'", explanation: "'l'' — masculine before a vowel (elision)." },
      { id: "3_def_4", type: "fill-in-the-blank", question: "___ amica (the female friend)", correctAnswer: "l'", explanation: "'l'' — feminine before a vowel (elision). Same form as masculine here!" },
      { id: "3_def_5", type: "fill-in-the-blank", question: "___ studente (the student)", correctAnswer: "lo", explanation: "'lo' — masculine before s+consonant (st-)." },
      { id: "3_def_6", type: "fill-in-the-blank", question: "___ zaino (the backpack)", correctAnswer: "lo", explanation: "'lo' — masculine before z." },
      { id: "3_def_7", type: "fill-in-the-blank", question: "___ idea (the idea)", correctAnswer: "l'", explanation: "'l'' — feminine before a vowel." },
      { id: "3_def_8", type: "fill-in-the-blank", question: "___ arancia (the orange)", correctAnswer: "l'", explanation: "'l'' — feminine before a vowel (ar-)." },
      { id: "3_def_9", type: "fill-in-the-blank", question: "___ stazione (the station)", correctAnswer: "la", explanation: "'la' — feminine, starts with a consonant (st-)." },
      { id: "3_def_10", type: "fill-in-the-blank", question: "___ psicologo (the psychologist)", correctAnswer: "lo", explanation: "'lo' — masculine before ps- (same rule as s+consonant)." },
    ]
  },
  {
    id: 4,
    title: "Prepositions of Place",
    slug: "preposizioni-luogo",
    grammar: {
      title: "Le Preposizioni di Luogo — Where Things Are",
      content: `Location prepositions answer the question *dove?* (where?). Unlike the articulated prepositions covered later (del, alla, nel…), these are used to describe **spatial relationships** between people and objects.

## Le Preposizioni di Luogo (Location Prepositions)

| Italian | English | Notes |
|---|---|---|
| **sopra** | above / on top of | Also *su* for "on a surface" |
| **sotto** | under / below | |
| **davanti a** | in front of | Always followed by **a** |
| **dietro a / di** | behind | *dietro a* or *dietro di* (both correct) |
| **vicino a** | near / next to | Always followed by **a** |
| **lontano da** | far from | Always followed by **da** |
| **accanto a** | beside / next to | Always followed by **a** |
| **di fronte a** | opposite / facing | Always followed by **a** |
| **tra / fra** | between | Interchangeable |
| **dentro** | inside | Also *dentro a* + noun |
| **fuori** | outside | Also *fuori da* + noun |
| **a destra di** | to the right of | |
| **a sinistra di** | to the left of | |
| **in mezzo a** | in the middle of | |

---

## The Rule: Preposition + Article

Many location prepositions are followed by **a**, **da**, or **di**, which then combine with the definite article:

- *davanti **al** bar* (in front of the bar) → a + il = al
- *vicino **alla** stazione* (near the station) → a + la = alla
- *lontano **dall'**aeroporto* (far from the airport) → da + l' = dall'
- *accanto **agli** studenti* (next to the students) → a + gli = agli

> **Tip:** Learn these as fixed chunks: *vicino a*, *lontano da*, *davanti a*, *dietro a*, *accanto a*, *di fronte a*.

---

## C'è / Ci sono (There is / There are)

These are essential for describing locations:

- *C'è un bar davanti alla scuola.* — There is a bar in front of the school.
- *Ci sono due sedie accanto al tavolo.* — There are two chairs next to the table.

---

## Dove + Essere (Where + To Be)

- *Dov'è il gatto?* — Where is the cat?
- *Il gatto è sotto il letto.* — The cat is under the bed.
- *Dove sono le chiavi?* — Where are the keys?
- *Le chiavi sono sopra il tavolo.* — The keys are on the table.`
    },
    vocabulary: [
      { italian: "Sopra", english: "Above / On top of", pronunciation: "SO-pra" },
      { italian: "Sotto", english: "Under / Below", pronunciation: "SOT-to" },
      { italian: "Davanti a", english: "In front of", pronunciation: "da-VAN-tee ah" },
      { italian: "Dietro a", english: "Behind", pronunciation: "dee-EH-tro ah" },
      { italian: "Vicino a", english: "Near / Next to", pronunciation: "vee-CHEE-no ah" },
      { italian: "Lontano da", english: "Far from", pronunciation: "lon-TAH-no dah" },
      { italian: "Accanto a", english: "Beside / Next to", pronunciation: "ak-KAN-to ah" },
      { italian: "Di fronte a", english: "Opposite / Facing", pronunciation: "dee FRON-teh ah" },
      { italian: "Tra / Fra", english: "Between / Among", pronunciation: "trah / frah" },
      { italian: "Dentro", english: "Inside", pronunciation: "DEN-tro" },
      { italian: "Fuori", english: "Outside", pronunciation: "FWOH-ree" },
      { italian: "A destra di", english: "To the right of", pronunciation: "ah DES-trah dee" },
      { italian: "A sinistra di", english: "To the left of", pronunciation: "ah see-NEES-trah dee" },
      { italian: "In mezzo a", english: "In the middle of", pronunciation: "een MED-zo ah" },
      { italian: "C'è / Ci sono", english: "There is / There are", pronunciation: "CHEH / chee SO-no" },
      { italian: "Dov'è?", english: "Where is it?", pronunciation: "do-VEH" },
    ],
    examples: [
      { italian: "Il gatto è sotto il letto.", english: "The cat is under the bed." },
      { italian: "La banca è di fronte alla farmacia.", english: "The bank is opposite the pharmacy." },
      { italian: "C'è un parco vicino alla scuola.", english: "There is a park near the school." },
      { italian: "Le chiavi sono dentro la borsa, non sopra il tavolo.", english: "The keys are inside the bag, not on the table." },
      { italian: "Il supermercato è tra la pizzeria e il bar.", english: "The supermarket is between the pizzeria and the bar." },
      { italian: "La macchina è parcheggiata fuori dal garage, a destra del cancello.", english: "The car is parked outside the garage, to the right of the gate." },
    ],
    dialogue: {
      title: "Dov'è Tutto? (Where Is Everything?)",
      lines: [
        { speaker: "Giulia", italian: "Marco, hai visto il mio telefono? Non lo trovo!", english: "Marco, have you seen my phone? I can't find it!" },
        { speaker: "Marco", italian: "Hmm... non è sul divano? Di solito lo lasci lì.", english: "Hmm... isn't it on the sofa? You usually leave it there." },
        { speaker: "Giulia", italian: "No, ho già guardato sopra e sotto il divano. Niente.", english: "No, I already looked above and under the sofa. Nothing." },
        { speaker: "Marco", italian: "E dentro la borsa? O accanto alle chiavi?", english: "And inside the bag? Or next to the keys?" },
        { speaker: "Giulia", italian: "Le chiavi sono davanti alla porta, ma il telefono non è accanto a loro.", english: "The keys are in front of the door, but the phone isn't next to them." },
        { speaker: "Marco", italian: "Aspetta — c'è qualcosa tra il cuscino e il bracciolo della poltrona!", english: "Wait — there's something between the cushion and the armrest of the armchair!" },
        { speaker: "Giulia", italian: "Sì! Eccolo! Era in mezzo ai cuscini. Grazie mille!", english: "Yes! There it is! It was in the middle of the cushions. Thank you so much!" },
        { speaker: "Marco", italian: "Prego! La prossima volta mettilo sopra il tavolo, di fronte al televisore.", english: "You're welcome! Next time put it on the table, in front of the TV." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Where does Marco first suggest the phone might be?",
        options: ["Inside the bag", "On the sofa", "In front of the door", "Under the table"],
        correctAnswer: "On the sofa"
      },
      {
        question: "Where was the phone eventually found?",
        options: ["Under the sofa", "Inside the bag", "Between the cushions in the armchair", "Next to the keys"],
        correctAnswer: "Between the cushions in the armchair"
      },
      {
        question: "What does Marco suggest Giulia do next time?",
        options: ["Put the phone inside the bag", "Leave it on the sofa", "Put it on the table in front of the TV", "Keep it next to the keys"],
        correctAnswer: "Put it on the table in front of the TV"
      },
    ],
    exercises: [
      {
        id: "4p_1",
        type: "multiple-choice",
        question: "The cat is under the bed. Which is correct?",
        options: ["Il gatto è sopra il letto.", "Il gatto è sotto il letto.", "Il gatto è dentro il letto.", "Il gatto è fuori il letto."],
        correctAnswer: "Il gatto è sotto il letto.",
        explanation: "'Sotto' = under/below."
      },
      {
        id: "4p_2",
        type: "multiple-choice",
        question: "How do you say 'in front of the school'?",
        options: ["Dietro alla scuola", "Vicino la scuola", "Davanti alla scuola", "Sopra la scuola"],
        correctAnswer: "Davanti alla scuola",
        explanation: "'Davanti a' = in front of. 'a + la = alla'."
      },
      {
        id: "4p_3",
        type: "fill-in-the-blank",
        question: "La farmacia è ___ fronte alla banca. (The pharmacy is opposite the bank.)",
        correctAnswer: "di",
        explanation: "'Di fronte a' is the full expression meaning 'opposite / facing'."
      },
      {
        id: "4p_4",
        type: "multiple-choice",
        question: "Which sentence means 'The keys are next to the door'?",
        options: ["Le chiavi sono lontano dalla porta.", "Le chiavi sono accanto alla porta.", "Le chiavi sono dentro la porta.", "Le chiavi sono tra la porta."],
        correctAnswer: "Le chiavi sono accanto alla porta.",
        explanation: "'Accanto a' = next to / beside. 'a + la = alla'."
      },
      {
        id: "4p_5",
        type: "fill-in-the-blank",
        question: "Il supermercato è ___ la pizzeria e il bar. (The supermarket is between the pizzeria and the bar.)",
        correctAnswer: "tra",
        explanation: "'Tra' (or 'fra') = between. It does not fuse with articles."
      },
      {
        id: "4p_6",
        type: "translation",
        question: "Translate: 'There is a park near the station.'",
        correctAnswer: "C'è un parco vicino alla stazione.",
        explanation: "'Vicino a' = near. 'a + la = alla'. 'C'è' = there is."
      },
      {
        id: "4p_7",
        type: "multiple-choice",
        question: "How do you say 'far from the airport'?",
        options: ["Vicino all'aeroporto", "Fuori dall'aeroporto", "Lontano dall'aeroporto", "Dietro all'aeroporto"],
        correctAnswer: "Lontano dall'aeroporto",
        explanation: "'Lontano da' = far from. 'da + l' = dall'."
      },
      {
        id: "4p_8",
        type: "fill-in-the-blank",
        question: "Dov'è il libro? È ___ il tavolo. (Where is the book? It's on the table.)",
        correctAnswer: "sul",
        explanation: "'Su + il = sul'. 'Sopra il tavolo' also works, but 'sul tavolo' is more natural for flat surfaces."
      },
      {
        id: "4p_9",
        type: "multiple-choice",
        question: "What does 'C'è' mean?",
        options: ["There are", "There is", "Where is", "Here is"],
        correctAnswer: "There is",
        explanation: "'C'è' = there is (singular). 'Ci sono' = there are (plural)."
      },
      {
        id: "4p_10",
        type: "multiple-choice",
        question: "How do you say 'The bathroom is to the left of the bedroom'?",
        options: ["Il bagno è a destra della camera.", "Il bagno è a sinistra della camera.", "Il bagno è di fronte alla camera.", "Il bagno è in mezzo alla camera."],
        correctAnswer: "Il bagno è a sinistra della camera.",
        explanation: "'A sinistra di' = to the left of. 'di + la = della'."
      },
      {
        id: "4p_11",
        type: "translation",
        question: "Translate: 'The dog is outside the house.'",
        correctAnswer: "Il cane è fuori dalla casa.",
        explanation: "'Fuori da' = outside. 'da + la = dalla'."
      },
      {
        id: "4p_12",
        type: "fill-in-the-blank",
        question: "___ sono due sedie accanto al tavolo. (There are two chairs next to the table.)",
        correctAnswer: "Ci sono",
        explanation: "'Ci sono' = there are (plural). Use 'c'è' for singular."
      },
      {
        id: "4p_13",
        type: "reorder",
        question: "Reorder: 'The bag is in the middle of the room.'",
        words: ["La", "borsa", "è", "in", "mezzo", "alla", "stanza."],
        correctAnswer: ["La", "borsa", "è", "in", "mezzo", "alla", "stanza."]
      },
      {
        id: "4p_14",
        type: "multiple-choice",
        question: "What is the difference between 'vicino a' and 'accanto a'?",
        options: [
          "They are identical in meaning",
          "'Vicino a' means near (general proximity), 'accanto a' means right beside (direct adjacency)",
          "'Vicino a' is formal, 'accanto a' is informal",
          "'Vicino a' means far, 'accanto a' means near"
        ],
        correctAnswer: "'Vicino a' means near (general proximity), 'accanto a' means right beside (direct adjacency)",
        explanation: "'Vicino a' can mean generally nearby; 'accanto a' implies being right next to, side by side."
      },
      {
        id: "4p_15",
        type: "fill-in-the-blank",
        question: "Il gatto è ___ il divano e la poltrona. (The cat is between the sofa and the armchair.)",
        correctAnswer: "tra",
        explanation: "'Tra' (or 'fra') = between."
      },
      {
        id: "4p_16",
        type: "translation",
        question: "Translate: 'Where is the pharmacy? It is opposite the bank.'",
        correctAnswer: "Dov'è la farmacia? È di fronte alla banca.",
        explanation: "'Di fronte a' = opposite/facing. 'a + la = alla'."
      },
      {
        id: "4p_17",
        type: "reorder",
        question: "Reorder: 'There is a supermarket to the right of the park.'",
        words: ["C'è", "un", "supermercato", "a", "destra", "del", "parco."],
        correctAnswer: ["C'è", "un", "supermercato", "a", "destra", "del", "parco."]
      },
    ]
  },
  {
    id: 5,
    title: "Present Tense: Regular & Irregular Verbs",
    slug: "regular-verbs",
    grammar: {
      title: "The Present Tense: Regular & Irregular",
      content: `The present tense (**il presente**) is used for current actions and general facts.

### 1. Regular Patterns
Italian verbs are divided into three groups: **-are**, **-ere**, and **-ire**. 

| Pronoun | -ARE (Parlare) | -ERE (Vedere) | -IRE (Dormire) |
| :--- | :--- | :--- | :--- |
| **Io** | parl**o** | ved**o** | dorm**o** |
| **Tu** | parl**i** | ved**i** | dorm**i** |
| **Lui/Lei** | parl**a** | ved**e** | dorm**e** |
| **Noi** | parl**iamo** | ved**iamo** | dorm**iamo** |
| **Voi** | parl**ate** | ved**ete** | dorm**ite** |
| **Loro** | parl**ano** | ved**ono** | dorm**ono** |

---

### 2. The Great Five: Common Irregular Verbs
These five verbs are used in almost every sentence. Memorize these patterns first!

> [!TIP]
> **Quick Patterns for Quick Learning:**
> - **Venire** (*to come*): vengo, vieni, viene, veniamo, venite, vengono
> - **Fare** (*to do/make*): faccio, fai, fa, facciamo, fate, fanno
> - **Andare** (*to go*): vado, vai, va, andiamo, andate, vanno
> - **Stare** (*to be/stay*): sto, stai, sta, stiamo, state, stanno
> - **Bere** (*to drink*): bevo, bevi, beve, beviamo, bevete, bevono`
    },
    vocabulary: [
      { italian: "Parlare", english: "To speak" },
      { italian: "Mangiare", english: "To eat" },
      { italian: "Dormire", english: "To sleep" },
      { italian: "Andare", english: "To go" },
      { italian: "Fare", english: "To do/make" },
      { italian: "Venire", english: "To come" },
      { italian: "Stare", english: "To stay/be" },
      { italian: "Bere", english: "To drink" },
      { italian: "Colazione", english: "Breakfast" },
      { italian: "Pausa", english: "Pause / Break" },
      { italian: "Caffè macchiato", english: "Expresso with a drop of milk" },
      { italian: "Cornetto", english: "Croissant / Pastry" },
      { italian: "Sfoglia", english: "Puff pastry" },
      { italian: "Il resto", english: "The change" },
    ],
    examples: [
      { italian: "Io parlo italiano.", english: "I speak Italian." },
      { italian: "Vado a casa.", english: "I'm going home." },
      { italian: "Che cosa fai?", english: "What are you doing?" },
      { italian: "Noi beviamo un caffè.", english: "We're drinking a coffee." },
    ],
    dialogue: {
      title: "Al Bar a Firenze (At the Bar in Florence)",
      lines: [
        { speaker: "Marco", italian: "Ragazzi, sono stanco. Facciamo cinque minuti di pausa?", english: "Guys, I'm tired. Shall we take a five-minute break?" },
        { speaker: "Anna", italian: "Va bene. Andiamo al bar?", english: "Okay. Shall we go to the bar?" },
        { speaker: "Alberto", italian: "Buona idea, mi piace fare colazione al bar.", english: "Good idea, I like having breakfast at the bar." },
        { speaker: "Cameriere", italian: "Buongiorno! Prego...", english: "Good morning! Go ahead..." },
        { speaker: "Marco", italian: "Buongiorno. Allora, io prendo un caffè.", english: "Good morning. Then, I'll have a coffee." },
        { speaker: "Cameriere", italian: "Macchiato?", english: "Macchiato?" },
        { speaker: "Marco", italian: "No, normale. Grazie.", english: "No, regular. Thanks." },
        { speaker: "Anna", italian: "Per me un cappuccino e un cornetto.", english: "For me, a cappuccino and a croissant." },
        { speaker: "Cameriere", italian: "Con la crema o con la marmellata?", english: "With cream or with jam?" },
        { speaker: "Anna", italian: "Mmm... preferisco il cornetto con la marmellata, la crema non mi piace.", english: "Mmm... I prefer the croissant with jam, I don't like cream." },
        { speaker: "Alberto", italian: "Io vorrei un latte caldo e una sfoglia.", english: "I would like a hot milk and a puff pastry." },
        { speaker: "Cameriere", italian: "Allora sono: un caffè, un cappuccio, un latte, una sfoglia e un cornetto, giusto?", english: "So that is: a coffee, a cappuccino, a milk, a puff pastry, and a croissant, right?" },
        { speaker: "Marco", italian: "Sì, esatto. Possiamo sederci al tavolo?", english: "Yes, exactly. Can we sit at the table?" },
        { speaker: "Cameriere", italian: "Sì, certo. (Dopo cinque minuti) Ecco il caffè, il cornetto e il cappuccino, il latte e la sfoglia.", english: "Yes, sure. (After five minutes) Here is the coffee, the croissant and the cappuccino, the milk and the puff pastry." },
        { speaker: "Marco", italian: "Perfetto. Quant'è?", english: "Perfect. How much is it?" },
        { speaker: "Cameriere", italian: "12 euro e 50.", english: "12 euros and 50." },
        { speaker: "Marco", italian: "Ragazzi, pago io. Ecco a Lei.", english: "Guys, I'll pay. There you go." },
        { speaker: "Cameriere", italian: "Grazie. Porto subito il resto.", english: "Thank you. I'll bring the change right away." },
        { speaker: "Alberto", italian: "Però ragazzi... 12 euro e 50 è veramente tanto...", english: "But guys... 12 euros and 50 is really a lot..." },
        { speaker: "Marco", italian: "Sì, ma considera il posto...", english: "Yes, but consider the place..." },
        { speaker: "Anna", italian: "E poi... siamo a Firenze!", english: "And after all... we are in Florence!" },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Where is Giulia going on Saturday?",
        options: ["Rome", "Florence", "Milan"],
        correctAnswer: "Florence"
      }
    ],
    exercises: [
      {
        id: "4_irreg_1",
        type: "fill-in-the-blank",
        question: "Nino, perché non ___ (venire) a Firenze sabato?",
        correctAnswer: "vieni",
        explanation: "The informal 'tu' form of 'venire' is 'vieni'."
      },
      {
        id: "4_irreg_2",
        type: "fill-in-the-blank",
        question: "Buongiorno signora Martini. Come ___ (stare)?",
        correctAnswer: "sta",
        explanation: "With formal 'Lei', we use 'sta'."
      },
      {
        id: "4_irreg_3",
        type: "fill-in-the-blank",
        question: "Domani Marco e Francesca ___ (venire) a cena a casa mia.",
        correctAnswer: "vengono",
        explanation: "Third person plural (loro) of 'venire' is 'vengono'."
      },
      {
        id: "4_irreg_4",
        type: "fill-in-the-blank",
        question: "Per stare in forma io ___ (bere) minimo 2 litri di acqua al giorno.",
        correctAnswer: "bevo"
      },
      {
        id: "4_irreg_5",
        type: "fill-in-the-blank",
        question: "I miei genitori ___ (andare) in vacanza la prossima settimana.",
        correctAnswer: "vanno"
      },
      {
        id: "4_irreg_6",
        type: "fill-in-the-blank",
        question: "Molti italiani ___ (bere) un bicchiere di vino a pranzo o a cena.",
        correctAnswer: "bevono"
      },
      {
        id: "4_irreg_7",
        type: "fill-in-the-blank",
        question: "In questo periodo lavoro molto e ___ (stare) fuori casa tutto il giorno.",
        correctAnswer: "sto"
      },
      {
        id: "4_irreg_8a",
        type: "fill-in-the-blank",
        question: "Ragazzi, che cosa ___ (noi - fare) stasera?",
        correctAnswer: "facciamo"
      },
      {
        id: "4_irreg_8b",
        type: "fill-in-the-blank",
        question: "Noi ___ (andare) al cinema?",
        correctAnswer: "andiamo"
      },
      {
        id: "4_irreg_9",
        type: "fill-in-the-blank",
        question: "Io e la mia fidanzata ___ (stare) insieme da due anni.",
        correctAnswer: "stiamo"
      },
      {
        id: "4_irreg_10a",
        type: "fill-in-the-blank",
        question: "Io ___ (fare) una doccia e ___ subito da te.",
        correctAnswer: "faccio"
      },
      {
        id: "4_irreg_10b",
        type: "fill-in-the-blank",
        question: "Io faccio una doccia e ___ (venire) subito da te.",
        correctAnswer: "vengo"
      },
      {
        id: "4_irreg_11a",
        type: "fill-in-the-blank",
        question: "Allora ragazzi, cosa ___ (voi - fare)?",
        correctAnswer: "fate"
      },
      {
        id: "4_irreg_11b",
        type: "fill-in-the-blank",
        question: "Voi ___ (stare) a casa o ___ alla festa con noi?",
        correctAnswer: "state"
      },
      {
        id: "4_irreg_11c",
        type: "fill-in-the-blank",
        question: "Voi state a casa o ___ (venire) alla festa con noi?",
        correctAnswer: "venite"
      },
      {
        id: "4_irreg_12",
        type: "fill-in-the-blank",
        question: "Mike e Dennis sono studenti motivati e ___ (fare) i compiti ogni giorno.",
        correctAnswer: "fanno"
      }
    ]
  },
  {
    id: 6,
    title: "Numbers, Time & Dates",
    slug: "numbers-time",
    grammar: {
      title: "I Numeri, l'Orario e le Date",
      content: `Numbers, time, and dates are essential for everyday Italian life — from catching a train to making plans with friends.

## I Numeri (Numbers)

**0–20:**
| 0 zero | 1 uno | 2 due | 3 tre | 4 quattro | 5 cinque |
|---|---|---|---|---|---|
| 6 sei | 7 sette | 8 otto | 9 nove | 10 dieci | 11 undici |
| 12 dodici | 13 tredici | 14 quattordici | 15 quindici | 16 sedici | |
| 17 diciassette | 18 diciotto | 19 diciannove | 20 venti | | |

**20–100 (tens):**
- 20 **venti**, 30 **trenta**, 40 **quaranta**, 50 **cinquanta**
- 60 **sessanta**, 70 **settanta**, 80 **ottanta**, 90 **novanta**, 100 **cento**

**Compound numbers:** Drop the final vowel of the ten before *uno* and *otto*:
- 21 → vent**uno** (not *ventiuno*), 28 → vent**otto**
- 31 → trent**uno**, 38 → trent**otto**

---

## L'Orario (Telling the Time)

**Key question:** *Che ore sono?* / *Che ora è?* — What time is it?

| Rule | Example |
|---|---|
| **È l'una** — use *è* only for 1:00 | *È l'una.* (It's 1 o'clock.) |
| **Sono le [number]** — use *sono le* for all others | *Sono le tre.* (It's 3 o'clock.) |
| **e un quarto** — quarter past | *Sono le due e un quarto.* (2:15) |
| **e mezza / e mezzo** — half past | *Sono le cinque e mezza.* (5:30) |
| **meno un quarto** — quarter to | *Sono le otto meno un quarto.* (7:45) |
| **mezzogiorno** — noon | *È mezzogiorno.* |
| **mezzanotte** — midnight | *È mezzanotte.* |

> **Tip:** For *di mattina* (a.m.) and *di sera* / *di pomeriggio* (p.m.) just add these after the time:
> *Sono le nove di mattina.* (9 a.m.) — *Sono le nove di sera.* (9 p.m.)

---

## I Giorni della Settimana (Days of the Week)

Days are **not capitalised** in Italian. The week starts on **Monday**.

| Lunedì | Martedì | Mercoledì | Giovedì | Venerdì | Sabato | Domenica |
|---|---|---|---|---|---|---|
| Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |

> *Oggi è lunedì.* — Today is Monday.
> *Il lunedì vado in palestra.* — On Mondays I go to the gym. (use *il* for habitual actions)

---

## I Mesi e le Date (Months & Dates)

Months are also **not capitalised**. Dates use cardinal numbers (not ordinal like English):

**Il primo** is the only exception — use *il primo* for the 1st, then *il due, il tre…* for the rest.

| gennaio | febbraio | marzo | aprile | maggio | giugno |
|---|---|---|---|---|---|
| luglio | agosto | settembre | ottobre | novembre | dicembre |

**Saying a date:**
- *Oggi è il quindici marzo.* — Today is the 15th of March.
- *Il mio compleanno è il primo luglio.* — My birthday is July 1st.

**Asking the date:**
- *Quanti ne abbiamo oggi?* — What's today's date? (Lit: How many do we have today?)
- *Che giorno è oggi?* — What day is today?`
    },
    vocabulary: [
      { italian: "Zero / Uno / Due", english: "Zero / One / Two", pronunciation: "ZEH-ro / OO-no / DOO-eh" },
      { italian: "Tre / Quattro / Cinque", english: "Three / Four / Five", pronunciation: "TREH / KWAT-tro / CHEEN-kweh" },
      { italian: "Dieci / Venti / Cento", english: "Ten / Twenty / One hundred", pronunciation: "dee-EH-chee / VEN-tee / CHEN-to" },
      { italian: "Che ore sono?", english: "What time is it?", pronunciation: "KEH OH-reh SO-no" },
      { italian: "È l'una", english: "It's one o'clock", pronunciation: "EH LOO-na" },
      { italian: "Sono le tre", english: "It's three o'clock", pronunciation: "SO-no leh TREH" },
      { italian: "E mezza", english: "Half past (lit: and half)", pronunciation: "EH MED-za" },
      { italian: "E un quarto", english: "Quarter past (lit: and a quarter)", pronunciation: "EH oon KWAR-to" },
      { italian: "Meno un quarto", english: "Quarter to (lit: minus a quarter)", pronunciation: "MEH-no oon KWAR-to" },
      { italian: "Mezzogiorno", english: "Noon / Midday", pronunciation: "med-zo-JOR-no" },
      { italian: "Mezzanotte", english: "Midnight", pronunciation: "med-za-NOT-teh" },
      { italian: "Lunedì / Martedì", english: "Monday / Tuesday", pronunciation: "loo-neh-DEE / mar-teh-DEE" },
      { italian: "Mercoledì / Giovedì", english: "Wednesday / Thursday", pronunciation: "mer-ko-leh-DEE / jo-veh-DEE" },
      { italian: "Venerdì / Sabato / Domenica", english: "Friday / Saturday / Sunday", pronunciation: "ve-ner-DEE / SAH-ba-to / do-MEH-ni-ka" },
      { italian: "Gennaio / Febbraio / Marzo", english: "January / February / March", pronunciation: "jen-NAH-yo / feb-BRAH-yo / MAR-zo" },
      { italian: "Aprile / Maggio / Giugno", english: "April / May / June", pronunciation: "ah-PREE-leh / MAD-jo / JOO-nyo" },
      { italian: "Luglio / Agosto / Settembre", english: "July / August / September", pronunciation: "LOOL-yo / ah-GOS-to / set-TEM-breh" },
      { italian: "Ottobre / Novembre / Dicembre", english: "October / November / December", pronunciation: "ot-TOH-breh / no-VEM-breh / dee-CHEM-breh" },
      { italian: "Oggi / Domani / Ieri", english: "Today / Tomorrow / Yesterday", pronunciation: "OJ-jee / do-MAH-nee / YEH-ree" },
      { italian: "Il compleanno", english: "Birthday", pronunciation: "eel com-pleh-AN-no" },
    ],
    examples: [
      { italian: "Sono le sette e mezza di mattina.", english: "It's half past seven in the morning." },
      { italian: "Il treno parte alle nove e un quarto.", english: "The train leaves at quarter past nine." },
      { italian: "Oggi è mercoledì, il ventidue marzo.", english: "Today is Wednesday, the 22nd of March." },
      { italian: "Il mio compleanno è il primo agosto.", english: "My birthday is the 1st of August." },
      { italian: "Ci vediamo venerdì alle tre meno un quarto.", english: "We'll see each other on Friday at quarter to three." },
      { italian: "Il museo è aperto dal martedì alla domenica.", english: "The museum is open from Tuesday to Sunday." },
    ],
    dialogue: {
      title: "Un Appuntamento (An Appointment)",
      lines: [
        { speaker: "Sara", italian: "Ciao Marco! Che ore sono?", english: "Hi Marco! What time is it?" },
        { speaker: "Marco", italian: "Sono le undici e un quarto. Perché?", english: "It's quarter past eleven. Why?" },
        { speaker: "Sara", italian: "Ho un appuntamento dal medico a mezzogiorno!", english: "I have a doctor's appointment at noon!" },
        { speaker: "Marco", italian: "Quando? Oggi?", english: "When? Today?" },
        { speaker: "Sara", italian: "Sì, oggi è giovedì, il tre aprile. Ho prenotato due settimane fa.", english: "Yes, today is Thursday, the 3rd of April. I booked it two weeks ago." },
        { speaker: "Marco", italian: "Non c'è problema, hai ancora quarantacinque minuti.", english: "No problem, you still have forty-five minutes." },
        { speaker: "Sara", italian: "Meno male! E tu, cosa fai questo weekend?", english: "Thank goodness! And you, what are you doing this weekend?" },
        { speaker: "Marco", italian: "Sabato vado al mercato alle nove di mattina, e domenica riposo.", english: "On Saturday I'm going to the market at nine in the morning, and on Sunday I'm resting." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "What time is Sara's appointment?",
        options: ["At eleven fifteen", "At noon", "At quarter to twelve"],
        correctAnswer: "At noon"
      },
      {
        question: "What day is the dialogue set on?",
        options: ["Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Thursday"
      },
      {
        question: "What does Marco do on Sunday?",
        options: ["Goes to the market", "Goes to the doctor", "Rests"],
        correctAnswer: "Rests"
      },
    ],
    exercises: [
      {
        id: "5_1",
        type: "multiple-choice",
        question: "How do you say 'It's three o'clock' in Italian?",
        options: ["È le tre.", "Sono le tre.", "Sono i tre.", "È tre."],
        correctAnswer: "Sono le tre.",
        explanation: "Use 'sono le' for all hours except 1 o'clock, noon, and midnight."
      },
      {
        id: "5_2",
        type: "multiple-choice",
        question: "How do you say 'It's one o'clock'?",
        options: ["Sono l'una.", "È l'una.", "Sono le una.", "È una."],
        correctAnswer: "È l'una.",
        explanation: "Only 1 o'clock uses 'è' (singular) instead of 'sono le'."
      },
      {
        id: "5_3",
        type: "translation",
        question: "Translate: 'It's half past eight.'",
        correctAnswer: "Sono le otto e mezza.",
        explanation: "'E mezza' means half past. Use 'sono le' because 8 ≠ 1."
      },
      {
        id: "5_4",
        type: "fill-in-the-blank",
        question: "Sono le quattro ___ un quarto. (It's quarter past four.)",
        correctAnswer: "e",
        explanation: "'E un quarto' = 'and a quarter' = quarter past."
      },
      {
        id: "5_5",
        type: "multiple-choice",
        question: "What is 'quarter to seven' in Italian?",
        options: ["Sono le sette e un quarto.", "Sono le sette meno un quarto.", "Sono le sei e mezza.", "È l'una meno un quarto."],
        correctAnswer: "Sono le sette meno un quarto.",
        explanation: "'Meno un quarto' means 'minus a quarter', i.e., quarter to."
      },
      {
        id: "5_6",
        type: "multiple-choice",
        question: "Which number is 'quarantacinque'?",
        options: ["54", "45", "40", "55"],
        correctAnswer: "45",
        explanation: "Quaranta (40) + cinque (5) = quarantacinque (45)."
      },
      {
        id: "5_7",
        type: "fill-in-the-blank",
        question: "Il numero 21 si scrive: vent___ (drop the final vowel of venti before uno)",
        correctAnswer: "uno",
        explanation: "Ventuno — the final 'i' of venti is dropped before uno and otto."
      },
      {
        id: "5_8",
        type: "translation",
        question: "Translate: 'Today is Monday.'",
        correctAnswer: "Oggi è lunedì.",
        explanation: "Days of the week are not capitalised in Italian."
      },
      {
        id: "5_9",
        type: "multiple-choice",
        question: "Which day comes after 'mercoledì'?",
        options: ["Martedì", "Giovedì", "Venerdì", "Sabato"],
        correctAnswer: "Giovedì",
        explanation: "The order is: lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica."
      },
      {
        id: "5_10",
        type: "multiple-choice",
        question: "How do you say 'On Mondays I go to the gym' (habitual)?",
        options: ["Lunedì vado in palestra.", "Il lunedì vado in palestra.", "A lunedì vado in palestra.", "Di lunedì vado in palestra."],
        correctAnswer: "Il lunedì vado in palestra.",
        explanation: "Use 'il/la + day' to express a habitual action ('every Monday')."
      },
      {
        id: "5_11",
        type: "multiple-choice",
        question: "How do you say 'March 1st' as a date?",
        options: ["Il uno marzo", "Il primo marzo", "Il primo di marzo", "Marzo uno"],
        correctAnswer: "Il primo marzo",
        explanation: "Only the 1st uses 'primo' (ordinal). All other dates use cardinal numbers: il due, il tre, etc."
      },
      {
        id: "5_12",
        type: "translation",
        question: "Translate: 'My birthday is the 15th of June.'",
        correctAnswer: "Il mio compleanno è il quindici giugno.",
        explanation: "Italian dates: 'il + number + month' — no 'di' needed in everyday speech."
      },
      {
        id: "5_13",
        type: "fill-in-the-blank",
        question: "Che ___ sono? (What time is it?) — fill in the missing word.",
        correctAnswer: "ore",
        explanation: "'Che ore sono?' is the standard way to ask the time."
      },
      {
        id: "5_14",
        type: "reorder",
        question: "Reorder: 'The train leaves at nine thirty.'",
        words: ["Il", "treno", "parte", "alle", "nove", "e", "mezza."],
        correctAnswer: ["Il", "treno", "parte", "alle", "nove", "e", "mezza."]
      },
      {
        id: "5_15",
        type: "multiple-choice",
        question: "What is 'agosto' in English?",
        options: ["April", "June", "August", "October"],
        correctAnswer: "August",
        explanation: "agosto = August. Remember: aprile (April), giugno (June), ottobre (October)."
      },
      {
        id: "5_16",
        type: "fill-in-the-blank",
        question: "Oggi è il ___ ottobre. (Today is the 28th of October.)",
        correctAnswer: "ventotto",
        explanation: "Venti + otto = ventotto (drop the 'i' from venti before otto)."
      },
      {
        id: "5_17",
        type: "multiple-choice",
        question: "How do you ask 'What's today's date?' in a colloquial Italian way?",
        options: ["Che ora è oggi?", "Quanti ne abbiamo oggi?", "Che data è adesso?", "Qual è il giorno?"],
        correctAnswer: "Quanti ne abbiamo oggi?",
        explanation: "Lit: 'How many do we have today?' — a very common colloquial way to ask the date."
      },
    ]
  },
  {
    id: 7,
    title: "Gender & Plural Rules",
    slug: "gender-plurals",
    grammar: {
      title: "Genere e Plurale — Masculine, Feminine & Plurals",
      content: `Every Italian noun has a **grammatical gender** — either masculine or feminine. This affects the article, adjective, and sometimes the verb. There is no neutral gender.

## Il Genere (Gender)

### Masculine Nouns
Most masculine nouns end in **-o** in the singular:
- *il ragazzo* (the boy), *il gatto* (the cat), *il libro* (the book), *il tavolo* (the table)

### Feminine Nouns
Most feminine nouns end in **-a** in the singular:
- *la ragazza* (the girl), *la casa* (the house), *la porta* (the door), *la mela* (the apple)

### Nouns ending in -e (both genders!)
Many nouns end in **-e** and can be either masculine or feminine — you need to learn these:
- *il fiore* (the flower — masculine), *il dente* (the tooth — masculine)
- *la classe* (the class — feminine), *la notte* (the night — feminine)

> **Tip:** When in doubt, learn the article together with the noun: *il cane*, *la chiave*.

---

## Il Plurale (Plurals)

| Singular ending | Plural ending | Example |
|---|---|---|
| **-o** (masc) | **-i** | *ragazzo → ragazzi*, *gatto → gatti* |
| **-a** (fem) | **-e** | *ragazza → ragazze*, *casa → case* |
| **-e** (masc or fem) | **-i** | *fiore → fiori*, *classe → classi* |

### Irregular Plurals (important exceptions)
- *uomo* → *uomini* (man → men)
- *mano* → *mani* (hand → hands — feminine despite ending in -o!)
- *città, caffè, virtù* → **unchanged** (nouns ending in a stressed vowel don't change)

---

## Gli Articoli al Plurale (Plural Articles)

| Gender | Singular | Plural | When to use plural form |
|---|---|---|---|
| Masc | *il* | *i* | Before most consonants |
| Masc | *lo* | *gli* | Before s+consonant, z, gn, ps, x, y |
| Masc | *l'* | *gli* | Before vowels |
| Fem | *la* | *le* | All feminine nouns |
| Fem | *l'* | *le* | Before vowels |

---

## Accordo degli Aggettivi (Adjective Agreement)

Adjectives **must agree** in gender and number with the noun they describe.

**Adjectives ending in -o/-a:**
| | Singular | Plural |
|---|---|---|
| Masc | *alto* | *alti* |
| Fem | *alta* | *alte* |

**Adjectives ending in -e (same for both genders):**
| | Singular | Plural |
|---|---|---|
| Masc/Fem | *grande* | *grandi* |
| Masc/Fem | *verde* | *verdi* |

> *Il ragazzo alto* → *I ragazzi alti* (The tall boy → The tall boys)
> *La ragazza intelligente* → *Le ragazze intelligenti* (The clever girl → The clever girls)`
    },
    vocabulary: [
      { italian: "Il ragazzo / La ragazza", english: "The boy / The girl", pronunciation: "eel ra-GAT-zo / la ra-GAT-za" },
      { italian: "Il gatto / La gatta", english: "The male cat / The female cat", pronunciation: "eel GAT-to / la GAT-ta" },
      { italian: "Il libro", english: "The book (masc)", pronunciation: "eel LEE-bro" },
      { italian: "La casa", english: "The house (fem)", pronunciation: "la KAH-za" },
      { italian: "Il fiore", english: "The flower (masc, ends in -e)", pronunciation: "eel FYO-reh" },
      { italian: "La classe", english: "The class (fem, ends in -e)", pronunciation: "la KLAS-seh" },
      { italian: "L'uomo / Gli uomini", english: "The man / The men (irregular)", pronunciation: "LWOH-mo / lyee WO-mi-nee" },
      { italian: "La mano / Le mani", english: "The hand / The hands (fem, irregular)", pronunciation: "la MAH-no / leh MAH-nee" },
      { italian: "Alto / Alta", english: "Tall (masc / fem)", pronunciation: "AL-to / AL-ta" },
      { italian: "Grande", english: "Big / Great (same for both genders)", pronunciation: "GRAN-deh" },
      { italian: "Bello / Bella", english: "Beautiful (masc / fem)", pronunciation: "BEL-lo / BEL-la" },
      { italian: "Nuovo / Nuova", english: "New (masc / fem)", pronunciation: "NWOH-vo / NWOH-va" },
      { italian: "Verde", english: "Green (same for masc & fem)", pronunciation: "VER-deh" },
      { italian: "I ragazzi / Le ragazze", english: "The boys / The girls (plural)", pronunciation: "ee ra-GAT-zee / leh ra-GAT-zeh" },
      { italian: "Gli studenti / Le studentesse", english: "The (male) students / The (female) students", pronunciation: "lyee stu-DEN-tee / leh stu-den-TES-seh" },
      { italian: "La città", english: "The city (invariable — doesn't change in plural)", pronunciation: "la cheet-TAH" },
    ],
    examples: [
      { italian: "I ragazzi sono alti.", english: "The boys are tall." },
      { italian: "Le ragazze sono intelligenti.", english: "The girls are clever." },
      { italian: "Ho due gatti e una cagna.", english: "I have two (male) cats and a female dog." },
      { italian: "I fiori del giardino sono belli.", english: "The flowers in the garden are beautiful." },
      { italian: "Le città italiane sono grandi e antiche.", english: "Italian cities are large and ancient." },
      { italian: "Gli studenti hanno i libri nuovi.", english: "The (male) students have the new books." },
    ],
    dialogue: {
      title: "In Piazza (In the Square)",
      lines: [
        { speaker: "Paolo", italian: "Ciao Elena! Quanti gatti hai adesso?", english: "Hi Elena! How many cats do you have now?" },
        { speaker: "Elena", italian: "Ne ho tre — due maschi e una femmina. Si chiamano Leo, Nero e Bianca.", english: "I have three — two males and one female. Their names are Leo, Nero, and Bianca." },
        { speaker: "Paolo", italian: "Che bei gatti! Sono grandi?", english: "What beautiful cats! Are they big?" },
        { speaker: "Elena", italian: "Leo e Nero sono grandi e neri, ma Bianca è piccola e bianca ovviamente!", english: "Leo and Nero are big and black, but Bianca is small and white — obviously!" },
        { speaker: "Paolo", italian: "E i tuoi cani? Hai ancora quei due cani simpatici?", english: "And your dogs? Do you still have those two friendly dogs?" },
        { speaker: "Elena", italian: "No, i cani ora vivono con mia sorella. La sua casa è grande, la mia è piccola.", english: "No, the dogs now live with my sister. Her house is big, mine is small." },
        { speaker: "Paolo", italian: "Capisco! Comunque, le tue piante sul balcone sono bellissime.", english: "I see! Anyway, your plants on the balcony are absolutely beautiful." },
        { speaker: "Elena", italian: "Grazie! Sono rose e fiori di campo. Le rose sono rosse, i fiori sono gialli.", english: "Thank you! They're roses and wildflowers. The roses are red, the flowers are yellow." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "What is the plural of 'casa' (house)?",
        options: ["Casi", "Case", "Casis", "Casee"],
        correctAnswer: "Case"
      },
      {
        question: "How many cats does Elena have?",
        options: ["Two", "Three", "Four", "One"],
        correctAnswer: "Three"
      },
      {
        question: "Where do Elena's dogs live now?",
        options: ["With Paolo", "With her mother", "With her sister", "In the garden"],
        correctAnswer: "With her sister"
      },
    ],
    exercises: [
      {
        id: "6_1",
        type: "multiple-choice",
        question: "What is the plural of 'il libro' (the book)?",
        options: ["Le libri", "I libri", "I libre", "Gli libro"],
        correctAnswer: "I libri",
        explanation: "Masculine nouns ending in -o become -i in the plural. 'il' → 'i'."
      },
      {
        id: "6_2",
        type: "multiple-choice",
        question: "What is the plural of 'la ragazza' (the girl)?",
        options: ["I ragazze", "Le ragazze", "Le ragazzi", "La ragazze"],
        correctAnswer: "Le ragazze",
        explanation: "Feminine nouns ending in -a become -e in the plural. 'la' → 'le'."
      },
      {
        id: "6_3",
        type: "multiple-choice",
        question: "What is the plural of 'il fiore' (the flower — ends in -e)?",
        options: ["I fiorei", "Le fiori", "I fiori", "Gli fiori"],
        correctAnswer: "I fiori",
        explanation: "Nouns ending in -e (regardless of gender) become -i in the plural."
      },
      {
        id: "6_4",
        type: "fill-in-the-blank",
        question: "La ragazza è alt___. (The girl is tall.) — fill in the correct adjective ending.",
        correctAnswer: "a",
        explanation: "'Alta' — the adjective must agree with the feminine noun 'ragazza'."
      },
      {
        id: "6_5",
        type: "fill-in-the-blank",
        question: "I ragazzi sono alt___. (The boys are tall.) — fill in the correct ending.",
        correctAnswer: "i",
        explanation: "'Alti' — plural masculine adjective ending is -i."
      },
      {
        id: "6_6",
        type: "multiple-choice",
        question: "Which article do you use before 'studente' (male student)?",
        options: ["La", "Il", "Lo", "L'"],
        correctAnswer: "Lo",
        explanation: "'Lo' is used before masculine nouns starting with s + consonant (studente starts with 'st')."
      },
      {
        id: "6_7",
        type: "multiple-choice",
        question: "What is the plural article for 'lo studente'?",
        options: ["I studenti", "Gli studenti", "Le studenti", "Li studenti"],
        correctAnswer: "Gli studenti",
        explanation: "'Lo' becomes 'gli' in the plural. So 'lo studente' → 'gli studenti'."
      },
      {
        id: "6_8",
        type: "translation",
        question: "Translate: 'The new books are beautiful.'",
        correctAnswer: "I libri nuovi sono belli.",
        explanation: "libri (masc pl) → nuovi, belli. Both adjectives take masculine plural -i ending."
      },
      {
        id: "6_9",
        type: "multiple-choice",
        question: "What is the irregular plural of 'uomo' (man)?",
        options: ["Uomi", "Uomini", "Uomoi", "Omini"],
        correctAnswer: "Uomini",
        explanation: "'Uomo → uomini' is an irregular plural you must memorise."
      },
      {
        id: "6_10",
        type: "multiple-choice",
        question: "'La mano' (the hand) is grammatically...",
        options: ["Masculine", "Feminine", "Neutral", "Changes by context"],
        correctAnswer: "Feminine",
        explanation: "Despite ending in -o, 'mano' is feminine: 'la mano', 'le mani'."
      },
      {
        id: "6_11",
        type: "fill-in-the-blank",
        question: "Le città italian___ sono grand___. (Italian cities are big.) — fill both endings.",
        correctAnswer: "e, i",
        explanation: "'Italiane' (fem pl) and 'grandi' (adj ending in -e → -i in plural, same for both genders)."
      },
      {
        id: "6_12",
        type: "reorder",
        question: "Reorder: 'The beautiful girls are tall.'",
        words: ["Le", "ragazze", "belle", "sono", "alte."],
        correctAnswer: ["Le", "ragazze", "belle", "sono", "alte."]
      },
      {
        id: "6_13",
        type: "multiple-choice",
        question: "How do you say 'The green flowers' in Italian?",
        options: ["I fiori verdi", "I fiori verde", "Le fiori verdi", "I fiore verdi"],
        correctAnswer: "I fiori verdi",
        explanation: "'Verde' ends in -e, so its plural is 'verdi' for both genders. 'Fiore' is masculine: i fiori."
      },
      {
        id: "6_14",
        type: "translation",
        question: "Translate: 'She has two big cats.'",
        correctAnswer: "Ha due gatti grandi.",
        explanation: "Gatti (masc pl), grandi (pl of grande, same for both genders)."
      },
      {
        id: "6_15",
        type: "multiple-choice",
        question: "What is the plural of 'la città'?",
        options: ["Le città", "Le cittàe", "Le cittài", "Le citte"],
        correctAnswer: "Le città",
        explanation: "Nouns ending in a stressed vowel (città, caffè, virtù) are invariable — they don't change in the plural."
      },
      {
        id: "6_16",
        type: "fill-in-the-blank",
        question: "Il gatto è piccol___. Le gatte sono piccol___. (The cat is small. The (female) cats are small.)",
        correctAnswer: "o, e",
        explanation: "Singular masc → -o. Plural fem → -e."
      },
      {
        id: "6_17",
        type: "reorder",
        question: "Reorder: 'The new students have big books.'",
        words: ["Gli", "studenti", "nuovi", "hanno", "libri", "grandi."],
        correctAnswer: ["Gli", "studenti", "nuovi", "hanno", "libri", "grandi."]
      },
    ]
  },
  {
    id: 8,
    title: "Prepositions (Simple & Articulated)",
    slug: "prepositions",
    grammar: {
      title: "Le Preposizioni Semplici e Articolate",
      content: `Prepositions link nouns, pronouns, and phrases. Italian has **simple prepositions** and **articulated prepositions** (preposizioni articolate) — formed by fusing a preposition with a definite article.

## Le Preposizioni Semplici (Simple Prepositions)

| Preposition | Core meaning | Key uses |
|---|---|---|
| **di** | of, from | possession, origin, material |
| **a** | to, at, in | destination, location (cities), indirect object |
| **da** | from, by, since | origin, agent, duration |
| **in** | in, to | location, destination (countries/regions) |
| **con** | with | accompaniment, means |
| **su** | on, about | location on a surface, topic |
| **per** | for, through | purpose, duration, route |
| **tra / fra** | between, among, in (time) | position, future time reference |

> **City vs Country rule:**
> - Use **a** with cities: *Vivo a Roma.* (I live in Rome.)
> - Use **in** with countries and regions: *Vado in Italia.* (I'm going to Italy.) / *Abito in Toscana.*

---

## Le Preposizioni Articolate (Articulated Prepositions)

When **di, a, da, in, su** precede a definite article, they fuse into a single word. *(Con, per, tra, fra do NOT fuse.)*

| | **il** | **lo** | **la** | **l'** | **i** | **gli** | **le** |
|---|---|---|---|---|---|---|---|
| **di** | del | dello | della | dell' | dei | degli | delle |
| **a** | al | allo | alla | all' | ai | agli | alle |
| **da** | dal | dallo | dalla | dall' | dai | dagli | dalle |
| **in** | nel | nello | nella | nell' | nei | negli | nelle |
| **su** | sul | sullo | sulla | sull' | sui | sugli | sulle |

### Examples in context:
- *Vado **al** bar.* — I go **to the** bar. (a + il)
- *Il libro è **sul** tavolo.* — The book is **on the** table. (su + il)
- *Vengo **dalla** Germania.* — I come **from** Germany. (da + la)
- *Parlano **degli** studenti.* — They talk **about the** students. (di + gli)
- *Abito **nel** centro.* — I live **in the** centre. (in + il)

---

## Uses of Key Prepositions

### DI — of, from, about
- Possession: *Il libro **di** Marco* (Marco's book)
- Origin: *Sono **di** Napoli.* (I'm from Naples.)
- Material: *Una borsa **di** pelle.* (A leather bag.)
- Topic: *Parliamo **di** musica.* (We talk about music.)

### A — to, at, in (cities)
- Movement: *Vado **a** scuola.* (I go to school.)
- Location: *Sono **a** casa.* (I'm at home.)
- Indirect object: *Do il libro **a** Lucia.* (I give the book to Lucia.)
- Time: ***Alle** tre.* (At three o'clock.)

### DA — from, by, since/for (with time)
- Origin: *Vengo **da** Milano.* (I come from Milan.)
- Duration (still ongoing): *Studio italiano **da** due anni.* (I've been studying Italian for two years.)
- Agent (passive): *Il libro è scritto **da** Dante.* (The book is written by Dante.)
- Function: *una tazza **da** caffè* (a coffee cup — designed for)

### IN — in, to (countries/regions/rooms)
- *Vivo **in** Italia.* (I live in Italy.)
- *Vado **in** cucina.* (I go to the kitchen.)
- *Lavoro **in** ufficio.* (I work in the office.)

### SU — on, over, about
- *Il gatto è **sul** divano.* (The cat is on the sofa.)
- *Un libro **sulla** storia.* (A book about history.)`
    },
    vocabulary: [
      { italian: "Di", english: "Of / From / About", pronunciation: "dee" },
      { italian: "A", english: "To / At / In (cities)", pronunciation: "ah" },
      { italian: "Da", english: "From / By / Since", pronunciation: "dah" },
      { italian: "In", english: "In / To (countries, rooms)", pronunciation: "een" },
      { italian: "Con", english: "With", pronunciation: "kon" },
      { italian: "Su", english: "On / About", pronunciation: "soo" },
      { italian: "Per", english: "For / Through / In order to", pronunciation: "pehr" },
      { italian: "Tra / Fra", english: "Between / Among / In (future time)", pronunciation: "trah / frah" },
      { italian: "Al / Alla", english: "To the / At the (a + il / a + la)", pronunciation: "al / AL-la" },
      { italian: "Del / Della", english: "Of the (di + il / di + la)", pronunciation: "del / DEL-la" },
      { italian: "Dal / Dalla", english: "From the (da + il / da + la)", pronunciation: "dal / DAL-la" },
      { italian: "Nel / Nella", english: "In the (in + il / in + la)", pronunciation: "nel / NEL-la" },
      { italian: "Sul / Sulla", english: "On the (su + il / su + la)", pronunciation: "sul / SUL-la" },
      { italian: "Dei / Degli / Delle", english: "Of the (plural: di + i / gli / le)", pronunciation: "day / LYEE / DEL-leh" },
      { italian: "Vicino a", english: "Near / Next to", pronunciation: "vee-CHEE-no ah" },
      { italian: "Lontano da", english: "Far from", pronunciation: "lon-TAH-no dah" },
    ],
    examples: [
      { italian: "Vado al bar con gli amici.", english: "I'm going to the bar with friends." },
      { italian: "Il libro di Marco è sul tavolo.", english: "Marco's book is on the table." },
      { italian: "Vengo dalla Francia ma abito in Italia.", english: "I come from France but I live in Italy." },
      { italian: "Studio italiano da tre anni.", english: "I've been studying Italian for three years." },
      { italian: "La stazione è vicino al centro.", english: "The station is near the centre." },
      { italian: "Parliamo degli esercizi di domani.", english: "We're talking about tomorrow's exercises." },
    ],
    dialogue: {
      title: "Un Viaggio a Roma (A Trip to Rome)",
      lines: [
        { speaker: "Mino", italian: "Ciao Sara! Vai in vacanza quest'estate?", english: "Hi Sara! Are you going on holiday this summer?" },
        { speaker: "Sara", italian: "Sì! Parto per Roma fra due settimane. E tu?", english: "Yes! I'm leaving for Rome in two weeks. And you?" },
        { speaker: "Mino", italian: "Che bello! Sei mai stata a Roma?", english: "How nice! Have you ever been to Rome?" },
        { speaker: "Sara", italian: "No, è la prima volta. Vengo da una piccola città del nord, non viaggio spesso.", english: "No, it's the first time. I come from a small city in the north, I don't travel often." },
        { speaker: "Mino", italian: "Dove alloggi? In un hotel nel centro storico?", english: "Where are you staying? In a hotel in the historic centre?" },
        { speaker: "Sara", italian: "Sì, in un piccolo hotel vicino al Colosseo. Costa poco per una settimana.", english: "Yes, in a small hotel near the Colosseum. It costs little for a week." },
        { speaker: "Mino", italian: "Perfetto! Devi assolutamente andare al Vaticano e sulla terrazza del Gianicolo.", english: "Perfect! You absolutely must go to the Vatican and up on the Janiculum terrace." },
        { speaker: "Sara", italian: "Certo! Ho anche una guida sulla storia di Roma. Studio da mesi!", english: "Of course! I also have a guide about the history of Rome. I've been studying for months!" },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Where is Sara going on holiday?",
        options: ["Milan", "Florence", "Rome", "Naples"],
        correctAnswer: "Rome"
      },
      {
        question: "How is 'a + il' contracted in Italian?",
        options: ["Del", "Al", "Nel", "Sul"],
        correctAnswer: "Al"
      },
      {
        question: "Which preposition is used for countries (e.g. Italy, France)?",
        options: ["A", "Di", "In", "Da"],
        correctAnswer: "In"
      },
    ],
    exercises: [
      {
        id: "7_1",
        type: "multiple-choice",
        question: "The cat is on the sofa. Which is correct?",
        options: ["Il gatto è in sul divano.", "Il gatto è sul divano.", "Il gatto è su il divano.", "Il gatto è al divano."],
        correctAnswer: "Il gatto è sul divano.",
        explanation: "su + il = sul. Never write 'su il' — always contract to 'sul'."
      },
      {
        id: "7_2",
        type: "multiple-choice",
        question: "What is 'di + gli' contracted to?",
        options: ["Dei", "Degli", "Dello", "Delle"],
        correctAnswer: "Degli",
        explanation: "di + gli = degli. Used before masculine plural nouns starting with vowel, s+cons, z, etc."
      },
      {
        id: "7_3",
        type: "fill-in-the-blank",
        question: "Vado ___ scuola ogni mattina. (I go to school every morning.)",
        correctAnswer: "a",
        explanation: "'A scuola' — use 'a' (not 'in') for school, work, and other common destinations."
      },
      {
        id: "7_4",
        type: "fill-in-the-blank",
        question: "Vivo ___ Italia da cinque anni. (I've lived in Italy for five years.)",
        correctAnswer: "in",
        explanation: "Use 'in' for countries and regions: in Italia, in Francia, in Toscana."
      },
      {
        id: "7_5",
        type: "multiple-choice",
        question: "How do you say 'Marco's book' in Italian?",
        options: ["Il libro a Marco", "Il libro di Marco", "Il libro da Marco", "Il libro per Marco"],
        correctAnswer: "Il libro di Marco",
        explanation: "'Di' expresses possession in Italian — there is no apostrophe-s like in English."
      },
      {
        id: "7_6",
        type: "multiple-choice",
        question: "Which sentence correctly uses 'da' for ongoing duration?",
        options: ["Studio italiano per due anni.", "Studio italiano da due anni.", "Studio italiano in due anni.", "Studio italiano a due anni."],
        correctAnswer: "Studio italiano da due anni.",
        explanation: "'Da' + time = for (an ongoing situation). 'Per' + time = for (a completed duration)."
      },
      {
        id: "7_7",
        type: "translation",
        question: "Translate: 'I come from Spain but I live in Rome.'",
        correctAnswer: "Vengo dalla Spagna ma vivo a Roma.",
        explanation: "da + la Spagna = dalla. Cities use 'a' (a Roma), countries use 'in' — but 'la Spagna' with article uses 'da + la = dalla'."
      },
      {
        id: "7_8",
        type: "multiple-choice",
        question: "What does 'sulla' mean?",
        options: ["From the (fem)", "In the (fem)", "On the (fem)", "To the (fem)"],
        correctAnswer: "On the (fem)",
        explanation: "sulla = su + la (on the — feminine singular)."
      },
      {
        id: "7_9",
        type: "fill-in-the-blank",
        question: "Il treno parte ___ stazione alle nove. (The train leaves from the station at nine.)",
        correctAnswer: "dalla",
        explanation: "da + la = dalla. 'La stazione' is feminine."
      },
      {
        id: "7_10",
        type: "multiple-choice",
        question: "How do you say 'I'm going to the supermarket'?",
        options: ["Vado in supermercato.", "Vado al supermercato.", "Vado del supermercato.", "Vado nel supermercato."],
        correctAnswer: "Vado al supermercato.",
        explanation: "'Al' (a + il) = to the. Use 'a' for destinations with a definite article."
      },
      {
        id: "7_11",
        type: "reorder",
        question: "Reorder: 'The book about history is on the table.'",
        words: ["Il", "libro", "sulla", "storia", "è", "sul", "tavolo."],
        correctAnswer: ["Il", "libro", "sulla", "storia", "è", "sul", "tavolo."]
      },
      {
        id: "7_12",
        type: "multiple-choice",
        question: "Which prepositions do NOT fuse with articles?",
        options: ["Di and a", "Da and in", "Con and per", "Su and di"],
        correctAnswer: "Con and per",
        explanation: "Only di, a, da, in, su fuse with articles. Con, per, tra, fra do not."
      },
      {
        id: "7_13",
        type: "translation",
        question: "Translate: 'We talk with the students about the lesson.'",
        correctAnswer: "Parliamo con gli studenti della lezione.",
        explanation: "con + gli = con gli (no fusion). di + la = della."
      },
      {
        id: "7_14",
        type: "fill-in-the-blank",
        question: "Il caffè è ___ bar all'angolo. (The coffee is from the bar on the corner.)",
        correctAnswer: "del",
        explanation: "di + il = del. 'Il bar' is masculine."
      },
      {
        id: "7_15",
        type: "multiple-choice",
        question: "How do you say 'between you and me'?",
        options: ["Per te e me", "Tra te e me", "Con te e me", "Da te e me"],
        correctAnswer: "Tra te e me",
        explanation: "'Tra/fra' means between or among. Both are interchangeable."
      },
      {
        id: "7_16",
        type: "multiple-choice",
        question: "What does 'negli' come from?",
        options: ["su + gli", "in + gli", "di + gli", "a + gli"],
        correctAnswer: "in + gli",
        explanation: "in + gli = negli. Example: *negli anni Ottanta* (in the Eighties)."
      },
      {
        id: "7_17",
        type: "translation",
        question: "Translate: 'The station is near the hotel.'",
        correctAnswer: "La stazione è vicino all'hotel.",
        explanation: "a + l' = all'. 'L'hotel' starts with a vowel, so use the elided form."
      },
    ]
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
      { italian: "Colazione", english: "Breakfast" },
      { italian: "Pausa", english: "Pause / Break" },
      { italian: "Caffè macchiato", english: "Expresso with a drop of milk" },
      { italian: "Cornetto", english: "Croissant / Pastry" },
      { italian: "Marmellata", english: "Jam" },
      { italian: "Sfoglia", english: "Puff pastry" },
      { italian: "Certo / Esatto", english: "Sure / Exactly" },
      { italian: "Prego", english: "You're welcome / Go ahead" },
      { italian: "Il resto", english: "The change" },
    ],
    examples: [
      { italian: "Quanto costa un caffè?", english: "How much is a coffee?" },
      { italian: "Quant'è?", english: "How much is it?" },
      { italian: "Andiamo al bar?", english: "Shall we go to the bar?" },
      { italian: "Pago io.", english: "I'll pay." },
    ],
    dialogue: {
      title: "Al Bar a Firenze (At the Bar in Florence)",
      lines: [
        { speaker: "Marco", italian: "Ragazzi, sono stanco. Facciamo cinque minuti di pausa?", english: "Guys, I'm tired. Shall we take a five-minute break?" },
        { speaker: "Anna", italian: "Va bene. Andiamo al bar?", english: "Okay. Shall we go to the bar?" },
        { speaker: "Alberto", italian: "Buona idea, mi piace fare colazione al bar.", english: "Good idea, I like having breakfast at the bar." },
        { speaker: "Cameriere", italian: "Buongiorno! Prego...", english: "Good morning! Go ahead..." },
        { speaker: "Marco", italian: "Buongiorno. Allora, io prendo un caffè.", english: "Good morning. Then, I'll have a coffee." },
        { speaker: "Cameriere", italian: "Macchiato?", english: "Macchiato?" },
        { speaker: "Marco", italian: "No, normale. Grazie.", english: "No, regular. Thanks." },
        { speaker: "Anna", italian: "Per me un cappuccino e un cornetto.", english: "For me, a cappuccino and a croissant." },
        { speaker: "Cameriere", italian: "Con la crema o con la marmellata?", english: "With cream or with jam?" },
        { speaker: "Anna", italian: "Mmm... preferisco il cornetto con la marmellata, la crema non mi piace.", english: "Mmm... I prefer the croissant with jam, I don't like cream." },
        { speaker: "Alberto", italian: "Io vorrei un latte caldo e una sfoglia.", english: "I would like a hot milk and a puff pastry." },
        { speaker: "Cameriere", italian: "Allora sono: un caffè, un cappuccio, un latte, una sfoglia e un cornetto, giusto?", english: "So that is: a coffee, a cappuccino, a milk, a puff pastry, and a croissant, right?" },
        { speaker: "Marco", italian: "Sì, esatto. Possiamo sederci al tavolo?", english: "Yes, exactly. Can we sit at the table?" },
        { speaker: "Cameriere", italian: "Sì, certo. (Dopo cinque minuti) Ecco il caffè, il cornetto e il cappuccino, il latte e la sfoglia.", english: "Yes, sure. (After five minutes) Here is the coffee, the croissant and the cappuccino, the milk and the puff pastry." },
        { speaker: "Marco", italian: "Perfetto. Quant'è?", english: "Perfect. How much is it?" },
        { speaker: "Cameriere", italian: "12 euro e 50.", english: "12 euros and 50." },
        { speaker: "Marco", italian: "Ragazzi, pago io. Ecco a Lei.", english: "Guys, I'll pay. There you go." },
        { speaker: "Cameriere", italian: "Grazie. Porto subito il resto.", english: "Thank you. I'll bring the change right away." },
        { speaker: "Alberto", italian: "Però ragazzi... 12 euro e 50 è veramente tanto...", english: "But guys... 12 euros and 50 is really a lot..." },
        { speaker: "Marco", italian: "Sì, ma considera il posto...", english: "Yes, but consider the place..." },
        { speaker: "Anna", italian: "E poi... siamo a Firenze!", english: "And after all... we are in Florence!" },
      ]
    },
    comprehensionQuestions: [{ question: "How to ask for the bill?", options: ["Il conto, per favore", "Ciao"], correctAnswer: "Il conto, per favore" }],
    exercises: [{ id: "10_1", type: "translation", question: "Where is the bathroom?", correctAnswer: "Dov'è il bagno?" }]
  }
];
