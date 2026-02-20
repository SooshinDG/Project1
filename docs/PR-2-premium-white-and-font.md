# PR #2: A안(프리미엄 감성 미니멀/화이트) 전역 톤 + 빌드 폰트 이슈 해결

> **브랜치:** `feature/design-premium-white`

---

## 변경 요약

- **app/layout.tsx**
  - 메타데이터: title/description 정리, generator 제거.
  - next/font 제거(Noto_Sans_KR, Inter) → 빌드 시 Google Font 네트워크 의존 제거.
  - 기본 레이아웃: body에 `min-h-screen`, `pt-[var(--header-gap)]`로 헤더 여백 적용.
- **app/globals.css**
  - A안 톤: warm off-white 배경(`--background`), `--header-gap` 추가.
  - 타이포: body 기본 `line-height: 1.6`, `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.
  - 폰트: `--font-sans`를 시스템/로컬 스택으로 변경(Apple SD Gothic Neo, Malgun Gothic, Noto Sans KR, Dotum) → 빌드 실패 원인 제거.
  - 유틸: `.section-padding` 클래스 추가(섹션 기본 패딩).

---

## 테스트 방법

1. `npm run dev` → 로컬 실행, 메인·서브 페이지 노출 및 톤 확인.
2. `npm run build` → 빌드 성공 확인.

---

## 영향 범위

- **영향:** 전역 레이아웃, 배경/폰트/타이포, 모든 페이지.
- **위험도:** 중간. 폰트/배경 변경으로 시각적 차이 있음.
- **새 라이브러리:** 없음.
