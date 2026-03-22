"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Keşif",
    description:
      "Mevcut iş akışlarınızı ve süreçlerinizi detaylıca analiz ediyoruz. Hangi adımların otomatikleştirilebileceğini birlikte belirliyoruz.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Geliştirme",
    description:
      "Size özel otomasyon senaryolarını inşa ediyoruz. Her adım, işinizin gerçek ihtiyaçlarına göre tasarlanıyor.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Entegrasyon",
    description:
      "Sistemleri canlıya alıyor, ekibinizi eğitiyoruz. Sorunsuz geçiş ve sürekli destek sağlıyoruz.",
    icon: "🚀",
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
            3 adımda iş süreçlerinizi dönüştürüyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-[rgba(14,165,233,0.3)] to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white border border-[rgba(14,165,233,0.2)] shadow-md flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-sm">
                  <span className="text-xs text-white font-bold">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
