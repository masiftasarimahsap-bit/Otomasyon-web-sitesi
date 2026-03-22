import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <WhyUs />
      <Footer />
    </main>
  );
}
