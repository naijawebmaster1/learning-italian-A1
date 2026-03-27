'use client';

import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial dark mode from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("flex min-h-screen bg-background text-foreground transition-colors duration-300", inter.className)}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 overflow-x-hidden p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
