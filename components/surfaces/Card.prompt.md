The default Bloqr container — solid `#0E1829` surface, 1px border, 12px radius. Optional 40px icon tile top-left. Border and background lift on hover; no resting shadow.

```jsx
<Card icon="⚡" title="Edge-first architecture">
  Runs natively on Cloudflare Workers. 300+ global PoPs, zero cold starts.
</Card>
```

- Pass a string child for the standard muted paragraph, or arbitrary nodes for custom content.
- Set `interactive={false}` for static cards that shouldn't react to hover.
