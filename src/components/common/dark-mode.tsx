import { TbMoon, TbSunHigh } from "react-icons/tb";

// hooks
import { useTheme } from "../../hooks/use-theme";

export default function DarkMode() {
  const { mode, toggle } = useTheme();

  return (
    <button
      className="text-color-white relative flex h-6 w-10 cursor-pointer items-center justify-between rounded-xl border border-black p-1 text-sm"
      onClick={toggle}
    >
      <TbMoon />
      <TbSunHigh />
      <span
        className={`background-color-white absolute size-4 rounded-full ${
          mode === "dark" ? "right-[2px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}
