import React from 'react';

/**
 * Bloqr three-bar logo mark. Descending bars: white, cyan, orange.
 * The cyan middle bar is a fixed brand element in every lockup.
 */
export function Mark({ size = 28, style }) {
  const barH = Math.max(3, Math.round(size * 0.12));
  const gap = Math.max(2, Math.round(size * 0.1));
  const max = size * 0.85;
  return (
    <div
      aria-label="Bloqr"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        justifyContent: 'center',
        height: size,
        ...style,
      }}
    >
      <span style={{ height: barH, width: max, background: 'var(--fg-1)', borderRadius: 2 }} />
      <span style={{ height: barH, width: max * 0.72, background: 'var(--cyan-500)', borderRadius: 2 }} />
      <span style={{ height: barH, width: max * 0.45, background: 'var(--orange-500)', borderRadius: 2 }} />
    </div>
  );
}

/**
 * Full Bloqr lockup: mark + wordmark + optional sub-label.
 */
export function Logo({ size = 24, sub = 'Internet Hygiene · Automated', style }) {
  return (
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', ...style }}>
      <Mark size={size} />
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: size * 0.71, letterSpacing: '-0.01em', color: 'var(--fg-1)',
        }}>Bloqr</div>
        {sub && (
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-3)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3,
          }}>{sub}</div>
        )}
      </div>
    </a>
  );
}
