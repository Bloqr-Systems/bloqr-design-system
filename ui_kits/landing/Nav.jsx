/* Bloqr landing — top navigation. Composes Logo + Button from the design system. */
function KitNav({ active, setActive, onLaunch }) {
  const { Logo, Button } = window.BloqrDesignSystem_097f61;
  const links = [
    { id: 'why', label: 'Why' },
    { id: 'how', label: 'How' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(7, 11, 20, 0.85)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo size={24} />
        <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0, padding: 0, marginLeft: 8 }}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); setActive(l.id); }}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500,
                  color: active === l.id ? 'var(--fg-1)' : 'var(--fg-2)',
                  textDecoration: 'none', cursor: 'pointer', transition: 'color 150ms var(--ease-out)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg-1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = active === l.id ? 'var(--fg-1)' : 'var(--fg-2)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#vpn" style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--cyan-500)', textDecoration: 'none', padding: '6px 10px', fontWeight: 500 }}>VPN Myths</a>
          <Button variant="ghost" size="sm">Docs</Button>
          <Button variant="primary" size="sm" onClick={onLaunch}>Launch App <span aria-hidden>→</span></Button>
        </div>
      </div>
    </nav>
  );
}
Object.assign(window, { KitNav });
