import React from 'react';

/**
 * Bloqr surface card. Solid navy surface, 1px border, optional icon tile.
 * Lifts its border on hover. No resting shadow.
 */
export function Card({ icon, title, children, interactive = true, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--bg-elevated)' : 'var(--bg-surface)',
        border: `1px solid ${hover ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 24,
        transition: 'border-color var(--duration-fast), background var(--duration-fast)',
        ...style,
      }}
    >
      {icon && (
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, marginBottom: 16,
          background: 'var(--bg-elevated)', border: '1px solid var(--border-2)',
        }}>{icon}</div>
      )}
      {title && (
        <h3 style={{
          margin: '0 0 6px', fontFamily: 'var(--font-display)',
          fontSize: '0.95rem', fontWeight: 700, color: 'var(--fg-1)',
        }}>{title}</h3>
      )}
      {typeof children === 'string'
        ? <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--fg-2)', lineHeight: 1.6 }}>{children}</p>
        : children}
    </div>
  );
}
