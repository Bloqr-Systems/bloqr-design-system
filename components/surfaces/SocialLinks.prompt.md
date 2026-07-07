# SocialLinks

A fixed, floating sidebar component that displays social media links with icons and hover tooltips.

## Usage

```jsx
import { SocialLinks } from '@bloqr/design-system';

export function App() {
  return (
    <SocialLinks
      links={[
        { name: 'LinkedIn', url: 'https://linkedin.com/...', icon: '💼' },
        { name: 'GitHub', url: 'https://github.com/...', icon: '🐙' },
        { name: 'Twitter', url: 'https://twitter.com/...', icon: '𝕏' },
      ]}
      position="left"
    />
  );
}
```

## Props

- `links` - Array of social link objects with `name`, `url`, and `icon` properties
- `position` - Positioning: 'left' (default) or 'right'

## Features

- Fixed positioning, always visible while scrolling
- Hover tooltips showing social platform names
- Responsive design (tooltips hidden on mobile)
- Accessibility: proper ARIA labels and keyboard navigation
- Dark/light theme support using CSS variables
- Links open in new tabs (except mailto: and relative URLs)
