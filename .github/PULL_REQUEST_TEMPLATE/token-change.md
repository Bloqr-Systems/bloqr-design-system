## Design Token PR

<!-- Use this template for PRs that change tokens/colors.css, tokens/typography.css, tokens/spacing.css, tokens/effects.css, or tokens/fonts.css. -->

**Closes** #<!-- issue number -->

**Token file(s):** <!-- e.g. tokens/colors.css -->

---

### What changed?

<!-- List each custom property added, renamed, removed, or whose value changed. -->

-

### Classification

- [ ] **Addition** — new `--token-name` added, nothing existing touched (minor bump)
- [ ] **Value change** — existing token's value tuned, name unchanged (minor or patch bump depending on visual impact — describe below)
- [ ] **Breaking** — existing token renamed or removed (major bump — **requires a deprecation commit first**, see below)

<!-- For value changes: describe the visual impact (e.g. "darkens --orange-500 by 4% for AA contrast on --bg-surface"). -->

### Deprecation (required for any rename/removal)

Per `AGENTS.md` §Enforcement Rules, a CSS custom property is never deleted or renamed in the same PR that introduces the new one.

- [ ] N/A — this PR is purely additive
- [ ] A prior deprecation commit/PR shipped first, linked here: #
- [ ] This PR is that deprecation commit (old + new token both ship; old token documented as deprecated in `CHANGELOG.md` and removed in a follow-up major bump)

### Downstream consumer audit

CSS custom properties are not type-checked across the package boundary — a rename silently breaks any consumer still referencing the old name. Confirm impact across all three consumers before merging a breaking change:

- [ ] `bloqr-landing` (`src/styles/global.css` token aliases) — checked for usages of the changed token
- [ ] `bloqr-compiler/frontend` (Angular component stylesheets) — checked for usages of the changed token
- [ ] `bloqr-compiler/docs` — checked for usages of the changed token
- [ ] Follow-up issues/PRs filed in affected consumer repos (link below)

<!-- Link follow-up issues/PRs in consuming repos here. -->

### Checklist

- [ ] `npm test` run
- [ ] Affected `guidelines/*.html` specimen card(s) updated to reflect the new/changed value
- [ ] `styles.css` `@import` chain still resolves (no orphaned token file)
- [ ] `CHANGELOG.md` updated under `[Unreleased]`
- [ ] No hardcoded hex/rgb introduced elsewhere as a workaround

### Screenshots / Visual diff

<!-- Before/after of the affected specimen card(s) in guidelines/, and any ui_kits/ surface that uses the token. -->

---

### Notes for reviewers

<!-- Anything the reviewer should know that isn't obvious from the diff? -->
