import { SectionHeader } from "@/components/section-header";
import { TrendingUp, Palette, Zap } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "전환율 중심 설계",
    description:
      "예쁘기만 한 웹사이트는 의미 없습니다. 방문자를 고객으로 전환하는 구조와 동선을 설계합니다.",
    points: [
      "CTA 배치 최적화",
      "이탈률 감소 설계",
      "문의/예약 전환 극대화",
    ],
  },
  {
    icon: Palette,
    title: "브랜드 일관성",
    description:
      "오프라인과 온라인의 브랜드 경험을 하나로. 고객이 신뢰할 수 있는 일관된 비주얼을 만듭니다.",
    points: [
      "브랜드 톤앤매너 반영",
      "로고/컬러 시스템 정리",
      "모든 페이지 일관성 유지",
    ],
  },
  {
    icon: Zap,
    title: "자동화 & 효율",
    description:
      "수작업으로 낭비되는 시간을 줄여드립니다. 예약, 문의, 결제를 자동화하여 운영 효율을 높입니다.",
    points: [
      "예약/문의 자동 알림",
      "간편 결제 연동",
      "관리자 대시보드 제공",
    ],
  },
];

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Why Us"
          title="왜 스튜디오 웨이브인가요?"
          description="단순히 홈페이지를 만드는 것이 아닙니다. 비즈니스 성장을 위한 전략적 웹사이트를 제작합니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-warm-200 hover:shadow-md"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-warm-100 transition-colors group-hover:bg-warm-200">
                <reason.icon className="size-5 text-warm-800" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {reason.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
              <ul className="flex flex-col gap-2">
                {reason.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="flex size-1.5 shrink-0 rounded-full bg-warm-800" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
