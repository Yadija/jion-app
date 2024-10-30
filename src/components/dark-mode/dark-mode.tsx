import { useContext } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";

// context
import { ThemeContext } from "../../context/theme-provider";

export default function DarkMode() {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <button
      className="text-color-white relative flex h-6 w-10 cursor-pointer items-center justify-between rounded-xl border border-black p-1 text-sm"
      onClick={toggle}
    >
      <TbMoon />
      <TbSunHigh />
      <div
        className={`background-color-white absolute size-4 rounded-full ${
          mode === "dark" ? "right-[2px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}
