'use client';
 
import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';
import { LessonCard } from '@/components/LessonCard';
import { motion } from 'framer-motion';
import { Trophy, Flame, Rocket, Star, BookOpen, Zap, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { progress } = useProgress();
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

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
                A1 Italian Course
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
              <span className="text-[#008C45]">Italiano</span> <span className="text-[#CD212A]">A1</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
              Master the basics of Italian with a premium, structured learning experience designed to take you from zero to conversational.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 cursor-pointer"
              >
                Start Learning <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-background border px-8 py-4 rounded-full font-bold text-lg hover:bg-muted transition-colors">
                Vocabulary Review
              </button>
            </div>
          </motion.div>

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
          { title: "10 Structured Lessons", desc: "From alphabet to complex greetings.", icon: BookOpen },
          { title: "Interactive Quizzes", desc: "Instant feedback on your progress.", icon: Zap },
          { title: "B1 Readiness", desc: "Prepare for intermediate fluency.", icon: Globe },
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
              <span>A1 Mastery</span>
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
        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight mb-2">Curriculum</h2>
          <p className="text-muted-foreground">Pick up where you left off or start a new lesson.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lessons.map((lesson, idx) => (
            <LessonCard key={lesson.id} lesson={lesson} index={idx} />
          ))}
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="bg-[#008C45] text-white rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Inizia ora la tua avventura.</h2>
          <p className="text-white/80 text-xl mb-12">
            The Italiano A1 course is designed to be accessible, interactive, and completely free for beginners.
          </p>
          <button 
            onClick={() => document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#008C45] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl cursor-pointer"
          >
            Get Started Now
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
