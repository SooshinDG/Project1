import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Lite",
    price: "99만원",
    period: "1회",
    description: "심플한 첫 웹사이트. 빠르게 온라인 존재감을 만드세요.",
    included: [
      "랜딩 1페이지",
      "모바일 최적화",
      "기본 SEO",
      "문의 폼 1개",
      "수정 2회",
      "5~7일 납기",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "199만원",
    period: "1회",
    description: "성장하는 비즈니스에 맞는 구성. 예약·상담 자동화.",
    included: [
      "반응형 5페이지",
      "모바일 최적화",
      "고급 SEO",
      "문의 폼 + 자동 알림",
      "예약/상담 시스템",
      "수정 3회 · 10~14일 납기",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "349만원",
    period: "1회",
    description: "풀 구성과 자동화. 매출에 직접 기여하는 사이트.",
    included: [
      "10페이지+ 풀 사이트",
      "SEO + 성능 최적화",
      "문의/예약 + 결제 연동",
      "맞춤 관리자",
      "수정 무제한",
      "14~21일 납기 · 1개월 무료 유지보수",
    ],
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
                  가장 많이 선택
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

              <ul className="mb-8 flex flex-1 flex-col gap-2.5">
                {pkg.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <Check className="size-4 shrink-0 text-warm-800" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md"
                      : "border border-border bg-background text-foreground hover:bg-accent"
                  }`}
                >
                  무료 진단 받기(3분)
                </Link>
                <Link
                  href="/contact"
                  className="text-center text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                >
                  패키지 문의
                </Link>
              </div>
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
