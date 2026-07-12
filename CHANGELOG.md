# Changelog

All notable changes to `@bloqr/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- **Operator console design contract:** New `guidelines/OPERATOR_CONSOLE.md` — the Filter design contract for Bloqr's administrative surfaces (the `app.bloqr.dev/admin` user panel and the `admin.bloqr.dev` operator console served by the `bloqr-admin` worker). Covers surface hierarchy, status/role semantics mapped to the semantic palette, the destructive "danger zone" pattern, density/spacing for data-heavy UI, and accessibility — all in terms of existing Filter tokens (no new tokens). Listed in AGENTS.md's brand-documentation table.
- **Social media constants:** New `constants/social-links.ts` exports `SOCIAL_LINKS` (7 active platforms), `SOCIAL_CATEGORIES`, and helper functions (`getLink()`, `getLinksByCategory()`, `getAllLinks()`). Consuming repos (`bloqr-landing`, `bloqr-compiler`) can now import from `@bloqr/design-system/constants` instead of hardcoding URLs. Includes `SOCIAL_SUGGESTIONS` with detailed analysis of platforms to consider (Bluesky, Mastodon, TikTok, Reddit, Discord, Newsletter, Podcast) with evaluation criteria.

### Changed
- **Naming:** The design system is officially named **Filter** (package remains `@bloqr/design-system`). Updated all references in documentation, SKILL.md, and package.json description.
- **Integration guide:** Added `FILTER_INTEGRATION.md` with migration steps for consuming repos (`bloqr-landing`, `bloqr-compiler`, `bloqr-compiler/docs`).
- **Iconography:** Replaced emoji-as-icon glyphs (feature cards, comparison cards, BYO badge) with the `Icon` component (Lucide) across `ui_kits/`, `components/`, and `export/bloqr-app.html`. AGENTS.md and README no longer endorse emoji for marketing surfaces — Lucide is now the single icon set for all surfaces.

## [1.0.0] — 2026-06-28

Initial extraction of the Bloqr AI design system into its own repository
(`Bloqr-Systems/bloqr-design-system`), distilled from `Bloqr-Systems/bloqr-landing`
(`brand/`) and `Bloqr-Systems/bloqr-compiler` (`/frontend`).

### Added
- **Tokens** — `styles.css` entry point + `tokens/` (colors, typography, spacing, effects, `@font-face`). 119 custom properties.
- **Fonts** — self-hosted Space Grotesk variable font. Inter + JetBrains Mono via Google Fonts (self-host before production).
- **Components** — `Button`, `Badge`, `Tag`, `Mark`/`Logo`, `Icon` (Lucide), `Input`, `Card`, `CodeWindow`.
- **Guidelines** — 21 specimen cards across Colors, Type, Spacing, Brand.
- **UI kits** — interactive recreations of `bloqr.dev` (landing) and `app.bloqr.dev` (dashboard + compiler).
- **Templates** — `Bloqr Landing Page` and `Bloqr AI App` starting points.
- **Assets** — logos, favicon, app icons, OG image.
- **SKILL.md** — Claude Code / Agent Skills manifest.
