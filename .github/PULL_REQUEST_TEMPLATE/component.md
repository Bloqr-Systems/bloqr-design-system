## Component PR

<!-- Use this template for PRs that add or change a React primitive in components/. -->

**Closes** #<!-- issue number -->

**Component(s):** <!-- e.g. components/core/Button -->

---

### What changed?

<!-- New component, new variant/prop, visual refinement, bugfix? One sentence per item is fine. -->

-

### File set

A component is not done until all four files are present and consistent:

- [ ] `<Component>.jsx` — implementation, PascalCase named export
- [ ] `<Component>.d.ts` — TypeScript declaration matching the `.jsx` props
- [ ] `<Component>.prompt.md` — usage note: one-line description, a `jsx` usage snippet, prop reference (matches existing components' format, e.g. `components/core/Button.prompt.md`)
- [ ] Registered in the relevant `*.card.html` specimen (e.g. `components/core/core.card.html`) via `window.BloqrDesignSystem_097f61`, with a `@dsCard` header comment

### API stability

- [ ] **New component** — additive, no existing export touched (minor bump)
- [ ] **New prop/variant on existing component** — additive, existing props/variants unchanged (minor bump)
- [ ] **Breaking** — prop renamed/removed, variant renamed/removed, or default behavior changed (major bump; existing export name itself must still not be removed/renamed — see AGENTS.md)

### Visual & brand checklist

- [ ] Styled entirely with `var(--color-*)`, `var(--space-*)`, `var(--font-*)`, `var(--radius-*)` — no hardcoded hex/rgb or literal font-family strings
- [ ] Dark-first only — renders correctly against `#070B14` canvas / `#0E1829` surfaces; no white/light background
- [ ] Icons use Lucide (`components/core/Icon.jsx`) — no new hand-drawn SVG icon sets (the three-bar mark and `Mark`/`Logo` are the only hand-built SVGs)
- [ ] Hover/press states match motion spec: `150ms` hover, `250ms` larger state changes, ease `cubic-bezier(0.16, 1, 0.3, 1)` — no bounce/spring
- [ ] Accessible: interactive elements are keyboard-reachable, have visible focus states, and use semantic elements (`<button>`/`<a>` as appropriate)

### Screenshots

<!-- Screenshot or recording of the component in the relevant .card.html specimen, against the dark canvas. -->

---

### Testing

```bash
npm test
```

Open the relevant `.card.html` file (e.g. `components/core/core.card.html`) directly in a browser to visually verify the specimen renders correctly with the new/changed component.

- [ ] `CHANGELOG.md` updated under `[Unreleased]`

---

### Notes for reviewers

<!-- Anything the reviewer should know that isn't obvious from the diff? -->
