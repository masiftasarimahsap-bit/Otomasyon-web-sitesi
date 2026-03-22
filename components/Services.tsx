"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon: "🤖",
    title: "AI Chatbot & Sesli Asistanlar",
    description:
      "7/24 kesintisiz müşteri desteği. Doğal dil anlayan, sorulara anında yanıt veren akıllı asistanlar.",
    size: "large",
    highlight: true,
  },
  {
    icon: "⚡",
    title: "İş Akışı Otomasyonu",
    description:
      "Uygulamalar arası veri senkronizasyonu. CRM, ERP ve tüm iş araçlarınız birbiriyle otomatik konuşsun.",
    size: "normal",
  },
  {
    icon: "✍️",
    title: "AI İçerik Üretim Sistemleri",
    description:
      "Otomatik sosyal medya ve reklam içeriği. İçerik üretiminizi sıfır manuel eforla otomatikleştirin.",
    size: "normal",
  },
  {
    icon: "💼",
    title: "Satış & CRM Otomasyonları",
    description:
      "Lead yönetimi ve otomatik teklif takibi. Hiçbir potansiyel müşteri gözden kaçmasın.",
    size: "normal",
  },
  {
    icon: "📊",
    title: "Raporlama & Dashboard Otomasyonu",
    description:
      "Airtable, Notion, Google Sheets entegrasyonları ile otomatik raporlar ve canlı panolar.",
    size: "normal",
  },
  {
    icon: "🛒",
    title: "E-ticaret Otomasyonları",
    description:
      "Sipariş takibi, stok uyarıları, müşteri bildirimleri. Shopify ve WooCommerce ile tam entegrasyon.",
    size: "full",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-default border transition-all duration-300
        hover:border-[#0ea5e9] hover:shadow-lg hover:shadow-[rgba(14,165,233,0.1)]
        ${service.size === "large" ? "md:col-span-2" : ""}
        ${service.size === "full" ? "md:col-span-2 lg:col-span-3" : ""}
        ${service.highlight
          ? "border-[#0ea5e9] shadow-md shadow-[rgba(14,165,233,0.12)]"
          : "border-[rgba(14,165,233,0.15)] shadow-sm"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{service.icon}</span>
        {service.highlight && (
          <span className="text-xs text-[#0ea5e9] bg-[rgba(14,165,233,0.08)] border border-[rgba(14,165,233,0.2)] px-2 py-0.5 rounded-full">
            Popüler
          </span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-[#64748b] leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="hizmetler" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#0ea5e9] uppercase tracking-widest mb-3 font-medium">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            İşinizi{" "}
            <span className="gradient-text">Otomatikleştirin</span>
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Her sektöre özel otomasyon çözümleriyle iş yükünüzü azaltın,
            büyümeye odaklanın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
