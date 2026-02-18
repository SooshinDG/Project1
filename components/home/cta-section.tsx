import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-warm-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          지금, 비즈니스의 첫인상을
          <br />
          바꿀 준비가 되셨나요?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
          3분이면 충분합니다. 무료 진단을 통해 현재 웹사이트의 문제점과 개선
          방향을 확인하세요.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
        >
          무료 진단 시작하기
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
