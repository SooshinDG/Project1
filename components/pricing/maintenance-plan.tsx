import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

const plans = [
  {
    name: "Basic",
    price: "5만원",
    period: "월",
    features: [
      "텍스트/이미지 수정 월 3회",
      "보안 업데이트",
      "호스팅 모니터링",
      "이메일 지원",
    ],
  },
  {
    name: "Pro",
    price: "10만원",
    period: "월",
    features: [
      "텍스트/이미지 수정 월 10회",
      "보안 업데이트",
      "호스팅 모니터링",
      "기능 추가/수정 월 1건",
      "월간 성과 리포트",
      "카카오톡 지원",
    ],
  },
  {
    name: "Enterprise",
    price: "15만원",
    period: "월",
    features: [
      "무제한 텍스트/이미지 수정",
      "보안 업데이트",
      "호스팅 모니터링",
      "기능 추가/수정 월 3건",
      "월간 성과 리포트",
      "우선 전화 지원",
      "분기별 전략 미팅",
    ],
  },
];

export function MaintenancePlan() {
  return (
    <section className="bg-warm-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Maintenance"
          title="유지보수 플랜"
          description="런칭 이후에도 안정적으로 운영하세요. 월 구독으로 편리하게 관리합니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-warm-200 hover:shadow-sm"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {plan.period}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="size-4 shrink-0 text-warm-800" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
              >
                문의하기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
