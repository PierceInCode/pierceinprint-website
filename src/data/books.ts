// ============================================================
// books.ts — All book data for the Matthew Pierce author site
// To add a new book, append an entry to the `books` array.
// ============================================================

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  illustrator: string;
  publisher: string;
  ageRange: string;
  pubDate: string;
  description: string;
  /** Primary Amazon link (Kindle or paperback) */
  amazonLink: string;
  /** Optional separate paperback link if different from amazonLink */
  amazonPaperbackLink?: string;
  /** Alt text for the cover image */
  coverAlt: string;
  /**
   * Path to the cover image relative to /src/assets/.
   * REPLACE WITH ACTUAL FILE: e.g. '/src/assets/covers/lost-flamingo.jpg'
   * Leave as empty string to show the placeholder.
   */
  coverImage: string;
  /** Show a "Coming Soon" badge on the card */
  comingSoon?: boolean;
  /** Custom label for the Coming Soon badge */
  comingSoonLabel?: string;
}

export const books: Book[] = [
  {
    id: 'the-lost-flamingo',
    title: 'The Lost Flamingo',
    subtitle: 'A Sanibel Island Adventure About Bravery, Family, and Florida\'s Flamingos',
    author: 'Matthew Pierce',
    illustrator: 'Rachel Pierce',
    publisher: 'Sanibel Lighthouse Press',
    ageRange: '4–8 years',
    pubDate: 'Kindle: March 10, 2026 · Paperback: March 31, 2026',
    description:
      'When a fierce storm sweeps across the gulf, one young flamingo is torn from his family and carried far across Florida\'s wild coast to Sanibel Island. Alone at the Sanibel Island Lighthouse, he must find the courage to journey home through mangrove forests, past the famous J.N. "Ding" Darling Wildlife Refuge, and across paths guarded by a lurking bobcat. Along the way, he discovers that asking for help is the bravest thing you can do — as a cast of Florida\'s most remarkable animals guide him on his adventure. Features 15+ real flamingo facts woven into the story, and stunning watercolor paintings of Florida\'s coastal landscapes.',
    amazonLink: 'https://www.amazon.com/Lost-Flamingo-Adventure-Floridas-Flamingos-ebook/dp/B0GRX2CX9K',
    coverAlt: 'The Lost Flamingo book cover',
    // REPLACE WITH ACTUAL IMAGE: place cover file in src/assets/covers/ and update this path
    coverImage: '',
  },
  {
    id: 'by-the-sea-turtles-nest',
    title: 'By the Sea Turtle\'s Nest',
    author: 'Matthew Pierce',
    illustrator: 'Rachel Pierce',
    publisher: 'Sanibel Lighthouse Press',
    ageRange: '4–8 years',
    pubDate: 'Previously published',
    description:
      'A gentle coastal story celebrating the wonder of sea turtle nesting season on Sanibel Island. Illustrated with beautiful watercolor paintings by Rachel Pierce.',
    // REPLACE WITH ACTUAL AMAZON LINK when the book is live on Amazon
    amazonLink: '#',
    coverAlt: 'By the Sea Turtle\'s Nest book cover',
    // REPLACE WITH ACTUAL IMAGE: place cover file in src/assets/covers/ and update this path
    coverImage: '',
    comingSoon: true,
    comingSoonLabel: 'Coming Soon on Amazon',
  },
];
