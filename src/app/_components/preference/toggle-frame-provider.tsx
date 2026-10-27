// toggle-frame-provider.tsx

"use client";

import { createContext, useContext, useRef } from "react";

type ToggleHandler = (open: boolean) => void;

type ToggleRegistration = {
  handler: ToggleHandler;
  firstload: boolean;
};

type ToggleContextType = {
  openAll: () => void;
  closeAll: () => void;
  resetAll: () => void;
  register: (
    handler: ToggleHandler,
    firstload: boolean
  ) => () => void;
};

const ToggleContext = createContext<ToggleContextType | null>(null);

export function ToggleFrameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const registrationsRef = useRef<Set<ToggleRegistration>>(new Set());

  const register = (
    handler: ToggleHandler,
    firstload: boolean
  ) => {
    const registration: ToggleRegistration = {
      handler,
      firstload,
    };

    registrationsRef.current.add(registration);

    return () => {
      registrationsRef.current.delete(registration);
    };
  };

  const openAll = () => {
    registrationsRef.current.forEach(({ handler }) => {
      handler(true);
    });
  };

  const closeAll = () => {
    registrationsRef.current.forEach(({ handler }) => {
      handler(false);
    });
  };

  const resetAll = () => {
    registrationsRef.current.forEach(
      ({ handler, firstload }) => {
        handler(firstload);
      }
    );
  };

  return (
    <ToggleContext.Provider
      value={{
        openAll,
        closeAll,
        resetAll,
        register,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggleBroadcast = () =>
  useContext(ToggleContext);  