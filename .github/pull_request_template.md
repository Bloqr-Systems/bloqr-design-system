## Description

<!-- Brief description of what this PR does. Link related issues with "Closes #NNN". -->

## Area(s) changed

- [ ] `tokens/` — colors, typography, spacing, effects, `@font-face`
- [ ] `components/` — React primitives
- [ ] `assets/` — logos, favicon, icons, OG image
- [ ] `fonts/` — self-hosted font files
- [ ] `guidelines/` — brand prose (`BLOQR_*.md`) or specimen cards
- [ ] `ui_kits/` — landing or app interactive recreations
- [ ] `templates/` — starting-point exports (`landing-page`, `app-dashboard`)
- [ ] `styles.css` / package manifest (`package.json`, `exports`, `files`)

> If this is primarily a new/updated **component**, or a **token** addition/rename/removal, consider using the [`component`](?expand=1&template=component.md) or [`token-change`](?expand=1&template=token-change.md) template instead — pick from the "Preview" dropdown when opening the PR.

## Semver classification

<!-- Per AGENTS.md §Enforcement Rules: new tokens/components → minor; breaking renames/removals → major; fixes → patch. -->

- [ ] `patch` — bug fix / visual refinement, no API or token surface change
- [ ] `minor` — new token(s) or component(s) added, nothing existing removed or renamed
- [ ] `major` — breaking change (renamed/removed CSS custom property, removed/renamed component export, changed prop signature)

## Brand & enforcement checklist (AGENTS.md)

- [ ] No existing CSS custom property deleted or renamed without a deprecation commit + major bump
- [ ] No component export removed or renamed (additive only)
- [ ] Dark-first preserved — no white/light-mode background introduced anywhere (cards, specimens, `ui_kits/`)
- [ ] No hardcoded hex/rgb — new styles use `var(--color-*)`, `var(--space-*)`, `var(--font-*)`
- [ ] Brand voice/copy follows `guidelines/BLOQR_COPY_PATTERNS.md` (no forbidden vocabulary — see README "Forbidden vocabulary")
- [ ] Naming follows README convention: **Bloqr** / **Bloqr AI** product names, **Filter** for this design system — never `BLOQR`/`bloqr`/`BloQr`
- [ ] `CHANGELOG.md` updated under `[Unreleased]` (Keep a Changelog format)
- [ ] Mermaid fenced code blocks used for any diagram added to a `.md` file (never ASCII art)
- [ ] `npm test` run after token/component changes (see `AGENTS.md`)

## Downstream impact

<!-- This package is consumed by bloqr-landing (Astro/Svelte), bloqr-compiler/frontend (Angular), and bloqr-compiler/docs. -->

- [ ] No consumer impact (internal-only change: guideline prose, ui_kit demo, docs)
- [ ] Consumers should pick this up automatically on next version bump (additive change)
- [ ] **Breaking** — consuming repos (`bloqr-landing`, `bloqr-compiler`) will need a follow-up PR; linked below

<!-- Link any follow-up issues/PRs in consuming repos here. -->

## Screenshots / Visual diff

<!-- Required for any change to tokens/, components/, assets/, or ui_kits/. Before/after screenshots or a recording. -->

## Notes for reviewers

<!-- Anything the reviewer should know that isn't obvious from the diff? -->
