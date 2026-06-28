/* app.bloqr.dev — Dashboard (route '/'). Status bar, live stats, quick actions, nav grid, settings. */
(() => {
function DashboardScreen({ setRoute }) {
  const { Icon, Button, Badge } = window.BloqrDesignSystem_097f61;
  const [highlighted, setHighlighted] = React.useState(null);
  const [notif, setNotif] = React.useState(true);
  const [autoRefresh, setAutoRefresh] = React.useState(false);

  const stats = [
    { label: 'Total Requests', value: '1,284,902', icon: 'bar-chart-3', color: 'var(--orange-500)' },
    { label: 'Avg Response Time', value: '12.4 ms', icon: 'timer', color: 'var(--cyan-500)' },
    { label: 'Cache Hit Rate', value: '94.2%', icon: 'database', color: 'var(--success)' },
    { label: 'Success Rate', value: '99.8%', icon: 'circle-check', color: 'var(--success)' },
    { label: 'Queue Depth', value: '3', icon: 'layers', color: 'var(--warning)' },
  ];
  const navCards = [
    { label: 'Filter List Compiler', icon: 'wrench', desc: 'Compile, merge, and transform adblock filter lists from multiple sources.', go: 'compiler' },
    { label: 'Performance Metrics', icon: 'activity', desc: 'Real-time compilation performance metrics and system health dashboards.' },
    { label: 'Rule Validation', icon: 'circle-check', desc: 'Validate adblock rules for syntax errors and compatibility issues.' },
    { label: 'API Documentation', icon: 'file-text', desc: 'Interactive REST API documentation with live request/response examples.' },
    { label: 'Storage Admin', icon: 'shield', desc: 'Manage R2 storage objects, D1 database tables, and KV cache entries.', tag: 'Admin' },
    { label: 'Documentation', icon: 'book-open', desc: 'Full developer docs: API reference, guides, and examples.', tag: 'External' },
  ];

  const H = ({ children }) => (
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--fg-1)', margin: '0 0 16px', letterSpacing: '0.02em', textTransform: 'uppercase', opacity: 0.85 }}>{children}</h2>
  );

  return (
    <div style={{ padding: 24, maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--fg-1)', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Bloqr AI Dashboard</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--fg-2)', margin: 0 }}>Manage, compile, and monitor filter lists.</p>
      </div>

      {/* Status bar */}
      <div style={{ ...card, padding: '14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="circle-check" size={20} color="var(--success)" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--fg-1)' }}>System healthy</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '3px 8px', borderRadius: 9999, background: 'rgba(255,85,0,0.15)', color: 'var(--orange-500)' }}>v2.4.0</span>
          </div>
          <button style={{ ...iconBtn, color: 'var(--fg-2)' }} title="Refresh data"><Icon name="refresh-cw" size={18} /></button>
        </div>
      </div>

      {/* Live stats */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--fg-1)', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase', opacity: 0.85 }}>Live Statistics</h2>
          <span title="Your blocklist stats — rules compiled, sources ingested, last update" style={{ color: 'var(--fg-3)', display: 'inline-flex' }}><Icon name="help-circle" size={15} /></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          {stats.map((s) => {
            const on = highlighted === s.label;
            return (
              <button key={s.label} onClick={() => setHighlighted(on ? null : s.label)}
                style={{ ...card, position: 'relative', textAlign: 'center', cursor: 'pointer', padding: '24px 16px', borderColor: on ? 'var(--orange-500)' : 'var(--border)', background: on ? 'rgba(255,85,0,0.06)' : 'var(--bg-surface)', transition: 'transform .15s var(--ease-out), border-color .15s, background .15s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                {on && <span style={{ position: 'absolute', top: 8, right: 8, color: 'var(--orange-500)' }}><Icon name="star" size={16} /></span>}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}><Icon name={s.icon} size={34} color={s.color} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>{s.label}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick actions */}
      <section>
        <H>Quick Actions</H>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button variant="primary" onClick={() => setRoute('compiler')}><Icon name="wrench" size={16} /> Compile Filter List</Button>
          <Button variant="outline" onClick={() => setRoute('compiler')}><Icon name="layers" size={16} /> Batch Compile</Button>
          <Button variant="outline" onClick={() => setRoute('compiler')}><Icon name="cloud" size={16} /> Async Compile</Button>
          <Button variant="outline"><Icon name="flask-conical" size={16} /> API Tester</Button>
        </div>
      </section>

      {/* Navigation grid */}
      <section>
        <H>Navigation</H>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {navCards.map((c) => (
            <div key={c.label} onClick={() => c.go && setRoute(c.go)}
              style={{ ...card, padding: 20, cursor: c.go ? 'pointer' : 'default', transition: 'transform .15s var(--ease-out), border-color .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <Icon name={c.icon} size={26} color="var(--orange-500)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--fg-1)', flex: 1 }}>{c.label}</span>
                {c.tag && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 8px', borderRadius: 9999, background: c.tag === 'Admin' ? 'rgba(255,85,0,0.15)' : 'rgba(0,212,255,0.12)', color: c.tag === 'Admin' ? 'var(--orange-500)' : 'var(--cyan-500)' }}>{c.tag}</span>
                )}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fg-2)', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section>
        <H>Settings</H>
        <div style={{ ...card, padding: '8px 20px' }}>
          <SettingRow icon="bell" title="Browser Notifications" hint="Get notified when async jobs complete" on={notif} onToggle={() => setNotif(v => !v)} />
          <div style={{ height: 1, background: 'var(--border)' }} />
          <SettingRow icon="refresh-cw" title="Auto-Refresh" hint="Automatically refresh metrics every 30s" on={autoRefresh} onToggle={() => setAutoRefresh(v => !v)} />
        </div>
      </section>
    </div>
  );
}

function SettingRow({ icon, title, hint, on, onToggle }) {
  const { Icon } = window.BloqrDesignSystem_097f61;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon name={icon} size={20} color="var(--orange-500)" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--fg-1)', fontSize: 14 }}>{title}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--fg-3)' }}>{hint}</span>
      </div>
      <button onClick={onToggle} role="switch" aria-checked={on} style={{ width: 42, height: 24, borderRadius: 9999, border: 'none', cursor: 'pointer', background: on ? 'var(--orange-500)' : 'var(--bg-elevated)', boxShadow: on ? 'none' : 'inset 0 0 0 1px var(--border-2)', position: 'relative', transition: 'background .2s var(--ease-out)', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left .2s var(--ease-out)' }} />
      </button>
    </div>
  );
}

const card = { background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 12 };
const iconBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer' };
Object.assign(window, { DashboardScreen });
})();
