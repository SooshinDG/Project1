# PR #3: Home Hero(첫 화면) 프리미엄 감성 A안 업그레이드

> **브랜치:** `feature/home-hero-premium`  
> **범위:** Hero 섹션만 (`components/home/hero-section.tsx`). 다른 섹션·페이지 미변경.

---

## 변경 요약

- **카피**
  - H1: "브랜드를 더 고급스럽게, 문의는 더 쉽게."
  - Sub: "소상공인·스타트업을 위한 프리미엄 감성 웹사이트. 빠른 납품, 깔끔한 운영, 전환 중심 설계."
- **CTA**
  - Primary: "무료 진단 받기(3분)" → `/contact`
  - Secondary: "패키지 보기" → `/pricing`
- **Trust badges 4개** (아이콘 유지): 7~14일 납기, 모바일 최적화, SEO 기본 세팅, 유지보수 옵션 (Clock, Smartphone, Search, Wrench).
- **A안 톤**
  - warm off-white 배경 위 여백·타이포·버튼 정리, 전역 토큰(warm-*, primary, border, muted) 재사용.
  - 히어로 높이·블러 강도·뱃지 간격 조정.

---

## 테스트 방법

1. `npm run dev` 실행 후 `http://localhost:3000` 접속.
2. 첫 화면(Hero)에서 카피·버튼·뱃지 노출 및 `/contact`, `/pricing` 이동 확인.
3. (선택) 스크린샷: 홈 첫 화면 캡처 후 PR에 첨부.

---

## 영향 범위

- **영향:** 홈 첫 화면(Hero)만. Why/Portfolio/패키지/FAQ 등 다른 섹션 및 `/pricing`, `/contact` 페이지 구조·내용 미변경.
- **위험도:** 낮음.
