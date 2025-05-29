'use client';

import enContent from './public/frontier_data_en.mdx';
import zhContent from './public/frontier_data_zh.mdx';
// import enContent from '@/../_frontier_data/frontier_data_en.mdx';
// import zhContent from '@/../_frontier_data/frontier_data_zh.mdx';
import DisplayLanguageContent from '../language_handler/language-display';

export default function FrontierData() {
  return <DisplayLanguageContent components={{ en: enContent, zh: zhContent }}/>
}
