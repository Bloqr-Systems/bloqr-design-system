import React from 'react';

/**
 * Bloqr text input. Navy field, 1px border that turns orange on focus.
 */
export function Input({ label, hint, error, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500, color: 'var(--fg-2)',
        }}>{label}</span>
      )}
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          background: 'var(--bg-surface)',
          border: `1px solid ${error ? 'var(--error)' : focus ? 'var(--orange-500)' : 'var(--border)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
          fontFamily: 'var(--font-display)',
          fontSize: 14,
          color: 'var(--fg-1)',
          outline: 'none',
          transition: 'border-color var(--duration-fast)',
        }}
        {...rest}
      />
      {(error || hint) && (
        <span style={{ fontSize: 12, color: error ? 'var(--error)' : 'var(--fg-3)' }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
