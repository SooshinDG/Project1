import Link from "next/link";
import { Clock, Smartphone, Search } from "lucide-react";

const trustBadges = [
  { icon: Clock, label: "평균 납기 7일" },
  { icon: Smartphone, label: "100% 모바일 최적화" },
  { icon: Search, label: "SEO 기본 세팅 포함" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle background element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-warm-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-warm-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-block rounded-full border border-border bg-warm-50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          소상공인 & 스타트업 전문
        </span>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          고객이 머무는 웹사이트,
          <br />
          <span className="text-warm-800">매출로 이어지는 디자인</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          브랜드의 첫인상을 결정짓는 웹사이트. 전환율을 높이는 프리미엄 디자인을
          합리적인 가격에 경험하세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            {"무료 진단 받기"}
            <span className="text-xs opacity-70">{"(3분)"}</span>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-full border border-border bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
          >
            패키지 보기
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-warm-100">
                <badge.icon className="size-4 text-warm-800" />
              </div>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
