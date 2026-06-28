import React from 'react';

export interface CardProps {
  /** Optional icon tile (emoji or node) shown top-left. */
  icon?: React.ReactNode;
  /** Card heading. */
  title?: string;
  /** Body — a string renders as muted paragraph, or pass custom nodes. */
  children?: React.ReactNode;
  /** Lift border/background on hover. @default true */
  interactive?: boolean;
  style?: React.CSSProperties;
}

/**
 * Bloqr feature / surface card — navy surface, 1px border, optional icon tile.
 *
 * @startingPoint section="Surfaces" subtitle="Feature & content cards" viewport="700x200"
 */
export function Card(props: CardProps): JSX.Element;
