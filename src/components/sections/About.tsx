// About.tsx — About Matthew and Rachel Pierce

import { useEffect, useRef } from 'react';
import { RACHEL_ART_URL } from '../../data/links';

// PlaceholderImage for author photos — circular crop
function AuthorPhoto({ alt }: { alt: string }) {
  return (
    /*
      REPLACE WITH ACTUAL PHOTO:
      Replace this <div> with:
      <img src="/src/assets/photos/matthew-pierce.jpg" alt={alt} className="w-full h-full object-cover" />
      inside the outer wrapper.
    */
    <div
      role="img"
      aria-label={alt}
      data-placeholder="REPLACE WITH ACTUAL PHOTO"
      className="
        w-full h-full
        bg-gradient-to-br from-ocean-400/30 via-sand-200 to-coral-400/20
        flex flex-col items-center justify-center
        border-2 border-dashed border-ocean-400/20
      "
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-ocean-600/40 mb-1"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
      <span className="text-xs text-ocean-600/40 text-center px-3">{alt}</span>
    </div>
  );
}

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-coral-500 mb-3">
            The Authors
          </p>
          <h2
            id="about-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-ocean-700"
          >
            Behind the Books
          </h2>
        </div>

        {/* Two-column layout: Matthew + Rachel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Matthew Pierce */}
          <div className="flex flex-col items-center text-center reveal reveal-delay-1">
            {/* Photo placeholder */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 flex-shrink-0">
              <AuthorPhoto alt="Matthew Pierce author photo" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-ocean-700 mb-1">Matthew Pierce</h3>
            <p className="font-sans text-sm text-coral-500 font-medium uppercase tracking-wide mb-4">
              Author
            </p>
            <p className="font-sans text-driftwood-600 leading-relaxed text-base">
              Matthew Pierce is a children's book author based in Southwest Florida. He writes picture books
              set on and around Sanibel Island, celebrating the wildlife, coastal landscapes, and adventurous
              spirit of one of Florida's most beloved barrier islands.
            </p>
            <p className="font-sans text-driftwood-600 leading-relaxed text-base mt-3">
              His stories weave real natural history and wildlife facts into adventures that spark curiosity
              about the natural world — with themes of bravery, family, perseverance, and the wild beauty
              that surrounds us.
            </p>
          </div>

          {/* Rachel Pierce */}
          <div className="flex flex-col items-center text-center reveal reveal-delay-2">
            {/* Photo placeholder */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 flex-shrink-0">
              <AuthorPhoto alt="Rachel Pierce illustrator photo" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-ocean-700 mb-1">Rachel Pierce</h3>
            <p className="font-sans text-sm text-mangrove-500 font-medium uppercase tracking-wide mb-4">
              Illustrator & Fine Artist
            </p>
            <p className="font-sans text-driftwood-600 leading-relaxed text-base">
              Rachel Pierce is a fine artist and gallery owner on Sanibel Island, Florida. A former TV news
              anchor turned full-time artist, she creates vibrant coastal paintings in oil, acrylic, and
              watercolor — featuring Florida wildlife, sea turtles, flamingos, shorebirds, and the landscapes
              she calls home.
            </p>
            <p className="font-sans text-driftwood-600 leading-relaxed text-base mt-3">
              Her stunning watercolor illustrations bring Matthew's stories to life with the same depth and
              beauty found in her gallery work.
            </p>

            {/* Visit Rachel's Art CTA */}
            <a
              href={RACHEL_ART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border-2 border-mangrove-500 text-mangrove-600
                hover:bg-mangrove-500 hover:text-white
                font-semibold text-sm transition-all duration-200
              "
            >
              Visit Rachel's Art
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Sanibel Lighthouse Press callout */}
        <div className="reveal mt-16 rounded-2xl bg-ocean-600/5 border border-ocean-600/15 p-8 text-center">
          <p className="font-serif text-xl text-ocean-700 mb-2">Sanibel Lighthouse Press</p>
          <p className="font-sans text-driftwood-500 text-base leading-relaxed max-w-lg mx-auto">
            Matthew and Rachel publish together under Sanibel Lighthouse Press —
            a small independent press dedicated to stories that celebrate the natural wonders of Southwest Florida.
          </p>
        </div>
      </div>
    </section>
  );
}
