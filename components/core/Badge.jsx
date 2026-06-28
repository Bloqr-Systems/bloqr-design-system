import React from 'react';

/**
 * Bloqr badge / pill. Uppercase eyebrow-style label with optional
 * pulsing dot or leading icon. Tones: orange, cyan, slate.
 */
export function Badge({ tone = 'orange', dot = false, icon, children, style }) {
  const tones = {
    orange: { bg: 'rgba(255,85,0,0.08)', color: 'var(--orange-500)', border: 'rgba(255,85,0,0.3)' },
    cyan:   { bg: 'rgba(0,212,255,0.08)', color: 'var(--cyan-500)', border: 'rgba(0,212,255,0.3)' },
    slate:  { bg: 'var(--bg-surface)', color: 'var(--fg-2)', border: 'var(--border)' },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 14px',
        borderRadius: 'var(--radius-full)',
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-display)',
        ...style,
      }}
    >
      {dot && (
        <span style={{
          display: 'block', width: 6, height: 6, borderRadius: '50%',
          background: 'currentColor', animation: 'pulse 2s infinite',
        }} />
      )}
      {icon && <span style={{ textTransform: 'none', fontSize: 14 }}>{icon}</span>}
      {children}
    </span>
  );
}
