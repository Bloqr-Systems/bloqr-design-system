/* Bloqr landing — pricing. Three tiers; Pro highlighted. */
function KitPricing({ onLaunch }) {
  const { Button, Badge } = window.BloqrDesignSystem_097f61;
  const tiers = [
    { name: 'Free', price: '$0', cadence: 'forever', desc: 'For one person who just wants it handled.', feats: ['AI-managed flagship list', 'One vendor, one-click setup', 'Single device', 'Bring your own vendor'], cta: 'Start for free', variant: 'outline', highlight: false },
    { name: 'Pro', price: '$4', cadence: '/ month', desc: 'Roughly the price of a mediocre cocktail.', feats: ['Everything in Free', 'Plain-English rule building', 'Multi-instance sync', 'Real-time AI threat lists', 'Export everything, anytime'], cta: 'Get started free', variant: 'primary', highlight: true },
    { name: 'Builder', price: '$0', cadence: 'verified', desc: 'For developers and list makers.', feats: ['@bloqr/compiler library + API', 'Streaming, batch & async modes', 'Publish lists under your name', 'Your sourcing stays private'], cta: 'Read the docs', variant: 'outline', highlight: false },
  ];
  return (
    <section id="pricing" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange-500)', margin: '0 0 16px' }}>Pricing</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px', color: 'var(--fg-1)' }}>Less than one mediocre cocktail.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--fg-2)', maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>No contract you didn't consciously choose. Export everything and leave anytime.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
          {tiers.map((t) => (
            <div key={t.name} style={{
              padding: 32, borderRadius: 16, background: 'var(--bg-surface)',
              border: `1px solid ${t.highlight ? 'rgba(255,85,0,0.4)' : 'var(--border)'}`,
              boxShadow: t.highlight ? 'var(--shadow-orange)' : 'none', position: 'relative',
            }}>
              {t.highlight && <div style={{ position: 'absolute', top: -11, left: 32 }}><Badge tone="orange">Most popular</Badge></div>}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--fg-1)', marginBottom: 12 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--fg-1)' }}>{t.price}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)' }}>{t.cadence}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 20px', minHeight: 38 }}>{t.desc}</p>
              <Button variant={t.variant} size="md" onClick={onLaunch} style={{ width: '100%', justifyContent: 'center', marginBottom: 22 }}>{t.cta}</Button>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.feats.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--fg-2)', lineHeight: 1.4 }}>
                    <span aria-hidden style={{ color: 'var(--orange-500)', flexShrink: 0 }}>✓</span><span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { KitPricing });
