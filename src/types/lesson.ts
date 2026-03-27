export type ExerciseType = 'multiple-choice' | 'fill-in-the-blank' | 'translation' | 'reorder';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[]; // For multiple-choice
  correctAnswer: string | string[]; // For fill-in-the-blank or reorder, maybe array
  explanation?: string;
  translation?: string; // For translation exercises
  words?: string[]; // For reorder exercises
}

export interface VocabularyItem {
  italian: string;
  english: string;
  pronunciation?: string;
  category?: string;
}

export interface ExampleSentence {
  italian: string;
  english: string;
}

export interface DialogueLine {
  speaker: string;
  italian: string;
  english: string;
}

export interface Lesson {
  id: number;
  title: string;
  slug: string;
  grammar: {
    title: string;
    content: string; // Markdown or simple HTML
  };
  vocabulary: VocabularyItem[];
  examples: ExampleSentence[];
  dialogue: {
    title: string;
    lines: DialogueLine[];
  };
  comprehensionQuestions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  exercises: Exercise[];
}

export interface UserProgress {
  completedLessons: number[];
  lessonScores: Record<number, number>;
  streak: number;
  lastStudyDate: string | null;
  vocabularyMastery: Record<string, number>; // italian -> skill level 0-5
}
