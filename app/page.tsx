import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { WhySection } from "@/components/home/why-section";
import { PortfolioPreviewSection } from "@/components/home/portfolio-preview-section";
import { PackagesSection } from "@/components/home/packages-section";
import { ProcessSection } from "@/components/home/process-section";
import { TemplatesSection } from "@/components/home/templates-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <PortfolioPreviewSection />
        <PackagesSection />
        <ProcessSection />
        <TemplatesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
