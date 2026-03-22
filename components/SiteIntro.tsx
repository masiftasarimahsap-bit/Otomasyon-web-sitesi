"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#080c14] flex items-center justify-center"
        >
          {/* Ambient glow */}
          <div className="absolute w-96 h-96 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center select-none"
          >
            <h1 className="font-bold tracking-tight leading-none">
              <span
                className="text-6xl md:text-8xl"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #bae6fd 50%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Masif
              </span>
              <span
                className="text-6xl md:text-8xl"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Special
              </span>
            </h1>

            {/* Alt çizgi animasyonu */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-4 h-px bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 text-sm tracking-[0.3em] uppercase text-[#475569]"
            >
              AI & Otomasyon
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
