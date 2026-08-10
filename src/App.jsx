import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TechGridPattern } from "./components/TechGridPattern/TechGridPattern";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

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
      </div>
    </div>
  );
};

export default App;
