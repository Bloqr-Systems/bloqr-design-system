import React from 'react';

export interface CodeWindowProps {
  /** Filename shown right of the traffic lights. */
  filename?: string;
  /** Code content — pre-formatted, may include syntax-colored spans. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Bloqr code window — traffic lights + filename, JetBrains Mono body. */
export function CodeWindow(props: CodeWindowProps): JSX.Element;
