import React from 'react';

/**
 * Bloqr icon — wraps Lucide. Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
 * Renders a <i data-lucide> placeholder and lets Lucide swap in the SVG.
 * Stroke inherits `currentColor`, so set `color` on this element or a parent.
 */
export function Icon({ name, size = 20, strokeWidth = 2, color, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    if (typeof window !== 'undefined' && window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({ attrs: { width: size, height: size, 'stroke-width': strokeWidth } });
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 0, color: color || 'currentColor', ...style }}
      {...rest}
    />
  );
}
