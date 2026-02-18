"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { ArrowRight } from "lucide-react";

const filters = [
  "전체",
  "소상공인",
  "스타트업",
  "예약형",
  "상담형",
  "SaaS",
];

const portfolioItems = [
  {
    title: "블루밍 플라워",
    category: "소상공인",
    type: "예약형",
    description: "온라인 꽃 주문과 배달 예약을 통합한 플로리스트 웹사이트",
    result: "월 예약 건수 340% 증가",
  },
  {
    title: "핏포유 PT",
    category: "소상공인",
    type: "상담형",
    description: "PT 상담 신청률을 극대화한 퍼스널 트레이닝 스튜디오",
    result: "상담 전환율 2.8배 향상",
  },
  {
    title: "노트앱 SaaS",
    category: "스타트업",
    type: "SaaS",
    description: "깔끔한 온보딩과 프리미엄 느낌의 B2B 노트 서비스 랜딩",
    result: "무료 체험 가입 45% 증가",
  },
  {
    title: "하나 한의원",
    category: "소상공인",
    type: "예약형",
    description: "진료 예약 시스템이 내장된 한의원 브랜드 사이트",
    result: "신규 환자 문의 220% 증가",
  },
  {
    title: "인사이트 마케팅",
    category: "스타트업",
    type: "상담형",
    description: "리드 생성에 특화된 마케팅 에이전시 기업 사이트",
    result: "리드 생성 비용 60% 절감",
  },
  {
    title: "쿡잇 밀키트",
    category: "소상공인",
    type: "SaaS",
    description: "정기구독과 개별 주문이 가능한 밀키트 이커머스",
    result: "재구매율 35% 향상",
  },
];

export function PortfolioPreviewSection() {
  const [activeFilter, setActiveFilter] = useState("전체");

  const filtered =
    activeFilter === "전체"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === activeFilter || item.type === activeFilter
        );

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 bg-warm-50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Portfolio"
          title="실제 성과를 만들어낸 프로젝트"
          description="다양한 업종의 클라이언트와 함께 만든 결과물을 확인하세요."
        />

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-warm-200 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-warm-200 hover:shadow-md"
            >
              {/* Placeholder visual */}
              <div className="flex h-48 items-center justify-center bg-warm-100">
                <span className="text-sm font-medium text-warm-800">
                  {item.title}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-warm-100 px-2.5 py-0.5 text-xs font-medium text-warm-800">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.type}
                  </span>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-sm font-medium text-warm-800">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full portfolio */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-warm-800"
          >
            전체 포트폴리오 보기
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
