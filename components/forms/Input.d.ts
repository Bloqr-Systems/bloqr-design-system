import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label above the input. */
  label?: string;
  /** Muted helper text below. */
  hint?: string;
  /** Error message — turns the border and message red. */
  error?: string;
}

/**
 * Bloqr text input — navy field, orange focus border, label + hint/error.
 *
 * @startingPoint section="Forms" subtitle="Text input with label & states" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;
