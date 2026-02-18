import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { ArrowRight, Calendar, MessageCircle, ShoppingBag } from "lucide-react";

const templates = [
  {
    icon: Calendar,
    name: "예약형 템플릿",
    description:
      "레스토랑, 미용실, 병원 등 예약이 핵심인 비즈니스에 최적화된 템플릿입니다.",
    features: ["온라인 예약 시스템", "캘린더 연동", "자동 알림"],
  },
  {
    icon: MessageCircle,
    name: "상담형 템플릿",
    description:
      "법률, 컨설팅, PT 등 상담 문의 전환에 최적화된 템플릿입니다.",
    features: ["상담 신청 폼", "카카오톡 연동", "자동 응답"],
  },
  {
    icon: ShoppingBag,
    name: "구매형 템플릿",
    description:
      "밀키트, 핸드메이드, 정기배송 등 온라인 판매에 최적화된 템플릿입니다.",
    features: ["간편 결제 연동", "재고 관리", "배송 추적"],
  },
];

export function TemplatesSection() {
  return (
    <section id="templates" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Templates"
          title="업종별 맞춤 템플릿"
          description="검증된 구조 위에 브랜드를 입히면, 더 빠르고 확실한 결과물이 나옵니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-warm-200 hover:shadow-md"
            >
              {/* Preview placeholder */}
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-warm-100">
                <template.icon className="size-8 text-warm-800 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {template.name}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {template.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-warm-800"
          >
            템플릿 적용 사례 보기
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
