"use client";

import { useRef, useState, useEffect } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function ToggleFrame({ label, children, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Scroll into view when opened
  useEffect(() => {
    if (isOpen && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [isOpen]);

  return (
    <div ref={ref}>
      <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />
      <button
        type="button"
        onClick={handleToggle}
        className="text-left text-xs font-semibold underline text-blue-800 dark:text-blue-300  hover:text-tkokhing-blue hover:dark:text-tkokhing-dark transition"
      >
        {label}&nbsp;{isOpen ? "▼" : "▶"} 
      </button>

      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
      <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />
    </div>
  );
}
