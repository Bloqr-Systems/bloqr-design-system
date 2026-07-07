# Social Media Links — Design System Constants

**The canonical source of truth for all Bloqr social media accounts.**

## What This Is

A centralized, type-safe constant file (`constants/social-links.ts`) that defines every Bloqr social media account. Every property — the landing site (`bloqr.dev`), the app (`app.bloqr.dev`), and documentation (`docs.bloqr.dev`) — imports from this single source.

When you need to:
- Link to a social platform
- Display a social media icon
- List all of Bloqr's social presence
- Add a new platform

…import from `@bloqr/design-system/constants` instead of hardcoding URLs.

---

## Usage

### Import in Your Project

```typescript
import { SOCIAL_LINKS, SOCIAL_CATEGORIES, getAllLinks } from '@bloqr/design-system/constants';
```

### Get All Social Links

```typescript
const links = getAllLinks();

links.forEach(link => {
  console.log(`${link.name}: ${link.url}`);
});
```

### Get a Specific Platform

```typescript
import { getLink } from '@bloqr/design-system/constants';

const instaLink = getLink('instagram');
console.log(instaLink.handle);  // @bloqr.ai
console.log(instaLink.icon);    // instagram (Lucide icon name)
```

### Get Links by Category

```typescript
import { getLinksByCategory } from '@bloqr/design-system/constants';

// Get all developer/professional platforms
const devLinks = getLinksByCategory('developer');
// Returns: LinkedIn, GitHub

// Get all social platforms
const socialLinks = getLinksByCategory('social');
// Returns: Instagram, Threads, X, Facebook
```

### Build a Social Links Footer

```typescript
import { getAllLinks } from '@bloqr/design-system/constants';

const SocialFooter = () => {
  return (
    <footer className="social-links">
      {getAllLinks().map(link => (
        <a 
          key={link.url} 
          href={link.url} 
          title={link.name}
          aria-label={`Visit Bloqr on ${link.name}`}
        >
          <Icon name={link.icon} />
        </a>
      ))}
    </footer>
  );
};
```

---

## Current Platforms (Active)

| Platform | Handle | Category | Icon |
|----------|--------|----------|------|
| Instagram | @bloqr.ai | Social | `instagram` |
| Threads | @bloqr.ai | Social | `at-sign` |
| X | @bloqrai | Social | `x` |
| Facebook | bloqr | Social | `facebook` |
| LinkedIn | bloqr-ai | Developer | `linkedin` |
| GitHub | Bloqr-Systems | Developer | `github` |
| YouTube | @BloqrAI | Video | `youtube` |

---

## Adding a New Platform

### Step 1: Uncomment or Add to `SOCIAL_LINKS`

Edit `constants/social-links.ts`:

```typescript
export const SOCIAL_LINKS = {
  // ... existing platforms
  mastodon: {
    name: 'Mastodon',
    url: 'https://mastodon.social/@bloqr',
    handle: '@bloqr@mastodon.social',
    icon: 'at-sign',
    category: 'social',
  },
};
```

### Step 2: Add to `SOCIAL_CATEGORIES` (if new category)

If it's a new category type, update the categories array:

```typescript
export const SOCIAL_CATEGORIES = {
  // ... existing
  fediverse: ['mastodon', 'pixelfed'], // New category
};
```

### Step 3: Test and Deploy

```bash
npm test  # Run type checks to ensure no regressions
npm run build
npm publish  # Ships to npm as @bloqr/design-system
```

All consuming projects (`bloqr-landing`, `bloqr-compiler`, etc.) will pick up the new platform when they upgrade the dependency.

---

## Suggested Platforms to Consider

See `SOCIAL_SUGGESTIONS` in `constants/social-links.ts` for detailed analysis. Here are the top candidates:

### 🟢 High Priority

**Bluesky** (`bluesky`)
- **Why**: Decentralized Twitter alternative; natural fit for privacy-conscious audience
- **Audience**: Tech early-adopters, privacy advocates
- **Effort**: Low-medium (similar to X/Threads)
- **Recommendation**: Add when team has bandwidth for consistent posting

**Mastodon** (`mastodon`)
- **Why**: Decentralized social aligned with Bloqr's privacy values; strong privacy community
- **Audience**: Privacy professionals, open-source contributors, privacy advocates
- **Effort**: Low-medium (federated reach requires less promotion)
- **Recommendation**: Add within next quarter; aligns brand with values

### 🟡 Medium Priority

**TikTok** (`tiktok`)
- **Why**: Fastest-growing platform; reaches Gen Z / younger millennials not on other channels
- **Audience**: Younger audiences, content creators, trend-setters
- **Effort**: Medium-high (different content strategy, editing demands)
- **Recommendation**: Add if targeting younger user growth; requires dedicated creator

**Reddit** (`reddit`)
- **Why**: Direct user engagement in established privacy communities (r/privacy, r/degoogle, r/PrivacyTools)
- **Audience**: Privacy enthusiasts, developers, tech-savvy users
- **Effort**: Medium (community moderation, less polished)
- **Recommendation**: Start with organic community presence (no formal account needed yet)

### 🔵 Lower Priority (Operational Overhead)

**Discord** (`discord`)
- **Why**: Strong tech communities; good for direct customer support/engagement
- **Audience**: Community members seeking support, devs, early adopters
- **Effort**: High (24/7 moderation, channel management)
- **Recommendation**: Wait until customer base / community justifies moderation effort

**Newsletter** (Email)
- **Why**: Owns audience; higher engagement than social algorithms; direct relationship
- **Audience**: Loyal followers, privacy-conscious subscribers
- **Effort**: Medium (consistent publishing schedule)
- **Recommendation**: Consider alongside content strategy (blog expansion)

**Podcast**
- **Why**: Thought leadership; reaches commuters and multitasking audiences
- **Audience**: Tech-interested people, privacy professionals, long-form listeners
- **Effort**: High (recording, editing, consistent schedule)
- **Recommendation**: Consider as brand builds; start guest appearances on others' shows

---

## Platform Categories

### Social (`social`)
Consumer-facing, algorithm-driven platforms. Used for broad reach, brand awareness, trending topics.
- Instagram, Threads, X, Facebook, TikTok, Bluesky, Mastodon

### Developer (`developer`)
Professional, B2B platforms. Used for technical credibility, hiring, partnerships.
- GitHub, LinkedIn

### Video (`video`)
Long or short-form video platforms. Content-heavy, visual-first.
- YouTube, TikTok

### Community (`community`)
User-driven forums, moderated communities. Direct user engagement.
- Discord, Reddit

---

## Content Strategy by Platform

| Platform | Content Type | Posting Frequency | Goal |
|----------|--------------|-------------------|------|
| Instagram | Visual stories, educational graphics | 2–3/week | Brand awareness, education |
| Threads | Short thoughts, announcements | 3–5/week | Reach Instagram followers on new platform |
| X | News, quick takes, RT culture | 1–3/day | Breaking news, thought leadership, community |
| Facebook | Evergreen content, link sharing | 1–2/week | Reach older demographics, sustained engagement |
| LinkedIn | Company news, thought leadership, hires | 1–2/week | B2B, partnerships, talent attraction |
| GitHub | Code releases, documentation, examples | As-needed | Technical credibility, community building |
| YouTube | Tutorials, explainers, demos, talks | 2/month | Deep-dive content, evergreen searchable library |

---

## Decision Matrix: Should We Add a Platform?

Use this to evaluate new platforms:

| Criteria | Weight | Yes | No |
|----------|--------|-----|-----|
| **Reaches target audience?** | 30% | Privacy advocates, tech users | Unrelated demographics |
| **Content pipeline exists?** | 25% | Clear content strategy ready | No idea what to post |
| **Aligns with privacy values?** | 20% | Decentralized, transparent, user-owned | Extractive, opaque, ad-first |
| **Sustainable effort?** | 15% | 1 person can maintain | Requires 24/7 moderation |
| **Current adoption?** | 10% | Growing, high user base | Declining, niche-only |

**Score:** 80+% = Add. 60–80% = Evaluate quarterly. <60% = Skip for now.

---

## Maintenance

- **Review quarterly**: Check which platforms are seeing engagement, which are stale
- **Update URLs**: When Bloqr changes handles or usernames, update here once and deploy
- **Monitor new platforms**: Watch emerging platforms; update `SOCIAL_SUGGESTIONS` as landscape evolves
- **Deprecate gracefully**: If abandoning a platform, comment it out in `SOCIAL_LINKS` (keep for reference) and move to archive section

---

## See Also

- `constants/social-links.ts` — The source file with full implementation
- `BLOQR_DESIGN_LANGUAGE.md` — Brand voice & content principles
- `BLOQR_COPY_PATTERNS.md` — Copy templates for social posts

*Last updated: 2026-07-07 | Managed by: Design System team*
