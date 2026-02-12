// ToggleAllButton.tsx || toggle-frame-button.tsx
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
          disabled={state === "open"}
          aria-label="Expand All"
          onClick={() => {
            ctx.openAll();
            setState("open");
          }}
          className={`px-2 py-1 rounded transition ${
            state === "open"
              ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
              : "bg-gray-200 hover:bg-gray-500 dark:text-tkokhing-blue hover:text-tkokhing-dark hover:dark:text-tkokhing-dark"
          }`}
        >
          <ExpandAll />
        </button>

        <button
          disabled={state === "closed"}
          aria-label="Collapse All"
          onClick={() => {
            ctx.closeAll();
            setState("closed");
          }}
          // className = {styles['icon-container']}
          className={`px-2 py-1 rounded transition ${
            state === "closed"
              ? "bg-gray-700 dark:bg-gray-600 cursor-default"
              : "bg-gray-200 hover:bg-gray-500"
          }`}
        >
          <CollapseAll />
        </button>
      </div>
    </div>
  );
}
