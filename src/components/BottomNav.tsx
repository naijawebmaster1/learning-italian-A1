'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, GraduationCap, Repeat, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Lessons', icon: BookOpen, href: '/#lessons' },
    { label: 'Practice', icon: GraduationCap, href: '/practice' },
    { label: 'Review', icon: Repeat, href: '/review' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t px-6 py-3 pb-3 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === '/#lessons' && pathname.includes('/lessons/'));
          
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className="flex flex-col items-center gap-1 group relative"
            >
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-[#008C45] text-white scale-110 shadow-lg shadow-[#008C45]/20" : "text-muted-foreground group-hover:text-foreground"
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className={cn(
                "text-[10px] uppercase tracking-widest transition-opacity duration-300",
                isActive ? "opacity-100 text-[#008C45]" : "opacity-60"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
