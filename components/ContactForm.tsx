"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@masifspecial.com";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Ücretsiz Analiz Talebi${form.company ? ` — ${form.company}` : ""}`;
    const body = [
      `İsim: ${form.name}`,
      `E-posta: ${form.email}`,
      form.company ? `Şirket: ${form.company}` : "",
      ``,
      `Otomatikleştirmek istediğiniz süreçler:`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="iletisim" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#0ea5e9] uppercase tracking-widest mb-3 font-medium">
              İletişim
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Ücretsiz Analiz{" "}
              <span className="gradient-text">İsteyin</span>
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-8">
              Hangi süreçleri otomatikleştirmek istediğinizi kısaca anlatın.
              48 saat içinde geri dönüyor, iş akışlarınızı birlikte
              değerlendiriyoruz — tamamen ücretsiz.
            </p>

            <ul className="space-y-3">
              {[
                "45 dakikalık ücretsiz keşif görüşmesi",
                "Otomasyon yol haritası raporu (PDF)",
                "Tahmini maliyet ve süre bilgisi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                  <span className="w-5 h-5 rounded-full bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center text-[#0ea5e9] text-xs font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f8fafc] rounded-2xl border border-[rgba(14,165,233,0.15)] p-8 shadow-sm"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                  E-posta uygulamanız açıldı!
                </h3>
                <p className="text-sm text-[#64748b]">
                  Mesajınızı gönderdikten sonra 48 saat içinde dönüş yapacağız.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm text-[#0ea5e9] hover:underline"
                >
                  Tekrar gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-1.5">
                      İsim <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[rgba(14,165,233,0.2)] bg-white text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-1.5">
                      E-posta <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="siz@sirket.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[rgba(14,165,233,0.2)] bg-white text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-1.5">
                    Şirket Adı{" "}
                    <span className="text-[#94a3b8] font-normal">(opsiyonel)</span>
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Şirket veya marka adı"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[rgba(14,165,233,0.2)] bg-white text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-1.5">
                    Hangi süreçleri otomatikleştirmek istiyorsunuz?{" "}
                    <span className="text-[#0ea5e9]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Örn: Müşterilerimize sipariş onayı WhatsApp ile gitsin, CRM'e otomatik kayıt olsun..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[rgba(14,165,233,0.2)] bg-white text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[rgba(14,165,233,0.15)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(14,165,233,0.3)] hover:-translate-y-0.5"
                >
                  Ücretsiz Analiz Talep Et →
                </button>

                <p className="text-center text-xs text-[#94a3b8]">
                  Alternatif olarak doğrudan yazabilirsiniz:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[#0ea5e9] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
