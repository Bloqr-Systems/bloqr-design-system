# AGENTS.md — Bloqr Design System

**The single source of truth for visual brand and design language across all Bloqr web properties.** Read this before working in this repo or implementing any UI in any Bloqr repository.

---

## Repository Purpose

`Bloqr-Systems/bloqr-design-system` publishes `@bloqr/design-system` — the versioned package containing CSS tokens, self-hosted fonts, SVG assets, React primitives, brand guidelines, and copy templates for the entire Bloqr suite.

**All UI-bearing Bloqr repositories must consume this package. No local brand copies are permitted.** This repo supersedes any `brand/`, `theme/`, or similar local directory that previously lived in consuming repos.

Consuming repos:
- [`bloqr-landing`](https://github.com/Bloqr-Systems/bloqr-landing) — Astro/Svelte marketing site (`bloqr.dev`)
- [`bloqr-compiler`](https://github.com/Bloqr-Systems/bloqr-compiler) — Angular 21 app (`app.bloqr.dev`) and docs site (`docs.bloqr.dev`)
- All future Bloqr repositories with a UI surface

---

## What Lives Here

| Path | Contents |
|---|---|
| `styles.css` | Global CSS entry point — consumers link this one file |
| `tokens/colors.css` | Color custom properties (`--color-*`) |
| `tokens/typography.css` | Type scale, font stacks, weight/leading/tracking |
| `tokens/spacing.css` | Spacing scale (4px base unit) |
| `tokens/effects.css` | Shadows, animation durations, border radii |
| `tokens/fonts.css` | `@font-face` declarations for Space Grotesk (self-hosted) |
| `components/` | React primitives: Button, Badge, Tag, Mark, Logo, Icon, Input, Card, CodeWindow |
| `assets/` | `bloqr-logo.svg`, `bloqr-mark.svg`, `favicon.svg`, `icon-192.png`, `icon-512.png`, `og-image.png` |
| `fonts/` | Space Grotesk variable font files |
| `guidelines/` | Brand prose docs + visual specimen cards |
| `ui_kits/` | Interactive HTML recreations of `bloqr.dev` and `app.bloqr.dev` |
| `SKILL.md` | Claude Code agent skill manifest |

---

## Brand Documentation

All brand prose lives in `guidelines/`:

| File | Contents |
|---|---|
| `guidelines/BLOQR_BRAND_HANDOFF.md` | Visual design source of truth — color, type, spacing, components, canonical `:root` block |
| `guidelines/BLOQR_DESIGN_LANGUAGE.md` | Product strategy, four personas, voice per audience, page architecture |
| `guidelines/BLOQR_COPY_PATTERNS.md` | Copy templates, approved mantras, forbidden phrases, error/empty-state copy |
| `guidelines/BLOQR_ETHOS.md` | Mission, philosophy, user promise, origin story |

**Read `guidelines/BLOQR_BRAND_HANDOFF.md` before implementing any Bloqr UI.**

---

## Enforcement Rules for This Repo

- **Never delete or rename existing CSS custom properties** without a deprecation commit and a major version bump.
- **Never remove or rename component exports** — add, don't replace.
- Run `npm test` after any token or component change.
- Semver discipline: new tokens/components → `minor`; breaking renames/removals → `major`; fixes → `patch`.
- Always update `CHANGELOG.md` on substantive changes.
- Tag releases `vX.Y.Z` — CI publishes `@bloqr/design-system` on tag push.
- All diagrams in `.md` files use Mermaid fenced code blocks. Never ASCII art.

---

## Rules for Consuming Repositories

These rules are **MANDATORY** in any Bloqr repo with a UI surface. They are enforced in each consuming repo's `AGENTS.md` and `.github/copilot-instructions.md`.

### Must Do

1. Add `@bloqr/design-system` as a dependency (`npm install @bloqr/design-system` or equivalent).
2. Link `@bloqr/design-system/styles.css` as the global CSS entry point — this one file covers all tokens and `@font-face` declarations.
3. Reference logos, favicons, and OG images from `@bloqr/design-system/assets/`.
4. Reference fonts from `@bloqr/design-system/fonts/` — never load from Google Fonts CDN.
5. Use only CSS custom properties defined in the design system for colors, spacing, and typography.

### Must Not Do

1. **No local brand copies.** Any `brand/`, `theme/`, or directory that mirrors design-system content must be deleted and the reference updated.
2. **No hardcoded hex/rgb values** in component CSS — always `var(--color-*)`.
3. **No hardcoded font-family strings** — always `var(--font-display)`, `var(--font-body)`, `var(--font-mono)`.
4. **No light-mode or white backgrounds** — Bloqr is exclusively dark-first.
5. **No new hand-drawn SVG icon sets** — use Lucide for product UI; emoji meta-icons are acceptable for marketing surfaces.
6. **No external font CDNs** — self-host from this package to honor Bloqr's no-external-DNS posture.

---

## Design Principles (Quick Reference)

- **Dark-first.** `#070B14` canvas · `#0E1829` surfaces · `#162035` elevated.
- **Orange+Cyan accent pair.** `#FF5500` (CTAs, active states, eyebrows) · `#00D4FF` (links, secondary CTAs).
- **Space Grotesk** display/UI (400–700) · **Inter** long-form body · **JetBrains Mono** code/numeric.
- **4px base unit.** Section padding 96px desktop / 64px mobile. Container max-width 1200px.
- **Minimal animation.** 150ms hover · 250ms state changes · no bounce, spring, or logo rotation.
- **Three-bar mark is hand-built SVG** (`assets/bloqr-mark.svg`) — never replaced by a Lucide glyph.

Full specification: `guidelines/BLOQR_BRAND_HANDOFF.md`.
