import { useContext } from "react";

// contexts
import { ThemeContext } from "../contexts/theme-provider";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
