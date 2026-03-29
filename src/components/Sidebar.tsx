'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Home, 
  Trophy, 
  Settings, 
  GraduationCap, 
  Repeat, 
  LayoutDashboard,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';

export function SidebarContent({ className, onItemClick, hideHeader }: { className?: string, onItemClick?: () => void, hideHeader?: boolean }) {
  const pathname = usePathname();
  const { progress } = useProgress();

  const isLessonLocked = (id: number) => {
    if (id === 1) return false;
    return !progress.completedLessons.includes(id - 1);
  };

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { title: 'Practice', icon: GraduationCap, href: '/practice' },
    { title: 'Vocabulary Review', icon: Repeat, href: '/review' },
  ];

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {!hideHeader && (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            <span>Italiano</span>
          </h1>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto px-4 space-y-8 pb-8">
        <div className="space-y-1">
          <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Home
          </p>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="space-y-1">
          <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            A1 Lessons
          </p>
          {lessons.map((lesson) => {
            const locked = isLessonLocked(lesson.id);
            const completed = progress.completedLessons.includes(lesson.id);
            const active = pathname === `/lessons/${lesson.slug}`;
            
            return (
              <Link
                key={lesson.id}
                href={locked ? "#" : `/lessons/${lesson.slug}`}
                onClick={locked ? undefined : onItemClick}
                className={cn(
                  "flex items-center justify-between px-3 py-3 rounded-lg transition-all border border-transparent",
                  active ? "bg-accent border-accent-foreground/10 text-accent-foreground shadow-sm" : "hover:bg-muted group",
                  locked && "opacity-60 cursor-not-allowed pointer-events-none"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border",
                    completed ? "bg-green-500/10 border-green-500 text-green-600" : "border-muted-foreground/30 text-muted-foreground"
                  )}>
                    {lesson.id}
                  </span>
                  <span className="text-sm font-medium line-clamp-1">{lesson.title}</span>
                </div>
                {locked ? (
                  <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                ) : completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : null}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t">
        <div className="bg-muted/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Course Progress</span>
            <span className="text-xs font-bold text-primary">
              {Math.round((progress.completedLessons.length / lessons.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${(progress.completedLessons.length / lessons.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("hidden md:flex flex-col w-64 border-r bg-card h-screen sticky top-0", className)}>
      <SidebarContent />
    </aside>
  );
}
