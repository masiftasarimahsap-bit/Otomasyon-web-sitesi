"use client";

const TECH_STACK = [
  { name: "Make.com", icon: "⚙️" },
  { name: "Zapier", icon: "⚡" },
  { name: "OpenAI", icon: "🤖" },
  { name: "HubSpot", icon: "🔶" },
  { name: "Notion", icon: "📋" },
  { name: "Airtable", icon: "🗂️" },
  { name: "Shopify", icon: "🛍️" },
  { name: "Google Sheets", icon: "📊" },
  { name: "Slack", icon: "💬" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "Salesforce", icon: "☁️" },
  { name: "WhatsApp API", icon: "📱" },
];

export default function TechMarquee() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-16 overflow-hidden border-y border-[rgba(14,165,233,0.12)] bg-white">
      <p className="text-center text-sm text-[#94a3b8] uppercase tracking-widest mb-8 font-medium">
        Entegre Çalıştığımız Teknolojiler
      </p>
      <div className="relative marquee-wrapper">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-12 w-max">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white border border-[rgba(14,165,233,0.15)] shadow-sm whitespace-nowrap"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm text-[#475569] font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
