import React from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `primary` is the orange glow CTA. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** When set, renders an <a> instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Bloqr action button — orange CTA, outline, or ghost.
 *
 * @startingPoint section="Core" subtitle="Primary, outline & ghost buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
