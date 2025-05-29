'use client';

import enContent from '@/lib/_frontier_data/frontier_data_en.mdx';
import zhContent from '@/lib/_frontier_data/frontier_data_zh.mdx';
import DisplayLanguageContent from '../language_handler/language-display';

export default function FrontierData() {
  return <DisplayLanguageContent components={{ en: enContent, zh: zhContent }}/>
}
