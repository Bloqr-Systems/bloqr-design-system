import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Bloqr mono tag — small chip for tech labels (TypeScript, Pi-hole, …). */
export function Tag(props: TagProps): JSX.Element;
