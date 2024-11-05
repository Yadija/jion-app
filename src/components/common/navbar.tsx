import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

// assets
import jionBlack from "@/assets/images/jion-black.png";
import jionWhite from "@/assets/images/jion-white.png";
// components
import Drawer from "@/components/common/drawer";
import { ModeToggle } from "@/components/common/mode-toggle";
// hooks
import { useSearch } from "@/hooks/use-search";
import { useTheme } from "@/hooks/use-theme";

export default function Navbar() {
  const { isShowSearchModal, toggleSearchModal } = useSearch();
  const { theme } = useTheme();

  return (
    <nav className="background-color-blue text-color-white sticky top-0 z-10 flex items-center justify-between px-6 py-3 transition-all duration-1000">
      <h2 className="text-xl font-bold">
        <Link to="/">
          <img
            className="h-8"
            src={theme === "dark" ? jionBlack : jionWhite}
            alt="logo"
          />
        </Link>
      </h2>
      <section className="flex items-center gap-3">
        <button
          className={`${
            isShowSearchModal && "background-color-white text-color-blue"
          } mr-3 rounded-full p-2 transition-all duration-500`}
          onClick={() => toggleSearchModal()}
        >
          <GoSearch />
        </button>

        <ModeToggle />

        <Drawer />
      </section>
    </nav>
  );
}
