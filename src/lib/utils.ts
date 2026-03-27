import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function validateTyping(input: string, target: string): boolean {
  const normalize = (s: string) => s.toLowerCase().replace(/[.,!?;:]/g, '').trim();
  return normalize(input) === normalize(target);
}
