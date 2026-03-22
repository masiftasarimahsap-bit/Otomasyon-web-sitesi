"use client";

import { motion } from "framer-motion";

const CASES = [
  {
    tag: "E-ticaret",
    color: "#0ea5e9",
    icon: "🛒",
    title: "Sipariş & Kargo Otomasyonu",
    problem:
      "Bir e-ticaret mağazası her siparişi manuel olarak takip ediyor, kargo bilgilerini tek tek müşterilere gönderiyordu. Günlük ortalama 2 saat bu iş için harcanıyordu.",
    solution: "Shopify → Make.com → WhatsApp Business API entegrasyonu kuruldu.",
    steps: [
      "Yeni sipariş → otomatik onay mesajı (WhatsApp)",
      "Kargo oluşturulunca → takip linki müşteriye iletilir",
      "Teslimat tamamlanınca → memnuniyet anketi gönderilir",
    ],
    result: "Günlük ~2 saatlik manuel iş tamamen ortadan kalktı.",
    tools: ["Shopify", "Make.com", "WhatsApp API"],
  },
  {
    tag: "CRM & Satış",
    color: "#b45309",
    icon: "🎯",
    title: "Lead Yönetimi Otomasyonu",
    problem:
      "Bir B2B şirket web sitesinden gelen form başvurularını manuel olarak CRM'e giriyordu. Bazı leadlar saatlerce bekliyor, satış ekibi geç aksiyon alıyordu.",
    solution: "Tally Form → HubSpot CRM → Slack bildirim entegrasyonu kuruldu.",
    steps: [
      "Form doldurulunca → HubSpot'a otomatik contact oluşturulur",
      "Lead skora göre → ilgili satış temsilcisine atanır",
      "Slack kanalına → anlık bildirim düşer (isim, şirket, talep)",
    ],
    result: "Lead yanıt süresi ortalama 4 saatten 10 dakikanın altına indi.",
    tools: ["Tally", "HubSpot", "Slack", "Make.com"],
  },
  {
    tag: "İçerik & Sosyal Medya",
    color: "#7c3aed",
    icon: "✍️",
    title: "AI İçerik Üretim Sistemi",
    problem:
      "Bir ajans her hafta 5 farklı müşterisi için sosyal medya içerikleri hazırlıyor, onay alıyor ve planlıyordu. Bu süreç haftada 8+ saat alıyordu.",
    solution: "Airtable → OpenAI API → Buffer sosyal medya otomasyonu kuruldu.",
    steps: [
      "Airtable'daki konu listesinden → OpenAI ile taslak içerik üretilir",
      "İçerik Google Docs'a düşer → müşteri onaylar",
      "Onaylanan içerik → Buffer üzerinden otomatik zamanlanır",
    ],
    result: "Haftalık içerik hazırlık süresi 8 saatten 1,5 saate düştü.",
    tools: ["Airtable", "OpenAI", "Buffer", "Google Docs"],
  },
];

export default function CaseStudies() {
  return (
    <section id="senaryolar" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#7c3aed] uppercase tracking-widest mb-3 font-medium">
            Örnek Projeler
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Otomasyon{" "}
            <span className="gradient-text">Gerçek Hayatta</span>
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Bu senaryolar, benzer iş yapısına sahip işletmeler için kurduğumuz otomasyon
            akışlarından örneklerdir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-[rgba(14,165,233,0.12)] shadow-sm hover:shadow-md hover:border-[rgba(14,165,233,0.3)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-[rgba(14,165,233,0.08)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{c.icon}</span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      color: c.color,
                      background: `${c.color}14`,
                      border: `1px solid ${c.color}30`,
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0f172a]">{c.title}</h3>
              </div>

              {/* Body */}
              <div className="px-6 py-4 flex-1 space-y-4">
                {/* Problem */}
                <div>
                  <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-1.5">
                    Problem
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed">{c.problem}</p>
                </div>

                {/* Solution steps */}
                <div>
                  <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">
                    Otomasyon Akışı
                  </p>
                  <ul className="space-y-1.5">
                    {c.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <span
                          className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
                          style={{ background: c.color }}
                        >
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div
                  className="rounded-xl p-3"
                  style={{ background: `${c.color}08`, border: `1px solid ${c.color}20` }}
                >
                  <p className="text-xs font-semibold mb-0.5" style={{ color: c.color }}>
                    Sonuç
                  </p>
                  <p className="text-sm font-medium text-[#0f172a]">{c.result}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="px-6 pb-5 flex flex-wrap gap-1.5">
                {c.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-[#64748b] bg-[#f1f5f9] border border-[rgba(14,165,233,0.1)] px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
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
          * Bu senaryolar demo projelerdir. "Bu otomasyon şu sonucu üretir" formatında hazırlanmıştır.
        </motion.p>
      </div>
    </section>
  );
}
