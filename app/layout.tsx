import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteIntro from "@/components/SiteIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masifspecial.com"),
  title: "MasifSpecial | AI & Otomasyon Ajansı",
  description:
    "İş süreçlerinizi yapay zeka ile geleceğe taşıyın. Make.com, Zapier, AI Chatbot ve iş akışı otomasyonları ile operasyonel maliyetlerinizi düşürün.",
  openGraph: {
    title: "MasifSpecial | AI & Otomasyon Ajansı",
    description: "Operasyonel maliyetleri düşürün, verimliliği otomasyonla artırın.",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasifSpecial | AI & Otomasyon Ajansı",
    description: "Operasyonel maliyetleri düşürün, verimliliği otomasyonla artırın.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a]">
        <SiteIntro />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
