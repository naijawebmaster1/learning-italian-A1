import { useState, useEffect } from 'react';
import { UserProgress } from '../types/lesson';

const STORAGE_KEY = 'italian_learning_progress_v2'; // Bump version to handle new format

const initialProgress: UserProgress = {
  completedLessons: [], // Will now store strings like 'a1-1'
  lessonScores: {},     // Will now use keys like 'a1-1'
  streak: 0,
  lastStudyDate: null,
  vocabularyMastery: {},
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [currentLevel, setCurrentLevel] = useState<'a1' | 'a2'>('a1');
  const [isLoaded, setIsLoaded] = useState(false);

  const loadProgress = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    } else {
      const oldSaved = localStorage.getItem('italian_learning_progress');
      if (oldSaved) {
        try {
          const oldData = JSON.parse(oldSaved);
          const migrated: UserProgress = {
            ...oldData,
            completedLessons: oldData.completedLessons.map((id: number) => `a1-${id}`),
            lessonScores: Object.fromEntries(
              Object.entries(oldData.lessonScores).map(([id, score]) => [`a1-${id}`, score])
            ),
          };
          setProgress(migrated);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        } catch (e) {
          console.error("Migration failed", e);
        }
      }
    }

    const savedLevel = localStorage.getItem('italian_learning_level');
    if (savedLevel === 'a1' || savedLevel === 'a2') {
      setCurrentLevel(savedLevel);
    }
  };

  useEffect(() => {
    loadProgress();
    setIsLoaded(true);

    const handleStorageChange = () => {
      loadProgress();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    window.dispatchEvent(new Event('storage'));
  };

  const changeLevel = (level: 'a1' | 'a2') => {
    setCurrentLevel(level);
    localStorage.setItem('italian_learning_level', level);
    window.dispatchEvent(new Event('storage'));
  };

  const completeLesson = (level: string, lessonId: number, score: number) => {
    const key = `${level.toLowerCase()}-${lessonId}`;
    const updated = { ...progress };
    
    if (!updated.completedLessons.includes(key)) {
      updated.completedLessons.push(key);
    }
    updated.lessonScores[key] = Math.max(updated.lessonScores[key] || 0, score);
    
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
    currentLevel,
    changeLevel,
    isLoaded,
    completeLesson,
    updateVocabMastery,
    resetProgress,
  };
}
