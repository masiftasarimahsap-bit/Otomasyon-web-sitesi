"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@masifspecial.com";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center bg-[rgba(14,165,233,0.04)] rounded-3xl border border-[rgba(14,165,233,0.2)] p-12 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Otomasyona{" "}
            <span className="gradient-text">Bugün</span> Başlayın
          </h2>
          <p className="text-[#64748b] mb-8 max-w-lg mx-auto">
            İş süreçlerinizi analiz edelim, size en uygun otomasyon yol
            haritasını birlikte çizelim. Ücretsiz.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Ücretsiz Analiz Talebi`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-[rgba(14,165,233,0.3)] hover:-translate-y-0.5"
          >
            Ücretsiz Analiz İçin Bize Yazın →
          </a>
          <p className="mt-4 text-xs text-[#94a3b8]">
            {CONTACT_EMAIL}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(14,165,233,0.1)] bg-[#f8fafc] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold gradient-text">MasifSpecial</span>
            <span className="text-xs text-[#b45309] border border-[#b4530933] px-1.5 py-0.5 rounded">
              AI
            </span>
          </div>
          <p className="text-xs text-[#94a3b8]">
            © {new Date().getFullYear()} MasifSpecial. Tüm hakları saklıdır.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-xs text-[#94a3b8] hover:text-[#0ea5e9] transition-colors duration-200"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>

    </>
  );
}
