'use client';

import { useState, useEffect } from 'react';
import { Exercise, Lesson } from '@/types/lesson';
import { useProgress } from '@/hooks/useProgress';
import { cn, validateTyping } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Star, Volume2 } from 'lucide-react';

interface QuizComponentProps {
  lesson: Lesson;
  onComplete: (score: number) => void;
}

export function QuizComponent({ lesson, onComplete }: QuizComponentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResult, setShowResult] = useState<{ correct: boolean; message: string } | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentExercise = lesson.exercises[currentStep];

  const handleAnswerChange = (value: string | string[]) => {
    if (showResult) return;
    setAnswers(prev => ({ ...prev, [currentExercise.id]: value }));
  };

  const submitAnswer = () => {
    if (!answers[currentExercise.id]) return;

    let isCorrect = false;
    const userAnswer = answers[currentExercise.id];

    if (currentExercise.type === 'multiple-choice') {
      isCorrect = userAnswer === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'fill-in-the-blank' || currentExercise.type === 'translation') {
      isCorrect = validateTyping(userAnswer as string, currentExercise.correctAnswer as string);
    } else if (currentExercise.type === 'reorder') {
      isCorrect = JSON.stringify(userAnswer) === JSON.stringify(currentExercise.correctAnswer);
    }

    if (isCorrect) setScore(s => s + 1);
    
    setShowResult({
      correct: isCorrect,
      message: isCorrect ? "Eccellente! Correct." : `Purtroppo... Expected: ${currentExercise.correctAnswer}`
    });
  };

  const nextStep = () => {
    setShowResult(null);
    if (currentStep < lesson.exercises.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      const finalScore = Math.round((score / lesson.exercises.length) * 100);
      setIsFinished(true);
      onComplete(finalScore);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-card border rounded-3xl shadow-xl max-w-lg mx-auto"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-black mb-2">Lesson Complete!</h2>
        <p className="text-muted-foreground mb-8">You've mastered the exercises for {lesson.title}.</p>
        
        <div className="text-6xl font-black text-primary mb-8">{Math.round((score / lesson.exercises.length) * 100)}%</div>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={restart}
            className="w-full bg-muted border py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          <a 
            href="/"
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
          >
            Back to Dashboard
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / lesson.exercises.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-bold text-muted-foreground">
          {currentStep + 1} / {lesson.exercises.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-card border rounded-3xl p-8 shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
            <Star className="w-4 h-4 fill-primary" />
            <span>{currentExercise.type.replace('-', ' ')}</span>
          </div>

          <h3 className="text-2xl font-bold mb-8">{currentExercise.question}</h3>

          <div className="space-y-4">
            {currentExercise.type === 'multiple-choice' && (
              <div className="grid grid-cols-1 gap-3">
                {currentExercise.options?.map((option) => (
                  <button
                    key={option}
                    disabled={!!showResult}
                    onClick={() => handleAnswerChange(option)}
                    className={cn(
                      "text-left p-4 rounded-2xl border-2 transition-all font-medium",
                      answers[currentExercise.id] === option 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-muted hover:border-primary/50",
                      showResult?.correct && answers[currentExercise.id] === option && "border-green-500 bg-green-500/10 text-green-600",
                      showResult && !showResult.correct && answers[currentExercise.id] === option && "border-red-500 bg-red-500/10 text-red-600"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {(currentExercise.type === 'fill-in-the-blank' || currentExercise.type === 'translation') && (
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  disabled={!!showResult}
                  placeholder="Type your answer here..."
                  className={cn(
                    "w-full bg-muted/30 border-2 rounded-2xl p-4 text-xl font-medium outline-none transition-all focus:border-primary",
                    showResult?.correct ? "border-green-500 bg-green-500/5" : showResult && "border-red-500 bg-red-500/5"
                  )}
                  value={(answers[currentExercise.id] as string) || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submitAnswer()}
                />
              </div>
            )}

            {currentExercise.type === 'reorder' && (
              <div className="flex flex-wrap gap-2 min-h-[100px] p-6 bg-muted/20 rounded-2xl border-2 border-dashed border-muted">
                {((answers[currentExercise.id] as string[]) || []).map((word, i) => (
                  <button
                    key={`${word}-${i}`}
                    onClick={() => {
                      if (showResult) return;
                      const current = (answers[currentExercise.id] as string[]) || [];
                      handleAnswerChange(current.filter((_, idx) => idx !== i));
                    }}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-lg font-bold hover:scale-105 transition-transform"
                  >
                    {word}
                  </button>
                ))}
                
                <div className="w-full h-px bg-muted my-4" />
                
                <div className="flex flex-wrap gap-2">
                  {currentExercise.words?.filter(w => !((answers[currentExercise.id] as string[]) || []).includes(w)).map((word, i) => (
                    <button
                      key={`${word}-option-${i}`}
                      disabled={!!showResult}
                      onClick={() => {
                        const current = (answers[currentExercise.id] as string[]) || [];
                        handleAnswerChange([...current, word]);
                      }}
                      className="bg-muted border border-muted-foreground/20 px-4 py-2 rounded-xl text-lg font-medium hover:bg-muted-foreground/10 transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={cn(
                  "mt-8 p-6 rounded-2xl border flex items-center gap-4",
                  showResult.correct ? "bg-green-500/10 border-green-500/20 text-green-700" : "bg-red-500/10 border-red-500/20 text-red-700"
                )}
              >
                {showResult.correct ? (
                  <CheckCircle2 className="w-8 h-8 shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 shrink-0" />
                )}
                <div>
                  <p className="font-black text-lg">{showResult.message}</p>
                  {currentExercise.explanation && <p className="text-sm opacity-80 mt-1">{currentExercise.explanation}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-end">
            {!showResult ? (
              <button
                disabled={!answers[currentExercise.id]}
                onClick={submitAnswer}
                className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:pointer-events-none"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                {currentStep < lesson.exercises.length - 1 ? 'Next Exercise' : 'Finish Quiz'}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Volume2 className="w-32 h-32 rotate-12" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);
