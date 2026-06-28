# Bloqr — Brand & Design Handoff

> **Audience:** AI agents implementing or styling any web property in the Bloqr suite.
> This document is the single source of truth for visual design, branding, color, typography,
> spacing, component patterns, and layout. Apply these values exactly. Do not invent
> alternatives unless explicitly noted as flexible.
>
> Companion documents in `guidelines/` (same repo — `Bloqr-Systems/bloqr-design-system`):
> - `BLOQR_COPY_PATTERNS.md` — copy templates and forbidden phrases
> - `BLOQR_DESIGN_LANGUAGE.md` — product strategy, personas, and voice
> - `BLOQR_ETHOS.md` — mission, philosophy, and user promise
>
> **Implementation note for consuming repos:** the canonical CSS entry point is
> `@bloqr/design-system/styles.css`. Each consuming repo's runtime stylesheet (`src/styles/global.css`
> in bloqr-landing, `styles.scss` in bloqr-compiler frontend) imports or re-aliases tokens from
> this package. When styling a consuming repo, use its runtime variables if they differ in naming.
> Quick mapping for bloqr-landing:
> - `--color-bg` / `--color-surface-0` → `--bg-base`
> - `--color-accent` / primary orange accent → `--orange`
> - `--color-text` / primary foreground text → `--text-1`

---

## 1. Brand Identity

### Product Name

- **Correct:** `Bloqr`
- **Never:** `BLOQR`, `bloqr`, `BloQr`
- Displayed in `Space Grotesk` font weight 700 in all logotype contexts.

### Tagline (canonical)

> The privacy you didn't know you needed.

### Domain

- Primary: `https://bloqr.dev`
- App: `https://app.bloqr.dev`
- Docs: `https://docs.bloqr.dev`
- API: `https://api.bloqr.dev`
- JSR package: `https://jsr.io/@bloqr/compiler`

### Logo

- Source file: `assets/bloqr-logo.svg` in `Bloqr-Systems/bloqr-design-system`
- Package path: `@bloqr/design-system/assets/bloqr-logo.svg`
- Usage: Always use the SVG. Do not rasterize for web use. Minimum display size: 24px height.
- On dark backgrounds (standard): use full-color version.
- Clear space: minimum 1× the logo height on all sides.
- Do not recolor, rotate, stretch, or add drop shadows to the logo mark.

#### Logo Mark — Bar Colors (canonical)

The logo mark consists of three horizontal bars in descending relative width. Their order and colors are fixed:

| Bar | Relative width | Color | Value | Opacity |
|-----|----------------|-------|-------|---------|
| Bar 1 | Longest | White | `#F1F5F9` | 1.0 (full) |
| Bar 2 | Medium | Cyan  | `#00D4FF` | Context-specific; often full in OG/image renders |
| Bar 3 | Shortest | Orange | `#FF5500` | 1.0 (full) |

> **Canonical rule:** preserve the three-bar order, descending proportions, and fixed colors.
> The cyan second bar must appear at this position in all contexts: nav, OG images, favicons.

---

## 2. Color System

### Philosophy

Dark-first. Deep space navy backgrounds. Orange primary accent. Cyan secondary accent.
Never use white or light backgrounds on any Bloqr property — the brand is exclusively dark-mode.

### Background Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-base` | `#070B14` | Page background — the default canvas |
| `--color-bg-surface` | `#0E1829` | Cards, panels, sidebars |
| `--color-bg-elevated` | `#162035` | Hover states, tooltips, code blocks |
| `--color-bg-overlay` | `#1C2A45` | Modals, popovers, dropdowns |

### Primary Accent — Orange

| Token | Hex | Usage |
|---|---|---|
| `--color-orange-500` | `#FF5500` | Primary CTAs, active highlights, section labels |
| `--color-orange-400` | `#FF7033` | Hover state for orange elements |
| `--color-orange-600` | `#CC4400` | Active/pressed state |
| `--color-orange-900` | `#1A0A00` | Orange-tinted surface backgrounds |
| `--color-orange-glow` | `rgba(255, 85, 0, 0.15)` | Glow effects, box-shadow tints |

**Orange glow shadow recipe (CTA buttons):**
```css
box-shadow: 0 0 20px rgba(255, 85, 0, 0.30);
/* hover: */
box-shadow: 0 0 32px rgba(255, 85, 0, 0.45);
```

### Secondary Accent — Cyan

| Token | Hex | Usage |
|---|---|---|
| `--color-cyan-500` | `#00D4FF` | Secondary highlights, links, info states |
| `--color-cyan-400` | `#33DDFF` | Hover state for cyan elements |
| `--color-cyan-900` | `#001829` | Cyan-tinted surface backgrounds |
| `--color-cyan-glow` | `rgba(0, 212, 255, 0.12)` | Glow effects |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#F1F5F9` | Headings, primary body copy |
| `--color-text-secondary` | `#94A3B8` | Subtext, descriptions, captions |
| `--color-text-muted` | `#475569` | Placeholders, disabled states, timestamps |
| `--color-text-inverse` | `#070B14` | Text rendered on orange or light backgrounds |

### Border Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-border` | `#1E2D40` | Default borders |
| `--color-border-subtle` | `#162035` | Very subtle separators, dividers |
| `--color-border-accent` | `#2A4060` | Elevated or hover borders |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#22C55E` | Success states, confirmations |
| `--color-warning` | `#F59E0B` | Warning states |
| `--color-error` | `#EF4444` | Error states, destructive actions |
| `--color-info` | `#00D4FF` | Info states (same as cyan-500) |

### Global Gradient Recipes

**Radial hero glow (used behind hero content):**
```css
background:
  radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 85, 0, 0.12), transparent),
  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(0, 212, 255, 0.06), transparent),
  #070B14;
```

**Orange divider glow line:**
```css
height: 1px;
background: linear-gradient(90deg, transparent, #FF5500 50%, transparent);
opacity: 0.3;
```

---

## 3. Typography

### Font Families

| Role | Font Name | Fallback stack | Package |
|---|---|---|---|
| Display / UI | **Space Grotesk** | `'DM Sans', system-ui, sans-serif` | `@bloqr/design-system/fonts/` |
| Body (long-form) | **Inter** | `'Space Grotesk', system-ui, sans-serif` | `@fontsource/inter` |
| Monospace / Code | **JetBrains Mono** | `'Fira Code', 'Cascadia Code', monospace` | `@fontsource/jetbrains-mono` |

**Self-host all fonts.** Do not load from Google Fonts CDN — it adds an external DNS round-trip
and contradicts Bloqr's privacy-first infrastructure posture.

### Weights Loaded

**Space Grotesk:** 400, 500, 600, 700 (self-hosted via `@bloqr/design-system/fonts/`)
**JetBrains Mono:** 400, 500, 700
**Inter (if used for long-form body):** 400, 500

### CSS Font Tokens

```css
--font-display: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
--font-body:    'Inter', 'Space Grotesk', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
```

### Type Scale

| Token | rem | px |
|---|---|---|
| `--text-xs` | `0.75rem` | 12px |
| `--text-sm` | `0.875rem` | 14px |
| `--text-base` | `1rem` | 16px |
| `--text-lg` | `1.125rem` | 18px |
| `--text-xl` | `1.25rem` | 20px |
| `--text-2xl` | `1.5rem` | 24px |
| `--text-3xl` | `1.875rem` | 30px |
| `--text-4xl` | `2.25rem` | 36px |
| `--text-5xl` | `3rem` | 48px |
| `--text-6xl` | `3.75rem` | 60px |
| `--text-7xl` | `4.5rem` | 72px |

### Typography Patterns (Exact CSS)

**Hero headline:**
```css
font-family: var(--font-display);
font-size: clamp(2.5rem, 6vw, 4.5rem);
font-weight: 800;
letter-spacing: -0.03em;
line-height: 1.05;
color: #F1F5F9;
```

**Section label (eyebrow text above titles):**
```css
font-size: 11px;
font-weight: 700;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #FF5500;
```

**Body / section description:**
```css
font-size: 1.05rem;
line-height: 1.65;
color: #94A3B8;
```

---

## 4. Spacing

| Token | rem | px |
|---|---|---|
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-6` | `1.5rem` | 24px |
| `--space-8` | `2rem` | 32px |
| `--space-12` | `3rem` | 48px |
| `--space-16` | `4rem` | 64px |
| `--space-24` | `6rem` | 96px |

**Section vertical padding:** `96px` top and bottom on desktop; `64px` on mobile.

---

## 5. Layout

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 6. Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | `0.25rem` (4px) |
| `--radius-md` | `0.5rem` (8px) |
| `--radius-lg` | `0.75rem` (12px) |
| `--radius-xl` | `1rem` (16px) |
| `--radius-2xl` | `1.5rem` (24px) |
| `--radius-full` | `9999px` |

---

## 7. Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.4)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.5)` |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.6)` |
| `--shadow-orange` | `0 0 24px rgba(255,85,0,0.15), 0 0 48px rgba(255,85,0,0.15)` |
| `--shadow-cyan` | `0 0 24px rgba(0,212,255,0.12)` |

---

## 8. Animation & Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--duration-fast` | `150ms` |
| `--duration-base` | `250ms` |
| `--duration-slow` | `400ms` |

**Button hover:** `transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1); transform: translateY(-1px);`

---

## 9. Component Patterns

### Buttons

**Primary (orange CTA):**
```css
padding: 10px 20px;
border-radius: 8px;
font-family: var(--font-display);
font-size: 14px;
font-weight: 600;
color: #ffffff;
background: #FF5500;
border: none;
box-shadow: 0 0 20px rgba(255, 85, 0, 0.30);
transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
/* hover: */
background: #FF7033;
box-shadow: 0 0 32px rgba(255, 85, 0, 0.45);
transform: translateY(-1px);
```

**Outline (secondary):**
```css
background: transparent;
color: #F1F5F9;
border: 1px solid #2A3F5A;
/* hover: */
border-color: #94A3B8;
background: #0E1829;
```

### Cards / Feature Tiles

```css
background: #0E1829;
border: 1px solid #1E2D40;
border-radius: 12px;
padding: 24px;
transition: border-color 150ms, background 150ms;
/* hover: */
border-color: #2A4060;
background: #162035;
```

### Navigation Bar

```css
position: fixed;
top: 0; left: 0; right: 0;
z-index: 50;
height: 64px;
background: rgba(7, 11, 20, 0.85);
backdrop-filter: blur(12px);
border-bottom: 1px solid #1E2D40;
```

### Code Blocks

```css
background: #0E1829;
border: 1px solid #1E2D40;
border-radius: 8px;
padding: 20px 24px;
font-family: var(--font-mono);
font-size: 13px;
line-height: 1.6;
color: #F1F5F9;
```

### Badge / Pill

```css
/* orange variant: */
background: rgba(255, 85, 0, 0.12);
color: #FF5500;
border: 1px solid rgba(255, 85, 0, 0.25);
border-radius: 9999px;
padding: 4px 10px;
font-size: 12px;
font-weight: 600;
```

---

## 10. Voice Rules (Summary)

Full detail: `guidelines/BLOQR_DESIGN_LANGUAGE.md` and `guidelines/BLOQR_COPY_PATTERNS.md`.

- Confident without arrogance. Short declarative sentences.
- Specificity: "48,291 rules" not "thousands of rules".
- "You"-focused copy: what you get, not what we do.
- **Never say:** leveraging, seamlessly, best-in-class, enterprise-grade, revolutionary, game-changing.
- **Approved mantras (verbatim):** Set it. Bloqr it. Forget it. · Bring your own. Or use ours. · The privacy you didn't know you needed. · Browsing Hygiene.

---

## 11. Canonical CSS `:root` Block

```css
:root {
  /* BACKGROUNDS */
  --color-bg-base:     #070B14;
  --color-bg-surface:  #0E1829;
  --color-bg-elevated: #162035;
  --color-bg-overlay:  #1C2A45;

  /* ORANGE */
  --color-orange-500:  #FF5500;
  --color-orange-400:  #FF7033;
  --color-orange-600:  #CC4400;
  --color-orange-900:  #1A0A00;
  --color-orange-glow: rgba(255, 85, 0, 0.15);

  /* CYAN */
  --color-cyan-500:    #00D4FF;
  --color-cyan-400:    #33DDFF;
  --color-cyan-900:    #001829;
  --color-cyan-glow:   rgba(0, 212, 255, 0.12);

  /* TEXT */
  --color-text-primary:   #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-muted:     #475569;
  --color-text-inverse:   #070B14;

  /* BORDERS */
  --color-border:        #1E2D40;
  --color-border-subtle: #162035;
  --color-border-accent: #2A4060;

  /* SEMANTIC */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error:   #EF4444;
  --color-info:    #00D4FF;

  /* FONTS */
  --font-display: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  --font-body:    'Inter', 'Space Grotesk', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

  /* TYPE SCALE */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-5xl:  3rem;
  --text-6xl:  3.75rem;
  --text-7xl:  4.5rem;

  /* WEIGHTS */
  --font-regular:   400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;

  /* LEADING */
  --leading-tight:  1.1;
  --leading-snug:   1.25;
  --leading-normal: 1.5;
  --leading-loose:  1.75;

  /* TRACKING */
  --tracking-tight:   -0.02em;
  --tracking-normal:   0;
  --tracking-wide:     0.05em;
  --tracking-wider:    0.1em;
  --tracking-widest:   0.2em;

  /* SPACING */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-5:  1.25rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* RADIUS */
  --radius-sm:   0.25rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1rem;
  --radius-2xl:  1.5rem;
  --radius-full: 9999px;

  /* SHADOWS */
  --shadow-sm:     0 1px 3px rgba(0,0,0,0.4);
  --shadow-md:     0 4px 12px rgba(0,0,0,0.5);
  --shadow-lg:     0 8px 32px rgba(0,0,0,0.6);
  --shadow-orange: 0 0 24px rgba(255,85,0,0.15), 0 0 48px rgba(255,85,0,0.15);
  --shadow-cyan:   0 0 24px rgba(0,212,255,0.12);

  /* ANIMATION */
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.45, 0, 0.55, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;

  /* LAYOUT */
  --max-width-sm:  640px;
  --max-width-md:  768px;
  --max-width-lg:  1024px;
  --max-width-xl:  1280px;
  --max-width-2xl: 1440px;
}
```

---

*Source of truth: `Bloqr-Systems/bloqr-design-system` → `guidelines/BLOQR_BRAND_HANDOFF.md`*
*Maintained by Jayson Knight + Bloqr AI assistant*
