"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@masifspecial.com";

const PLANS = [
  {
    name: "Başlangıç",
    emoji: "💡",
    price: "₺7.500",
    priceNote: "den başlayan fiyatlarla",
    description: "Tek bir iş akışını otomatikleştirmek için ideal başlangıç noktası.",
    features: [
      "1 otomasyon senaryosu",
      "Örn: Form → CRM → bildirim",
      "n8n veya web tabanlı entegrasyon kurulumu",
      "Test ve devreye alma",
      "Video kullanım eğitimi",
      "30 gün e-posta desteği",
    ],
    cta: "Başlayın",
    highlighted: false,
  },
  {
    name: "Profesyonel",
    emoji: "⚡",
    price: "₺18.000",
    priceNote: "den başlayan fiyatlarla",
    description: "Birden fazla entegrasyon ve özel chatbot ile kapsamlı otomasyon.",
    features: [
      "3'e kadar otomasyon senaryosu",
      "AI chatbot entegrasyonu",
      "CRM + bildirim + raporlama",
      "Dashboard kurulumu",
      "Öncelikli destek (WhatsApp)",
      "30 gün ücretsiz bakım",
    ],
    cta: "En Popüler",
    highlighted: true,
  },
  {
    name: "Kurumsal",
    emoji: "🚀",
    price: "Fiyat teklifi",
    priceNote: "projeye özel",
    description: "Kapsamlı otomasyon altyapısı, ekip eğitimi ve sürekli destek.",
    features: [
      "Sınırsız senaryo geliştirme",
      "Özel AI asistan / chatbot",
      "Tam entegrasyon altyapısı",
      "Ekip eğitimi (canlı + kayıt)",
      "Aylık bakım & optimizasyon",
      "Öncelikli teknik destek",
    ],
    cta: "Teklif İsteyin",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="fiyatlar" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#0ea5e9] uppercase tracking-widest mb-3 font-medium">
            Fiyatlandırma
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Şeffaf{" "}
            <span className="gradient-text">Başlangıç Fiyatları</span>
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Her proje kendine özgüdür — final fiyat görüşme sonrası belirlenir. Bu
            fiyatlar başlangıç noktası olarak rehber niteliğindedir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#0f172a] border-[#0ea5e9] shadow-xl shadow-[rgba(14,165,233,0.2)]"
                  : "bg-white border-[rgba(14,165,233,0.15)] shadow-sm hover:border-[rgba(14,165,233,0.4)] hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0ea5e9] text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="p-7 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{plan.emoji}</span>
                  <span
                    className={`text-sm font-bold ${
                      plan.highlighted ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {plan.name}
                  </span>
                </div>

                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? "text-sky-300" : "text-[#94a3b8]"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    plan.highlighted ? "text-sky-200" : "text-[#64748b]"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-[#0ea5e9]" : "text-[#0ea5e9]"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={plan.highlighted ? "text-sky-100" : "text-[#475569]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    `${plan.name} Paketi Hakkında Bilgi`
                  )}`}
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-[#0ea5e9] hover:bg-[#0284c7] text-white hover:shadow-lg hover:shadow-[rgba(14,165,233,0.4)]"
                      : "bg-[rgba(14,165,233,0.08)] hover:bg-[rgba(14,165,233,0.15)] text-[#0ea5e9] border border-[rgba(14,165,233,0.25)]"
                  }`}
                >
                  {plan.name === "Kurumsal" ? "Teklif İsteyin →" : `${plan.name} Paketini Seçin →`}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-[#94a3b8] mt-8"
        >
          Fiyatlar KDV hariçtir. Her proje özeldir — görüşme sonrası kesin teklif iletilir.
        </motion.p>
      </div>
    </section>
  );
}
