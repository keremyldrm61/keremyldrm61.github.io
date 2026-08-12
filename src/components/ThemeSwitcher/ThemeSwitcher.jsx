import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Palette, Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const { t } = useTranslation();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title={
        isDark ? t("header.switcher.toLight") : t("header.switcher.toDark")
      }
      className="flex items-center gap-2 p-2 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-200/60 transition-all duration-300 hover:scale-105 active:scale-95 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 cursor-pointer"
    >
      <Palette size={20} />
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeSwitcher;
