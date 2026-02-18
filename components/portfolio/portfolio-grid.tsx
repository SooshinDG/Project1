"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { PortfolioDetailModal } from "./portfolio-detail-modal";

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
    id: 1,
    title: "블루밍 플라워",
    category: "소상공인",
    type: "예약형",
    industry: "플라워샵",
    description: "온라인 꽃 주문과 배달 예약을 통합한 플로리스트 웹사이트",
    result: "월 예약 건수 340% 증가",
    challenge:
      "기존에 전화와 카카오톡으로만 주문을 받아 업무 효율이 낮았습니다.",
    solution:
      "온라인 예약 시스템과 자동 알림을 구축하여 주문 프로세스를 자동화했습니다.",
    deliverables: [
      "반응형 웹사이트 5페이지",
      "온라인 예약 시스템",
      "카카오톡 알림 연동",
      "관리자 대시보드",
    ],
  },
  {
    id: 2,
    title: "핏포유 PT",
    category: "소상공인",
    type: "상담형",
    industry: "피트니스",
    description: "PT 상담 신청률을 극대화한 퍼스널 트레이닝 스튜디오",
    result: "상담 전환율 2.8배 향상",
    challenge:
      "인스타그램에서의 유입은 많았으나 실제 상담 신청으로 이어지는 비율이 매우 낮았습니다.",
    solution:
      "전환 중심의 랜딩페이지와 간편 상담 신청 폼을 설계하여 전환율을 극대화했습니다.",
    deliverables: [
      "전환 최적화 랜딩페이지",
      "상담 신청 폼",
      "트레이너 프로필 페이지",
      "후기/갤러리 섹션",
    ],
  },
  {
    id: 3,
    title: "노트앱 SaaS",
    category: "스타트업",
    type: "SaaS",
    industry: "B2B 소프트웨어",
    description: "깔끔한 온보딩과 프리미엄 느낌의 B2B 노트 서비스 랜딩",
    result: "무료 체험 가입 45% 증가",
    challenge:
      "프로덕트는 좋았으나 랜딩페이지가 신뢰감을 주지 못해 전환율이 낮았습니다.",
    solution:
      "깔끔한 UI와 소셜 프루프를 활용하여 SaaS 랜딩페이지를 리디자인했습니다.",
    deliverables: [
      "SaaS 랜딩페이지",
      "가격 비교 페이지",
      "온보딩 플로우 디자인",
      "블로그 레이아웃",
    ],
  },
  {
    id: 4,
    title: "하나 한의원",
    category: "소상공인",
    type: "예약형",
    industry: "의료/건강",
    description: "진료 예약 시스템이 내장된 한의원 브랜드 사이트",
    result: "신규 환자 문의 220% 증가",
    challenge:
      "네이버 플레이스만 운영 중이었으며, 자체 브랜드 사이트가 없었습니다.",
    solution:
      "신뢰감 있는 브랜드 사이트와 간편 예약 시스템을 구축했습니다.",
    deliverables: [
      "반응형 브랜드 사이트",
      "진료 예약 시스템",
      "의료진 소개 페이지",
      "건강 정보 블로그",
    ],
  },
  {
    id: 5,
    title: "인사이트 마케팅",
    category: "스타트업",
    type: "상담형",
    industry: "마케팅 에이전시",
    description: "리드 생성에 특화된 마케팅 에이전시 기업 사이트",
    result: "리드 생성 비용 60% 절감",
    challenge:
      "광고에만 의존한 리드 생성으로 비용이 지속적으로 증가하고 있었습니다.",
    solution:
      "오가닉 유입을 위한 콘텐츠 허브와 리드 캡쳐 시스템을 구축했습니다.",
    deliverables: [
      "기업 사이트 7페이지",
      "케이스 스터디 섹션",
      "리드 캡쳐 폼",
      "콘텐츠 블로그",
    ],
  },
  {
    id: 6,
    title: "쿡잇 밀키트",
    category: "소상공인",
    type: "SaaS",
    industry: "식품/이커머스",
    description: "정기구독과 개별 주문이 가능한 밀키트 이커머스",
    result: "재구매율 35% 향상",
    challenge:
      "마켓 플랫폼에서만 판매 중이었으며, 자사몰이 없어 수수료 부담이 컸습니다.",
    solution:
      "자사몰 구축과 정기구독 시스템을 도입하여 고객 관계를 직접 관리할 수 있게 했습니다.",
    deliverables: [
      "이커머스 사이트",
      "정기구독 시스템",
      "결제 연동",
      "주문/배송 관리",
    ],
  },
  {
    id: 7,
    title: "스마트 세무",
    category: "스타트업",
    type: "상담형",
    industry: "세무/회계",
    description: "온라인 세무 상담 예약과 자료 수집을 자동화한 세무 법인 사이트",
    result: "상담 예약 처리 시간 70% 단축",
    challenge:
      "상담 예약과 자료 수집이 전부 수작업으로 처리되어 업무 효율이 매우 낮았습니다.",
    solution:
      "자동화된 상담 예약 시스템과 자료 제출 폼을 구축했습니다.",
    deliverables: [
      "기업 사이트 6페이지",
      "온라인 상담 예약",
      "자료 업로드 시스템",
      "세무 뉴스 블로그",
    ],
  },
  {
    id: 8,
    title: "펫케어 플러스",
    category: "소상공인",
    type: "예약형",
    industry: "반려동물",
    description: "반려동물 호텔과 미용 예약이 통합된 펫케어 서비스 사이트",
    result: "월 예약 건수 180% 증가",
    challenge:
      "전화 예약만 가능하여 부재 시 예약을 놓치는 경우가 빈번했습니다.",
    solution:
      "24시간 온라인 예약 시스템을 구축하고 실시간 알림을 연동했습니다.",
    deliverables: [
      "반응형 웹사이트",
      "호텔/미용 예약 시스템",
      "실시간 알림",
      "후기 관리 시스템",
    ],
  },
  {
    id: 9,
    title: "아트스페이스",
    category: "스타트업",
    type: "SaaS",
    industry: "문화/예술",
    description: "전시 예매와 작가 포트폴리오를 통합한 아트 플랫폼",
    result: "온라인 예매 전환율 52% 달성",
    challenge:
      "전시 정보는 SNS로만 공유되어 체계적인 예매 시스템이 부재했습니다.",
    solution:
      "예매 시스템과 작가 포트폴리오를 하나의 플랫폼으로 통합했습니다.",
    deliverables: [
      "전시 플랫폼 사이트",
      "온라인 예매 시스템",
      "작가 포트폴리오 페이지",
      "뉴스레터 연동",
    ],
  },
];

type PortfolioItem = (typeof portfolioItems)[number];

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeFilter === "전체"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category === activeFilter || item.type === activeFilter
        );

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Portfolio"
          title="우리가 만든 성과"
          description="다양한 업종과 목표에 맞춘 프로젝트를 확인하세요. 각 프로젝트의 도전, 솔루션, 결과를 투명하게 공개합니다."
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
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:border-warm-200 hover:shadow-md"
            >
              {/* Placeholder visual */}
              <div className="flex h-48 items-center justify-center bg-warm-100">
                <span className="text-sm font-medium text-warm-800">
                  {item.title}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-warm-100 px-2.5 py-0.5 text-xs font-medium text-warm-800">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.type}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.industry}
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
            </button>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <PortfolioDetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  );
}
