'use client';

import { Lesson } from '@/types/lesson';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';
import { CheckCircle2, Lock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

export function LessonCard({ lesson, index }: LessonCardProps) {
  const { progress, currentLevel } = useProgress();
  const lessonKey = `${currentLevel}-${lesson.id}`;
  const prevLessonKey = `${currentLevel}-${lesson.id - 1}`;
  
  const completed = progress.completedLessons.includes(lessonKey);
  const locked = lesson.id !== 1 && !progress.completedLessons.includes(prevLessonKey);
  const score = progress.lessonScores[lessonKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={locked ? "#" : `/lessons/${lesson.slug}`}
        className={cn(
          "group block relative overflow-hidden rounded-2xl border bg-card p-6 h-full transition-all hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]",
          locked ? "opacity-75 cursor-not-allowed" : "cursor-pointer border-primary/10",
          completed && "border-green-500/20 bg-green-500/[0.02]"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-colors",
              completed ? "bg-green-500 text-white" : locked ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            )}>
              {lesson.id}
            </div>
            {completed ? (
              <div className="flex flex-col items-end">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-1" />
                {score !== undefined && (
                  <div className="flex items-center gap-1 text-xs font-bold text-orange-500">
                    <Star className="w-3 h-3 fill-orange-500" />
                    <span>{score}%</span>
                  </div>
                )}
              </div>
            ) : locked ? (
              <Lock className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
            )}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {lesson.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
            {lesson.grammar.title}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="bg-muted px-2 py-1 rounded-md">{lesson.vocabulary.length} words</span>
            <span className="bg-muted px-2 py-1 rounded-md">{lesson.exercises.length} exercises</span>
          </div>
        </div>

        {/* Decorative background element */}
        {!locked && !completed && (
          <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Star className="w-24 h-24 rotate-12" />
          </div>
        )}
      </Link>
    </motion.div>
  );
}
