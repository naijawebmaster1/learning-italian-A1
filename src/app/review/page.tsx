'use client';

import { useProgress } from '@/hooks/useProgress';
import { lessons } from '@/data/lessons';
import { VocabularyCard } from '@/components/VocabularyCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Repeat, GraduationCap, ArrowRight, ChevronLeft, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ReviewPage() {
  const { progress } = useProgress();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'unmastered' | 'mastered'>('all');

  const allVocab = useMemo(() => {
    // Only show vocab from completed lessons
    const completedVocab = lessons
      .filter(l => progress.completedLessons.includes(l.id))
      .flatMap(l => l.vocabulary.map(v => ({ ...v, lessonId: l.id })));
    
    return completedVocab;
  }, [progress.completedLessons]);

  const filteredVocab = useMemo(() => {
    return allVocab.filter(v => {
      const matchesSearch = v.italian.toLowerCase().includes(search.toLowerCase()) || 
                           v.english.toLowerCase().includes(search.toLowerCase());
      
      const mastery = progress.vocabularyMastery[v.italian] || 0;
      const matchesFilter = filter === 'all' || 
                           (filter === 'mastered' && mastery >= 4) || 
                           (filter === 'unmastered' && mastery < 4);
      
      return matchesSearch && matchesFilter;
    });
  }, [allVocab, search, filter, progress.vocabularyMastery]);

  if (progress.completedLessons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <GraduationCap className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-black">No Vocabulary to Review Yet</h1>
        <p className="text-muted-foreground max-w-sm">Complete at least one lesson to start reviewing vocabulary with flashcards.</p>
        <Link href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
          Go to Lessons
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-4 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-black flex items-center gap-3">
            <Repeat className="w-10 h-10 text-primary" />
            Review Mode
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">Master {allVocab.length} words from your completed lessons.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search words..."
              className="w-full bg-muted border-none rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 ring-primary/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex bg-muted p-1 rounded-xl">
            {(['all', 'unmastered', 'mastered'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold transition-all capitalize",
                  filter === f ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredVocab.map((item, idx) => (
            <motion.div
              layout
              key={item.italian}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.05 }}
            >
              <VocabularyCard 
                item={item} 
                mastery={progress.vocabularyMastery[item.italian]} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredVocab.length === 0 && (
        <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-muted text-muted-foreground">
          <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
          <p className="font-bold">No words match your filters.</p>
        </div>
      )}
    </div>
  );
}
