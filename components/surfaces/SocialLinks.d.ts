import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: string | React.ReactNode;
}

export interface SocialLinksProps extends React.HTMLAttributes<HTMLElement> {
  links?: SocialLink[];
  position?: 'left' | 'right';
}

export function SocialLinks(props: SocialLinksProps): JSX.Element;
