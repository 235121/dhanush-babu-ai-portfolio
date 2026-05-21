import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-6 h-16 w-16 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "var(--neon-cyan)",
                borderRightColor: "var(--neon-violet)",
                boxShadow: "0 0 30px color-mix(in oklch, var(--neon-cyan) 50%, transparent)",
              }}
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="font-heading text-sm uppercase tracking-[0.4em] neon-text"
            >
              Initializing
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
