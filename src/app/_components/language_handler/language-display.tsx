'use client';

import { type ElementType } from 'react';
import LanguageSwitcher from "@/app/_components/language_handler/language-switcher";
import { useLanguage } from "@/app/_components/language_handler/language-provider";

type LanguageChoiceProps = {
  components: {
    en: ElementType;
    zh: ElementType;
  };
};

export default function DisplayLanguageContent({ components }: LanguageChoiceProps) {
  const { language } = useLanguage();
  const DisplayContent = language === 'en' ? components.en:components.zh;

  return( 
    <div>
      <div className="fixed bottom-2 right-0 w-full z-20"><LanguageSwitcher /></div> 
        <DisplayContent />
    </div>)
}
