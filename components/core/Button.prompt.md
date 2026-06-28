Bloqr's action button — orange glow CTA, outline, or ghost; use `primary` for the single most important action on a view.

```jsx
<Button variant="primary">Get started free <span aria-hidden>→</span></Button>
<Button variant="outline" size="sm">Read the docs</Button>
<Button variant="ghost" href="#how">See how it works</Button>
```

- `variant`: `primary` (orange, glow shadow, lifts 1px on hover, darkens to `--orange-600` on press) · `outline` (transparent, slate border) · `ghost` (text only).
- `size`: `sm` · `md` (default) · `lg`.
- Pass `href` to render an anchor. Append a `→` span for forward CTAs — never "Click here".
