import React, { useContext, createContext, useState } from "react";

export type ThemeMode = "light-mode" | "dark-mode";
interface ThemeContextType {
  mode: string;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>(undefined!);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({
  theme = "dark-mode",
  children,
}: {
  theme?: ThemeMode;
  children: any;
}) {
  const [mode, setMode] = useState(() => theme);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
