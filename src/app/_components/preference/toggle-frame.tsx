"use client";

import { useRef, useState, useEffect, createContext, useContext } from "react";
import { useToggleBroadcast } from "./toggle-frame-provider";

type Props = {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

/* ---------- Auto layerCount Context ---------- */
/* Outermost starts at 20px, every nested frame moves 4px towards the content */

const ToggleOffsetContext = createContext(0);
const OutermostOffset = 60;
const OFFSET_STEP = 10;

// Next 2 lines are switching between "defaultOpen = true" Vs "defaultOpen = false" for quick open_all, close_all
export function ToggleFrame({ label, children, defaultOpen = true }: Props) {
// export function ToggleFrame({ label, children, defaultOpen = false }: Props) {

  const ctx = useToggleBroadcast();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  const layerCount = useContext(ToggleOffsetContext);

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

  const displayOffset = OutermostOffset - (layerCount * OFFSET_STEP);

  const opacity = Math.max(0.2, 0.8 - layerCount * 0.3);

  return (
    <ToggleOffsetContext.Provider value={layerCount + 1}>
      <div
        ref={ref}
        tabIndex={-1}
        className="
        relative
        py-3
        "
      >

        {/* Left translucent indicator */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            top-0
            h-full
            w-1
            rounded-r
            mix-blend-screen
          bg-emerald-400
          "
          style={{
            left: `-${displayOffset}px`,
            opacity
          }}
        />

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
    </ToggleOffsetContext.Provider>
  );
}
