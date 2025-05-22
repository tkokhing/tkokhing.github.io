'use client';

import { useFontSize } from '@/app/_components/main_frame/font-size-ctrl';

export default function PostBodyClient({ children }: { children: React.ReactNode }) {
  const { fontSize } = useFontSize();

  return (
    <div className="prose prose-lg md:prose-lg lg:prose-lg mx-auto prose-headings:text-zinc-800 dark:prose-headings:text-slate-400">
      <div className="
        prose-a:text-blue-600 dark:prose-a:text-blue-300
        prose-p:text-indigo-950 dark:prose-p:text-slate-50
        prose-strong:text-zinc-500 dark:prose-strong:text-tkokhing-dark 
        prose-em:text-zinc-500 dark:prose-em:text-violet-100 
        prose-ul:text-gray-600 dark:prose-ul:text-slate-300
        prose-table:text-indigo-950 dark:prose-table:text-slate-50
        ">
        <div className={`prose prose-${fontSize}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
