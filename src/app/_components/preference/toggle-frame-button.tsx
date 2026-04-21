// toggle-frame-button.tsx, overall control on page
"use client";

import { useState } from "react";
import { useToggleBroadcast } from "./toggle-frame-provider";
import { ExpandAll, CollapseAll } from "@/app/_components/main_frame/icons_svg";
export function ToggleAllButton() {
  const ctx = useToggleBroadcast();
  const [state, setState] = useState<"open" | "closed">("open");

  if (!ctx) return null;
  return (
    <div className="sticky top-[1.8rem] md:top-[1.5rem] z-20">
      <div className="flex gap-1 px-4 py-2 justify-end">
        <button
          onClick={() => {
            ctx.openAll();
            setState("open");
          }}
          disabled={state === "open"}
          title={state === 'open' ? '' : 'Expand All'}
          aria-label="Expand All"
          className={`px-2 py-1 rounded transition ${state === "open"
            ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
            : "bg-gray-300 hover:bg-gray-500 text-tkokhing-blue hover:text-tkokhing-dark"
            }`}
        >
          <ExpandAll />
        </button>

        <button
          onClick={() => {
            ctx.closeAll();
            setState("closed");
          }}
          disabled={state === "closed"}
          title={state === 'closed' ? '' : 'Collapse All'} aria-label="Collapse All"
          className={`px-2 py-1 rounded transition ${state === "closed"
            ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
            : "bg-gray-300 hover:bg-gray-500 text-tkokhing-blue hover:text-tkokhing-dark"
            }`}
        >
          <CollapseAll />
        </button>
      </div>
    </div>
  );
}
