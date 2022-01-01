import React, { useContext, createContext } from "react";

const ThemeContext = createContext("dark-mode");

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({
  theme = "dark-mode",
  children,
}: {
  theme?: string;
  children: any;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
