import { Check, Minus } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  lite: CellValue;
  standard: CellValue;
  premium: CellValue;
}

const rows: ComparisonRow[] = [
  { feature: "페이지 수", lite: "1페이지", standard: "5페이지", premium: "10페이지+" },
  { feature: "반응형 디자인", lite: true, standard: true, premium: true },
  { feature: "모바일 최적화", lite: true, standard: true, premium: true },
  { feature: "기본 SEO", lite: true, standard: true, premium: true },
  { feature: "고급 SEO + 성능 최적화", lite: false, standard: true, premium: true },
  { feature: "문의 폼", lite: "1개", standard: "다수", premium: "무제한" },
  { feature: "자동 알림(이메일/카카오)", lite: false, standard: true, premium: true },
  { feature: "예약/상담 시스템", lite: false, standard: true, premium: true },
  { feature: "결제 시스템 연동", lite: false, standard: false, premium: true },
  { feature: "관리자 대시보드", lite: false, standard: "기본", premium: "맞춤" },
  { feature: "수정 횟수", lite: "2회", standard: "3회", premium: "무제한" },
  { feature: "납기", lite: "5~7일", standard: "10~14일", premium: "14~21일" },
  { feature: "무료 유지보수", lite: false, standard: false, premium: "1개월" },
  { feature: "우선 지원", lite: false, standard: false, premium: true },
];

const paidOptions = [
  { name: "추가 페이지", price: "페이지당 15만원" },
  { name: "카피라이팅", price: "페이지당 10만원" },
  { name: "스톡 이미지 선정", price: "5만원" },
  { name: "추가 수정 (Lite/Standard)", price: "건당 5만원" },
  { name: "다국어 지원", price: "언어당 30만원" },
  { name: "애니메이션/인터랙션", price: "상담 후 결정" },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-4 text-warm-800" />
    ) : (
      <Minus className="mx-auto size-4 text-muted-foreground/30" />
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Comparison"
          title="패키지 상세 비교"
          description="각 패키지에 포함된 항목을 한눈에 비교하세요."
        />

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-warm-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  기능
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                  Lite
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-foreground">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                    Standard
                  </span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i % 2 === 0 ? "bg-card" : "bg-warm-50/50"
                  }
                >
                  <td className="px-6 py-3.5 text-sm text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <CellContent value={row.lite} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <CellContent value={row.standard} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <CellContent value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-border bg-card p-4"
            >
              <h4 className="mb-3 text-sm font-medium text-foreground">
                {row.feature}
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="mb-1 block text-xs text-muted-foreground">
                    Lite
                  </span>
                  <CellContent value={row.lite} />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-medium text-foreground">
                    Standard
                  </span>
                  <CellContent value={row.standard} />
                </div>
                <div>
                  <span className="mb-1 block text-xs text-muted-foreground">
                    Premium
                  </span>
                  <CellContent value={row.premium} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paid options */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            유료 추가 옵션
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paidOptions.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
              >
                <span className="text-sm text-foreground">{option.name}</span>
                <span className="text-sm font-medium text-warm-800">
                  {option.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
