"use client";

import { SectionHeader } from "@/components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "작업 기간은 얼마나 걸리나요?",
    answer:
      "패키지에 따라 다르지만, Lite는 5~7일, Standard는 10~14일, Premium은 14~21일 정도 소요됩니다. 자료 제출이 빠르면 일정도 단축됩니다.",
  },
  {
    question: "수정은 몇 번까지 가능한가요?",
    answer:
      "Lite 패키지는 2회, Standard는 3회, Premium은 무제한 수정이 포함되어 있습니다. 추가 수정이 필요한 경우 건당 비용이 발생합니다.",
  },
  {
    question: "호스팅은 어떻게 하나요?",
    answer:
      "Vercel 또는 카페24 등 원하시는 호스팅 서비스에 배포해 드립니다. 호스팅 비용은 별도이며, 월 1~3만원 수준의 합리적인 옵션을 안내해 드립니다.",
  },
  {
    question: "도메인도 도와주시나요?",
    answer:
      "네, 도메인 구매 및 연결을 대행해 드립니다. 도메인 비용(연간 1~3만원)은 별도이며, 기존 도메인이 있다면 연결만 도와드립니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "디자인 초안 전달 전에는 100% 환불이 가능합니다. 초안 전달 후에는 진행 단계에 따라 부분 환불이 적용됩니다. 자세한 내용은 계약서에 명시됩니다.",
  },
  {
    question: "유지보수는 어떻게 하나요?",
    answer:
      "Premium 패키지에는 1개월 무료 유지보수가 포함되어 있습니다. 이후에는 월 5~15만원의 유지보수 플랜을 선택하실 수 있습니다. 텍스트/이미지 수정, 보안 업데이트 등이 포함됩니다.",
  },
  {
    question: "콘텐츠(텍스트, 이미지)도 만들어주시나요?",
    answer:
      "기본적으로 텍스트와 이미지는 고객님이 준비해 주셔야 합니다. 다만 카피라이팅이나 스톡 이미지 선정 등은 유료 옵션으로 제공합니다.",
  },
  {
    question: "타 업체에서 만든 사이트도 리뉴얼 가능한가요?",
    answer:
      "네, 가능합니다. 기존 사이트를 분석하여 개선 방향을 제안드리고, 새롭게 제작합니다. 무료 진단을 통해 현재 사이트의 문제점을 파악해 보세요.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="자주 묻는 질문"
          description="궁금한 점이 있으신가요? 자주 묻는 질문을 확인해 보세요."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
