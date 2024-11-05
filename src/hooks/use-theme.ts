import { useContext } from "react";

// contexts
import { ThemeProviderContext } from "@/contexts/theme-provider";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
