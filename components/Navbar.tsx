"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const CONTACT_EMAIL = "info@masifspecial.com";

const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Yöntemimiz", href: "#yontem" },
  { label: "Neden Biz", href: "#neden" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass-card border-b border-[rgba(14,165,233,0.15)] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text tracking-tight">
              MasifSpecial
            </span>
            <span className="text-xs text-[#b45309] font-medium uppercase tracking-widest border border-[#b4530933] px-2 py-0.5 rounded">
              AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Ücretsiz Analiz Talebi`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(14,165,233,0.3)]"
          >
            Ücretsiz Analiz
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#475569] hover:text-[#0f172a] hover:bg-[rgba(14,165,233,0.06)] transition-colors duration-200"
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
            className="md:hidden glass-card border-b border-[rgba(14,165,233,0.15)] shadow-md"
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
