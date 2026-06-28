import React from 'react';

/**
 * Bloqr primary action button. Orange CTA with glow, outline, or ghost.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--duration-fast) var(--ease-out)',
  };

  const sizes = {
    sm: { padding: '7px 14px', fontSize: 13 },
    md: { padding: '10px 20px', fontSize: 14 },
    lg: { padding: '12px 24px', fontSize: 15 },
  };

  const variants = {
    primary: {
      color: '#fff',
      background: press
        ? 'var(--orange-600)'
        : hover ? 'var(--orange-400)' : 'var(--orange-500)',
      boxShadow: hover ? 'var(--glow-cta-hover)' : 'var(--glow-cta)',
      transform: hover && !press ? 'translateY(-1px)' : 'translateY(0)',
    },
    outline: {
      color: 'var(--fg-1)',
      background: hover ? 'var(--bg-surface)' : 'transparent',
      border: `1px solid ${hover ? 'var(--fg-2)' : 'var(--border-2)'}`,
    },
    ghost: {
      color: hover ? 'var(--fg-1)' : 'var(--fg-2)',
      background: 'transparent',
    },
  };

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
