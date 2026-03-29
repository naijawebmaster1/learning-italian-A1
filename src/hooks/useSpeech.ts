'use client';

import { useCallback, useEffect, useState } from 'react';

export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      
      const updateVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;

      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const speak = useCallback((text: string, lang: string = 'it-IT') => {
    if (!isSupported) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // Try to find a high-quality Italian voice
    const italianVoice = voices.find(v => v.lang.startsWith('it') && (v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced')));
    const fallbackVoice = voices.find(v => v.lang.startsWith('it'));
    
    if (italianVoice) {
      utterance.voice = italianVoice;
    } else if (fallbackVoice) {
      utterance.voice = fallbackVoice;
    }

    utterance.rate = 0.9; // Slightly slower for better comprehension
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
  }, [isSupported, voices]);

  return { speak, isSupported };
}
