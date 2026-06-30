---
name: bloqr-design
description: Use this skill to generate well-branded interfaces and assets for Bloqr with Filter, the design system. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping and production.
user-invocable: true
---

**Filter** — the design system for Bloqr AI.

Read the `readme.md` file within this skill, and explore the other available files. The canonical home for Filter is the [`Bloqr-Systems/bloqr-design-system`](https://github.com/Bloqr-Systems/bloqr-design-system) repository, published as `@bloqr/design-system`.

Bloqr is the internet privacy suite you didn't know you needed — dark-first, vendor-agnostic, AI-curated filter lists. The brand voice is direct, witty, and a little humorous: it loves analogies and doesn't take itself too seriously. It is also honest and specific, and avoids marketing buzzwords entirely (see the forbidden-vocabulary list in `readme.md`).

Key files:
- `readme.md` — brand context, content fundamentals, visual foundations, iconography, and the full file index. Start here.
- `styles.css` — the global entry point; `@import`s every token + font file. Link this one file.
- `tokens/` — colors, typography, spacing, effects, and `@font-face` rules.
- `components/` — React primitives (`Button`, `Badge`, `Tag`, `Mark`/`Logo`, `Icon` (Lucide), `Input`, `Card`, `CodeWindow`), each with a `.prompt.md` usage note.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/landing/` & `ui_kits/app/` — interactive recreations of the Bloqr marketing site (`bloqr.dev`) and the product UI (`app.bloqr.dev`), composed from the primitives.
- `assets/`, `fonts/` — logos, icons, OG image, and the Space Grotesk variable font.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Reference the components by reading their `.jsx` and `.prompt.md` and reproducing the styling with the CSS custom properties in `styles.css`. If working on production code, copy the assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
