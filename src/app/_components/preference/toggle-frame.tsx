// app/_components/toggle-frame.tsx

"use client";

import { useState, ReactNode } from "react";

type Props = {
  label?: string;
  children: ReactNode;
};

export function ToggleFrame({ label, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        onClick={() => setOpen(!open)}
        className="underline text-blue-800 dark:text-blue-300  hover:text-tkokhing-blue hover:dark:text-tkokhing-dark transition"
      >
        {open ? `Hide ${label}` : `Show ${label}`}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}
