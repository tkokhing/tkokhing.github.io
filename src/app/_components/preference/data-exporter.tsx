// for content injections and 
// export to different page.tsx for dynamic language switching
"use client";
import enFrontierData from '@/lib/_data_exporter/frontier_data_en.mdx';
import zhFrontierData from '@/lib/_data_exporter/frontier_data_zh.mdx';
import enCyberDomainData from '@/lib/_data_exporter/strategic_cyber_domains_en.mdx';
import zhCyberDomainData from '@/lib/_data_exporter/strategic_cyber_domains_zh.mdx';
import enCyberThreatsData from '@/lib/_data_exporter/cyber_threats_25_en.mdx';
import zhCyberThreatsData from '@/lib/_data_exporter/cyber_threats_25_zh.mdx';
import enBlueprintBattlefieldDataData from '@/lib/_data_exporter/blueprint_to_battlefield_en.mdx';
import zhBlueprintBattlefieldDataData from '@/lib/_data_exporter/blueprint_to_battlefield_zh.mdx';

import DisplayLanguageContent from '@/app/_components/language_handler/language-display';

export const FrontierData = () => {
  return <DisplayLanguageContent LanguageChoice={{ en: enFrontierData, zh: zhFrontierData }}/>
};

export const CyberDomainData = () => {
  return <DisplayLanguageContent LanguageChoice={{ en: enCyberDomainData, zh: zhCyberDomainData }}/>
};

export const CyberThreatsData = () => {
  return <DisplayLanguageContent LanguageChoice={{ en: enCyberThreatsData, zh: zhCyberThreatsData }}/>
};

export const BlueprintBattlefieldData = () => {
  return <DisplayLanguageContent LanguageChoice={{ en: enBlueprintBattlefieldDataData, zh: zhBlueprintBattlefieldDataData }}/>
};
