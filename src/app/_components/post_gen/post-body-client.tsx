'use client';

import { useFontSize } from '@/app/_components/main_frame/font-size-ctrl';

export default function PostBodyClient({ children }: { children: React.ReactNode }) {
  const { fontSize } = useFontSize();

  return (
    <div className={
      `mx-auto prose prose-${fontSize}
      prose-headings:text-zinc-800 dark:prose-headings:text-slate-400
      prose-a:text-blue-800 dark:prose-a:text-blue-300
      prose-p:text-zinc-700 dark:prose-p:text-zinc-300
      prose-strong:text-stone-800 dark:prose-strong:text-sky-100
      prose-strong:font-extrabold 
      prose-em:text-sky-900 dark:prose-em:text-violet-100
      prose-em:font-extrabold 
      prose-ul:text-gray-600 dark:prose-ul:text-slate-300
      prose-table:text-zinc-700 dark:prose-table:text-zinc-300        
      `}>
        {children}
    </div>
  );
}
