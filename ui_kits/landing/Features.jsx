/* Bloqr landing — feature grid. Composes Card. */
function KitFeatures() {
  const { Card } = window.BloqrDesignSystem_097f61;
  const feats = [
    { icon: '⚡', title: 'Edge-first architecture', body: 'Runs natively on Cloudflare Workers. 300+ global PoPs, zero cold starts, zero server overhead.' },
    { icon: '🤖', title: 'Plain-English rules', body: 'Type "block everything AWS" and Bloqr writes the filter. Natural-language rule building, validated for you.' },
    { icon: '🔄', title: '11 transformations', body: 'Deduplicate, validate, compress, strip comments, convert to ASCII, invert allow rules — composable per source.' },
    { icon: '📡', title: 'Three compilation modes', body: 'Real-time streaming via SSE, batch processing up to 10 lists, or async queue-based compilation for large jobs.' },
    { icon: '📋', title: 'OpenAPI + TypeScript', body: 'Full OpenAPI spec, typed interfaces, and the @bloqr/compiler JSR package. Integrate cleanly in any codebase.' },
    { icon: '🔐', title: "What's never logged", body: "We don't log DNS queries or build behavioral profiles. What isn't stored can't be leaked or subpoenaed." },
  ];
  return (
    <section id="features" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 32, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange-500)', margin: '0 0 16px' }}>Capabilities</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0, color: 'var(--fg-1)' }}>The expertise.<br />Automated.</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', maxWidth: 340, fontSize: '1rem', color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>Everything an expert builds by hand to protect themselves — assembled, maintained, and out of your way.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: 'var(--border)', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
          {feats.map((f, i) => (
            <Card key={i} icon={f.icon} title={f.title} style={{ borderRadius: 0, border: 'none', padding: 32 }}>{f.body}</Card>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { KitFeatures });
