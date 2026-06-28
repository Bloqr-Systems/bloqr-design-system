import React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab-case (e.g. "layout-dashboard", "circle-check"). */
  name: string;
  /** Pixel size (width & height). @default 20 */
  size?: number;
  /** Stroke width. @default 2 */
  strokeWidth?: number;
  /** Stroke color. Defaults to currentColor (inherits text color). */
  color?: string;
}

/**
 * Bloqr icon — Lucide wrapper. The Lucide UMD script must be loaded on the page.
 *
 * @startingPoint section="Core" subtitle="Lucide icon wrapper" viewport="700x150"
 */
export function Icon(props: IconProps): JSX.Element;
