import React from 'react';

/**
 * Floating sidebar of social media links with icons and tooltips.
 * Positioned fixed on the left side of the viewport.
 * Icons use Lucide and are colored with Bloqr Orange on hover.
 */
export function SocialLinks({
  links = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/bloqr-ai', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/Bloqr-Systems', icon: '🐙' },
    { name: 'Twitter', url: 'https://twitter.com/bloqr_ai', icon: '𝕏' },
    { name: 'Email', url: 'mailto:contact@bloqr.dev', icon: '✉️' },
    { name: 'RSS', url: '/rss.xml', icon: '📡' },
  ],
  position = 'left',
  ...rest
}) {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  const containerStyle = {
    position: 'fixed',
    ...(position === 'left' ? { left: 24 } : { right: 24 }),
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 999,
    pointerEvents: 'auto',
  };

  const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = (isHovered) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 44,
    height: 44,
    borderRadius: 8,
    background: isHovered ? 'var(--bg-surface)' : 'var(--bg-elevated)',
    border: `1px solid ${isHovered ? 'var(--orange)' : 'var(--border)'}`,
    color: 'var(--orange)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 200ms ease-out',
    boxShadow: isHovered ? '0 0 16px rgba(255, 85, 0, 0.2)' : 'none',
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
  });

  const tooltipStyle = (isHovered) => ({
    position: 'absolute',
    left: '100%',
    marginLeft: 12,
    padding: '6px 12px',
    background: 'var(--bg-surface)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--text-1)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
    transition: 'opacity 200ms, transform 200ms',
  });

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  };

  return (
    <aside style={containerStyle} aria-label="Social links" {...rest}>
      <nav>
        <ul style={navStyle}>
          {links.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.url}
                rel={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '' : 'noopener noreferrer'}
                target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '' : '_blank'}
                title={link.name}
                aria-label={link.name}
                style={linkStyle(hoveredIndex === index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <span style={iconStyle}>{link.icon}</span>
                <span style={tooltipStyle(hoveredIndex === index)}>
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
