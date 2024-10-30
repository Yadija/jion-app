import { createContext, ReactNode, useState } from "react";

interface SearchContextProps {
  isShowSearchModal: boolean;
  toggleSearchModal: () => void;
  toggleCloseSearchModal: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext<SearchContextProps | null>(null);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [isShowSearchModal, setIsShowSearchModal] = useState<boolean>(false);

  const toggleSearchModal = () => {
    setIsShowSearchModal((prev) => !prev);
  };

  const toggleCloseSearchModal = () => {
    setIsShowSearchModal(false);
  };

  return (
    <SearchContext.Provider
      value={{ isShowSearchModal, toggleSearchModal, toggleCloseSearchModal }}
    >
      {children}
    </SearchContext.Provider>
  );
};
