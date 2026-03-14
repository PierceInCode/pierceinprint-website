// Books.tsx — Books showcase section

import { useEffect, useRef } from 'react';
import { books } from '../../data/books';
import BookCard from '../ui/BookCard';

export default function Books() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="books"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 bg-sand-50"
      aria-labelledby="books-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-coral-500 mb-3">
            The Books
          </p>
          <h2
            id="books-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-ocean-700 mb-4"
          >
            Stories from the Island
          </h2>
          <p className="font-sans text-driftwood-500 text-lg max-w-xl mx-auto leading-relaxed">
            Picture books celebrating Florida wildlife, coastal adventure, and the wild heart of Sanibel Island.
            Illustrated by{' '}
            <a
              href="https://www.byrachelpierce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-600 hover:text-ocean-700 underline underline-offset-2"
            >
              Rachel Pierce
            </a>
            .
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {books.map((book, i) => (
            <div
              key={book.id}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <p className="reveal text-center text-sm text-driftwood-400 mt-10">
          More adventures are on the way. Follow{' '}
          <a
            href="https://x.com/pierceinprint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-600 hover:text-ocean-700 underline underline-offset-2"
          >
            @pierceinprint
          </a>{' '}
          for updates.
        </p>
      </div>
    </section>
  );
}
