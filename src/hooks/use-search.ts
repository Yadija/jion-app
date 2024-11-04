import { useContext } from "react";

// contexts
import { SearchContext } from "@/contexts/search-provider";

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
