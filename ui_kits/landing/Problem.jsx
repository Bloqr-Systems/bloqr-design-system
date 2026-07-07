/* Bloqr landing — the problem: VPN vs Bloqr comparison. */
function KitProblem() {
  const { Icon } = window.BloqrDesignSystem_097f61;
  const bad = [
    '$10–20/month subscription fees',
    'All traffic routed through third-party servers',
    "Closed source — you can't audit what they log",
    'Added latency from centralized server hops',
    'Sells "privacy" while frequently logging behavior',
    'Overkill for the goal of blocking ads and trackers',
  ];
  const good = [
    'Free to start. No subscription to block ads.',
    "Runs at the edge — Cloudflare's 300+ global PoPs",
    'Transparent — every rule we apply is visible to you',
    'Zero tunnel. No rerouting. Your internet gets faster.',
    "We don't log DNS queries or build a profile",
    'Works with AdGuard, NextDNS, Pi-hole, uBlock — and ours',
  ];
  const Col = ({ tag, tagColor, icon, iconBg, title, items, check }) => (
    <div style={{ background: 'var(--bg-surface)', padding: 40, position: 'relative' }}>
      <span style={{ position: 'absolute', top: 20, right: 20, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', color: tagColor, fontWeight: 600 }}>{tag}</span>
      <div style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, background: iconBg }}><Icon name={icon} size={20} /></div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 16px', color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>{title}</h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--fg-2)', lineHeight: 1.5 }}>
            <span aria-hidden style={{ color: check ? 'var(--orange-500)' : 'var(--fg-3)', flexShrink: 0 }}>{check ? '✓' : '—'}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange-500)', margin: '0 0 16px' }}>The problem</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px', color: 'var(--fg-1)' }}>You don't need a tunnel.<br />You need better filters.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--fg-2)', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>A consumer VPN is a proxy server with a marketing budget. For the use case most VPN buyers actually have — blocking ads, trackers, and malware — there's a better tool.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--border)' }}>
          <Col tag="CONSUMER VPN" tagColor="var(--fg-3)" icon="lock" iconBg="rgba(239,68,68,0.12)" title="The VPN approach" items={bad} check={false} />
          <Col tag="BLOQR" tagColor="var(--orange-500)" icon="zap" iconBg="var(--orange-dim)" title="The Bloqr approach" items={good} check={true} />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { KitProblem });
