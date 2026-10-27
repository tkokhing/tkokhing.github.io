"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { useToggleBroadcast } from "./toggle-frame-provider";

type Props = {
  firstload?: "ON" | "OFF";
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  label: string;
  children: React.ReactNode;
};

/* ---------- Create Responsive Nested Frames With line Indicator for layer ---------- */
/*
 * Platform: OUTERMOST_OFFSET / OFFSET_STEP
 * Desktop : 60px / 10px
 * Tablet  : 48px / 8px
 * Phone   : 36px / 6px
 */

const ToggleOffsetContext = createContext(0);

const DEFAULT_OUTERMOST_OFFSET = 60;
const DEFAULT_OFFSET_STEP = 10;

const ToggleHeading = ({
  heading,
  id,
  children,
}: {
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id: string;
  children: React.ReactNode;
}) => {
  const props = {
    id,
    className: "scroll-mt-24",
  };

  switch (heading) {
    case "h1":
      return <h1 {...props}>{children}</h1>;

    case "h2":
      return <h2 {...props}>{children}</h2>;

    case "h3":
      return <h3 {...props}>{children}</h3>;

    case "h4":
      return <h4 {...props}>{children}</h4>;

    case "h5":
      return <h5 {...props}>{children}</h5>;

    case "h6":
      return <h6 {...props}>{children}</h6>;
  }
};

export function ToggleFrame({
  firstload = "ON",
  heading = "h4",
  label,
  id,
  children,
}: Props) {
  const ctx = useToggleBroadcast();

  /*
   * ------------------------------------------------------------
   * FIRSTLOAD
   * ------------------------------------------------------------
   *
   * This determines the initial visual state only.
   *
   * ON  -> open when page loads
   * OFF -> closed when page loads
   *
   * Importantly, this does NOT cause scrolling.
   */
  const firstloadState = firstload === "ON";

  const [isOpen, setIsOpen] = useState(firstloadState);

  /*
   * ------------------------------------------------------------
   * FRAME REFERENCE
   * ------------------------------------------------------------
   */
  const ref = useRef<HTMLDivElement>(null);

  /*
   * ------------------------------------------------------------
   * EXPLICIT COLLAPSE SCROLL
   * ------------------------------------------------------------
   *
   * This flag means:
   *
   * "The frame was deliberately collapsed by the user."
   *
   * It is NOT set by:
   *
   * - firstload
   * - ResetAll
   * - CollapseAll
   */
  const shouldCenterAfterCloseRef = useRef(false);

  /*
   * ------------------------------------------------------------
   * NESTING DEPTH
   * ------------------------------------------------------------
   */
  const layerCount = useContext(ToggleOffsetContext);

  /*
   * ------------------------------------------------------------
   * RESPONSIVE OFFSET
   *
   * SSR-safe:
   * The server and first client render always use the same
   * deterministic defaults.
   *
   * Browser dimensions are read only after hydration.
   * ------------------------------------------------------------
   */
  const [outermostOffset, setOutermostOffset] = useState(
    DEFAULT_OUTERMOST_OFFSET
  );

  const [offsetStep, setOffsetStep] = useState(
    DEFAULT_OFFSET_STEP
  );

  useEffect(() => {
    const updateResponsiveOffset = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setOutermostOffset(60);
        setOffsetStep(10);
      } else if (width >= 768) {
        setOutermostOffset(48);
        setOffsetStep(8);
      } else {
        setOutermostOffset(36);
        setOffsetStep(6);
      }
    };

    updateResponsiveOffset();

    window.addEventListener(
      "resize",
      updateResponsiveOffset
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateResponsiveOffset
      );
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * HEADING ANCHOR
   * ------------------------------------------------------------
   *
   * Explicit id wins.
   * Otherwise generate one automatically from label.
   */
  const headingId =
    id ??
    label
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  /*
   * ------------------------------------------------------------
   * DEPTH-AWARE BAR
   * ------------------------------------------------------------
   */
// Nested frame indicative line and positioning
  const displayOffset =
    outermostOffset - layerCount * offsetStep;

  const opacity = Math.max(
    0.2,
    0.8 - Math.min(layerCount, 3) * 0.3
  );

  /*
   * ------------------------------------------------------------
   * NORMAL TOGGLE
   * ------------------------------------------------------------
   */
  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  /*
   * ------------------------------------------------------------
   * EXPLICIT COLLAPSE
   * ------------------------------------------------------------
   *
   * This is the ONLY place where we deliberately request
   * the collapse-scroll behavior.
   */
  const scrollToTopAndClose = () => {
    shouldCenterAfterCloseRef.current = true;

    // ref.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });

    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  /*
   * ------------------------------------------------------------
   * PROVIDER REGISTRATION
   * ------------------------------------------------------------
   *
   * ExpandAll / CollapseAll / ResetAll communicate here.
   *
   * None of these automatically trigger the explicit
   * collapse-scroll behavior.
   */
  useEffect(() => {
    if (!ctx) return;

    return ctx.register(
      (open: boolean) => {
        setIsOpen(open);
      },
      firstloadState
    );
  }, [ctx, firstloadState]);

  // ESCAPE, utilise scrollToTopAndClose().
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (
        document.activeElement === ref.current ||
        ref.current?.contains(document.activeElement)
      ) {
        scrollToTopAndClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  // POST-COLLAPSE SCROLL, user click or ESC
  useEffect(() => {
    if (isOpen) return;

    if (!shouldCenterAfterCloseRef.current) {
      return;
    }

    shouldCenterAfterCloseRef.current = false;

    requestAnimationFrame(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [isOpen]);

  return (
    <ToggleOffsetContext.Provider
      value={layerCount + 1}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="
          relative
          py-0
        "
      >
        {/* Depth indicator */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            top-0
            h-full
            w-0.5
            rounded-r
            mix-blend-screen
            bg-emerald-400
          "
          style={{
            left: `-${displayOffset}px`,
            opacity,
          }}
        />

        {/* Heading + toggle button */}
        <ToggleHeading
          heading={heading}
          id={headingId}
        >
          <button
            type="button"
            title={isOpen ? 'Collapse' : 'Expand'} 
            aria-label="Collapse Expand"
            onClick={() => {
              if (isOpen) {
                scrollToTopAndClose();
              } else {
                handleToggle();
              }
            }}
            className="
              font-inherit
              text-left
              text-inherit
              dark:text-inherit
              hover:text-tkokhing-blue
              hover:dark:text-tkokhing-dark
              transition
            "
          >
          {label}&nbsp;<span style={{ fontSize:'clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)', color: isOpen ? '#f70303':'#01f90a' }}>{isOpen ? "▽" : "▷"}</span>
          </button>
        </ToggleHeading>

        {/* Content */}
        {isOpen && (
          <div className="mt-4">
            <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />
            {children}

            {/* BOTTOM TOGGLE */}
            <div className="mt-6 text-right">
              <button
                type="button"
                title={label}
                aria-label="Collapse"
                onClick={scrollToTopAndClose}
                className="
                  text-xs
                  font-semibold
                  text-blue-800
                  dark:text-blue-500
                  hover:text-tkokhing-blue
                  hover:dark:text-tkokhing-dark 
                  transition
                "
              ><span className='flex'>Collapse<span style={{fontSize: 'clamp(0.95rem, 0.85rem + 0.4vw, 1.2rem)', color: '#f70303'}}>△</span>[&nbsp;<span className='font-mono underline italic inline-block truncate max-w-[25ch]'>{label}</span>]</span>
              </button>
            </div>
            <hr className="my-0 w-full border-zinc-200 dark:border-zinc-800" />
          </div>
        )}
      </div>
    </ToggleOffsetContext.Provider>
  );
}