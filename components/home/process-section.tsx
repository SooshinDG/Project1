import { SectionHeader } from "@/components/section-header";
import { CreditCard, FileText, PenTool, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    step: "01",
    title: "결제 & 계약",
    description: "패키지를 선택하고 간편 결제를 진행합니다. 계약서와 작업 범위를 확정합니다.",
    detail: "당일 착수 가능",
  },
  {
    icon: FileText,
    step: "02",
    title: "자료 제출",
    description: "간편한 자료 제출 폼을 통해 로고, 텍스트, 이미지 등을 전달해 주세요.",
    detail: "자동화된 자료 수집",
  },
  {
    icon: PenTool,
    step: "03",
    title: "초안 제작",
    description: "브랜드 분석 후 와이어프레임과 디자인 초안을 3~5일 내 전달합니다.",
    detail: "3~5일 소요",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "수정 & 피드백",
    description: "초안을 확인하고 피드백을 주세요. 패키지에 따라 2~3회 수정이 포함됩니다.",
    detail: "체계적 피드백 시스템",
  },
  {
    icon: Rocket,
    step: "05",
    title: "배포 & 런칭",
    description: "최종 승인 후 도메인 연결 및 배포를 완료합니다. 런칭 후 안정화를 지원합니다.",
    detail: "호스팅 + 도메인 지원",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-20 bg-warm-50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Process"
          title="심플하고 투명한 작업 프로세스"
          description="복잡한 절차 없이, 체계적으로 진행합니다."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-warm-200 hover:shadow-sm">
                    <div className="mb-3 flex items-center gap-3 md:justify-start">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-warm-100">
                          <step.icon className="size-4 text-warm-800" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Step {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-warm-100 px-3 py-1 text-xs font-medium text-warm-800">
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 hidden size-3 -translate-x-1/2 rounded-full border-2 border-warm-800 bg-background md:left-1/2 md:block" />

                {/* Empty space for opposite side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
