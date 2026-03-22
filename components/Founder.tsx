"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@masifspecial.com";

const TOOLS = [
  "Make.com", "Zapier", "OpenAI API", "HubSpot",
  "Shopify", "WhatsApp Business API", "Airtable", "Notion",
];

export default function Founder() {
  return (
    <section id="hakkimda" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-[#b45309] uppercase tracking-widest mb-3 font-medium">
            Arkamızdaki İnsan
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Doğrudan{" "}
            <span className="gradient-text">Benimle Çalışırsınız</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Replace this div with an <img> tag when you have a photo */}
              <div className="w-64 h-64 rounded-3xl bg-linear-to-br from-[rgba(14,165,233,0.1)] to-[rgba(14,165,233,0.05)] border-2 border-[rgba(14,165,233,0.2)] flex flex-col items-center justify-center gap-3 shadow-lg">
                <span className="text-6xl">👤</span>
                <span className="text-xs text-[#94a3b8] text-center px-4">
                  Buraya profesyonel fotoğrafınızı ekleyin
                </span>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-[#0ea5e9] opacity-[0.06] rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Replace with your real name */}
            <h3 className="text-2xl font-bold text-[#0f172a] mb-1">
              Hasan Özel
            </h3>
            <p className="text-sm text-[#0ea5e9] font-medium mb-5">
              AI & Otomasyon Uzmanı · MasifSpecial Kurucusu
            </p>

            {/* Replace with your real bio */}
            <div className="space-y-3 text-[#475569] text-sm leading-relaxed mb-6">
              <p>
                [Buraya kendi hikayenizi yazın. Örn: "5 yıldır iş süreçleri otomasyonu
                üzerine çalışıyorum. Küçük bir e-ticaret şirketinin operasyonlarını
                sıfırdan kurduğum süreçte, tekrarlayan işlerin ne kadar zaman
                harcattığını bizzat yaşadım."]
              </p>
              <p>
                [Örn: "MasifSpecial'ı kurmamdaki amaç basit: büyük ajans bürokrasisi
                olmadan, doğrudan sizinle çalışarak iş süreçlerinizi geleceğe
                taşımak. Her projede tek muhatap benim — teslim tarihine kadar."]
              </p>
            </div>

            {/* Advantage callout */}
            <div className="bg-[rgba(14,165,233,0.04)] border border-[rgba(14,165,233,0.15)] rounded-xl p-4 mb-6">
              <p className="text-sm text-[#0f172a] font-medium mb-1">
                Büyük ajans bürokrasisi yok.
              </p>
              <p className="text-sm text-[#64748b]">
                Doğrudan benimle çalışırsınız. Proje boyunca tek bir iletişim noktası,
                hızlı kararlar ve şeffaf süreç.
              </p>
            </div>

            {/* Tools */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2.5">
                Uzman Olduğum Araçlar
              </p>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-[#475569] bg-[#f1f5f9] border border-[rgba(14,165,233,0.12)] px-2.5 py-1 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Merhaba`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(14,165,233,0.3)]"
            >
              Tanışalım →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
