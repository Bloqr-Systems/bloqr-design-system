import React from 'react';

/**
 * Bloqr tag — small mono chip for tech labels and metadata.
 */
export function Tag({ children, style }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.04em',
        background: 'var(--bg-elevated)',
        color: 'var(--fg-3)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--font-mono)',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
