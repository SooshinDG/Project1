import Link from "next/link";
import { Clock, Smartphone, Search, Wrench } from "lucide-react";

const trustBadges = [
  { icon: Clock, label: "7~14일 납기" },
  { icon: Smartphone, label: "모바일 최적화" },
  { icon: Search, label: "SEO 기본 세팅" },
  { icon: Wrench, label: "유지보수 옵션" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] py-20 pt-24 items-center justify-center overflow-hidden px-6">
      {/* A안: warm off-white 위 고급감 — 은은한 배경 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-warm-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-warm-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
          브랜드를 더 고급스럽게,
          <br />
          <span className="text-warm-800">문의는 더 쉽게.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          소상공인·스타트업을 위한 프리미엄 감성 웹사이트. 빠른 납품, 깔끔한
          운영, 전환 중심 설계.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            무료 진단 받기(3분)
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-muted-foreground/20"
          >
            패키지 보기
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-warm-100/80">
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
