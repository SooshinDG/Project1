import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "접수 완료 | 스튜디오 웨이브",
  description: "무료 진단 신청이 접수되었습니다. 확인 후 24시간 이내에 연락드리겠습니다.",
};

export default function ContactThanksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-warm-100">
              <CheckCircle2 className="size-8 text-warm-800" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              접수가 완료되었습니다.
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              확인 후 24시간 이내에 연락드리겠습니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md sm:w-auto"
              >
                패키지 보기
              </Link>
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-accent sm:w-auto"
              >
                홈으로
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
