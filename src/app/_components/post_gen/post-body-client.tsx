"use client";

import { useFontSize } from '@/app/_components/main_frame/font-size-ctrl';

export default function PostBodyClient({ children }: { children: React.ReactNode }) {
  const { fontSize } = useFontSize();

  return (
    <div className={
      `mx-auto prose prose-${fontSize} prose dark:prose-invert
      prose-h1:text-sky-950       dark:prose-h1:text-teal-50
      prose-h2:text-sky-800       dark:prose-h2:text-teal-100
      prose-h3:text-[#056193]     dark:prose-h3:text-[#B2F8EA]
      prose-h4:text-sky-700       dark:prose-h4:text-teal-200
      prose-h5:text-[#0276B4]     dark:prose-h5:text-[#7CF0DC]
      prose-h6:text-sky-600       dark:prose-h6:text-teal-300
      prose-a:text-blue-800 dark:prose-a:text-blue-300
      prose-p:text-zinc-700 dark:prose-p:text-zinc-300
      prose-strong:text-stone-800 dark:prose-strong:text-sky-100
      prose-strong:font-extrabold 
      prose-em:text-sky-900 dark:prose-em:text-indigo-300
      prose-li:text-gray-600 dark:prose-li:text-slate-300
      prose-ul:text-gray-600 dark:prose-ul:text-slate-300
      prose-table:text-zinc-700 dark:prose-table:text-zinc-300
      prose-code:before:content-[''] prose-code:after:content-['']

      prose-code:bg-[#24292E] prose-code:text-[#77cbf2]
      prose-code:rounded-md prose-code:px-1.5
      prose-code:py-0.5 prose-code:font-thin
      prose-code:text-sm prose-code:inline-block
      prose-code:leading-relaxed
        `}>
          {children}
      </div>
  );
}
