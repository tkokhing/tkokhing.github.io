// components/ToggleAllFrame.tsx
"use client";

import { ToggleAllButton } from "./toggle-frame-button";

export function ToggleAllFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToggleAllButton />
      {children}
    </>
  );
}
