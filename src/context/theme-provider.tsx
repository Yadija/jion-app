import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: any) => {
  if (localStorage.getItem("mode") === null) {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("mode", isDark ? "dark" : "light");
  }

  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");

  const toggle = () => {
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    setMode(localStorage.getItem("mode"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};
