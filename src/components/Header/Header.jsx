import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: t("header.nav.home"), href: "#home" },
    { name: t("header.nav.about"), href: "#about" },
    { name: t("header.nav.skills"), href: "#skills" },
    { name: t("header.nav.projects"), href: "#projects" },
    { name: t("header.nav.certificates"), href: "#certificates" },
    { name: t("header.nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5 md:px-12 bg-white/70 text-neutral-900 border-b border-black/10 backdrop-blur-md transition-colors duration-300 dark:bg-black/20 dark:text-white dark:border-white/10">
        <div className="flex items-center gap-2 text-xl font-bold tracking-wider">
          <a href="#home" className="select-none cursor-pointer">
            <span>Kerem Yıldırım</span>
          </a>
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

        <div className="flex items-center gap-3 md:gap-5">
          {/* İzole ettiğimiz Aksiyon Bileşenleri (Dil ve Tema) */}
          <LanguageSwitcher />
          <ThemeSwitcher />

          {/* Mobil Menü Butonu */}
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
