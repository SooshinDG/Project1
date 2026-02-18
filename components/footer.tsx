import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              스튜디오 웨이브
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              소상공인과 스타트업을 위한
              <br />
              프리미엄 웹 디자인 스튜디오
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              서비스
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/portfolio"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                포트폴리오
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                패키지 & 가격
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                무료 진단
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              안내
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/#process"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                작업 프로세스
              </Link>
              <Link
                href="/#faq"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                자주 묻는 질문
              </Link>
              <Link
                href="/#packages"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                패키지 비교
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              연락처
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <p>hello@studiowave.kr</p>
              <p>02-1234-5678</p>
              <p>
                서울특별시 강남구
                <br />
                테헤란로 123, 4층
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 Studio Wave. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              이용약관
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
