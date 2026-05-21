import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] h-[300px] w-[300px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklch, var(--neon-cyan) 25%, transparent) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
      animate={{
        x: pos.x - 150,
        y: pos.y - 150,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.5 }}
    />
  );
}
