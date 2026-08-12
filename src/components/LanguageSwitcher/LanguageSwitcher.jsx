import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith("tr") ? "en" : "tr";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium tracking-widest text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-200 uppercase cursor-pointer"
      aria-label="Toggle Language"
    >
      {i18n.language.startsWith("tr") ? "EN" : "TR"}
    </button>
  );
};

export default LanguageSwitcher;
