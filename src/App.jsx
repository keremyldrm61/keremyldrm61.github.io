import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TechGridPattern } from "./components/TechGridPattern/TechGridPattern";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Certificate from "./components/Certificate/Certificate";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

const App = () => {
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
        <Hero />
        <Skills />
        <Project />
        <Certificate />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
