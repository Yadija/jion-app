import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// assets
import jionBlack from "@/assets/images/jion-black.png";
import jionWhite from "@/assets/images/jion-white.png";
// components
import ButtonSearch from "@/components/common/button-search";
import ModeToggle from "@/components/common/mode-toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
// hooks
import { useTheme } from "@/hooks/use-theme";

export default function Navbar() {
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
      } text-color-white fixed right-0 top-0 z-10 flex items-center ${open ? "w-[calc(100%-16rem)] justify-end" : "w-full justify-between"} ${isMobile && "w-full justify-between"} h-16 px-6 py-3 transition-all duration-300`}
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
        <ButtonSearch />
        <ModeToggle />
      </section>
    </nav>
  );
}
