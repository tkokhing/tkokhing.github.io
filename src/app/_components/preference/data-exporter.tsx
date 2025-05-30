// for content injections and 
// export to different page.tsx for dynamic language switching
'use client';

import enFrontierData from '@/lib/_data_exporter/frontier_data_en.mdx';
import zhFrontierData from '@/lib/_data_exporter/frontier_data_zh.mdx';
import enCyberDomainData from '@/lib/_data_exporter/strategic_cyber_domains_en.mdx';
import zhCyberDomainData from '@/lib/_data_exporter/strategic_cyber_domains_zh.mdx';

import DisplayLanguageContent from '../language_handler/language-display';

export const FrontierData = () => {
  return <DisplayLanguageContent components={{ en: enFrontierData, zh: zhFrontierData }}/>
}

export const CyberDomainData = () => {
  return <DisplayLanguageContent components={{ en: enCyberDomainData, zh: zhCyberDomainData }}/>
}
