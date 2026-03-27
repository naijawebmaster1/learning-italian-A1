'use client';

import { Moon, Sun, Flame, User, Bell } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { progress } = useProgress();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialDarkMode = root.classList.contains('dark');
    setIsDark(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-4 md:hidden">
          <span className="text-xl font-bold text-primary">Italiano</span>
        </div>

        <div className="hidden md:flex ml-auto items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200 dark:border-orange-500/20">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span className="text-sm font-bold">{progress.streak} Day Streak</span>
          </div>

          <div className="h-6 w-px bg-border mx-2" />

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
          </button>

          <div className="flex items-center gap-3 pl-2">
            <div className="flex flex-col items-end text-right">
              <span className="text-sm font-semibold leading-none">A1 Student</span>
              <span className="text-xs text-muted-foreground mt-1">Strong Comprehension</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
