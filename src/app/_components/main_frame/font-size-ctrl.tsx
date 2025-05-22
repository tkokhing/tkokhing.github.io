"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const FontSizeContext = createContext({
  fontSize: 'base',
  increaseFont: () => {},
  decreaseFont: () => {},
});

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState('base');
  const sizes = ['sm', 'base', 'lg', 'xl', '2xl'];
  const currentIndex = sizes.indexOf(fontSize);

  const increaseFont = () => {
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFont = () => {
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  // Keyboard shortcuts: Alt + = or Alt + -
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === '=') {
        e.preventDefault();
        increaseFont();
      }
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        decreaseFont();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFont, decreaseFont }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
