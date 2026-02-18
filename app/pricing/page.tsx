import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { MaintenancePlan } from "@/components/pricing/maintenance-plan";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "패키지 & 가격 | 스튜디오 웨이브",
  description:
    "숨겨진 비용 없이, 필요한 만큼만 선택하세요. 스튜디오 웨이브의 패키지 가격과 상세 비교표를 확인하세요.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PricingHero />
        <PricingCards />
        <ComparisonTable />
        <MaintenancePlan />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
