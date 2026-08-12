import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { TechGridPattern } from "./components/TechGridPattern/TechGridPattern";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Certificates from "./components/Certificates/Certificates";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Dil her değiştiğinde HTML tag'indeki lang attribute'unu güncelle
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-200 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <TechGridPattern />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
