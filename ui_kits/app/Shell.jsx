/* app.bloqr.dev — application shell: glass header, tri-bar brand, horizontal tab nav, footer. */
(() => {
function AppShell({ route, setRoute, children }) {
  const { Mark, Icon } = window.BloqrDesignSystem_097f61;
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'compiler', label: 'Compiler' },
    { id: 'performance', label: 'Performance' },
    { id: 'validation', label: 'Validation' },
    { id: 'config-builder', label: 'Config Builder' },
    { id: 'diff', label: 'Diff' },
    { id: 'ast-viewer', label: 'AST Viewer' },
    { id: 'api-docs', label: 'API Docs' },
    { id: 'admin', label: 'Admin' },
  ];
  const externals = [
    { label: 'API Portal', href: 'https://api.bloqr.dev/' },
    { label: 'Docs', href: 'https://docs.bloqr.dev/' },
    { label: 'Bloqr.com', href: 'https://bloqr.dev/' },
  ];
  const live = new Set(['dashboard', 'compiler']);

  return (
    <div style={{ minHeight: '100%', background: 'var(--bg-base)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(7,11,20,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark size={20} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--fg-1)' }}>Bloqr<span style={{ color: 'var(--cyan-500)', marginLeft: 2 }}>AI</span></span>
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)', marginLeft: 4 }}>The privacy you didn't know you needed.</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--fg-2)' }}>
            <button title="Search" style={iconBtn}><Icon name="search" size={18} /></button>
            <button title="Toggle theme" style={iconBtn}><Icon name="moon" size={18} /></button>
            <div title="Account" style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--orange-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>JK</div>
          </div>
        </div>
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 2, overflowX: 'auto' }} aria-label="Main navigation">
          {tabs.map((t) => {
            const active = route === t.id;
            const enabled = live.has(t.id);
            return (
              <a key={t.id} href={`#${t.id}`}
                onClick={(e) => { e.preventDefault(); if (enabled) setRoute(t.id); }}
                title={enabled ? '' : 'Screen not in this kit'}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 13.5, fontWeight: 600, whiteSpace: 'nowrap',
                  padding: '12px 14px', textDecoration: 'none', cursor: enabled ? 'pointer' : 'default',
                  color: active ? 'var(--fg-1)' : enabled ? 'var(--fg-2)' : 'var(--fg-3)',
                  borderBottom: `2px solid ${active ? 'var(--orange-500)' : 'transparent'}`,
                  transition: 'color 150ms var(--ease-out), border-color 150ms var(--ease-out)',
                }}
                onMouseEnter={(e) => { if (!active && enabled) e.currentTarget.style.color = 'var(--fg-1)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = enabled ? 'var(--fg-2)' : 'var(--fg-3)'; }}
              >{t.label}</a>
            );
          })}
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}>
            {externals.map((x) => (
              <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500, color: 'var(--cyan-500)', textDecoration: 'none', padding: '12px 10px', display: 'inline-flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
                {x.label} <Icon name="external-link" size={13} />
              </a>
            ))}
          </span>
        </nav>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)' }}>
          <a href="https://bloqr.dev/" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>Bloqr AI</a> — The privacy you didn't know you needed. — Powered by <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-2)' }}>@bloqr/compiler</span>
        </p>
      </footer>
    </div>
  );
}
const iconBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer' };
Object.assign(window, { AppShell });
})();
