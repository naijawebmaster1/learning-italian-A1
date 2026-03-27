import { useState, useEffect } from 'react';
import { UserProgress } from '../types/lesson';

const STORAGE_KEY = 'italian_learning_progress';

const initialProgress: UserProgress = {
  completedLessons: [],
  lessonScores: {},
  streak: 0,
  lastStudyDate: null,
  vocabularyMastery: {},
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const completeLesson = (lessonId: number, score: number) => {
    const updated = { ...progress };
    if (!updated.completedLessons.includes(lessonId)) {
      updated.completedLessons.push(lessonId);
    }
    updated.lessonScores[lessonId] = Math.max(updated.lessonScores[lessonId] || 0, score);
    
    // Streak logic
    const today = new Date().toISOString().split('T')[0];
    if (updated.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (updated.lastStudyDate === yesterdayStr) {
        updated.streak += 1;
      } else if (updated.lastStudyDate === null || updated.lastStudyDate < yesterdayStr) {
        updated.streak = 1;
      }
      updated.lastStudyDate = today;
    }

    saveProgress(updated);
  };

  const updateVocabMastery = (italian: string, change: number) => {
    const updated = { ...progress };
    const current = updated.vocabularyMastery[italian] || 0;
    updated.vocabularyMastery[italian] = Math.max(0, Math.min(5, current + change));
    saveProgress(updated);
  };

  const resetProgress = () => {
    saveProgress(initialProgress);
  };

  return {
    progress,
    isLoaded,
    completeLesson,
    updateVocabMastery,
    resetProgress,
  };
}
