import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TechGridPattern } from "./components/TechGridPattern/TechGridPattern";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <TechGridPattern
          color="rgba(255, 255, 255, 0.04)"
          backgroundColor="transparent"
        />
      </div>
      <div className="relative z-10"></div>
    </div>
  );
};

export default App;
