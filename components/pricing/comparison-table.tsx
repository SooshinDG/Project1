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
  { feature: "납기", lite: "5~7일", standard: "10~14일", premium: "14~21일" },
  { feature: "수정 횟수", lite: "2회", standard: "3회", premium: "무제한" },
  { feature: "페이지 수", lite: "1페이지", standard: "5페이지", premium: "10페이지+" },
  { feature: "분석 도구", lite: "기본", standard: "기본", premium: "연동·리포트" },
  { feature: "SEO", lite: "기본 세팅", standard: "고급 SEO", premium: "SEO + 성능 최적화" },
  { feature: "유지보수 옵션", lite: "별도", standard: "별도", premium: "1개월 무료 후 별도" },
];

const notIncludedItems = [
  { name: "문구 작성(카피)", note: "별도" },
  { name: "촬영(제품·공간 등)", note: "별도" },
  { name: "로고·브랜드 제작", note: "별도" },
  { name: "도메인·호스팅", note: "별도(연간 비용)" },
  { name: "추가 페이지", note: "페이지당 15만원" },
  { name: "추가 수정(Lite/Standard)", note: "건당 5만원" },
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
          label="비교"
          title="패키지 비교"
          description="납기·수정·페이지·SEO·유지보수 옵션을 한눈에 비교하세요."
        />

        {/* 비교표: 납기/수정횟수/페이지 수/분석도구/SEO/유지보수 */}
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="bg-warm-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    항목
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
                    className={i % 2 === 0 ? "bg-card" : "bg-warm-50/50"}
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

          <div className="flex flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.feature}
                className="border-t border-border px-4 py-3 first:border-t-0"
              >
                <h4 className="mb-2 text-sm font-medium text-foreground">
                  {row.feature}
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <span className="block text-xs text-muted-foreground">
                      Lite
                    </span>
                    <CellContent value={row.lite} />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-foreground">
                      Standard
                    </span>
                    <CellContent value={row.standard} />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">
                      Premium
                    </span>
                    <CellContent value={row.premium} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 미포함(별도) */}
        <div className="mt-16">
          <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
            미포함(별도)
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-center text-sm text-muted-foreground">
            아래 항목은 패키지에 포함되지 않으며, 필요 시 별도 견적·문의로 진행합니다.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {notIncludedItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5"
              >
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
