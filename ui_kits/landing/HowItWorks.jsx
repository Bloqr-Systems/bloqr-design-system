/* Bloqr landing — how it works. Three steps with mode toggle (UI ↔ code). */
function KitHowItWorks() {
  const { CodeWindow, Button } = window.BloqrDesignSystem_097f61;
  const [mode, setMode] = React.useState('ui');
  const C = { kw: 'var(--code-keyword)', ty: 'var(--code-type)', st: 'var(--code-string)', cm: 'var(--code-comment)', fn: 'var(--code-fn)', ac: 'var(--code-accent)', p: 'var(--fg-1)' };

  const steps = [
    { n: '01', title: 'Say what you want', body: 'Pick from a friendly vendor list, or describe it in plain English. No DNS knowledge required — ever.' },
    { n: '02', title: 'Bloqr builds the list', body: 'AI assembles and maintains your filter list, deduplicates, validates, and keeps it current. You never touch a config file.' },
    { n: '03', title: 'It applies everywhere', body: 'One change pushes to every device and instance in seconds — AdGuard, NextDNS, Pi-hole, or Bloqr DNS.' },
  ];

  return (
    <section id="how" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange-500)', margin: '0 0 16px' }}>How it works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0, color: 'var(--fg-1)' }}>Point. Click. Done.</h2>
          </div>
          <div style={{ display: 'inline-flex', padding: 3, borderRadius: 9999, background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            {['ui', 'code'].map((m) => (
              <button key={m} onClick={() => setMode(m)} style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                padding: '6px 16px', borderRadius: 9999, border: 'none',
                background: mode === m ? 'var(--orange-500)' : 'transparent',
                color: mode === m ? '#fff' : 'var(--fg-2)', transition: 'all 150ms var(--ease-out)',
              }}>{m === 'ui' ? 'Show UI' : 'Show code'}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 28 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ padding: 32, background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9999, background: 'var(--orange-dim)', border: '1px solid rgba(255,85,0,0.3)', color: 'var(--orange-500)', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--fg-1)' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {mode === 'ui' ? (
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Your protection</div>
              {[['Block ads', true], ['Block trackers', true], ['Block malware domains', true], ['Block adult content', false]].map(([label, on], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-1)' }}>{label}</span>
                  <span style={{ width: 38, height: 22, borderRadius: 9999, background: on ? 'var(--orange-500)' : 'var(--bg-elevated)', border: on ? 'none' : '1px solid var(--border-2)', position: 'relative', transition: 'all 200ms var(--ease-out)' }}>
                    <span style={{ position: 'absolute', top: 3, left: on ? 19 : 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 200ms var(--ease-out)' }} />
                  </span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--fg-2)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--fg-1)' }}>You'll never write a line of code.</strong> The UI builds the config for you. But it's here if you want it — flip to "Show code" to see what Bloqr generates.
            </div>
          </div>
        ) : (
          <CodeWindow filename="my-list.config.json">
<span style={{color:C.cm}}>// Generated by the Bloqr UI — you never touch this</span>{'\n'}
{'{'}{'\n'}
{'  '}<span style={{color:C.ty}}>"name"</span>: <span style={{color:C.st}}>"My Privacy List"</span>,{'\n'}
{'  '}<span style={{color:C.ty}}>"sources"</span>: [{'\n'}
{'    '}{'{ '}<span style={{color:C.ty}}>"source"</span>: <span style={{color:C.st}}>"hagezi/pro"</span>, <span style={{color:C.ty}}>"type"</span>: <span style={{color:C.st}}>"adblock"</span> {'}'}{'\n'}
{'  '}],{'\n'}
{'  '}<span style={{color:C.ty}}>"transformations"</span>: [<span style={{color:C.ac}}>"Deduplicate"</span>, <span style={{color:C.ac}}>"Validate"</span>, <span style={{color:C.ac}}>"Compress"</span>]{'\n'}
{'}'}
          </CodeWindow>
        )}
      </div>
    </section>
  );
}
Object.assign(window, { KitHowItWorks });
