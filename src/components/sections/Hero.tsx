// Hero.tsx — Full-viewport hero section

import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  // Trigger entrance animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="
        relative min-h-screen
        flex flex-col items-center justify-center
        text-center px-6
        overflow-hidden
      "
      aria-label="Hero"
    >
      {/* Background gradient — coastal ocean/sand tones */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(160deg, #153a52 0%, #2A6F97 40%, #4a9ab8 65%, #74B3CE 85%, #F5EDD6 100%)',
        }}
      />

      {/* Subtle wave decoration at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 -z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 40C240 10 480 70 720 40C960 10 1200 70 1440 40V80H0V40Z"
            fill="#fdf9f0"
            fillOpacity="0.6"
          />
          <path
            d="M0 55C240 25 480 85 720 55C960 25 1200 85 1440 55V80H0V55Z"
            fill="#fdf9f0"
          />
        </svg>
      </div>

      {/*
        HERO BACKGROUND IMAGE placeholder:
        To add a background photo, replace the gradient above with:
        <img
          src="/src/assets/hero-background.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        and add a dark overlay: <div className="absolute inset-0 bg-ocean-900/50 -z-10" />
      */}

      {/* Content */}
      <div
        className={`max-w-2xl transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Eyebrow */}
        <p
          className={`
            text-sky-200 font-sans text-sm font-medium tracking-widest uppercase mb-4
            transition-all duration-700 delay-100 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Children's Books · Sanibel Island, Florida
        </p>

        {/* Author Name */}
        <h1
          className={`
            font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-4
            transition-all duration-700 delay-200 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Matthew & Rachel Pierce
        </h1>

        {/* Tagline */}
        <p
          className={`
            font-serif text-xl md:text-2xl text-sky-100/90 italic mb-8
            transition-all duration-700 delay-300 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Children's book authors. Sanibel Island, Florida.
        </p>

        {/* Welcome paragraph */}
        <p
          className={`
            font-sans text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-lg mx-auto
            transition-all duration-700 delay-400 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Stories of flamingos, sea turtles, and the wild beauty of Southwest Florida, 
          where bravery blooms in mangrove forests and every creature has something to teach us.
        </p>

        {/* CTA Buttons */}
        <div
          className={`
            flex flex-col sm:flex-row gap-4 justify-center
            transition-all duration-700 delay-500 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <a
            href="#books"
            className="
              px-8 py-3.5 rounded-xl font-semibold text-base
              bg-coral-500 hover:bg-coral-600 text-white
              shadow-lg hover:shadow-xl
              transition-all duration-200
            "
          >
            Explore the Books
          </a>
          <a
            href="#about"
            className="
              px-8 py-3.5 rounded-xl font-semibold text-base
              bg-white/20 hover:bg-white/30 text-white
              border border-white/30
              backdrop-blur-sm
              transition-all duration-200
            "
          >
            Meet the Authors
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-20 left-1/2 -translate-x-1/2
          transition-all duration-700 delay-700
          ${visible ? 'opacity-60' : 'opacity-0'}
        `}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <span className="text-white/70 text-xs font-sans tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
            <path d="M2 5l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
