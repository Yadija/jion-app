import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

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
