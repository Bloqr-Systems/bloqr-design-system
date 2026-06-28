/* Bloqr landing — final CTA banner + footer. */
function KitFooter({ onLaunch }) {
  const { Button, Logo } = window.BloqrDesignSystem_097f61;
  return (
    <React.Fragment>
      <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange-500)', margin: '0 0 16px' }}>Ready?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 auto 16px', maxWidth: 640, color: 'var(--fg-1)' }}>The internet you always thought you had.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--fg-2)', maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.65 }}>Set it. Bloqr it. Forget it. No setup, no learning curve, one account — everything handled.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={onLaunch}>Get started free <span aria-hidden>→</span></Button>
            <Button variant="outline">View on GitHub</Button>
          </div>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <Logo size={22} sub="The privacy you didn't know you needed." />
          <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0, padding: 0 }}>
            {['Docs', 'GitHub', 'JSR', 'Privacy', 'VPN Myths'].map((l) => (
              <li key={l}><a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg-2)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-3)'}>{l}</a></li>
            ))}
          </ul>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)' }}>© 2026 Bloqr · GPL-3.0</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
Object.assign(window, { KitFooter });
