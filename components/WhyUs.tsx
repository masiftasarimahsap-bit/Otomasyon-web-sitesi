"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: "📈",
    title: "Ekip Kurmadan Büyüyün",
    description:
      "Otomasyon sayesinde iş hacminizi artırırken ekip maliyetlerinizi sabit tutun. İnsan kaynağınızı yalnızca stratejik işlere yönlendirin.",
    stat: "3x",
    statLabel: "Büyüme kapasitesi",
  },
  {
    icon: "🎯",
    title: "Hata Payı Sıfır",
    description:
      "Manuel veri girişi ve tekrarlayan işlemlerdeki insan hatalarını ortadan kaldırın. Tutarlı, güvenilir ve hatasız süreçler.",
    stat: "~0%",
    statLabel: "Hata oranı",
  },
  {
    icon: "⏱️",
    title: "%70 Zaman Tasarrufu",
    description:
      "Manuel iş yükünüzü dramatik biçimde azaltın. Ekibiniz tekrar eden görevler yerine değer yaratan işlere odaklanabilsin.",
    stat: "%70",
    statLabel: "Manuel iş azaltımı",
  },
  {
    icon: "🔒",
    title: "Size Özel Çözüm",
    description:
      "Hazır şablonlar değil, iş modelinize ve süreçlerinize birebir uyan özel otomasyon senaryoları tasarlıyoruz.",
    stat: "100%",
    statLabel: "Özelleştirme",
  },
];

export default function WhyUs() {
  return (
    <section id="neden" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#0ea5e9] uppercase tracking-widest mb-3 font-medium">
            Neden MasifSpecial?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Rakiplerinizin{" "}
            <span className="gradient-text">Önüne Geçin</span>
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Otomasyon artık büyük şirketlerin ayrıcalığı değil. Her ölçekteki
            işletme için erişilebilir çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 flex gap-5 border border-[rgba(14,165,233,0.15)] shadow-sm hover:border-[#0ea5e9] hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgba(14,165,233,0.08)] border border-[rgba(14,165,233,0.15)] flex items-center justify-center text-2xl">
                {benefit.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-[#0f172a]">
                    {benefit.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold gradient-text leading-none">
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-[#94a3b8] mt-0.5">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
