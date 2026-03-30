import { Lesson } from '../types/lesson';

export const lessonsA2: Lesson[] = [
  {
    id: 1,
    title: "Il Passato Prossimo",
    slug: "passato-prossimo",
    grammar: {
      title: "The Past Tense",
      content: `The **Passato Prossimo** is used to talk about finished actions in the past. It is formed with an auxiliary verb (**Avere** or **Essere**) + the **Past Participle**.

### Auxiliaries
- **AVERE**: Used for most verbs (e.g., *Ho mangiato*).
- **ESSERE**: Used for verbs of movement, staying, and change (e.g., *Sono andato*).

### Past Participles
- **-are** -> **-ato** (e.g., *parlare* -> *parlato*)
- **-ere** -> **-uto** (e.g., *vedere* -> *veduto/visto*)
- **-ire** -> **-ito** (e.g., *finire* -> *finito*)

> [!IMPORTANT]
> When using **Essere**, the past participle must agree in gender and number with the subject:
> *Lui è andat**o*** vs. *Lei è andat**a***.`
    },
    vocabulary: [
      { italian: "Ieri", english: "Yesterday", pronunciation: "ee-EH-ree" },
      { italian: "Andare", english: "To go", pronunciation: "ahn-DAH-reh" },
      { italian: "Mangiato", english: "Eaten", pronunciation: "mahn-JAH-toh" },
      { italian: "Visto", english: "Seen", pronunciation: "VEE-stoh" },
      { italian: "Finito", english: "Finished", pronunciation: "fee-NEE-toh" },
    ],
    examples: [
      { italian: "Ho mangiato una pizza ieri.", english: "I ate a pizza yesterday." },
      { italian: "Siamo andati al cinema.", english: "We went to the cinema." },
      { italian: "Lei è arrivata tardi.", english: "She arrived late." },
    ],
    dialogue: {
      title: "Cos'hai fatto nel weekend?",
      lines: [
        { speaker: "Marco", italian: "Ciao Giulia, cos'hai fatto sabato?", english: "Hi Giulia, what did you do on Saturday?" },
        { speaker: "Giulia", italian: "Sono andata in montagna con i miei amici.", english: "I went to the mountains with my friends." },
        { speaker: "Marco", italian: "Bello! Avete mangiato al sacco?", english: "Nice! Did you have a packed lunch?" },
        { speaker: "Giulia", italian: "Sì, abbiamo mangiato panini e frutta.", english: "Yes, we ate sandwiches and fruit." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Which auxiliary is used for verbs of movement?",
        options: ["Avere", "Essere", "Fare"],
        correctAnswer: "Essere"
      }
    ],
    exercises: [
      { id: "a2_1_1", type: "fill-in-the-blank", question: "Io ___ (mangiato) una mela.", correctAnswer: "ho" },
      { id: "a2_1_2", type: "fill-in-the-blank", question: "Noi ___ (andati) a casa.", correctAnswer: "siamo" },
      { id: "a2_1_3", type: "fill-in-the-blank", question: "Lei è ___ (arrivare) alle otto.", correctAnswer: "arrivata" },
      { id: "a2_1_4", type: "translation", question: "I went out with friends", correctAnswer: "Sono uscito con gli amici" }
    ]
  },
  {
    id: 2,
    title: "L'Imperfetto",
    slug: "imperfetto",
    grammar: {
      title: "Past Habits and Descriptions",
      content: `The **Imperfetto** is used to describe habits, weather, time, and states of being in the past. Think of it as "used to" or "was/were doing".

### Conjugation
- **Andare**: andavo, andavi, andava, andavamo, andavate, andavano
- **Essere (Irregular!)**: ero, eri, era, eravamo, eravate, erano

### When to use it?
1. **Habits**: *Da bambino giocavo sempre a calcio.* (As a child I always played football.)
2. **Descriptions**: *Faceva freddo e pioveva.* (It was cold and raining.)
3. **Age/Time**: *Avevo dieci anni.* (I was ten years old.)`
    },
    vocabulary: [
      { italian: "Da bambino", english: "As a child", pronunciation: "dah bahm-BEE-noh" },
      { italian: "Sempre", english: "Always", pronunciation: "SEHM-preh" },
      { italian: "Spesso", english: "Often", pronunciation: "SPEHS-soh" },
      { italian: "Mentre", english: "While", pronunciation: "MEHN-treh" },
    ],
    examples: [
      { italian: "Eravamo molto felici.", english: "We were very happy." },
      { italian: "Ogni estate andavo in Italia.", english: "Every summer I used to go to Italy." },
      { italian: "C'era una volta...", english: "Once upon a time there was..." },
    ],
    dialogue: {
      title: "Ricordi d'infanzia",
      lines: [
        { speaker: "Luca", italian: "Com'era la tua scuola?", english: "What was your school like?" },
        { speaker: "Sara", italian: "Era piccola ma molto bella. I maestri erano gentili.", english: "It was small but very beautiful. The teachers were kind." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Is 'Ero' a form of Avere or Essere?",
        options: ["Avere", "Essere"],
        correctAnswer: "Essere"
      }
    ],
    exercises: [
      { id: "a2_2_1", type: "fill-in-the-blank", question: "Io ___ (essere) molto timido.", correctAnswer: "ero" },
      { id: "a2_2_2", type: "fill-in-the-blank", question: "Noi ___ (andare) sempre al mare.", correctAnswer: "andavamo" }
    ]
  },
  {
    id: 3,
    title: "I Pronomi Diretti",
    slug: "pronomi-diretti",
    grammar: {
      title: "Direct Object Pronouns",
      content: `Direct pronouns replace the object of a sentence to avoid repetition. They answer the question "Who?" or "What?".

### Pronouns
- **mi** (me) / **ti** (you)
- **lo** (him/it masc.) / **la** (her/it fem.)
- **ci** (us) / **vi** (you all)
- **li** (them masc.) / **le** (them fem.)

> [!TIP]
> Pronouns usually go BEFORE the conjugated verb:
> *Mangi la mela? Sì, **la** mangio.* (Do you eat the apple? Yes, I eat it.)`
    },
    vocabulary: [
      { italian: "Lo", english: "It (masc)", pronunciation: "loh" },
      { italian: "La", english: "It (fem)", pronunciation: "lah" },
      { italian: "Li", english: "Them (masc)", pronunciation: "lee" },
      { italian: "Le", english: "Them (fem)", pronunciation: "leh" },
    ],
    examples: [
      { italian: "Ti vedo domani.", english: "I'll see you tomorrow." },
      { italian: "La torta? La porto io.", english: "The cake? I'll bring it." },
      { italian: "Conosci Marco? No, non lo conosco.", english: "Do you know Marco? No, I don't know him." },
    ],
    dialogue: {
      title: "Al telefono",
      lines: [
        { speaker: "Paola", italian: "Hai comprato il pane?", english: "Did you buy the bread?" },
        { speaker: "Enzo", italian: "Sì, l'ho comprato stamattina.", english: "Yes, I bought it this morning." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Where does the pronoun go in 'Sì, la mangio'?",
        options: ["Before the verb", "After the verb"],
        correctAnswer: "Before the verb"
      }
    ],
    exercises: [
      { id: "a2_3_1", type: "fill-in-the-blank", question: "Cerco la chiave. ___ cerco dappertutto.", correctAnswer: "La" },
      { id: "a2_3_2", type: "fill-in-the-blank", question: "Saluti i tuoi amici? Sì, ___ saluto.", correctAnswer: "li" }
    ]
  },
  {
    id: 4,
    title: "Il Futuro Semplice",
    slug: "futuro-semplice",
    grammar: {
      title: "The Future Tense",
      content: `The future tense is used to talk about plans, predictions, and promises.

### Conjugation (-ARE/-ERE)
- **ò, ai, à, emo, ete, anno**
*Note: For -ARE verbs, the 'a' changes to 'e' (parlare -> parlerò).*

### Conjugation (-IRE)
- **irò, irai, irà, iremo, irete, iranno**`
    },
    vocabulary: [
      { italian: "Domani", english: "Tomorrow", pronunciation: "doh-MAH-nee" },
      { italian: "Prossimo", english: "Next", pronunciation: "PROHS-see-moh" },
      { italian: "Forse", english: "Maybe", pronunciation: "FOHR-seh" },
    ],
    examples: [
      { italian: "Domani andrò al mare.", english: "Tomorrow I will go to the sea." },
      { italian: "Studierò molto per l'esame.", english: "I will study a lot for the exam." },
    ],
    dialogue: {
      title: "Progetti futuri",
      lines: [
        { speaker: "Anna", italian: "Cosa farai questa estate?", english: "What will you do this summer?" },
        { speaker: "Leo", italian: "Visiterò Roma con la mia famiglia.", english: "I will visit Rome with my family." },
      ]
    },
    comprehensionQuestions: [
      {
        question: "What is the future of 'andare' (irregular)?",
        options: ["Andrò", "Andarai"],
        correctAnswer: "Andrò"
      }
    ],
    exercises: [
      { id: "a2_4_1", type: "fill-in-the-blank", question: "Io ___ (parlare) con lui.", correctAnswer: "parlerò" }
    ]
  },
  {
    id: 5,
    title: "Verbi Riflessivi al Passato",
    slug: "riflessivi-passato",
    grammar: {
      title: "Reflexive Verbs in the Past",
      content: `All reflexive verbs take **Essere** as an auxiliary in the past. This means the past participle MUST agree with the subject.

### Pattern
[Pronoun] + [Essere] + [Past Participle]

### Example (Svegliarsi - To wake up)
- Mi sono svegliato/a
- Ti sei svegliato/a
- Si è svegliato/a
- Ci siamo svegliati/e
- Vi siete svegliati/e
- Si sono svegliati/e`
    },
    vocabulary: [
      { italian: "Svegliarsi", english: "To wake up", pronunciation: "sveh-LYAHR-see" },
      { italian: "Divertirsi", english: "To have fun", pronunciation: "dee-vehr-TEER-see" },
      { italian: "Lavarsi", english: "To wash oneself", pronunciation: "lah-VAHR-see" },
    ],
    examples: [
      { italian: "Mi sono alzato alle sette.", english: "I got up at seven." },
      { italian: "Ci siamo divertiti molto.", english: "We had a lot of fun." },
    ],
    dialogue: {
      title: "Una bella serata",
      lines: [
        { speaker: "Elisa", italian: "Vi siete divertiti alla festa?", english: "Did you all have fun at the party?" },
        { speaker: "I ragazzi", italian: "Sì, ci siamo divertiti tantissimo!", english: "Yes, we had a lot of fun!" },
      ]
    },
    comprehensionQuestions: [
      {
        question: "Which auxiliary do reflexive verbs use?",
        options: ["Avere", "Essere"],
        correctAnswer: "Essere"
      }
    ],
    exercises: [
      { id: "a2_5_1", type: "fill-in-the-blank", question: "Io ___ (svegliarsi) alle sei.", correctAnswer: "mi sono svegliato" }
    ]
  }
];
