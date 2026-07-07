# Filter

**The design system for Bloqr AI.**

Bloqr is the internet privacy suite you didn't know you needed. **Bloqr AI** is the all-encompassing brand for the suite; the company behind it is **Bloqr Systems**. The product is a vendor-agnostic layer that sits between your internet traffic and the ads, trackers, and malware trying to exploit it — AI-curated filter lists, multi-instance sync, and plain-English rule building, deployed to AdGuard, NextDNS, Pi-hole, uBlock, or Bloqr's own DNS. Bloqr is **infrastructure, not competition** — it makes the tools experts already use portable, intelligent, and consistent across every device.

**Filter** — named for Bloqr's core function and the three-bar mark motif — is the single source of truth for every Bloqr web property. It ships design tokens, components, typography, spacing, and brand guidelines consumed by `bloqr.dev`, `app.bloqr.dev`, and `docs.bloqr.dev`.

> **Naming:** always write **Bloqr** (the product) or **Bloqr AI** (the suite) — never `BLOQR`, `bloqr`, or `BloQr`. The company is **Bloqr Systems**. This design system is **Filter** — the package is `@bloqr/design-system`, the repo is [`Bloqr-Systems/bloqr-design-system`](https://github.com/Bloqr-Systems/bloqr-design-system). The original “AdBlock Compiler” / `@jk-com/adblock-compiler` name (from when this was a solo project) is **legacy** — it's now formalized under the **Bloqr Systems** org: the repo is [`Bloqr-Systems/bloqr-compiler`](https://github.com/Bloqr-Systems/bloqr-compiler) and the package is `@bloqr/compiler`. Don't use “AdBlock Compiler” or the `@jk-com` scope in new work.

This project is the source of truth for every Bloqr web property. Read it before designing; the compiler ships `styles.css`, the token closure, and the `components/` bundle to any consuming project.

---

## Sources

Distilled from the company's brand repository. You don't need access to build with this system, but explore these to go deeper:

- **GitHub — product mono-repo (`Bloqr-Systems/bloqr-compiler`):** the suite's apps live here — `app.bloqr.dev` (Angular 21 + Material) in `/frontend`, the `api.bloqr.dev` backend in `/src`, and the `docs.bloqr.dev` site in `/docs`. The `ui_kits/app/` recreation in this system is built from `/frontend`.
- **GitHub — landing site & brand docs:** [`Bloqr-Systems/bloqr-landing`](https://github.com/Bloqr-Systems/bloqr-landing) — the canonical brand folder (`brand/`) plus the live Astro + Svelte marketing site.
  - `brand/BLOQR_BRAND_HANDOFF.md` — visual design source of truth (color, type, spacing, components).
  - `brand/BLOQR_DESIGN_LANGUAGE.md` — product strategy, the four personas, voice per audience.
  - `brand/BLOQR_COPY_PATTERNS.md` — copy templates, forbidden phrases, error/empty-state copy.
  - `brand/BLOQR_ETHOS.md` — mission, philosophy, the user promise.
- **Other Bloqr repos worth a look:** [`bloqr-proxy`](https://github.com/Bloqr-Systems/bloqr-proxy) (Brave's Rust adblock engine, customized), `bloqr-sdk`, `bloqr-clients`. The TypeScript compiler core is `@bloqr/compiler` (formerly the solo-project `@jk-com/adblock-compiler` on JSR).
- **Domains:** `bloqr.dev` (landing) · `app.bloqr.dev` · `docs.bloqr.dev` · `api.bloqr.dev`.

The font `Space Grotesk` ships as the real self-hosted variable font (`fonts/`). `Inter` and `JetBrains Mono` load from Google Fonts for preview convenience — **self-host these before production** to honor Bloqr's no-external-DNS posture.

---

## For Maintainers of Other Bloqr Repos

**Integration guide:** [`FILTER_INTEGRATION.md`](./FILTER_INTEGRATION.md) — how to consume Filter in `bloqr-landing`, `bloqr-compiler`, and `docs.bloqr.dev`.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import`s only. Consumers link this one file. |
| `tokens/` | `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` (@font-face). |
| `components/core/` | `Button`, `Badge`, `Tag`, `Mark` + `Logo`, `Icon` (Lucide). |
| `components/forms/` | `Input`. |
| `components/surfaces/` | `Card`, `CodeWindow`. |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `ui_kits/landing/` | Interactive recreation of the Bloqr marketing site (`bloqr.dev`). |
| `ui_kits/app/` | Interactive recreation of the `app.bloqr.dev` product UI (dashboard + compiler). |
| `assets/` | Logos (`bloqr-logo.svg`, `bloqr-mark.svg`), favicon, app icons, OG image. |
| `fonts/` | Space Grotesk variable font. |
| `SKILL.md` | Agent Skills manifest — usable as a downloadable Claude Code skill. |
| `package.json` | Package manifest for publishing as `@bloqr/design-system`. |

Components are reachable in card/kit HTML via `window.BloqrDesignSystem_097f61` after loading `_ds_bundle.js`.

---

## Distribution & versioning

**Filter lives in its own repository: [`Bloqr-Systems/bloqr-design-system`](https://github.com/Bloqr-Systems/bloqr-design-system).** It is the single source of truth for the Bloqr visual language across every property, and is consumed as a versioned dependency — never copy-pasted.

**Why standalone (not inside `bloqr-landing`):**
- It serves three products — `bloqr.dev` (Astro/Svelte landing), `app.bloqr.dev` (Angular), and `docs.bloqr.dev` — so it can't belong to any one consumer's repo.
- It ships as a versioned package (`@bloqr/design-system`), letting each product pin a version and upgrade on its own schedule. This mirrors how `@bloqr/compiler`, `bloqr-proxy`, `bloqr-sdk`, and `bloqr-clients` are already split into their own repos.
- Independent CI, changelog, and semver: a breaking token change is a major bump, not a surprise commit landing in the landing-page history.

**What ships to consumers:**
- `styles.css` — the single CSS entry point (link this one file); it `@import`s the full token + `@font-face` closure under `tokens/`.
- `fonts/` — the self-hosted Space Grotesk variable font.
- `components/` — the React primitives (named PascalCase exports), published as `@bloqr/design-system`.
- `assets/` — logos, favicon, icons, OG image.
- `readme.md` + `SKILL.md` + `guidelines/` — the brand + usage guide (also a downloadable Claude Code skill).

**How each product consumes it:**
- **Landing (`bloqr-landing`, Astro/Svelte):** `npm i @bloqr/design-system`, link `styles.css`, import primitives as needed. Drop the local `brand/` copy.
- **App (`bloqr-compiler/frontend`, Angular):** consume `styles.css` + tokens directly; reimplement the primitives as Angular components against the same CSS custom properties (the React `components/` are the visual contract, not a runtime dependency for Angular).
- **Docs (`bloqr-compiler/docs`):** link `styles.css`; use tokens + `guidelines/` specimens.

**Migration checklist:**
1. Create `Bloqr-Systems/bloqr-design-system` and push this project's contents (tokens, components, assets, fonts, guidelines, ui_kits, README, SKILL, `package.json`).
2. Tag `v1.0.0` and publish `@bloqr/design-system`.
3. In `bloqr-landing` and `bloqr-compiler`, replace the vendored `brand/` copy with the dependency; pin the version.
4. Decide where the prose brand docs (`BLOQR_ETHOS.md`, `BLOQR_COPY_PATTERNS.md`, …) live — recommended: fold them into this repo's `guidelines/` so brand voice and visual foundations sit together.

> Tiny-team alternative: a monorepo with `packages/design-system` alongside the apps gets the same independent-versioning benefit with one repo. Given `bloqr-compiler` and `bloqr-landing` are already separate, the standalone repo is the more consistent choice.

---

## Content Fundamentals

Bloqr writes like a senior engineer explaining something to a peer — confident, specific, no hedging. Humor is dry and occasional; it earns its place by landing a point, not filling space.

- **Tone.** Confident without arrogance. Technical without jargon (unless the reader is a developer). Firm analogies. Short declarative sentences.
- **Person.** Second person — "you". What **you** get, not what **we** do. Never "our users".
- **Casing.** Sentence-case headlines (`Point. Click. Done.`). Eyebrows are UPPERCASE, 0.2em tracking, orange. The product name is always `Bloqr` — never `BLOQR`, `bloqr`, or `BloQr`. "Browsing Hygiene" / "Internet Hygiene" are always capitalised.
- **Punctuation.** Headlines use periods, never exclamation points. Em dashes for asides. Line breaks land the rhythm: `Point. Click. / Done.`
- **Analogies > adjectives.** "A consumer VPN is a proxy server with a marketing budget." "Less than one mediocre cocktail." "Running before your next coffee."
- **Specificity.** `48,291 rules deduplicated`, not "thousands of rules". `300+ global PoPs`, not "massive network".
- **Humor, sparingly.** Dry, self-aware, never smarmy. e.g. a success state that reads "No spam — that would be deeply off-brand."
- **Honesty.** Privacy ≠ anonymity, and Bloqr says so: "If anonymity is what you need, Tor is the right tool." Never overstate "no-log" without the architecture to back it.

**Approved mantras (verbatim):** Set it. Bloqr it. Forget it. · Bring your own. Or use ours. · The privacy you didn't know you needed. · Browsing Hygiene.

**Forbidden vocabulary:** leveraging, seamlessly, best-in-class, enterprise-grade, revolutionary, game-changing, world-class, cutting-edge, state-of-the-art, robust, powerful (standalone), "click here", "stay tuned", "coming soon!". See `BLOQR_COPY_PATTERNS.md §9` in the source repo for replacements.

**Personas.** Four audiences drive copy: the Everyday Consumer (warm, zero jargon, never says "DNS"), the Power User (peer-to-peer, transparent about data), the Developer / List Maker (show the API; never imply AI replaces a curator's judgment), and the Vendor / Partner (B2B, additive — never adversarial about AdGuard/NextDNS/Pi-hole/uBlock).

**Emoji.** Don't use them — anywhere, in copy or as icon-tile glyphs; they read as AI-generated boilerplate. Use the `Icon` component (Lucide) for meta-labels and comparison/feature-card icons instead (`plug`, `zap`, `lock`, etc. — see Iconography below). Prefer the three-bar mark, numeric step tokens (`01`/`02`/`03`), or a text dot (`·`) where no icon is warranted.

---

## Visual Foundations

**Motif.** Three descending horizontal bars — a filter / a stack / a signal-strength meter. Longest bar white, middle cyan, shortest orange. This descending rhythm reappears in step numerals (`01 / 02 / 03`), list markers, and the tapered divider glow.

**Palette.** Dark-first, no exceptions. `#070B14` canvas, `#0E1829` surfaces, `#162035` elevated. Orange `#FF5500` is the only hot accent (CTAs, eyebrows, active states). Cyan `#00D4FF` is its cooler counterpart (links, active nav, secondary CTAs, the logo's middle bar). **Never use white or light backgrounds** on a Bloqr property. Semantic colors (success/warning/error) appear only in product UI, never marketing.

**Type.** Space Grotesk for display/UI (400–700). Inter for long-form body. JetBrains Mono for code and numeric labels. Hero headlines `clamp(2.5rem, 6vw, 4.5rem)`, weight 800, tracking `-0.03em`, line-height 1.05. Eyebrows 11px, weight 700, tracking 0.2em, uppercase, orange. Body 1.05rem, line-height 1.65, slate-400.

**Spacing.** 4px base unit. Section padding `96px` top/bottom desktop, `64px` mobile. Container max-width `1200px`, 24px gutters.

**Backgrounds.** No stock photography, no hand-drawn illustration, no repeating patterns. The hero has one treatment: a radial orange glow ellipse (`80% 50% at 50% -10%`, 0.12 alpha) plus a secondary cyan glow (`60% 40% at 80% 60%`, 0.06 alpha) over navy. An optional fractal-noise overlay sits at ~0.025 opacity. Cards are solid `#0E1829` with a 1px `#1E2D40` border — no gradient fills, no glass, no noise on cards. Feature grids use a 2px `#1E2D40` gap that reads as an inset border between cells.

**Animation.** Minimal and fast. `--duration-fast` 150ms (hover), `--duration-base` 250ms (larger state changes). Ease `cubic-bezier(0.16, 1, 0.3, 1)` — a decelerating ease-out that settles quickly. Badge/status dots pulse at 2s. **Never** bounce, spring, or rotate the logo.

**Hover.** Buttons lift `translateY(-1px)` and the glow intensifies from `0.30` to `0.45` alpha. Links: `--fg-2 → --fg-1`. Cards: border `#1E2D40 → #2A4060`, background `#0E1829 → #162035`. Nav links have no underline — just a color lift.

**Press.** Primary buttons darken to `--orange-600` `#CC4400`. No scale-down, no ripple. Honest and immediate.

**Borders.** 1px `#1E2D40` default; `#2A4060` on hover/elevated; `rgba(255,85,0,0.2)` for active/selected (BYO note, highlighted pricing). Borders never use gradients.

**Shadows.** Three tiers of black drop-shadow (`sm/md/lg`, 0.4–0.6 alpha) for depth; two accent glows (orange on primary CTAs, cyan for info). No colored shadows on resting cards.

**Corner radii.** 8px buttons/inputs/small surfaces · 12px cards & code blocks · 16px large panels, hero windows, grid containers · `9999px` pills/badges/dots. Consistent — no mixing 6px with 10px.

**Transparency & blur.** Reserved. Nav uses `rgba(7,11,20,0.85)` + `blur(16px)`. Modal overlays use `rgba(7,11,20,0.6)` + 2px blur. Chips/pills may use `rgba(255,85,0,0.08)` backgrounds. Never glassy cards.

**Dividers.** A single hairline `linear-gradient(90deg, transparent, #FF5500 50%, transparent)` at 0.3 opacity — the "orange divider glow" — separates hero from content. Otherwise plain `1px #1E2D40`.

**Imagery vibe.** Cool, low-key, slightly desaturated — code screenshots, UI mockups, diagrams. When photography is used (rare), it's dark and tech, never warm or lifestyle.

**Card anatomy.** `#0E1829` background, 1px `#1E2D40` border, 12–16px radius, 24–32px padding. Optional 40×40px icon tile top-left (`#162035` bg, `#2A4060` border, single Lucide `Icon`). Title 0.95–1.15rem weight 700; body 0.825–0.9rem `--fg-2`. No shadows at rest.

**Code blocks.** `#0E1829` bg, `#1E2D40` border, 8–12px radius, JetBrains Mono 13px line-height 1.7. Mac traffic-light dots (`#FF5F57`, `#FEBC2E`, `#28C840`). Syntax palette: violet keywords, green strings, cyan types, blue numbers, slate comments, amber functions, orange enum members / HTTP verbs.

---

## Iconography

**[Lucide](https://lucide.dev)** is the single adopted icon set across every surface — marketing (bloqr.dev landing) and product (app.bloqr.dev, dashboards, forms) alike. 2px stroke, rounded joins, sits cleanly on the dark navy, neutral/monochrome (inherits `currentColor` — no colored icon glyphs). No emoji anywhere, including meta-labels (BYO pill), comparison cards, and feature-card icon tiles — use the `Icon` component instead. The live app currently ships Material Symbols; the design-system direction going forward is Lucide, and the `Icon` component wraps it (see `components/core`). Load the UMD build once per page:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

Then `<Icon name="layout-dashboard" />` (kebab-case Lucide names). Common mappings from the app's Material icons: `dashboard → layout-dashboard`, `build → wrench`, `monitoring → activity`, `check_circle → circle-check`, `settings → settings`, `compare_arrows → git-compare`, `account_tree → git-fork`, `vpn_key → key-round`, `admin_panel_settings → shield`, `menu_book → book-open`, `science → flask-conical`, `notifications → bell`.

- **The three-bar mark stays hand-built SVG** (`assets/bloqr-mark.svg`, `assets/bloqr-logo.svg`, and the `Mark`/`Logo` components) — never rasterized, never replaced by a Lucide glyph. Traffic-light dots are CSS circles.
- **Unicode glyphs** still carry inline accents: `→` (CTA suffix), `←` (back), `✓` (feature lists), `✕` (remove), `·` (separator), `▶` (play/deploy), `▾` (dropdown).
- **Don't hand-draw new icon sets in SVG.** One bespoke glyph is fine; anything more is a Lucide name.

**Assets in `assets/`:** `bloqr-logo.svg` (wordmark + mark), `bloqr-mark.svg` (square mark — favicon/avatars), `favicon.svg`, `icon-192.png`, `icon-512.png`, `og-image.png`.

---

*Distilled from `Bloqr-Systems/bloqr-landing` brand v1 (April 2026). Dark-first. Vendor-agnostic. Allergic to marketing buzzwords.*
