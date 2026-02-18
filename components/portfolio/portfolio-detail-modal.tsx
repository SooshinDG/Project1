"use client";

import { useEffect } from "react";
import { X, Check } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  type: string;
  industry: string;
  description: string;
  result: string;
  challenge: string;
  solution: string;
  deliverables: string[];
}

interface PortfolioDetailModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export function PortfolioDetailModal({
  item,
  onClose,
}: PortfolioDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} 프로젝트 상세`}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-warm-100 text-foreground transition-colors hover:bg-warm-200"
          aria-label="닫기"
        >
          <X className="size-4" />
        </button>

        {/* Header image placeholder */}
        <div className="flex h-56 items-center justify-center bg-warm-100">
          <span className="text-lg font-semibold text-warm-800">
            {item.title}
          </span>
        </div>

        <div className="p-8">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-warm-100 px-3 py-1 text-xs font-medium text-warm-800">
              {item.category}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {item.type}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {item.industry}
            </span>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-foreground">
            {item.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          {/* Result highlight */}
          <div className="mb-8 rounded-2xl bg-warm-50 p-6 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              핵심 성과
            </span>
            <p className="mt-2 text-xl font-bold text-foreground">
              {item.result}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Challenge
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {item.challenge}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Solution
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {item.solution}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Deliverables
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {item.deliverables.map((d) => (
                <div
                  key={d}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <Check className="size-4 shrink-0 text-warm-800" />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
