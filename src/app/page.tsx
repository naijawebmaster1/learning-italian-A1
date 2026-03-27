'use client';

import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';
import { LessonCard } from '@/components/LessonCard';
import { motion } from 'framer-motion';
import { Trophy, Flame, Rocket, Star, BookOpen, Clock } from 'lucide-react';

export default function Dashboard() {
  const { progress } = useProgress();
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-black tracking-tight lg:text-5xl">
            Benvenuti, <span className="text-primary italic">Studente!</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl leading-relaxed">
            Your journey to Italian fluency starts here. Master the A1 level and prepare for the B1 transition with structured lessons and real-life dialogues.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { label: 'Progress', value: `${progressPercentage}%`, icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { label: 'Streak', value: `${progress.streak} days`, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { label: 'Lessons', value: `${completedCount}/${totalLessons}`, icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
            { label: 'Vocab', value: `${Object.keys(progress.vocabularyMastery).length}`, icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-2xl p-6 flex items-center justify-between group shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </header>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Level A1: Beginner</h2>
            <p className="text-muted-foreground text-sm mt-1">Foundational lessons for daily communication.</p>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <Star className="w-5 h-5 fill-primary" />
            <span>Active Journey</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lessons.map((lesson, idx) => (
            <LessonCard key={lesson.id} lesson={lesson} index={idx} />
          ))}
        </div>
      </section>

      {/* Quick Access / Practice Promo */}
      <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Ready to test your skills?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the "Practice Arena" to tackle randomized questions from all the lessons you've completed so far.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Start Random Practice
              </button>
              <button className="bg-background border px-8 py-3 rounded-xl font-bold hover:bg-muted transition-colors">
                Vocabulary Flashcards
              </button>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center border-4 border-dashed border-primary/20"
          >
            <Clock className="w-24 h-24 text-primary opacity-20" />
          </motion.div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
}
