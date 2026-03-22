"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: "📈",
    title: "Ekip Kurmadan Büyüyün",
    description:
      "Ek personel almadan iş hacminizi artırın. İnsan kaynağınızı yalnızca stratejik ve yaratıcı işlere yönlendirin, tekrar eden görevleri otomasyona bırakın.",
    badge: "Ölçeklenebilir Büyüme",
  },
  {
    icon: "🎯",
    title: "İnsan Hatasını Minimize Edin",
    description:
      "Manuel veri girişi ve tekrarlayan işlemlerdeki tutarsızlıkları ortadan kaldırın. Güvenilir, hatasız ve her seferinde aynı sonucu veren süreçler kurun.",
    badge: "Tutarlı Süreçler",
  },
  {
    icon: "⏱️",
    title: "Tekrarlayan İşlerden Kurtulun",
    description:
      "Günlük rutin görevleri otomatikleştirin. Ekibiniz aynı aksiyonu defalarca yapmak yerine müşteri ilişkileri ve karar alma gibi işlere odaklanabilsin.",
    badge: "Zaman Kazanın",
  },
  {
    icon: "🔒",
    title: "İş Modelinize Özel Tasarım",
    description:
      "Hazır şablonlar değil, sizin iş akışlarınıza ve araçlarınıza birebir uyan özel otomasyon senaryoları. Sektörünüze ve süreçlerinize göre tasarlanmış çözümler.",
    badge: "Özel Geliştirme",
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
                  <span className="text-xs font-medium text-[#0ea5e9] bg-[rgba(14,165,233,0.08)] border border-[rgba(14,165,233,0.2)] px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                    {benefit.badge}
                  </span>
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
