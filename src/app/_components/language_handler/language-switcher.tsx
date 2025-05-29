"use client";

import styles from './language.module.css';
import { useLanguage } from './language-provider';
import Container from '../preference/container';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };
  return (
    <Container>

    <button
      onClick={handleLanguageChange}
      className={styles.languageSwitch}
      aria-label="Language_Switch"
    >
      {language === 'en' ? '中':'EN'}
    </button>
    </Container>
  );
};

export default LanguageSwitcher;