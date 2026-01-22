// ToggleBroadcastContext.tsx  // ToggleFrameContext.tsx || toggle-frame-provider.tsx

"use client";

import { createContext, useContext, useRef } from "react";

type ToggleHandler = (open: boolean) => void;

type ToggleContextType = {
  openAll: () => void;
  closeAll: () => void;
  register: (handler: ToggleHandler) => () => void;
};

const ToggleContext = createContext<ToggleContextType | null>(null);

export function ToggleFrameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const handlersRef = useRef<Set<ToggleHandler>>(new Set());

  const register = (handler: ToggleHandler) => {
    handlersRef.current.add(handler);
    return () => handlersRef.current.delete(handler);
  };

  const openAll = () => {
    handlersRef.current.forEach((h) => h(true));
  };

  const closeAll = () => {
    handlersRef.current.forEach((h) => h(false));
  };

  return (
    <ToggleContext.Provider value={{ openAll, closeAll, register }}>
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggleBroadcast = () => useContext(ToggleContext);
