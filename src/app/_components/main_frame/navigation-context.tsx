"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type NavigationContextType = {
  selected: string;
  setSelected: (name: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState('');

  return (
    <NavigationContext.Provider value={{ selected, setSelected }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
