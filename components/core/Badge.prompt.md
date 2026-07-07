A rounded uppercase pill for eyebrows, status labels, and meta-flags. Pulsing dot for "live"/beta states; leading icon used sparingly (one per section, never in headlines).

```jsx
<Badge tone="orange" dot>Set it. Bloqr it. Forget it.</Badge>
<Badge tone="cyan">AI-powered</Badge>
<Badge tone="slate" icon={<Icon name="plug" size={14} />}>Bring your own</Badge>
```

- `tone`: `orange` (default) · `cyan` · `slate`.
- `dot` adds a 2s pulse; `icon` renders non-uppercased before the label. Use the `Icon` component (Lucide), not emoji.
