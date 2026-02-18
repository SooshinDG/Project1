import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "포트폴리오 | 스튜디오 웨이브",
  description:
    "스튜디오 웨이브가 만든 다양한 프로젝트를 확인하세요. 소상공인과 스타트업의 실제 성과를 확인할 수 있습니다.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <PortfolioGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
