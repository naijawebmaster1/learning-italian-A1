'use client';

import { useParams, useRouter } from 'next/navigation';
import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';
import { useState, useMemo } from 'react';
import { QuizComponent } from '@/components/QuizComponent';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  Lightbulb, 
  MessageSquare, 
  Languages, 
  ChevronLeft, 
  ChevronRight,
  PlayCircle,
  Volume2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LessonPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { completeLesson, progress } = useProgress();
  const [activeTab, setActiveTab] = useState<'grammar' | 'vocab' | 'dialogue' | 'quiz'>('grammar');

  const lesson = useMemo(() => 
    lessons.find(l => l.slug === slug), 
  [slug]);

  if (!lesson) {
    return <div className="p-20 text-center text-2xl font-bold">Lesson not found</div>;
  }

  const handleQuizComplete = (score: number) => {
    completeLesson(lesson.id, score);
  };

  const tabs = [
    { id: 'grammar', label: 'Grammar', icon: Book },
    { id: 'vocab', label: 'Vocabulary', icon: Languages },
    { id: 'dialogue', label: 'Dialogue', icon: MessageSquare },
    { id: 'quiz', label: 'Practice Quiz', icon: Lightbulb },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl lg:text-4xl font-black">{lesson.title}</h1>
          <p className="text-muted-foreground mt-2 font-medium">Lesson {lesson.id} of {lessons.length}</p>
        </div>
        
        <div className="flex bg-muted p-1 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-background text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="min-h-[500px]"
        >
          {activeTab === 'grammar' && (
            <div className="space-y-8">
              <div className="bg-card border rounded-3xl p-8 lg:p-10 shadow-sm leading-relaxed">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Book className="w-6 h-6 text-primary" />
                  {lesson.grammar.title}
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
                  {lesson.grammar.content.split('\n').map((line, i) => (
                    <p key={i} className="mb-4 text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lesson.examples.map((ex, i) => (
                  <div key={i} className="bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10 rounded-2xl p-6 relative overflow-hidden group">
                    <p className="text-xl font-black mb-2 text-primary">{ex.italian}</p>
                    <p className="text-muted-foreground font-medium">{ex.english}</p>
                    <Volume2 className="absolute top-4 right-4 w-6 h-6 opacity-10 group-hover:opacity-100 transition-opacity cursor-pointer text-primary" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.vocabulary.map((item, i) => (
                <div key={i} className="bg-card border rounded-2xl p-6 flex items-center justify-between hover:border-primary/50 transition-all group">
                  <div>
                    <p className="text-xl font-bold">{item.italian}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.english}</p>
                    {item.pronunciation && (
                      <p className="text-xs font-mono text-primary mt-2 opacity-60">[{item.pronunciation}]</p>
                    )}
                  </div>
                  <button className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'dialogue' && (
            <div className="bg-card border rounded-3xl p-8 lg:p-12 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{lesson.dialogue.title}</h2>
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                  <PlayCircle className="w-4 h-4" />
                  Listen
                </button>
              </div>

              <div className="space-y-8">
                {lesson.dialogue.lines.map((line, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-2 max-w-[80%]",
                    i % 2 === 0 ? "mr-auto" : "ml-auto items-end text-right"
                  )}>
                    <div className={cn(
                      "px-6 py-4 rounded-2xl relative",
                      i % 2 === 0 
                        ? "bg-muted text-foreground rounded-tl-none" 
                        : "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/10"
                    )}>
                      <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">{line.speaker}</p>
                      <p className="text-lg font-bold">{line.italian}</p>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground px-2">{line.english}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <QuizComponent lesson={lesson} onComplete={handleQuizComplete} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {activeTab !== 'quiz' && (
        <div className="mt-12 flex items-center justify-between border-t pt-8">
          <div />
          <button
            onClick={() => {
              const tabOrder: ('grammar' | 'vocab' | 'dialogue' | 'quiz')[] = ['grammar', 'vocab', 'dialogue', 'quiz'];
              const nextIndex = tabOrder.indexOf(activeTab) + 1;
              if (nextIndex < tabOrder.length) {
                setActiveTab(tabOrder[nextIndex]);
              }
            }}
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            <span>Continue to {activeTab === 'grammar' ? 'Vocabulary' : activeTab === 'vocab' ? 'Dialogue' : 'Quiz'}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
