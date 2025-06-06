"use client";

import { type ElementType } from 'react';
import LanguageSwitcher from "@/app/_components/language_handler/language-switcher";
import { useLanguage } from "@/app/_components/language_handler/language-provider";

type LanguageChoiceProps = {
  LanguageChoice: {
    en: ElementType;
    zh: ElementType;
  };
};

export default function DisplayLanguageContent({ LanguageChoice }: LanguageChoiceProps) {
  const { language } = useLanguage();
  const DisplayContent = language === 'en' ? LanguageChoice.en:LanguageChoice.zh;

  return( 
    <div>
      <div className="fixed bottom-2 right-0 w-full z-20"><LanguageSwitcher /></div> 
        <DisplayContent />
    </div>)
}
