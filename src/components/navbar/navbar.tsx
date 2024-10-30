import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

// images
import jionBlack from "../../assets/images/jion-black.png";
import jionWhite from "../../assets/images/jion-white.png";
// context
import { SearchContext } from "../../context/search-provider.js";
import { ThemeContext } from "../../context/theme-provider.js";
// components
import DarkMode from "../dark-mode/dark-mode.tsx";
import Drawer from "../drawer/drawer.tsx";

export default function Navbar() {
  const { isShowSearchModal, toggleSearchModal } = useContext(SearchContext);
  const { mode } = useContext(ThemeContext);

  return (
    <nav className="background-color-blue text-color-white sticky top-0 z-[10000] flex items-center justify-between px-6 py-3 transition-all duration-1000">
      <h2 className="text-xl font-bold">
        <Link to="/">
          <img
            className="h-8"
            src={mode === "dark" ? jionBlack : jionWhite}
            alt="logo"
          />
        </Link>
      </h2>
      <div className="flex items-center gap-3">
        <button
          className={`${
            isShowSearchModal && "background-color-white text-color-blue"
          } mr-3 rounded-full p-2 transition-all duration-500`}
          onClick={() => toggleSearchModal((prev) => !prev)}
        >
          <GoSearch />
        </button>
        <DarkMode />
        <Drawer />
      </div>
    </nav>
  );
}
