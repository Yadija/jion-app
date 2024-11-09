import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

// assets
import jionBlack from "@/assets/images/jion-black.png";
import jionWhite from "@/assets/images/jion-white.png";
// components
import ModeToggle from "@/components/common/mode-toggle";\
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
// hooks
import { useSearch } from "@/hooks/use-search";
import { useTheme } from "@/hooks/use-theme";

export default function Navbar() {
  const { isShowSearchModal, toggleSearchModal } = useSearch();
  const { theme } = useTheme();

  const { open, isMobile } = useSidebar();

  // state to track scroll position
  const [scrolled, setScrolled] = useState(false);

  // effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "background-color-blue" : "text-color-black bg-transparent"
      } text-color-white sticky top-0 z-10 flex items-center ${open ? "justify-end" : "justify-between"} ${isMobile && "justify-between"} px-6 py-3 transition-all duration-300`}
    >
      {(!open || isMobile) && (
        <section className="flex items-center gap-3">
          <SidebarTrigger />
          <Link to="/">
            <img
              className="h-8"
              src={
                (theme === "dark" && !scrolled) ||
                (theme !== "dark" && scrolled)
                  ? jionWhite
                  : jionBlack
              }
              alt="logo"
            />
          </Link>
        </section>
      )}
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
      </section>
    </nav>
  );
}
