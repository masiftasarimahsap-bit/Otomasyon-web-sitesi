"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Keşif",
    duration: "1–2 gün",
    icon: "🔍",
    description:
      "45 dakikalık ücretsiz görüşmede mevcut iş akışlarınızı birlikte haritaya döküyoruz. Hangi süreçlerin otomatikleştirilebileceğini tespit ediyoruz.",
    deliverables: [
      "45 dk ücretsiz görüşme",
      "İş akışı haritası",
      "Otomasyon Yol Haritası Raporu (PDF)",
    ],
  },
  {
    number: "02",
    title: "Geliştirme",
    duration: "1–3 hafta",
    icon: "⚙️",
    description:
      "Make.com, Zapier veya özel entegrasyonlarla otomasyon senaryolarınızı inşa ediyoruz. Her adım sizinle birlikte test ediliyor.",
    deliverables: [
      "Make.com / Zapier senaryoları",
      "Canlı testler ve onaylar",
      "Sınırsız revizyon hakkı",
    ],
  },
  {
    number: "03",
    title: "Canlıya Alma",
    duration: "Süresiz destek",
    icon: "🚀",
    description:
      "Sistemleri canlıya alıyor, ekibinize video kayıtlı kullanım eğitimi veriyoruz. İlk 30 gün ücretsiz destek dahil.",
    deliverables: [
      "Video eğitim kaydı",
      "30 gün ücretsiz destek",
      "Aylık bakım paketi seçeneği",
    ],
  },
];

export default function Process() {
  return (
    <section id="yontem" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#b45309] uppercase tracking-widest mb-3 font-medium">
            Yöntemimiz
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            The{" "}
            <span className="gradient-text">Masif Method</span>
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Keşiften canlıya almaya kadar her adımda ne alacağınızı önceden biliyorsunuz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-[rgba(14,165,233,0.3)] to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col bg-[#f8fafc] rounded-2xl border border-[rgba(14,165,233,0.15)] p-6 hover:border-[#0ea5e9] hover:shadow-md transition-all duration-300"
            >
              {/* Step circle */}
              <div className="relative mb-5 self-start">
                <div className="w-16 h-16 rounded-full bg-white border border-[rgba(14,165,233,0.2)] shadow-md flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-sm">
                  <span className="text-[10px] text-white font-bold">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-[#0f172a]">{step.title}</h3>
                <span className="text-xs text-[#b45309] bg-[rgba(180,83,9,0.06)] border border-[rgba(180,83,9,0.15)] px-2 py-0.5 rounded-full">
                  {step.duration}
                </span>
              </div>

              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                {step.description}
              </p>

              <ul className="mt-auto space-y-1.5">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#475569]">
                    <span className="text-[#0ea5e9] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
