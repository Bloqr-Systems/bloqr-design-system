# Changelog

All notable changes to `@bloqr/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Changed
- **Naming:** The design system is officially named **Filter** (package remains `@bloqr/design-system`). Updated all references in documentation, SKILL.md, and package.json description.
- **Integration guide:** Added `FILTER_INTEGRATION.md` with migration steps for consuming repos (`bloqr-landing`, `bloqr-compiler`, `bloqr-compiler/docs`).

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
