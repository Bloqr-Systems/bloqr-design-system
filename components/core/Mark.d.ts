import React from 'react';

export interface MarkProps {
  /** Mark height in px. @default 28 */
  size?: number;
  style?: React.CSSProperties;
}

export interface LogoProps {
  /** Mark height in px. @default 24 */
  size?: number;
  /** Sub-label under the wordmark. Pass null to hide. @default 'Internet Hygiene · Automated' */
  sub?: string | null;
  style?: React.CSSProperties;
}

/**
 * Bloqr three-bar logo mark (white / cyan / orange, descending).
 *
 * @startingPoint section="Brand" subtitle="Logo mark & full lockup" viewport="700x150"
 */
export function Mark(props: MarkProps): JSX.Element;

/** Full Bloqr lockup: mark + wordmark + sub-label. */
export function Logo(props: LogoProps): JSX.Element;
