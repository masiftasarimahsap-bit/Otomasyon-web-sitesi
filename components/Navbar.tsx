"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const CONTACT_EMAIL = "info@masifspecial.com";

const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Yöntemimiz", href: "#yontem" },
  { label: "Neden Biz", href: "#neden" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-[rgba(14,165,233,0.15)] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                scrolled ? "gradient-text" : "text-white"
              }`}
            >
              MasifSpecial
            </span>
            <span
              className={`text-xs font-medium uppercase tracking-widest px-2 py-0.5 rounded border transition-all duration-300 ${
                scrolled
                  ? "text-[#b45309] border-[#b4530933]"
                  : "text-sky-200 border-white/20"
              }`}
            >
              AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  scrolled
                    ? "text-[#475569] hover:text-[#0f172a]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Ücretsiz Analiz Talebi`}
            className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#0ea5e9] hover:bg-[#0284c7] text-white hover:shadow-lg hover:shadow-[rgba(14,165,233,0.3)]"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm"
            }`}
          >
            Ücretsiz Analiz
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled
                ? "text-[#475569] hover:text-[#0f172a] hover:bg-[rgba(14,165,233,0.06)]"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-b border-[rgba(14,165,233,0.15)] shadow-md"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-sm text-[#475569] hover:text-[#0f172a] hover:bg-[rgba(14,165,233,0.04)] rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Ücretsiz Analiz Talebi`}
                onClick={() => setOpen(false)}
                className="mt-2 py-3 px-2 text-sm font-semibold text-[#0ea5e9] border border-[rgba(14,165,233,0.3)] rounded-lg text-center hover:bg-[rgba(14,165,233,0.06)] transition-colors duration-200"
              >
                Ücretsiz Analiz İçin Bize Yazın
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
