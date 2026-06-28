Lucide icon for product surfaces (app.bloqr.dev, dashboards, forms). Stroke inherits `currentColor`.

**Requires the Lucide UMD script on the page:**
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

```jsx
<Icon name="layout-dashboard" />
<Icon name="circle-check" size={28} color="var(--orange-500)" />
<Icon name="wrench" size={18} />
```

- `name` is a kebab-case Lucide name. Material-icon → Lucide map lives in the README Iconography section.
- Marketing surfaces keep emoji; product surfaces use this. Never replace the three-bar `Mark` with a Lucide glyph.
