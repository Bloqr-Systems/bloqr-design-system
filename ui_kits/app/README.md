# App UI kit — app.bloqr.dev

A high-fidelity, interactive recreation of the **Bloqr AI** product UI, rebuilt from the Angular source in [`Bloqr-Systems/bloqr-compiler`](https://github.com/Bloqr-Systems/bloqr-compiler) (`/frontend`). Dark-first, composed from the design-system primitives.

## Files

| File | What |
|---|---|
| `index.html` | Entry point. Loads React + Lucide + the design-system bundle, and switches screens via the tab nav. Open this. |
| `Shell.jsx` | App chrome — sticky glass header with the tri-bar **Bloqr AI** brand, horizontal tab nav (orange active underline), account avatar, footer. |
| `Dashboard.jsx` | The `/` dashboard — system status bar, live-stat grid, quick actions, navigation cards, settings toggles. |
| `Compiler.jsx` | The Filter List Compiler — editable source list, transformation chips, Stream/Batch/Async mode picker, and a live compiled-output panel. |

## How it composes the system

Every screen reads primitives off the compiled bundle: `const { Icon, Button, Badge, CodeWindow, Tag, Mark } = window.BloqrDesignSystem_097f61`. Icons are **Lucide** (the design-system direction for product surfaces) via the `Icon` component — the live app currently ships Material Symbols, mapped to their Lucide equivalents (see the README Iconography table). Each file is wrapped in an IIFE and registers its screen on `window` (`AppShell`, `DashboardScreen`, `CompilerScreen`) so helper style objects stay file-scoped.

## Interaction

- **Tab nav** switches between Dashboard and Compiler (other tabs are styled but inert — those screens aren't in this kit).
- **Dashboard:** stat cards highlight on click; settings toggles flip; quick actions and nav cards route to the Compiler.
- **Compiler:** add/remove/edit sources, toggle transformations, pick a mode, and **Compile** to see a faked compiled result (rule counts + output preview). No real network calls.

## Fidelity notes

The visual language is lifted directly from the app's components (`#0E1829` cards on `#070B14`, 1px `#1E2D40` borders, orange `#FF5500` primary, cyan `#00D4FF` accents, Space Grotesk / Inter / JetBrains Mono, uppercase section headings at 0.85 opacity). The compiler screen reproduces the product's sources → transformations → mode → output flow rather than the exact 1,400-line Angular component.
