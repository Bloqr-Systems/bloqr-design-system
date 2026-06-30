# Filter — Integration Guide for Bloqr Repositories

**Filter** is the official name for the Bloqr design system. This document provides integration steps for each consuming repository.

---

## Quick Reference

- **Official name:** Filter
- **Package name:** `@bloqr/design-system`
- **Repository:** [`Bloqr-Systems/bloqr-design-system`](https://github.com/Bloqr-Systems/bloqr-design-system)
- **Version:** v1.0.0+

---

## Integration Steps by Repository

### 1. **bloqr-landing** (Astro/Svelte)

**Current state:** Vendored `brand/` folder with local copy of design guidelines.

**Migration:**
1. Remove the local `brand/` folder from `src/`.
2. Install the package:
   ```bash
   npm install @bloqr/design-system
   ```
3. In your layout or global style entry point, import Filter's styles:
   ```html
   <link rel="stylesheet" href="node_modules/@bloqr/design-system/styles.css" />
   ```
   Or in CSS:
   ```css
   @import '@bloqr/design-system/styles.css';
   ```
4. Import React components as needed:
   ```javascript
   import { Button, Card, Badge, Icon } from '@bloqr/design-system';
   ```
5. Self-host fonts from `node_modules/@bloqr/design-system/fonts/` to honor Bloqr's no-external-DNS posture (Google Fonts references must be removed).
6. Update documentation links from local `brand/BLOQR_*.md` to the canonical versions in the Filter repository.

**Benefits:** Centralized design token updates, cleaner monorepo, independent versioning.

---

### 2. **bloqr-compiler** (Angular)

**Current state:** Material Symbols for icons; Material Design Angular components. Brand guidelines vendored in `/frontend/brand/`.

**Migration:**
1. Remove the local `brand/` folder from `/frontend/`.
2. Install Filter as a dev dependency (for tokens and reference only):
   ```bash
   npm install --save-dev @bloqr/design-system
   ```
3. In your Angular component stylesheets, import Filter's tokens:
   ```css
   @import '@bloqr/design-system/styles.css';
   ```
4. Replace Material Symbols with Lucide. Load the UMD build in `index.html`:
   ```html
   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
   ```
5. Migrate Material icon names to Lucide equivalents (see the mapping in Filter's `readme.md`, §Iconography).
6. Reimplement Material Angular components as Angular components against Filter's CSS custom properties. The React primitives in Filter are the visual contract, not a runtime dependency.
7. Self-host fonts from Filter to replace any Google Fonts references.

**Note:** The product UI (`app.bloqr.dev`) is the reference implementation. Angular components should visually match the React primitives.

---

### 3. **bloqr-compiler/docs** (Documentation site)

**Current state:** Likely using vendored brand guidelines or Material Design.

**Migration:**
1. Install Filter:
   ```bash
   npm install @bloqr/design-system
   ```
2. Link Filter's global stylesheet:
   ```html
   <link rel="stylesheet" href="node_modules/@bloqr/design-system/styles.css" />
   ```
3. Import Filter's foundation specimens from `guidelines/` into your docs site for reference (Colors, Type, Spacing, Brand).
4. Use Filter's tokens via CSS custom properties for any custom documentation layouts.
5. Replace local brand documentation with links to the canonical source in Filter.

---

### 4. **Any New Bloqr Repository**

**Setup:**
1. Install Filter:
   ```bash
   npm install @bloqr/design-system
   ```
2. Import styles globally:
   ```css
   @import '@bloqr/design-system/styles.css';
   ```
3. Use React primitives directly, or reimplement as framework-specific components using Filter's CSS custom properties as the contract.
4. Reference `readme.md` in Filter for brand voice, content guidelines, and visual principles.
5. Self-host fonts.

---

## What Filter Ships

| Export | Purpose |
|--------|---------|
| `styles.css` | Global entry point; imports all tokens, `@font-face` rules, and reset. **Link this one file.** |
| `tokens/` | CSS custom properties for colors, typography, spacing, effects. |
| `components/` | React primitives (optional; reimplement as needed per framework). |
| `assets/` | Logos, favicon, OG image. |
| `fonts/` | Space Grotesk variable font (self-host). |
| `guidelines/` | Brand specifications (Colors, Type, Spacing, Brand). |
| `readme.md` | Full design system documentation and brand guidelines. |
| `SKILL.md` | Claude Code skill manifest. |

---

## Versioning & Updates

- Filter uses semantic versioning.
  - **Major bump:** Breaking changes to tokens or component APIs.
  - **Minor bump:** New components or tokens.
  - **Patch bump:** Bug fixes or refinements.
- Each consuming repo should pin a version in `package.json` and upgrade on its own schedule.
- Breaking changes will be documented in Filter's `CHANGELOG.md`.

---

## FAQ

**Q: Do I have to use Filter's React components?**
A: No. React components are optional. The CSS custom properties are the contract. Reimplement components in your framework (Angular, Vue, Svelte, etc.) using the same tokens.

**Q: Can I override Filter's tokens?**
A: Yes. Define your own CSS custom properties after importing `styles.css`. However, this is rare — Filter is designed to work across all Bloqr properties without customization.

**Q: What about Material Design dependencies?**
A: Material Design is being phased out in favor of Filter. Migrate components incrementally; prioritize the product UI (`app.bloqr.dev`) first, then the landing and docs sites.

**Q: How do I report an issue with Filter?**
A: Open an issue on [`Bloqr-Systems/bloqr-design-system`](https://github.com/Bloqr-Systems/bloqr-design-system/issues).

---

*Filter v1.0.0 — Established June 2026.*
