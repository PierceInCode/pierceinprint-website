// ============================================================
// links.ts — All external links for the Matthew Pierce author site
// Update URLs here whenever they change — no need to touch components.
// ============================================================

export interface SocialLink {
  id: string;
  label: string;
  displayLabel?: string; // Display text if different from label (e.g. "@pierceinprint")
  url: string;
  /** 'amazon' | 'twitter' | 'goodreads' | 'art' | 'email' */
  icon: string;
  /** Show a "Coming Soon" indicator instead of a live link */
  comingSoon?: boolean;
  /** Open in new tab (default true for external links) */
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'amazon-author',
    label: 'Amazon Author Page',
    url: 'https://www.amazon.com/author/matthew-pierce',
    // NOTE: This URL is not yet live — update when the Amazon Author Page is published
    icon: 'amazon',
    external: true,
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    displayLabel: '@pierceinprint',
    url: 'https://x.com/pierceinprint',
    icon: 'twitter',
    external: true,
  },
  {
    id: 'rachel-art',
    label: 'Rachel Pierce Art',
    displayLabel: 'ByRachelPierce.com',
    url: 'https://www.byrachelpierce.com',
    icon: 'art',
    external: true,
  },
  {
    id: 'goodreads',
    label: 'Goodreads',
    // REPLACE WITH ACTUAL GOODREADS URL when profile is created
    url: '#',
    icon: 'goodreads',
    comingSoon: true,
    external: true,
  },
];

/** Rachel Pierce's art website — used in About section and footer */
export const RACHEL_ART_URL = 'https://www.byrachelpierce.com';

/** Amazon author page — used in footer */
export const AMAZON_AUTHOR_URL = 'https://www.amazon.com/author/matthew-pierce';

/** X / Twitter handle URL */
export const TWITTER_URL = 'https://x.com/pierceinprint';
