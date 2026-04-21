"use client";

import { useState } from 'react';

export default function DismissibleBox({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="my-5 relative border border-gray-300 rounded-md p-4 bg-teal-100 hover:bg-slate-400 dark:bg-gray-200 hover:dark:bg-slate-400 text-slate-800">
      <button
        title="Dismiss"
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-red-600 hover:text-white text-sm font-bold"
        aria-label="Close"
      >
        ✕
      </button>
      {children}
    </div>
  );
}
