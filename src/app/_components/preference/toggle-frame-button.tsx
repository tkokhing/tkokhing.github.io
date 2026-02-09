// ToggleAllButton.tsx || toggle-frame-button.tsx
"use client";

import { useState } from "react";
import { useToggleBroadcast } from "./toggle-frame-provider";

export function ToggleAllButton() {
  const ctx = useToggleBroadcast();
  const [state, setState] = useState<"open" | "closed">("open");

  if (!ctx) return null;

  return (
    <div className="sticky top-[1.8rem] md:top-[1.5rem] z-20">
      <div className="text-adaptive_fs_xs flex gap-1 px-4 py-2 justify-end">
        <button
          disabled={state === "open"}
          onClick={() => {
            ctx.openAll();
            setState("open");
          }}
          className={`px-3 py-1 rounded transition ${
            state === "open"
              ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
              : "bg-gray-200 hover:bg-gray-500 dark:text-tkokhing-blue hover:text-tkokhing-dark hover:dark:text-tkokhing-dark"
          }`}
        >
          Expand All
        </button>

        <button
          disabled={state === "closed"}
          onClick={() => {
            ctx.closeAll();
            setState("closed");
          }}
          className={`px-3 py-1 rounded transition ${
            state === "closed"
              ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
              : "bg-gray-200 hover:bg-gray-500 dark:text-tkokhing-blue hover:text-tkokhing-dark hover:dark:text-tkokhing-dark"
          }`}
        >
          Collapse All
        </button>
      </div>
    </div>
  );
}
