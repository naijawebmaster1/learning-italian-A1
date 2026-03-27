'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VocabularyItem } from '@/types/lesson';
import { cn } from '@/lib/utils';
import { Volume2, RefreshCcw, Star } from 'lucide-react';

interface VocabularyCardProps {
  item: VocabularyItem;
  mastery?: number;
}

export function VocabularyCard({ item, mastery = 0 }: VocabularyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-card border-2 border-primary/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-primary/5 transition-shadow">
          <div className="absolute top-4 right-4 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "w-3 h-3", 
                  i < mastery ? "fill-primary text-primary" : "text-muted-foreground/30"
                )} 
              />
            ))}
          </div>
          <h3 className="text-3xl font-black text-primary mb-2">{item.italian}</h3>
          <p className="text-sm font-mono text-muted-foreground opacity-60">[{item.pronunciation}]</p>
          <div className="mt-8 p-3 rounded-full bg-primary/5 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <Volume2 className="w-5 h-5" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
            <RefreshCcw className="w-3 h-3" />
            <span>Tap to flip</span>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl rotate-y-180"
        >
          <p className="text-sm font-black uppercase tracking-widest opacity-60 mb-4 text-primary-foreground/80">Translation</p>
          <h3 className="text-4xl font-black">{item.english}</h3>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold opacity-60">
            <RefreshCcw className="w-3 h-3" />
            <span>Tap to flip</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
