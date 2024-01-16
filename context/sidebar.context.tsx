'use client';
import React, { createContext, Dispatch, SetStateAction, useState} from 'react';

export type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

type SidebarContextProviderProps = {
  children: React.ReactNode;
}

export const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarContextProvider = ({ children }:SidebarContextProviderProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};
