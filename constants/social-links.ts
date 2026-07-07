/**
 * Social Media Links — Canonical source of truth for all Bloqr social media accounts.
 *
 * This is the single source of truth for Bloqr's social media presence across
 * all properties (bloqr.dev, app.bloqr.dev, docs.bloqr.dev).
 *
 * Usage:
 *   import { SOCIAL_LINKS, SOCIAL_PLATFORMS } from '@bloqr/design-system/constants/social-links'
 *
 * To add a new platform:
 *   1. Add the platform to the SOCIAL_LINKS object below
 *   2. Add corresponding metadata to SOCIAL_PLATFORMS
 *   3. Update the type definitions (SocialPlatform)
 */

/** Individual social platform link */
export interface SocialLink {
  /** Display name of the platform */
  name: string;
  /** Full URL to the Bloqr account */
  url: string;
  /** Lucide icon name for this platform */
  icon: string;
  /** Username/handle (if applicable) — used for sharable handles */
  handle?: string;
  /** Short description or category */
  category: 'social' | 'developer' | 'community' | 'video';
}

/** Type-safe platform keys */
export type SocialPlatform = keyof typeof SOCIAL_LINKS;

/**
 * SOCIAL_LINKS — all Bloqr social media accounts.
 *
 * This object is the canonical source. Every property and integration
 * imports from here; updates propagate everywhere.
 */
export const SOCIAL_LINKS = {
  // ── Social Media Platforms ──────────────────────────────────────────────
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/bloqr.ai',
    handle: '@bloqr.ai',
    icon: 'instagram',
    category: 'social',
  },
  threads: {
    name: 'Threads',
    url: 'https://www.threads.com/@bloqr.ai',
    handle: '@bloqr.ai',
    icon: 'at-sign',
    category: 'social',
  },
  x: {
    name: 'X',
    url: 'https://x.com/bloqrai',
    handle: '@bloqrai',
    icon: 'x',
    category: 'social',
  },
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/bloqr',
    handle: 'bloqr',
    icon: 'facebook',
    category: 'social',
  },
  // ── Professional / Developer Platforms ──────────────────────────────────
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bloqr-ai/',
    handle: 'bloqr-ai',
    icon: 'linkedin',
    category: 'developer',
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/Bloqr-Systems',
    handle: 'Bloqr-Systems',
    icon: 'github',
    category: 'developer',
  },
  // ── Video & Content Platforms ──────────────────────────────────────────
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/@BloqrAI',
    handle: '@BloqrAI',
    icon: 'youtube',
    category: 'video',
  },
  // ── Emerging / Secondary Platforms ──────────────────────────────────────
  // bluesky: {
  //   name: 'Bluesky',
  //   url: 'https://bsky.app/profile/bloqr.ai',
  //   handle: '@bloqr.ai',
  //   icon: 'at-sign',
  //   category: 'social',
  // },
  // mastodon: {
  //   name: 'Mastodon',
  //   url: 'https://mastodon.social/@bloqr',
  //   handle: '@bloqr@mastodon.social',
  //   icon: 'at-sign',
  //   category: 'social',
  // },
  // tiktok: {
  //   name: 'TikTok',
  //   url: 'https://www.tiktok.com/@bloqrai',
  //   handle: '@bloqrai',
  //   icon: 'music',
  //   category: 'social',
  // },
  // reddit: {
  //   name: 'Reddit',
  //   url: 'https://reddit.com/r/bloqr',
  //   handle: 'r/bloqr',
  //   icon: 'arrow-up',
  //   category: 'community',
  // },
  // discord: {
  //   name: 'Discord',
  //   url: 'https://discord.gg/bloqr',
  //   handle: 'bloqr',
  //   icon: 'message-square',
  //   category: 'community',
  // },
} as const;

/**
 * SOCIAL_CATEGORIES — organize platforms by type for display/filtering.
 *
 * This helps consumers group social links by category:
 *   - "social": consumer-facing platforms (Instagram, TikTok, X, Threads, etc.)
 *   - "developer": tech/professional platforms (GitHub, LinkedIn, etc.)
 *   - "video": video platforms (YouTube, TikTok, etc.)
 *   - "community": community/forum platforms (Discord, Reddit, etc.)
 */
export const SOCIAL_CATEGORIES = {
  social: ['instagram', 'threads', 'x', 'facebook', 'bluesky', 'mastodon', 'tiktok'],
  developer: ['github', 'linkedin'],
  video: ['youtube', 'tiktok'],
  community: ['reddit', 'discord'],
} satisfies Record<SocialLink['category'], SocialPlatform[]>;

/**
 * Helper function to get all links for a specific category.
 *
 * @param category - The category to filter by ('social', 'developer', 'video', 'community')
 * @returns Array of social links in that category
 */
export function getLinksByCategory(category: SocialLink['category']): SocialLink[] {
  return SOCIAL_CATEGORIES[category]
    .filter((platform) => platform in SOCIAL_LINKS)
    .map((platform) => SOCIAL_LINKS[platform as SocialPlatform]);
}

/**
 * Helper function to get a single link by platform.
 *
 * @param platform - The platform key
 * @returns The social link object, or undefined if not found
 */
export function getLink(platform: SocialPlatform): SocialLink {
  return SOCIAL_LINKS[platform];
}

/**
 * Helper function to get all active social links (excluding commented-out entries).
 *
 * @returns Array of all available social links
 */
export function getAllLinks(): SocialLink[] {
  return Object.values(SOCIAL_LINKS);
}

/**
 * SOCIAL_SUGGESTIONS — platforms we should consider adding in the future.
 *
 * These are disabled by default (commented out above) but worth revisiting:
 *   - Bluesky: Growing Twitter alternative; good for tech/privacy audience
 *   - Mastodon: Decentralized alternative; aligns with privacy values
 *   - TikTok: High-growth short-form video; reaches younger audiences
 *   - Reddit: Strong privacy/tech community presence (r/privacy, r/degoogle, etc.)
 *   - Discord: Community building; growing for dev/gamer audiences
 *   - Slack (for community): Engagement/support channel (if scaling support)
 *
 * Decision criteria for enabling:
 *   1. Does the platform reach our target audience?
 *   2. Can we maintain consistent, quality content?
 *   3. Does it align with Bloqr's privacy-first values?
 *   4. Is team capacity available to manage it?
 *
 * If enabling, uncomment in SOCIAL_LINKS above and test integration.
 */
export const SOCIAL_SUGGESTIONS = {
  bluesky: {
    name: 'Bluesky',
    reasoning: 'Decentralized Twitter alternative, growing tech/privacy audience. Natural fit for Bloqr values.',
    audience: 'Tech-forward users, early adopters, privacy-conscious individuals',
    contentFit: 'Tech announcements, privacy education, company updates',
    effort: 'Low-medium (similar to X/Threads management)',
  },
  mastodon: {
    name: 'Mastodon',
    reasoning: 'Decentralized social network aligned with privacy principles. Established tech/privacy community.',
    audience: 'Privacy advocates, tech professionals, Tor/degoogle communities',
    contentFit: 'Privacy news, product updates, industry commentary',
    effort: 'Low-medium (independent instance management, federated reach)',
  },
  tiktok: {
    name: 'TikTok',
    reasoning: 'Highest growth rate among social platforms; reaches Gen Z/younger millennial audiences.',
    audience: 'Younger users, Gen Z, content creators',
    contentFit: 'Short privacy explainers, "day in the life" content, trending sounds with privacy angle',
    effort: 'Medium-high (requires different content strategy, shorter-form editing)',
  },
  reddit: {
    name: 'Reddit',
    reasoning: 'Strong privacy/tech communities (r/privacy, r/degoogle, r/PrivacyTools). Direct user engagement.',
    audience: 'Reddit users in privacy/tech subreddits, developers, enthusiasts',
    contentFit: 'AMAs, community engagement, link sharing to blog content',
    effort: 'Medium (requires community moderation, less direct content)',
  },
  discord: {
    name: 'Discord',
    reasoning: 'Growing beyond gaming; strong tech/dev communities. Good for customer support & engagement.',
    audience: 'Users seeking real-time support, community engagement, dev collaboration',
    contentFit: 'Support channel, feature announcements, community discussions',
    effort: 'High (requires moderation, 24/7 presence, channel management)',
  },
  newsletter: {
    name: 'Email Newsletter (Substack / Buttondown)',
    reasoning: 'Direct audience relationship, owns distribution, higher engagement than social algorithms.',
    audience: 'Privacy-conscious subscribers, loyal followers',
    contentFit: 'Curated privacy news, feature updates, longer-form explainers',
    effort: 'Medium (requires consistent publishing schedule)',
  },
  podcast: {
    name: 'Podcast',
    reasoning: 'Growing format; reaches commuters/multitasking audiences. Thought leadership platform.',
    audience: 'Podcast listeners, tech enthusiasts, people interested in long-form discussion',
    contentFit: 'Privacy deep-dives, security interviews, industry news discussion',
    effort: 'High (requires recording, editing, consistent schedule)',
  },
} as const;

export type SocialSuggestion = keyof typeof SOCIAL_SUGGESTIONS;
