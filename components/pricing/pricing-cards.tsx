import Link from "next/link";
import { Check, Minus } from "lucide-react";

const packages = [
  {
    name: "Lite",
    price: "99만원",
    period: "1회",
    description: "심플하지만 확실한 첫 웹사이트. 빠르게 온라인에 존재감을 만드세요.",
    features: [
      { text: "반응형 랜딩페이지 1장", included: true },
      { text: "모바일 최적화", included: true },
      { text: "기본 SEO 세팅", included: true },
      { text: "문의 폼 1개", included: true },
      { text: "수정 2회 포함", included: true },
      { text: "5~7일 납기", included: true },
      { text: "추가 페이지", included: false },
      { text: "예약/결제 시스템", included: false },
      { text: "관리자 대시보드", included: false },
      { text: "유지보수", included: false },
    ],
    cta: "Lite 시작하기",
    popular: false,
  },
  {
    name: "Standard",
    price: "199만원",
    period: "1회",
    description: "성장하는 비즈니스를 위한 최적의 선택. 예약과 상담을 자동화하세요.",
    features: [
      { text: "반응형 웹사이트 5페이지", included: true },
      { text: "모바일 최적화", included: true },
      { text: "고급 SEO 세팅", included: true },
      { text: "문의 폼 + 자동 알림", included: true },
      { text: "예약/상담 시스템", included: true },
      { text: "기본 관리자 페이지", included: true },
      { text: "수정 3회 포함", included: true },
      { text: "10~14일 납기", included: true },
      { text: "결제 시스템 연동", included: false },
      { text: "유지보수", included: false },
    ],
    cta: "Standard 시작하기",
    popular: true,
  },
  {
    name: "Premium",
    price: "349만원",
    period: "1회",
    description: "완벽한 자동화와 프리미엄 브랜딩. 매출에 직접 기여하는 웹사이트.",
    features: [
      { text: "10페이지+ 풀 웹사이트", included: true },
      { text: "모바일 최적화", included: true },
      { text: "SEO + 성능 최적화", included: true },
      { text: "문의/예약 + 자동화", included: true },
      { text: "간편 결제 연동", included: true },
      { text: "맞춤 관리자 대시보드", included: true },
      { text: "무제한 수정", included: true },
      { text: "14~21일 납기", included: true },
      { text: "1개월 무료 유지보수", included: true },
      { text: "우선 지원", included: true },
    ],
    cta: "Premium 시작하기",
    popular: false,
  },
];

export function PricingCards() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-md ${
                pkg.popular
                  ? "border-primary bg-card shadow-sm"
                  : "border-border bg-card hover:border-warm-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {pkg.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    / {pkg.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 text-sm"
                  >
                    {feature.included ? (
                      <Check className="size-4 shrink-0 text-warm-800" />
                    ) : (
                      <Minus className="size-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/60"
                      }
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-background text-foreground hover:bg-accent"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          모든 가격은 부가세(VAT) 별도입니다.
        </p>
      </div>
    </section>
  );
}
