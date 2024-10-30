import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

// images
import jionBlack from "../../assets/images/jion-black.png";
import jionWhite from "../../assets/images/jion-white.png";
// hooks
import { useSearch } from "../../hooks/use-search";
import { useTheme } from "../../hooks/use-theme";
// components
import DarkMode from "../dark-mode/dark-mode";
import Drawer from "../drawer/drawer";

export default function Navbar() {
  const { isShowSearchModal, toggleSearchModal } = useSearch();
  const { mode } = useTheme();

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
          onClick={() => toggleSearchModal()}
        >
          <GoSearch />
        </button>
        <DarkMode />
        <Drawer />
      </div>
    </nav>
  );
}
