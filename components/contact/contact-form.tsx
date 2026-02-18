"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Clock, MessageSquare, Shield } from "lucide-react";

const budgetOptions = [
  "100만원 미만",
  "100~200만원",
  "200~350만원",
  "350만원 이상",
  "미정 / 상담 후 결정",
];

const timelineOptions = [
  "1주 이내",
  "2주 이내",
  "1개월 이내",
  "여유 있음",
  "미정",
];

const goalOptions = [
  "예약/문의 늘리기",
  "브랜드 이미지 개선",
  "온라인 판매 시작",
  "기존 사이트 리뉴얼",
  "기타",
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    siteUrl: "",
    goal: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSelectChange(field: string, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-warm-100">
            <MessageSquare className="size-6 text-warm-800" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            신청이 완료되었습니다
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            영업일 기준 24시간 이내에 연락드리겠습니다.
            <br />
            빠른 상담을 원하시면 카카오톡으로 문의해 주세요.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Free Consultation
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            무료 진단 신청
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            3분이면 충분합니다. 아래 정보를 입력해 주시면, 비즈니스에 맞는
            최적의 웹사이트 전략을 무료로 진단해 드립니다.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">회사/브랜드명</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="예: 블루밍 플라워"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">담당자 성함</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="siteUrl">
                    {"현재 웹사이트 URL (있는 경우)"}
                  </Label>
                  <Input
                    id="siteUrl"
                    name="siteUrl"
                    value={formState.siteUrl}
                    onChange={handleChange}
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              {/* Goal selection */}
              <div className="mt-6 flex flex-col gap-2">
                <Label>프로젝트 목표</Label>
                <div className="flex flex-wrap gap-2">
                  {goalOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectChange("goal", option)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        formState.goal === option
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-warm-200 hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget selection */}
              <div className="mt-6 flex flex-col gap-2">
                <Label>예산 범위</Label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectChange("budget", option)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        formState.budget === option
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-warm-200 hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline selection */}
              <div className="mt-6 flex flex-col gap-2">
                <Label>희망 일정</Label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectChange("timeline", option)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        formState.timeline === option
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-warm-200 hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mt-6 flex flex-col gap-2">
                <Label htmlFor="message">추가 요청사항</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="추가로 전달하고 싶은 내용이 있다면 자유롭게 작성해 주세요."
                  className="min-h-28"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
              >
                무료 진단 신청하기
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-base font-semibold text-foreground">
                다음 단계
              </h3>
              <ol className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-xs font-medium text-warm-800">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      신청서 검토
                    </p>
                    <p className="text-xs text-muted-foreground">
                      제출해 주신 정보를 바탕으로 분석합니다.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-xs font-medium text-warm-800">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      진단 리포트 발송
                    </p>
                    <p className="text-xs text-muted-foreground">
                      24시간 이내에 맞춤 진단 리포트를 보내드립니다.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-xs font-medium text-warm-800">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      무료 상담
                    </p>
                    <p className="text-xs text-muted-foreground">
                      리포트를 바탕으로 30분 무료 상담을 진행합니다.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                <Clock className="size-5 shrink-0 text-warm-800" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    24시간 이내 응답
                  </p>
                  <p className="text-xs text-muted-foreground">영업일 기준</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                <Shield className="size-5 shrink-0 text-warm-800" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    개인정보 보호
                  </p>
                  <p className="text-xs text-muted-foreground">
                    수집된 정보는 상담 목적으로만 사용됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
