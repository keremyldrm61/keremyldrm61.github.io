import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, useTransform, motion } from "framer-motion";

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

export default Spotlight;
