import React from 'react';

/**
 * Bloqr code window. Navy surface with mac-style traffic lights and an
 * optional filename. Children render in JetBrains Mono.
 */
export function CodeWindow({ filename, children, style }) {
  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 14px', borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--dot-red)' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--dot-yellow)' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--dot-green)' }} />
        {filename && (
          <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>
            {filename}
          </span>
        )}
      </div>
      <pre style={{
        margin: 0, padding: '20px 24px', overflowX: 'auto',
        fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, color: 'var(--fg-1)',
      }}>{children}</pre>
    </div>
  );
}
