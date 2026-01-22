"use client";

import { useRef, useState, useEffect } from "react";
import { useToggleBroadcast } from "./toggle-frame-provider";

type Props = {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};


// Next 2 lines are switching between "defaultOpen = true" Vs "defaultOpen = false" for quick open_all, close_all
export function ToggleFrame({ label, children, defaultOpen = true }: Props) {
// export function ToggleFrame({ label, children, defaultOpen = false }: Props) {

  const ctx = useToggleBroadcast();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  // for Toggle open / closed
  useEffect(() => {
    if (!ctx) return;

    return ctx.register((open: boolean) => {
      setIsOpen(open);
    });
  }, [ctx]);

  // Scroll into view when ESC is pressed
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Escape" &&
        isOpen &&
        document.activeElement === ref.current
      ) {
        scrollToTopAndClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Scroll COLLAPSED frame to center when ESC or [COLLAPSE] button is pressed
  useEffect(() => {
    if (!isOpen && ref.current) {
      requestAnimationFrame(() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    }
  }, [isOpen]);

  const scrollToTopAndClose = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="shadow-sm hover:shadow-sm hover:shadow-blue-900/85 dark:shadow-sky-900/50 hover:dark:shadow-yellow-100/85 py-3 px-4"
    >
      <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />

      {/* TOP TOGGLE */}
      <button
        type="button"
        onClick={handleToggle}
        className="text-left text-xs font-semibold underline text-blue-800 dark:text-blue-300 hover:text-tkokhing-blue hover:dark:text-tkokhing-dark transition"
      >
        {label}&nbsp;{isOpen ? "▼" : "▶"}
      </button>

      {isOpen && (
        <div className="mt-4">
          {children}

          {/* BOTTOM TOGGLE */}
          <div className="mt-6 text-right">
            <button
              type="button"
              onClick={scrollToTopAndClose}
              className="text-xs font-semibold underline text-blue-800 dark:text-blue-300 hover:text-tkokhing-blue hover:dark:text-tkokhing-dark transition"
            >
              Collapse ▲
            </button>
          </div>
        </div>
      )}

      <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />
    </div>
  );
}
