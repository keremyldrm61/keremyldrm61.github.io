import { motion } from "framer-motion";

export function TechGridPattern({
  color = "rgba(255, 255, 255, 0.05)",
  backgroundColor = "transparent",
  className,
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className || ""}`}
      style={{ backgroundColor }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, ${color} 1px, transparent 1px),
              linear-gradient(to bottom, ${color} 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 40%, transparent 85%)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${color} 3px, transparent 3px)`,
          backgroundSize: "20px 20px",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--background, #0a0a0a), transparent)",
        }}
      />
    </div>
  );
}
