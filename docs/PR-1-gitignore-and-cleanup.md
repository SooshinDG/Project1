# PR #1: .gitignore 보강 및 레포 클린업

> **브랜치:** `chore/gitignore-cleanup`  
> **기준:** main 직접 수정 금지. 본 PR은 에이전트가 브랜치·커밋·푸시·PR 생성까지 수행.

---

## 변경 요약

- **.gitignore 보강**
  - `__v0_*` 패턴 추가 → v0 런타임 관련 파일이 레포에 커밋되지 않도록 함.
  - 기존 유지: `node_modules/`, `.next/`, `*.zip`, `*.tar.gz`, `*.rar` 등.
- **레포 클린업**
  - Git 추적 중이던 `premium-korean-studio-website.zip` 제거 (`git rm --cached`).
  - `*.zip` ignore로 재발 방지.
  - (참고) `__v0_*` 파일은 현재 추적 중이 아니었음.

---

## 테스트 방법

1. **무시 동작:** 프로젝트 루트에 `test.zip` 생성 후 `git status` → 목록에 없으면 `*.zip` 무시 정상.
2. **추적 해제:** `git status`에서 해당 zip이 "deleted"로만 보이면 정상 (워킹 디렉터리 파일은 유지).

---

## 영향 범위

- **영향:** 버전 관리 정책만 (빌드/런타임 코드 무변경).
- **위험도:** 낮음.
- **참고:** `npm run build` 폰트 이슈는 별도 PR(#2)로 분리 예정.

---

## 체크리스트

- [x] main이 아닌 feature 브랜치에서 작업
- [x] .gitignore 및 zip 추적 해제만 포함 (빌드 수정 없음)
