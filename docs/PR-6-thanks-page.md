# PR #6: 제출 완료(Thank you) 페이지 + Tally 리다이렉트 대응

> **브랜치:** `feature/contact-thanks-page`

---

## 변경 요약

- **app/contact/thanks/page.tsx** 신규 생성 (Next.js App Router)
  - 제목: "접수가 완료되었습니다."
  - 본문: "확인 후 24시간 이내에 연락드리겠습니다."
  - CTA Primary: "패키지 보기" → /pricing
  - CTA Secondary: "홈으로" → /
  - A안 프리미엄 미니멀 톤(전역 토큰만), 아이콘·여백 적용

---

## Tally Redirect 설정

폼 제출 완료 시 이 페이지로 보내려면 Tally에서 **Redirect on completion** 에 아래 URL을 넣으세요.

| 환경   | URL |
|--------|-----|
| **로컬** | `http://localhost:3000/contact/thanks` |
| **배포** | `https://<도메인>/contact/thanks` (실제 배포 도메인으로 교체) |

예: Vercel 배포 시 `https://your-project.vercel.app/contact/thanks`

---

## 테스트 방법

1. `npm run dev` 후 `http://localhost:3000/contact/thanks` 접속
2. 제목·본문·"패키지 보기"(/pricing), "홈으로"(/) 동작 확인
3. `npm run build` 통과 확인

---

## 영향 범위

- **영향:** /contact/thanks 경로만 추가. 기존 페이지 미변경.
- **위험도:** 낮음.
