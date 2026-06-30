# Contributing to bloqr-design-system

This repo publishes `@bloqr/design-system`, the single source of truth for visual brand and design language across all Bloqr web properties. Read `AGENTS.md` before making any change — it defines the enforcement rules this guide assumes you already know.

## Before you start

- Read `AGENTS.md` in full, especially "Enforcement Rules for This Repo."
- For any UI/brand change, skim `guidelines/BLOQR_BRAND_HANDOFF.md` (visual source of truth) and, if your change touches copy, `guidelines/BLOQR_COPY_PATTERNS.md` (approved mantras, forbidden vocabulary).
- Know which area you're changing: `tokens/`, `components/`, `assets/`, `fonts/`, `guidelines/`, `ui_kits/`, `templates/`, or `styles.css`/package manifest. This determines semver impact and which PR template to use.

## Pull request process

1. **Branch from `main`.**
2. **Make your change**, following the conventions for the area you're touching (see below).
3. **Update `CHANGELOG.md`** under `[Unreleased]` — this is mandatory for any substantive change per `AGENTS.md`.
4. **Run `npm test`** if your change touches `tokens/` or `components/`.
5. **Open a PR against `main`.** GitHub auto-populates the default template. If your change is primarily a new/changed **component** or a **token** addition/rename/removal, switch to the more specific template from the "Preview" dropdown on the PR compare page (or append `?expand=1&template=<file>` to the compare URL):

   | Template | File | Use for |
   |---|---|---|
   | Default | `.github/pull_request_template.md` | General changes: `assets/`, `fonts/`, `guidelines/`, `ui_kits/`, `templates/`, `styles.css`, package manifest, or changes spanning multiple areas |
   | Component | `.github/PULL_REQUEST_TEMPLATE/component.md` | Any new or changed React primitive in `components/` |
   | Token change | `.github/PULL_REQUEST_TEMPLATE/token-change.md` | Any change to `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`, or `tokens/fonts.css` |

   A filled-out, on-template description is **required** — the "PR Template Check" CI job (`.github/workflows/pr-template-check.yml`) fails the PR if the description is empty, is left as the unedited template boilerplate, or has fewer than 20 characters of real content.

6. **Address review feedback** and keep the PR's checklist boxes accurate as the diff changes.

## Component changes (`components/`)

Every component requires four files, kept consistent with each other:

- `<Component>.jsx` — implementation, PascalCase named export
- `<Component>.d.ts` — TypeScript declaration matching the `.jsx` props
- `<Component>.prompt.md` — usage note (one-line description, a `jsx` usage snippet, prop reference — match the format in `components/core/Button.prompt.md`)
- Registration in the relevant `*.card.html` specimen (e.g. `components/core/core.card.html`) via the `window.BloqrDesignSystem_097f61` global, with a `@dsCard` header comment

Existing component exports are never removed or renamed — additive only. Breaking prop/variant changes require a major version bump.

Style with `var(--color-*)`, `var(--space-*)`, `var(--font-*)`, `var(--radius-*)` only — no hardcoded hex/rgb or literal font-family strings. Dark-first only. Icons via Lucide (`components/core/Icon.jsx`); no new hand-drawn SVG icon sets.

Use the `component` PR template for these changes.

## Token changes (`tokens/`)

CSS custom properties are not type-checked across the package boundary — a rename or removal silently breaks any consumer still referencing the old name. Per `AGENTS.md`:

- **Additions** are safe — minor bump.
- **Value changes** to an existing token (name unchanged) are minor or patch depending on visual impact.
- **Renames or removals are breaking** and require a deprecation commit *first* (old + new token both ship, old documented as deprecated in `CHANGELOG.md`) before a later major-bump removal. Never rename/delete in the same PR that introduces the replacement.

Any breaking token change must be checked against all three downstream consumers before merging: `bloqr-landing` (`src/styles/global.css` token aliases), `bloqr-compiler/frontend` (Angular component stylesheets), and `bloqr-compiler/docs`.

Use the `token-change` PR template for these changes.

## Semver discipline

Per `AGENTS.md`:

- New token(s) or component(s), nothing existing removed/renamed → **minor**
- Bug fix / visual refinement, no API or token surface change → **patch**
- Renamed/removed CSS custom property or component export, changed prop signature → **major**, and (for tokens) requires the deprecation commit described above

## Testing

```bash
npm test
```

For component changes, also open the relevant `.card.html` specimen (e.g. `components/core/core.card.html`) directly in a browser to visually verify the new/changed component renders correctly against the dark canvas.

## Brand & enforcement checklist

These apply to every PR, regardless of template:

- No existing CSS custom property deleted or renamed without a deprecation commit + major bump
- No component export removed or renamed
- Dark-first preserved — no white/light-mode background introduced anywhere
- No hardcoded hex/rgb — use `var(--color-*)`, `var(--space-*)`, `var(--font-*)`
- Brand voice/copy follows `guidelines/BLOQR_COPY_PATTERNS.md` — no forbidden vocabulary
- Naming follows README convention: **Bloqr** / **Bloqr AI** product names, **Filter** for this design system — never `BLOQR`/`bloqr`/`BloQr`
- `CHANGELOG.md` updated under `[Unreleased]`
- Mermaid fenced code blocks for any diagram added to a `.md` file — never ASCII art

## Questions

If a change doesn't fit any of the above (e.g. it spans both tokens and components, or touches `ui_kits/`/`templates/`), use the default PR template and describe the change and its downstream impact in detail — reviewers will route accordingly.
