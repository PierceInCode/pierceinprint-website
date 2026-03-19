// ============================================================
// links.ts — All external links for the Matthew Pierce author site
// Update URLs here whenever they change — no need to touch components.
// ============================================================

export interface SocialLink {
  id: string;
  label: string;
  displayLabel?: string; // Display text if different from label (e.g. "@pierceinprint")
  url: string;
  /** 'amazon' | 'twitter' | 'goodreads' | 'art' | 'facebook' | 'instagram' | 'email' */
  icon: string;
  /** Which person this link belongs to — used for grouping in the Connect section */
  group?: 'matthew' | 'rachel';
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
    group: 'matthew',
    external: true,
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    displayLabel: '@pierceinprint',
    url: 'https://x.com/pierceinprint',
    icon: 'twitter',
    group: 'matthew',
    external: true,
  },
  {
    id: 'goodreads',
    label: 'Goodreads',
    url: 'https://www.goodreads.com/author/show/69368040.Matthew_Pierce',
    icon: 'goodreads',
    group: 'matthew',
    external: true,
  },
  {
    id: 'rachel-art',
    label: 'Rachel Pierce Art Gallery',
    displayLabel: 'ByRachelPierce.com',
    url: 'https://www.byrachelpierce.com',
    icon: 'art',
    group: 'rachel',
    external: true,
  },
  {
    id: 'rachel-facebook',
    label: 'By Rachel Pierce',
    displayLabel: '@byrachelpierce',
    url: 'https://www.facebook.com/byrachelpierce/',
    icon: 'facebook',
    group: 'rachel',
    external: true,
  },
  {
    id: 'rachel-instagram',
    label: 'By Rachel Pierce',
    displayLabel: '@by_rachelpierce',
    url: 'https://www.instagram.com/by_rachelpierce',
    icon: 'instagram',
    group: 'rachel',
    external: true,
  },
];

/** Rachel Pierce's art website — used in About section and footer */
export const RACHEL_ART_URL = 'https://www.byrachelpierce.com';

/** Amazon author page — used in footer */
export const AMAZON_AUTHOR_URL = 'https://www.amazon.com/author/matthew-pierce';

/** X / Twitter handle URL */
export const TWITTER_URL = 'https://x.com/pierceinprint';
