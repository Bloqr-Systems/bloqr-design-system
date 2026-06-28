import React from 'react';

export type BadgeTone = 'orange' | 'cyan' | 'slate';

export interface BadgeProps {
  /** @default 'orange' */
  tone?: BadgeTone;
  /** Show a pulsing status dot. @default false */
  dot?: boolean;
  /** Optional leading icon (emoji or node). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Bloqr pill / badge — uppercase eyebrow label, optional pulsing dot.
 *
 * @startingPoint section="Core" subtitle="Status pills & badges" viewport="700x150"
 */
export function Badge(props: BadgeProps): JSX.Element;
