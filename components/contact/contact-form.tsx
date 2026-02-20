"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const industryOptions = [
  "카페·음식",
  "뷰티·헬스",
  "교육",
  "의료",
  "소매·이커머스",
  "서비스",
  "기타",
];

const goalOptions = [
  { value: "예약", label: "예약" },
  { value: "문의", label: "문의" },
  { value: "구매", label: "구매" },
  { value: "소개", label: "소개" },
];

const budgetOptions = [
  "100만원 미만",
  "100~200만원",
  "200~350만원",
  "350만원 이상",
  "미정",
];

const timelineOptions = [
  "1주 이내",
  "2주 이내",
  "1개월 이내",
  "여유 있음",
  "미정",
];

function ChipGroup<T extends string>({
  options,
  value,
  onChange,
  name,
  className = "",
}: {
  options: T[] | { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  name: string;
  className?: string;
}) {
  const list = options.map((o) =>
    typeof o === "string" ? { value: o as T, label: o } : o
  );
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {list.map(({ value: opt, label }) => (
        <button
          key={opt}
          type="button"
          name={name}
          onClick={() => onChange(opt)}
          className={`rounded-full border px-4 py-2 text-sm transition-all ${
            value === opt
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-warm-200 hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [formState, setFormState] = useState({
    nameOrCompany: "",
    email: "",
    phone: "",
    industry: "",
    industryOther: "",
    goal: "",
    siteUrl: "",
    budget: "",
    timeline: "",
    memo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleIndustry(v: string) {
    setFormState((prev) => ({ ...prev, industry: v }));
    if (errors.industry) setErrors((prev) => ({ ...prev, industry: "" }));
  }

  function handleGoal(v: string) {
    setFormState((prev) => ({ ...prev, goal: v }));
    if (errors.goal) setErrors((prev) => ({ ...prev, goal: "" }));
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!formState.nameOrCompany.trim()) next.nameOrCompany = "이름 또는 회사명을 입력해 주세요.";
    const hasContact = formState.email.trim() || formState.phone.trim();
    if (!hasContact) {
      next.email = "이메일 또는 전화번호 중 하나는 입력해 주세요.";
      next.phone = "이메일 또는 전화번호 중 하나는 입력해 주세요.";
    }
    if (!formState.industry) next.industry = "업종을 선택해 주세요.";
    if (!formState.goal) next.goal = "목표를 선택해 주세요.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-warm-100">
            <CheckCircle2 className="size-8 text-warm-800" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            접수가 완료되었습니다
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            영업일 기준 24시간 이내에 연락드리겠습니다.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            패키지 보기
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            무료 진단
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            무료 진단 신청
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            질문은 최소로, 필요한 정보만 받습니다. 제출 후 아래 절차로 진행됩니다.
          </p>
        </div>

        {/* 제출 후 절차(다음 단계) — 3줄 */}
        <div className="mb-10 rounded-2xl border border-border bg-warm-50/50 px-5 py-5">
          <h3 className="mb-4 text-sm font-semibold text-foreground">
            제출 후 절차(다음 단계)
          </h3>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="font-medium text-warm-800">1.</span>
              신청서 검토 후 24시간 이내 연락
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-warm-800">2.</span>
              맞춤 진단·견적 안내
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-warm-800">3.</span>
              무료 상담(원하실 경우)
            </li>
          </ol>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          {/* [필수] 이름/회사명 */}
          <div className="mb-6">
            <Label htmlFor="nameOrCompany">
              이름 / 회사명(상호) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nameOrCompany"
              name="nameOrCompany"
              value={formState.nameOrCompany}
              onChange={handleChange}
              placeholder="예: 홍길동 / (주)블루밍"
              className="mt-1.5"
            />
            {errors.nameOrCompany && (
              <p className="mt-1 text-xs text-destructive">{errors.nameOrCompany}</p>
            )}
          </div>

          {/* [필수] 연락처 — 이메일 또는 전화 1개 */}
          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="example@company.com"
                className="mt-1.5"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">전화번호</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="mt-1.5"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>
          <p className="-mt-2 mb-6 text-xs text-muted-foreground">
            이메일 또는 전화번호 중 하나만 입력해 주세요.
          </p>

          {/* [필수] 업종 — 칩 + 기타 */}
          <div className="mb-6">
            <Label>
              업종 <span className="text-destructive">*</span>
            </Label>
            <div className="mt-1.5">
              <ChipGroup
                options={industryOptions}
                value={formState.industry}
                onChange={handleIndustry}
                name="industry"
              />
              {formState.industry === "기타" && (
                <Input
                  name="industryOther"
                  value={formState.industryOther}
                  onChange={handleChange}
                  placeholder="업종을 입력해 주세요"
                  className="mt-3"
                />
              )}
            </div>
            {errors.industry && (
              <p className="mt-1 text-xs text-destructive">{errors.industry}</p>
            )}
          </div>

          {/* [필수] 목표 — 예약/문의/구매/소개 */}
          <div className="mb-8">
            <Label>
              목표 <span className="text-destructive">*</span>
            </Label>
            <div className="mt-1.5">
              <ChipGroup
                options={goalOptions}
                value={formState.goal}
                onChange={handleGoal}
                name="goal"
              />
            </div>
            {errors.goal && (
              <p className="mt-1 text-xs text-destructive">{errors.goal}</p>
            )}
          </div>

          {/* [선택] 현재 사이트 URL */}
          <div className="mb-6">
            <Label htmlFor="siteUrl" className="text-muted-foreground">
              현재 사이트 URL (선택)
            </Label>
            <Input
              id="siteUrl"
              name="siteUrl"
              type="url"
              value={formState.siteUrl}
              onChange={handleChange}
              placeholder="https://"
              className="mt-1.5"
            />
          </div>

          {/* [선택] 예산 범위 */}
          <div className="mb-6">
            <Label className="text-muted-foreground">예산 범위 (선택)</Label>
            <div className="mt-1.5">
              <ChipGroup
                options={budgetOptions}
                value={formState.budget}
                onChange={(v) => setFormState((p) => ({ ...p, budget: v }))}
                name="budget"
              />
            </div>
          </div>

          {/* [선택] 희망 일정 */}
          <div className="mb-6">
            <Label className="text-muted-foreground">희망 일정 (선택)</Label>
            <div className="mt-1.5">
              <ChipGroup
                options={timelineOptions}
                value={formState.timeline}
                onChange={(v) => setFormState((p) => ({ ...p, timeline: v }))}
                name="timeline"
              />
            </div>
          </div>

          {/* [선택] 참고 링크/메모 */}
          <div className="mb-8">
            <Label htmlFor="memo" className="text-muted-foreground">
              참고 링크 / 메모 (선택)
            </Label>
            <Textarea
              id="memo"
              name="memo"
              value={formState.memo}
              onChange={handleChange}
              placeholder="참고할 URL이나 전달할 내용을 적어 주세요."
              className="mt-1.5 min-h-24"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            무료 진단 신청하기
          </button>
        </form>
      </div>
    </section>
  );
}
