"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACT_EMAIL = "info@masifspecial.com";

type Message = { from: "user" | "bot"; text: string };

const QUICK_REPLIES = [
  "Hizmetleriniz neler?",
  "Fiyatlarınız nedir?",
  "Nasıl başlarız?",
  "İletişime geçin",
];

function getBotResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("hizmet") || q.includes("ne yapıyorsunuz") || q.includes("ne yapı")) {
    return "AI Chatbot, İş Akışı Otomasyonu, İçerik Üretimi, Satış & CRM, Raporlama ve E-ticaret otomasyonları sunuyoruz. Hangi konuda daha fazla bilgi almak istersiniz? 🤖";
  }
  if (q.includes("fiyat") || q.includes("ücret") || q.includes("maliyet") || q.includes("kaça")) {
    return "Başlangıç paketimiz ₺7.500'den, Profesyonel paketimiz ₺18.000'den başlıyor. Kurumsal projeler için özel teklif hazırlıyoruz. Kesin fiyat için ücretsiz görüşme yapalım!";
  }
  if (q.includes("başla") || q.includes("nasıl") || q.includes("süreç") || q.includes("adım")) {
    return "Süreç çok basit: 1️⃣ 45 dk ücretsiz görüşme → 2️⃣ Otomasyon yol haritası → 3️⃣ Geliştirme (1-3 hafta) → 4️⃣ Canlıya alma + eğitim. Başlamak için info@masifspecial.com adresine yazabilirsiniz!";
  }
  if (q.includes("iletişim") || q.includes("mail") || q.includes("e-posta") || q.includes("yaz")) {
    return `Bize info@masifspecial.com adresinden ulaşabilirsiniz. 48 saat içinde dönüş yapıyoruz. ✉️`;
  }
  if (q.includes("chatbot") || q.includes("chat bot") || q.includes("yapay zeka") || q.includes("ai")) {
    return "Evet! Web sitenize veya WhatsApp'ınıza özel AI chatbot kuruyoruz. Müşteri sorularını otomatik yanıtlar, randevu alır, sipariş takibi yapar. Detay için görüşme ayarlayalım!";
  }
  if (q.includes("make") || q.includes("zapier") || q.includes("otomasyon")) {
    return "Make.com ve Zapier konusunda uzmanız. Shopify, HubSpot, WhatsApp, Google Sheets, Slack ve daha pek çok araçla entegrasyon kuruyoruz. Hangi aracı kullanıyorsunuz?";
  }
  if (q.includes("teşekkür") || q.includes("sağ ol") || q.includes("tamam")) {
    return "Rica ederim! Başka bir sorunuz olursa buradayım. Ücretsiz görüşme için info@masifspecial.com 🙌";
  }
  if (q.includes("merhaba") || q.includes("selam") || q.includes("hey")) {
    return "Merhaba! 👋 MasifSpecial AI asistanıyım. Otomasyon hizmetlerimiz, fiyatlarımız veya nasıl başlayacağınız hakkında soru sorabilirsiniz.";
  }

  return "Anlıyorum! Bu konuda size daha iyi yardımcı olabilmek için doğrudan görüşme yapalım. info@masifspecial.com adresine yazın veya aşağıdaki butonları kullanın. 😊";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Merhaba! 👋 MasifSpecial AI asistanıyım. Otomasyon hizmetlerimiz hakkında her şeyi sorabilirsiniz.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getBotResponse(text) }]);
      setTyping(false);
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[rgba(14,165,233,0.2)] overflow-hidden flex flex-col"
            style={{ maxHeight: "480px" }}
          >
            {/* Header */}
            <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">MasifSpecial AI</p>
                  <p className="text-[10px] text-sky-400 mt-0.5">Genellikle anında yanıtlar</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors text-lg leading-none"
                aria-label="Kapat"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#0ea5e9] text-white rounded-br-sm"
                        : "bg-white text-[#0f172a] border border-[rgba(14,165,233,0.12)] rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[rgba(14,165,233,0.12)] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#94a3b8] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick replies */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr}
                      onClick={() =>
                        qr === "İletişime geçin"
                          ? (window.location.href = `mailto:${CONTACT_EMAIL}?subject=Bilgi Talebi`)
                          : sendMessage(qr)
                      }
                      className="text-xs text-[#0ea5e9] bg-white border border-[rgba(14,165,233,0.3)] px-3 py-1.5 rounded-full hover:bg-[rgba(14,165,233,0.06)] transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-[rgba(14,165,233,0.1)] bg-white p-3 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 text-sm px-3 py-2 rounded-lg border border-[rgba(14,165,233,0.2)] bg-[#f8fafc] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[rgba(14,165,233,0.2)] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-3 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-medium"
              >
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.5 }}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white shadow-lg shadow-[rgba(14,165,233,0.4)] hover:shadow-xl hover:shadow-[rgba(14,165,233,0.5)] transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center text-2xl"
        aria-label="Chatbot"
      >
        {open ? "×" : "💬"}
      </motion.button>
    </div>
  );
}
