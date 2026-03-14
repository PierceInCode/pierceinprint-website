// BookCard.tsx — Displays a single book in the Books section

import { useState } from 'react';
import type { Book } from '../../data/books';
import Badge from './Badge';
import PlaceholderImage from './PlaceholderImage';

interface BookCardProps {
  book: Book;
}

const DESCRIPTION_PREVIEW_LENGTH = 220;

export default function BookCard({ book }: BookCardProps) {
  const [expanded, setExpanded] = useState(false);

  const isLongDescription = book.description.length > DESCRIPTION_PREVIEW_LENGTH;
  const displayDescription =
    !isLongDescription || expanded
      ? book.description
      : `${book.description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trim()}…`;

  const amazonIsLive = book.amazonLink && book.amazonLink !== '#';

  return (
    <div className="
      bg-white rounded-2xl shadow-sm border border-sand-200
      overflow-hidden
      flex flex-col
      hover:shadow-lg transition-shadow duration-300
    ">
      {/* Book Cover */}
      <div className="relative p-6 pb-0 flex justify-center">
        {/* Coming Soon badge overlaid on cover */}
        {book.comingSoon && book.comingSoonLabel && (
          <div className="absolute top-8 right-8 z-10">
            <Badge label={book.comingSoonLabel} variant="coral" />
          </div>
        )}
        <div className="w-48 drop-shadow-xl">
          <PlaceholderImage
            alt={book.coverAlt}
            aspectRatio="book-cover"
            src={book.coverImage || undefined}
          />
        </div>
      </div>

      {/* Book Info */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-ocean-700 leading-tight mb-1">
          {book.title}
        </h3>
        {book.subtitle && (
          <p className="text-sm text-driftwood-500 italic mb-3 leading-snug">
            {book.subtitle}
          </p>
        )}

        {/* Metadata row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-driftwood-400 mb-4">
          <span>
            <span className="font-semibold text-driftwood-500">Author</span>: {book.author}
          </span>
          <span>
            <span className="font-semibold text-driftwood-500">Illustrated by</span>: {book.illustrator}
          </span>
          <span>
            <span className="font-semibold text-driftwood-500">Publisher</span>: {book.publisher}
          </span>
          <span>
            <span className="font-semibold text-driftwood-500">Ages</span>: {book.ageRange}
          </span>
          <span>
            <span className="font-semibold text-driftwood-500">Available</span>: {book.pubDate}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-driftwood-600 leading-relaxed flex-1 mb-3">
          {displayDescription}
        </p>
        {isLongDescription && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-ocean-600 hover:text-ocean-700 font-medium self-start mb-4 underline-offset-2 hover:underline transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          {amazonIsLive ? (
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block w-full text-center
                bg-coral-500 hover:bg-coral-600
                text-white font-semibold
                py-3 px-6 rounded-xl
                transition-colors duration-200
                shadow-sm hover:shadow-md
              "
            >
              Order on Amazon
            </a>
          ) : (
            <div className="
              block w-full text-center
              bg-sand-100 border border-sand-200
              text-driftwood-400
              py-3 px-6 rounded-xl
              text-sm font-medium
            ">
              {book.comingSoonLabel ?? 'Coming Soon'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
