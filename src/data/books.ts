// ============================================================
// books.ts — All book data for the Matthew Pierce author site
// To add a new book, append an entry to the `books` array.
// ============================================================

import coverTheLostFlamingo from '../assets/covers/coverTheLostFlamingo.png';
import coverByTheSeaTurtleNest from '../assets/covers/coverByTheSeaTurtleNest.png';

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
  /** Primary buy link (Amazon, publisher store, etc.) */
  amazonLink: string;
  /** Optional separate paperback link if different from amazonLink */
  amazonPaperbackLink?: string;
  /** Alt text for the cover image */
  coverAlt: string;
  /** Imported cover image asset */
  coverImage: string;
  /** Show a badge overlaid on the cover */
  comingSoon?: boolean;
  /** Label for the badge overlaid on the cover */
  comingSoonLabel?: string;
  /** Custom label for the buy button (defaults to "Order on Amazon") */
  buyButtonLabel?: string;
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
    coverImage: coverTheLostFlamingo,
  },
  {
    id: 'by-the-sea-turtles-nest',
    title: 'By the Sea Turtle\'s Nest',
    subtitle: 'A hatchling\'s journey from the nest to the open sea and beyond.',
    author: 'Matthew Pierce',
    illustrator: 'Rachel Pierce',
    publisher: 'Sanibel Lighthouse Press',
    ageRange: '0–4 years',
    pubDate: 'October 2023',
    description:
      'A gentle coastal story celebrating the wonder of sea turtle nesting season on Sanibel Island. Illustrated with beautiful paintings by Rachel Pierce.',
    amazonLink: 'https://www.byrachelpierce.com/online-store/BOOKS-c159385271',
    coverAlt: 'By the Sea Turtle\'s Nest book cover',
    coverImage: coverByTheSeaTurtleNest,
    buyButtonLabel: 'Order at ByRachelPierce.com',
  },
];
