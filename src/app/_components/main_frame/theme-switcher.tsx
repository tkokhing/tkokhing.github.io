"use client";

import { memo, useEffect, useState } from 'react';
import styles from './switch.module.css';

const STORAGE_KEY = 'this-theme';
const MODES = ['system', 'dark', 'light'] as const;
type ColorSchemePreference = typeof MODES[number];

// Injects theme script before hydration to avoid FOUC
const noFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ['system', 'dark', 'light'];
  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  const disableTransitionsTemporarily = () => {
    const style = document.createElement('style');
    style.textContent = '*, *::before, *::after { transition: none !important; }';
    document.head.appendChild(style);

    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(style), 1);
    };
  };

  const applyTheme = () => {
    const restoreTransitions = disableTransitionsTemporarily();
    const storedMode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = storedMode === SYSTEM ? systemMode : storedMode;

    const classList = document.documentElement.classList;
    classList.toggle(DARK, resolvedMode === DARK);
    document.documentElement.setAttribute('data-mode', storedMode);
    restoreTransitions();
  };

  applyTheme();
  media.addEventListener('change', applyTheme);
};

const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>(() => {
    return (typeof localStorage !== 'undefined'
      ? (localStorage.getItem(STORAGE_KEY) as ColorSchemePreference)
      : 'system') ?? 'system';
  });

  useEffect(() => {
    const storedMode = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    setMode(storedMode ?? 'system');
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    const systemMode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const resolvedMode = mode === 'system' ? systemMode : mode;
    const classList = document.documentElement.classList;
    classList.toggle('dark', resolvedMode === 'dark');
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  const handleToggle = () => {
    const nextIndex = (MODES.indexOf(mode) + 1) % MODES.length;
    setMode(MODES[nextIndex]);
  };

  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      aria-label="Toggle theme"
      onClick={handleToggle}
    />
  );
};

const Script = memo(() => (
  <script
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: `(${noFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

export const ThemeSwitcher = () => (
  <>
    <Script />
    <Switch />
  </>
);