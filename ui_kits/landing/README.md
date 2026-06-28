# Landing UI kit

A high-fidelity recreation of the Bloqr marketing site, built from the design-system primitives. Dark-first, single-page, interactive.

## Files

| File | What |
|---|---|
| `index.html` | Entry point. Loads React + the design-system bundle, composes every section, and wires the "Launch App / Get started" waitlist modal. Open this. |
| `Nav.jsx` | Sticky blurred nav — `Logo` + section links + `Button` CTAs. |
| `Hero.jsx` | Badge, gradient headline ("Internet Hygiene: Automated."), BYO note, CTA row, stat grid. |
| `Problem.jsx` | VPN-vs-Bloqr comparison — two columns, never adversarial about vendors. |
| `HowItWorks.jsx` | Three steps + a UI ↔ code toggle ("you'll never write a line of this"). |
| `Features.jsx` | Six-cell capability grid built from `Card`. |
| `Pricing.jsx` | Three tiers, Pro highlighted. "Less than one mediocre cocktail." |
| `Footer.jsx` | Final CTA banner + footer lockup. |

## How it composes the system

Every section reads primitives off the compiled bundle, e.g. `const { Button, Card, Badge } = window.BloqrDesignSystem_097f61`. Sections register themselves on `window` (`KitNav`, `KitHero`, …) so `index.html` can assemble them. Nothing here re-implements a button or card — it all comes from `components/`.

## Notes

- Copy uses the canonical Bloqr brand (mantras verbatim, vendor-positive, no forbidden phrases). The archived `landing-page.html` in the source repo used the legacy "AdBlock Compiler" naming — not reused here.
- Interaction is cosmetic: the waitlist modal fakes a submit and shows the success state. No real network calls.
