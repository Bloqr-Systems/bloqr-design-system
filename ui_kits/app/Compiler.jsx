/* app.bloqr.dev — Filter List Compiler. Sources + transformations + mode → compiled output. */
(() => {
function CompilerScreen() {
  const { Icon, Button, Badge, CodeWindow, Tag } = window.BloqrDesignSystem_097f61;

  const [sources, setSources] = React.useState([
    { url: 'https://easylist.to/easylist/easylist.txt', type: 'adblock' },
    { url: 'https://someonewhocares.org/hosts/hosts', type: 'hosts' },
  ]);
  const allTransforms = ['Deduplicate', 'Validate', 'Compress', 'RemoveComments', 'ConvertToAscii', 'InvertAllow'];
  const [transforms, setTransforms] = React.useState(['Deduplicate', 'Validate', 'Compress']);
  const [mode, setMode] = React.useState('stream');
  const [state, setState] = React.useState('idle'); // idle | running | done
  const [result, setResult] = React.useState(null);

  const setSrc = (i, patch) => setSources(s => s.map((x, j) => j === i ? { ...x, ...patch } : x));
  const addSrc = () => setSources(s => [...s, { url: '', type: 'adblock' }]);
  const rmSrc = (i) => setSources(s => s.filter((_, j) => j !== i));
  const toggleT = (t) => setTransforms(ts => ts.includes(t) ? ts.filter(x => x !== t) : [...ts, t]);

  const compile = () => {
    setState('running'); setResult(null);
    setTimeout(() => {
      setResult({ rules: 187432, deduped: 48291, ms: mode === 'async' ? 0 : 1240, sources: sources.filter(s => s.url).length });
      setState('done');
    }, 1100);
  };

  const C = { kw: 'var(--code-keyword)', ty: 'var(--code-type)', st: 'var(--code-string)', cm: 'var(--code-comment)', fn: 'var(--code-fn)', ac: 'var(--code-accent)', nu: 'var(--code-number)' };
  const modes = [
    { id: 'stream', label: 'Stream', icon: 'radio', hint: 'Real-time SSE' },
    { id: 'batch', label: 'Batch', icon: 'layers', hint: 'Up to 10 lists' },
    { id: 'async', label: 'Async', icon: 'cloud', hint: 'Queue-based' },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--fg-1)', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Filter List Compiler</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--fg-2)', margin: 0 }}>Compile, merge, and transform adblock filter lists from multiple sources.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 20, alignItems: 'start' }}>
        {/* ── Config ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Sources */}
          <div style={card}>
            <div style={cardHead}>
              <span style={cardTitle}><Icon name="list" size={16} color="var(--orange-500)" /> Sources</span>
              <button onClick={addSrc} style={ghostBtn}><Icon name="plus" size={14} /> Add source</button>
            </div>
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sources.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input value={s.url} onChange={(e) => setSrc(i, { url: e.target.value })} placeholder="https://… filter list URL"
                    style={{ flex: 1, background: 'var(--bg-base)', border: '1px solid var(--border)', borderRadius: 8, padding: '9px 12px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-1)', outline: 'none', minWidth: 0 }} />
                  <select value={s.type} onChange={(e) => setSrc(i, { type: e.target.value })}
                    style={{ background: 'var(--bg-base)', border: '1px solid var(--border)', borderRadius: 8, padding: '9px 10px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', outline: 'none', cursor: 'pointer' }}>
                    <option value="adblock">adblock</option>
                    <option value="hosts">hosts</option>
                  </select>
                  <button onClick={() => rmSrc(i)} title="Remove" style={{ ...iconBtn, color: 'var(--fg-3)' }}><Icon name="x" size={16} /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Transformations */}
          <div style={card}>
            <div style={cardHead}><span style={cardTitle}><Icon name="wand-sparkles" size={16} color="var(--orange-500)" /> Transformations</span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>{transforms.length}/{allTransforms.length}</span></div>
            <div style={{ padding: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {allTransforms.map((t) => {
                const on = transforms.includes(t);
                return (
                  <button key={t} onClick={() => toggleT(t)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 12px', borderRadius: 9999, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
                      background: on ? 'rgba(255,85,0,0.12)' : 'var(--bg-base)', color: on ? 'var(--orange-500)' : 'var(--fg-2)',
                      border: `1px solid ${on ? 'rgba(255,85,0,0.3)' : 'var(--border)'}`, transition: 'all 150ms var(--ease-out)' }}>
                    <Icon name={on ? 'check' : 'plus'} size={13} /> {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode + compile */}
          <div style={card}>
            <div style={cardHead}><span style={cardTitle}><Icon name="settings-2" size={16} color="var(--orange-500)" /> Compilation mode</span></div>
            <div style={{ padding: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 16 }}>
                {modes.map((m) => {
                  const on = mode === m.id;
                  return (
                    <button key={m.id} onClick={() => setMode(m.id)}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 8px', borderRadius: 10, cursor: 'pointer',
                        background: on ? 'rgba(255,85,0,0.06)' : 'var(--bg-base)', border: `1px solid ${on ? 'var(--orange-500)' : 'var(--border)'}`, transition: 'all 150ms var(--ease-out)' }}>
                      <Icon name={m.icon} size={20} color={on ? 'var(--orange-500)' : 'var(--fg-2)'} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: on ? 'var(--fg-1)' : 'var(--fg-2)' }}>{m.label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-3)' }}>{m.hint}</span>
                    </button>
                  );
                })}
              </div>
              <Button variant="primary" onClick={compile} style={{ width: '100%', justifyContent: 'center' }}>
                {state === 'running' ? <React.Fragment><Icon name="loader" size={16} /> Compiling…</React.Fragment> : <React.Fragment><Icon name="play" size={16} /> Compile</React.Fragment>}
              </Button>
            </div>
          </div>
        </div>

        {/* ── Output ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 130 }}>
          {state === 'done' && result && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
              {[
                { k: 'Rules compiled', v: result.rules.toLocaleString() },
                { k: 'Duplicates removed', v: result.deduped.toLocaleString() },
                { k: mode === 'async' ? 'Job' : 'Compile time', v: mode === 'async' ? 'queued' : `${result.ms} ms` },
              ].map((s) => (
                <div key={s.k} style={{ background: 'var(--bg-surface)', padding: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--orange-500)', letterSpacing: '-0.02em' }}>{s.v}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-2)', marginTop: 4 }}>{s.k}</div>
                </div>
              ))}
            </div>
          )}

          {state === 'done' && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}>
              <Badge tone="cyan" dot>{mode === 'async' ? 'Queued' : 'Compiled'}</Badge>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)' }}>{result.sources} sources · {transforms.length} transformations</span>
            </div>
          )}

          <CodeWindow filename={state === 'done' ? 'output.txt' : 'request.ts'}>
            {state === 'idle' && (
              <React.Fragment>
<span style={{color:C.cm}}>// Configure sources on the left, then Compile.</span>{'\n'}
<span style={{color:C.cm}}>// This is the request the UI builds for you —</span>{'\n'}
<span style={{color:C.cm}}>// you never have to write it.</span>{'\n\n'}
<span style={{color:C.kw}}>const</span> <span style={{color:C.fn}}>result</span> = <span style={{color:C.kw}}>await</span> <span style={{color:C.fn}}>compile</span>({'{'}{'\n'}
{'  '}<span style={{color:C.ty}}>mode</span>: <span style={{color:C.st}}>"{mode}"</span>,{'\n'}
{'  '}<span style={{color:C.ty}}>sources</span>: <span style={{color:C.nu}}>{sources.filter(s=>s.url).length}</span>,{'\n'}
{'  '}<span style={{color:C.ty}}>transformations</span>: [{transforms.map((t,i)=>(<span key={t}><span style={{color:C.ac}}>"{t}"</span>{i<transforms.length-1?', ':''}</span>))}]{'\n'}
{'}'});
              </React.Fragment>
            )}
            {state === 'running' && <span style={{color:C.cm}}>// Fetching sources · applying {transforms.length} transformations…</span>}
            {state === 'done' && (
              <React.Fragment>
<span style={{color:C.cm}}>! Title: Bloqr Compiled List</span>{'\n'}
<span style={{color:C.cm}}>! Rules: {result.rules.toLocaleString()} · Deduped: {result.deduped.toLocaleString()}</span>{'\n'}
<span style={{color:C.cm}}>! Updated: {new Date().toISOString().slice(0,10)}</span>{'\n\n'}
<span style={{color:C.ac}}>||</span><span style={{color:C.ty}}>doubleclick.net</span><span style={{color:C.ac}}>^</span>{'\n'}
<span style={{color:C.ac}}>||</span><span style={{color:C.ty}}>googlesyndication.com</span><span style={{color:C.ac}}>^</span>{'\n'}
<span style={{color:C.ac}}>||</span><span style={{color:C.ty}}>scorecardresearch.com</span><span style={{color:C.ac}}>^</span>{'\n'}
<span style={{color:C.ac}}>||</span><span style={{color:C.ty}}>adservice.google.com</span><span style={{color:C.ac}}>^</span>{'\n'}
<span style={{color:C.st}}>0.0.0.0</span> <span style={{color:C.ty}}>analytics.tiktok.com</span>{'\n'}
<span style={{color:C.cm}}>… {(result.rules - 5).toLocaleString()} more rules</span>
              </React.Fragment>
            )}
          </CodeWindow>
        </div>
      </div>
    </div>
  );
}

const card = { background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' };
const cardHead = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--border)' };
const cardTitle = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--fg-1)' };
const ghostBtn = { display: 'inline-flex', alignItems: 'center', gap: 5, background: 'transparent', border: 'none', color: 'var(--cyan-500)', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500, cursor: 'pointer' };
const iconBtn = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer', flexShrink: 0 };
Object.assign(window, { CompilerScreen });
})();
