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
      // Indefinite Articles (User's requested list)
      { id: "3_ind_1", type: "fill-in-the-blank", question: "___ ragazzo", correctAnswer: "un" },
      { id: "3_ind_2", type: "fill-in-the-blank", question: "___ ragazza", correctAnswer: "una" },
      { id: "3_ind_3", type: "fill-in-the-blank", question: "___ amico", correctAnswer: "un" },
      { id: "3_ind_4", type: "fill-in-the-blank", question: "___ amica", correctAnswer: "un'" },
      { id: "3_ind_5", type: "fill-in-the-blank", question: "___ studente", correctAnswer: "uno" },
      { id: "3_ind_6", type: "fill-in-the-blank", question: "___ studentessa", correctAnswer: "una" },
      { id: "3_ind_7", type: "fill-in-the-blank", question: "___ zio", correctAnswer: "uno" },
      { id: "3_ind_8", type: "fill-in-the-blank", question: "___ zia", correctAnswer: "una" },
      { id: "3_ind_9", type: "fill-in-the-blank", question: "___ libro", correctAnswer: "un" },
      { id: "3_ind_10", type: "fill-in-the-blank", question: "___ idea", correctAnswer: "un'" },
      { id: "3_ind_11", type: "fill-in-the-blank", question: "___ esame", correctAnswer: "un" },
      { id: "3_ind_12", type: "fill-in-the-blank", question: "___ casa", correctAnswer: "una" },
      { id: "3_ind_13", type: "fill-in-the-blank", question: "___ stazione", correctAnswer: "una" },
      { id: "3_ind_14", type: "fill-in-the-blank", question: "___ zaino", correctAnswer: "uno" },
      { id: "3_ind_15", type: "fill-in-the-blank", question: "___ albero", correctAnswer: "un" },
      { id: "3_ind_16", type: "fill-in-the-blank", question: "___ isola", correctAnswer: "un'" },
      { id: "3_ind_17", type: "fill-in-the-blank", question: "___ ospedale", correctAnswer: "un" },
      { id: "3_ind_18", type: "fill-in-the-blank", question: "___ ufficio", correctAnswer: "un" },
      { id: "3_ind_19", type: "fill-in-the-blank", question: "___ arancia", correctAnswer: "un'" },
      { id: "3_ind_20", type: "fill-in-the-blank", question: "___ psicologo", correctAnswer: "uno" },
      
      // Definite Articles (Balanced set of 20 - matching Indefinite)
      { id: "3_def_1", type: "fill-in-the-blank", question: "___ ragazzo (the)", correctAnswer: "il" },
      { id: "3_def_2", type: "fill-in-the-blank", question: "___ ragazza (the)", correctAnswer: "la" },
      { id: "3_def_3", type: "fill-in-the-blank", question: "___ amico (the)", correctAnswer: "l'" },
      { id: "3_def_4", type: "fill-in-the-blank", question: "___ amica (the)", correctAnswer: "l'" },
      { id: "3_def_5", type: "fill-in-the-blank", question: "___ studente (the)", correctAnswer: "lo" },
      { id: "3_def_6", type: "fill-in-the-blank", question: "___ studentessa (the)", correctAnswer: "la" },
      { id: "3_def_7", type: "fill-in-the-blank", question: "___ zio (the)", correctAnswer: "lo" },
      { id: "3_def_8", type: "fill-in-the-blank", question: "___ zia (the)", correctAnswer: "la" },
      { id: "3_def_9", type: "fill-in-the-blank", question: "___ libro (the)", correctAnswer: "il" },
      { id: "3_def_10", type: "fill-in-the-blank", question: "___ idea (the)", correctAnswer: "l'" },
      { id: "3_def_11", type: "fill-in-the-blank", question: "___ esame (the)", correctAnswer: "l'" },
      { id: "3_def_12", type: "fill-in-the-blank", question: "___ casa (the)", correctAnswer: "la" },
      { id: "3_def_13", type: "fill-in-the-blank", question: "___ stazione (the)", correctAnswer: "la" },
      { id: "3_def_14", type: "fill-in-the-blank", question: "___ zaino (the)", correctAnswer: "lo" },
      { id: "3_def_15", type: "fill-in-the-blank", question: "___ albero (the)", correctAnswer: "l'" },
      { id: "3_def_16", type: "fill-in-the-blank", question: "___ isola (the)", correctAnswer: "l'" },
      { id: "3_def_17", type: "fill-in-the-blank", question: "___ ospedale (the)", correctAnswer: "l'" },
      { id: "3_def_18", type: "fill-in-the-blank", question: "___ ufficio (the)", correctAnswer: "l'" },
      { id: "3_def_19", type: "fill-in-the-blank", question: "___ arancia (the)", correctAnswer: "l'" },
      { id: "3_def_20", type: "fill-in-the-blank", question: "___ psicologo (the)", correctAnswer: "lo" },
    ]
  },
  {
    id: 4,
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
