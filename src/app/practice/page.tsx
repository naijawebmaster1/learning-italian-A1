'use client';

import { useProgress } from '@/hooks/useProgress';
import { lessons } from '@/data/lessons';
import { Exercise, Lesson } from '@/types/lesson';
import { QuizComponent } from '@/components/QuizComponent';
import { useState, useMemo, useEffect } from 'react';
import { GraduationCap, ChevronLeft, Shuffle, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function PracticePage() {
  const { progress } = useProgress();
  const [sessionExercises, setSessionExercises] = useState<Exercise[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Generate a random set of exercises from completed lessons
  useEffect(() => {
    if (progress.completedLessons.length > 0) {
      const allExercises = lessons
        .filter(l => progress.completedLessons.includes(l.id))
        .flatMap(l => l.exercises);
      
      // Shuffle and take 5-10
      const shuffled = [...allExercises].sort(() => 0.5 - Math.random());
      setSessionExercises(shuffled.slice(0, 10));
      setIsReady(true);
    }
  }, [progress.completedLessons]);

  if (progress.completedLessons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <GraduationCap className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-black">Practice Locked</h1>
        <p className="text-muted-foreground max-w-sm">Complete at least one lesson to unlock randomized practice sessions.</p>
        <Link href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
          Go to Lessons
        </Link>
      </div>
    );
  }

  // Create a mock lesson object to pass to QuizComponent
  const practiceLesson: Lesson = {
    id: 999,
    title: "Random Practice Session",
    slug: "practice",
    grammar: { title: "Mix of Topics", content: "This session contains a mix of grammar points from multiple lessons." },
    vocabulary: [],
    examples: [],
    dialogue: { title: "Mixed Dialogue", lines: [] },
    comprehensionQuestions: [],
    exercises: sessionExercises
  };

  return (
    <div className="space-y-10 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-black flex items-center gap-3">
            <Shuffle className="w-10 h-10 text-primary" />
            Practice Arena
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">Test your knowledge with 10 random exercises from your completed lessons.</p>
        </div>
      </header>

      {isReady && sessionExercises.length > 0 ? (
        <QuizComponent 
          lesson={practiceLesson} 
          onComplete={(score) => {
            console.log("Practice session completed with score:", score);
            // We don't save practice scores to specific lessons, 
            // but we could track them in the future.
          }} 
        />
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground animate-pulse">Preparing your session...</p>
        </div>
      )}
    </div>
  );
}
