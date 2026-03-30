'use client';

import { lessons } from '@/data/lessons';
import { lessonsA2 } from '@/data/lessonsA2';
import { useProgress } from '@/hooks/useProgress';
import { LessonCard } from '@/components/LessonCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, Rocket, Star, BookOpen, Zap, Globe, ArrowRight, Layers } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Home() {
  const { progress, currentLevel, changeLevel } = useProgress();
  const currentLessons = currentLevel === 'a1' ? lessons : lessonsA2;
  
  const completedCount = progress.completedLessons.filter(id => id.startsWith(currentLevel)).length;
  const totalLessons = currentLessons.length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {currentLevel.toUpperCase()} Italian Course
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-6 italic">
              <span className="text-[#008C45]">Italiano</span> <span className="text-[#CD212A]">{currentLevel.toUpperCase()}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
              {currentLevel === 'a1' 
                ? "Master the basics of Italian with a premium, structured learning experience designed to take you from zero to conversational."
                : "Level up your Italian. Master the past tense, pronouns, and handle complex everyday conversations with confidence."}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 cursor-pointer"
              >
                Start Learning <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex bg-muted p-1 rounded-full border shadow-inner">
                <button 
                  onClick={() => changeLevel('a1')}
                  className={cn(
                    "px-6 py-3 rounded-full font-bold transition-all",
                    currentLevel === 'a1' ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  A1
                </button>
                <button 
                  onClick={() => changeLevel('a2')}
                  className={cn(
                    "px-6 py-3 rounded-full font-bold transition-all",
                    currentLevel === 'a2' ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  A2
                </button>
              </div>
            </div>
          </motion.div>
          {/* ... Hero Image remains same ... */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10 bg-muted/20">
               <Image 
                src="/logo/photo-happy-women-different-races-laugh-as-watch-funny-video-internet-website Medium.png" 
                alt="Students learning together" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid ("What's Included") */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { title: `${totalLessons} Structured Lessons`, desc: currentLevel === 'a1' ? "From alphabet to complex greetings." : "Master complex tenses and pronouns.", icon: BookOpen },
          { title: "Interactive Quizzes", desc: "Instant feedback on your progress.", icon: Zap },
          { title: currentLevel === 'a1' ? "A2 Readiness" : "B1 Readiness", desc: "Prepare for intermediate fluency.", icon: Globe },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
          >
            <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Progress & Stats (Dashboard Style) */}
      <section className="bg-muted/30 border rounded-[3rem] p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Active Progress</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Track your journey as you master the Italian language. Your current stats are updated in real-time.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <Star className="w-5 h-5 fill-primary" />
              <span>{currentLevel.toUpperCase()} Mastery</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Overall Progress', value: `${progressPercentage}%`, icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { label: 'Current Streak', value: `${progress.streak} days`, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { label: 'Completed', value: `${completedCount}/${totalLessons}`, icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
            { label: 'Mastered Vocab', value: `${Object.keys(progress.vocabularyMastery).length}`, icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
          ].map((stat, i) => (
            <div key={stat.label} className="bg-background border rounded-2xl p-6 flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-black mt-1">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons Grid */}
      <section id="lessons">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2">Curriculum</h2>
            <p className="text-muted-foreground">Level {currentLevel.toUpperCase()} — Essential Mastery</p>
          </div>
          <div className="flex items-center gap-2 bg-muted p-1 rounded-xl">
            <button 
              onClick={() => changeLevel('a1')}
              className={cn("px-4 py-2 rounded-lg font-bold text-sm transition-all", currentLevel === 'a1' ? "bg-background shadow-sm" : "opacity-50")}
            >
              A1
            </button>
            <button 
              onClick={() => changeLevel('a2')}
              className={cn("px-4 py-2 rounded-lg font-bold text-sm transition-all", currentLevel === 'a2' ? "bg-background shadow-sm" : "opacity-50")}
            >
              A2
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {currentLessons.map((lesson, idx) => (
              <LessonCard key={`${currentLevel}-${lesson.id}`} lesson={lesson} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Pricing / CTA */}
      <section className={cn(
        "text-white rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden transition-colors duration-500",
        currentLevel === 'a1' ? "bg-[#008C45]" : "bg-[#005B96]"
      )}>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            {currentLevel === 'a1' ? "Inizia ora la tua avventura." : "Continua il tuo viaggio."}
          </h2>
          <p className="text-white/80 text-xl mb-12">
            The Italiano {currentLevel.toUpperCase()} course is designed to be accessible, interactive, and completely free.
          </p>
          <button 
            onClick={() => document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-foreground px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl cursor-pointer"
          >
            {currentLevel === 'a1' ? "Get Started Now" : "Keep Growing"}
          </button>
        </div>
      </section>

      {/* Footer / Tech Stack */}
      <footer className="border-t pt-12 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-6">
          <span>Built with <strong>Next.js 16</strong></span>
          <span>Powered by <strong>Tailwind CSS</strong></span>
          <span>Animated by <strong>Framer Motion</strong></span>
        </p>
      </footer>
    </div>
  );
}
