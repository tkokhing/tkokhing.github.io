//new
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const sizes = ['sm', 'base', 'lg', 'xl', '2xl'];

type FontSizeType = typeof sizes[number];

interface FontSizeContextType {
  fontSize: FontSizeType;
  setFontSize: (size: FontSizeType) => void;
  increaseFont: () => void;
  decreaseFont: () => void;
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 'base',
  setFontSize: () => {},
  increaseFont: () => {},
  decreaseFont: () => {},
});

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState<FontSizeType>('base');

  const increaseFont = () => {
    const index = sizes.indexOf(fontSize);
    if (index < sizes.length - 1) {
      setFontSize(sizes[index + 1]);
    }
  };

  const decreaseFont = () => {
    const index = sizes.indexOf(fontSize);
    if (index > 0) {
      setFontSize(sizes[index - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === '=') {
        e.preventDefault();
        increaseFont();
      } else if (e.altKey && e.key === '-') {
        e.preventDefault();
        decreaseFont();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, increaseFont, decreaseFont }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
