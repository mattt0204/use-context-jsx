import { createContext, useState } from "react";

export const ThemaContext = createContext(null);

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <ThemaContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemaContext.Provider>
  );
}
