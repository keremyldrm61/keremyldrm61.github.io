import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Çeviri dosyalarını içe aktarıyoruz
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
};

i18n
  .use(LanguageDetector) // Kullanıcının tarayıcı dilini otomatik algılar (ve localStorage'a kaydeder)
  .use(initReactI18next) // i18n'i React'e bağlar
  .init({
    resources,
    fallbackLng: "en", // Eğer algılanan dil desteklenmiyorsa varsayılan İngilizce olsun
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağladığı için bunu kapatıyoruz
    },
  });

export default i18n;
