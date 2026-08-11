import { useEffect, useState } from "react";
import { Menu, Palette, Sun, Moon, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Yeni eklediğimiz PROJECTS bileşeni stratejik sıraya göre eklendi
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CERTIFICATES", href: "#certificates" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5 md:px-12 bg-white/70 text-neutral-900 border-b border-black/10 backdrop-blur-md transition-colors duration-300 dark:bg-black/20 dark:text-white dark:border-white/10">
        <div className="flex items-center gap-2 text-xl font-bold tracking-wider">
          <span>Kerem Yıldırım</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-neutral-800 hover:text-black transition-colors dark:text-white/90 dark:hover:text-white cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Tema Değiştirme Butonu (cursor-pointer eklendi) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            className="flex items-center gap-2 p-2 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-200/60 transition-all duration-300 hover:scale-105 active:scale-95 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 cursor-pointer"
          >
            <Palette size={20} />
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobil Menü Butonu (cursor-pointer eklendi) */}
          <button
            className="md:hidden p-2 text-neutral-800 hover:text-black transition-all duration-300 hover:scale-110 dark:text-white/80 dark:hover:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobil Menü & Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/60 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white/95 text-neutral-900 backdrop-blur-md shadow-2xl transition-transform duration-500 ease-out dark:bg-black/90 dark:text-white ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-start gap-6 pt-24 px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-neutral-800 hover:text-black tracking-widest relative group dark:text-white/90 dark:hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full dark:bg-white"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Header;
