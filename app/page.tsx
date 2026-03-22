import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <Services />
      <CaseStudies />
      <Process />
      <WhyUs />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
