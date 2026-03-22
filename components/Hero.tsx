"use client";

import ShaderHero from "@/components/ui/animated-shader-hero";

const CONTACT_EMAIL = "info@masifspecial.com";

export default function Hero() {
  return (
    <ShaderHero
      trustBadge={{
        text: "AI & İş Akışı Otomasyon Ajansı",
        icons: ["✨"],
      }}
      headline={{
        line1: "İş Süreçlerinizi",
        line2: "Geleceğe Taşıyın",
      }}
      subtitle="MasifSpecial ile operasyonel maliyetleri düşürün, verimliliği otomasyonla artırın. Manuel iş yükünüzü %70'e kadar azaltın."
      buttons={{
        primary: {
          text: "Ücretsiz Analiz İçin Bize Yazın",
          onClick: () => {
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=Ücretsiz Analiz Talebi`;
          },
        },
        secondary: {
          text: "Hizmetleri Keşfet",
          onClick: () => {
            document.getElementById("hizmetler")?.scrollIntoView({ behavior: "smooth" });
          },
        },
      }}
    />
  );
}
