"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang) setLanguage(storedLang);
  }, []);

  const changeLanguage = (lang: Language) => {
    try {
      if (!['en', 'zh'].includes(lang)) {
        throw new Error(`Invalid language: ${lang}`);
      }
      
      setLanguage(lang);
      localStorage.setItem('language', lang);
      setError(null);
    } catch (error){
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown Error Occurred");
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, error }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
