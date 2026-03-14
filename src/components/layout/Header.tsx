// Header.tsx — Sticky navigation header

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Books', href: '#books' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#connect' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-sand-200'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#top"
          className={`font-serif text-lg font-semibold transition-colors ${
            scrolled ? 'text-ocean-700' : 'text-white drop-shadow'
          }`}
        >
          Matthew Pierce
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                font-sans text-sm font-medium transition-colors
                hover:text-coral-500
                ${scrolled ? 'text-driftwood-600' : 'text-white/90 drop-shadow'}
              `}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#books"
            className="
              ml-2 px-4 py-2 rounded-lg text-sm font-semibold
              bg-coral-500 hover:bg-coral-600 text-white
              transition-colors shadow-sm
            "
          >
            Buy the Book
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-driftwood-600' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sand-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-medium text-driftwood-600 hover:text-coral-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#books"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-coral-500 hover:bg-coral-600 text-white text-center transition-colors"
          >
            Buy the Book
          </a>
        </div>
      )}
    </header>
  );
}
