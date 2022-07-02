import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "white" ? "black" : "white"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
