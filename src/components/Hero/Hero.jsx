import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSpring, useTransform, motion } from "framer-motion";
import Header from "../Header/Header";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Spotlight = ({
  className,
  size = 100,
  springOptions = { bounce: 0 },
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlighTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = "relative";
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement],
  );

  useEffect(() => {
    if (!parentElement) return;
    parentElement.addEventListener("mousemove", handleMouseMove);
    parentElement.addEventListener("mouseenter", () => setIsHovered(true));
    parentElement.addEventListener("mouseleave", () => setIsHovered(false));
    return () => {
      parentElement.removeEventListener("mousemove", handleMouseMove);
      parentElement.removeEventListener("mouseenter", () => setIsHovered(true));
      parentElement.removeEventListener("mouseleave", () =>
        setIsHovered(false),
      );
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full blur-2xl transition-opacity duration-500
        bg-neutral-900/10 mix-blend-multiply dark:bg-white/30 dark:mix-blend-screen
        ${isHovered ? "opacity-100" : "opacity-0"} ${className}`}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlighTop,
        zIndex: 5,
      }}
    ></motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen text-neutral-900 dark:text-neutral-200 overflow-hidden flex items-center p-8 md:p-16 bg-transparent">
      <Spotlight size={350} />
      <Header />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl mx-auto items-center mt-18 md:mt-0 lg:mt-0">
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-medium tracking-widest text-neutral-500 dark:text-neutral-500 uppercase">
              FullStack Developer
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-800 dark:text-neutral-100 leading-tight transition-colors duration-300">
              Hi, I'm{" "}
              <span className="font-medium text-neutral-950 dark:text-white">
                Kerem Yıldırım
              </span>
            </h1>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md font-light transition-colors duration-300">
            I am a Full-Stack Developer with hands-on experience as a Team Lead
            and Scrum Master in collaborative team projects, focusing on both
            full-stack and frontend development. Utilizing HTML5, CSS3,
            JavaScript, React, Node.js, MongoDB, and TypeScript, I build
            end-to-end, responsive, and high-performance web applications.
          </p>
          <div className="pt-2">
            <button className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white dark:text-neutral-200 text-sm font-medium rounded-full border border-neutral-900 dark:border-neutral-800 transition-all duration-200 shadow-sm relative z-20">
              Contact Me
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 w-full h-75 md:h-100 lg:h-130 z-10 overflow-hidden relative">
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-neutral-300 border-t-neutral-800 dark:border-neutral-800 dark:border-t-neutral-400 animate-spin"></div>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;
