"use client";

import { useState } from 'react';

export default function DismissibleBox({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative border border-gray-300 rounded-md p-4 bg-gray-200 hover:bg-slate-400 text-slate-800">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-sm font-bold"
        aria-label="Close"
      >
        ✕
      </button>
      {children}
    </div>
  );
}
