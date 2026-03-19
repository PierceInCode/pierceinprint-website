// Footer.tsx

import { RACHEL_ART_URL, AMAZON_AUTHOR_URL, TWITTER_URL } from '../../data/links';

export default function Footer() {
  return (
    <footer className="bg-ocean-800 text-white/80">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: branding */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold text-white">Matthew & Rachel Pierce</p>
            <p className="text-sm text-white/60 mt-0.5">Sanibel Lighthouse Press</p>
          </div>

          {/* Center: nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation">
            <a href="#books" className="hover:text-white transition-colors">Books</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#connect" className="hover:text-white transition-colors">Connect</a>
            <a
              href={RACHEL_ART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Rachel Pierce Art Gallery
            </a>
          </nav>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @pierceinprint on X (Twitter)"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Amazon */}
            <a
              href={AMAZON_AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Matthew Pierce on Amazon"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.769-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.097v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.128-.819-1.784-.819-1.214 0-2.294.623-2.56 1.917-.054.285-.264.567-.549.582l-3.077-.333c-.258-.059-.547-.265-.472-.66.707-3.716 4.064-4.836 7.072-4.836 1.537 0 3.547.41 4.76 1.574 1.537 1.436 1.391 3.351 1.391 5.436v4.923c0 1.481.613 2.131 1.192 2.932.202.285.247.628-.011.839l-2.391 2.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-white/40">
            © 2026 Matthew & Rachel Pierce · Sanibel Lighthouse Press · Illustrated by{' '}
            <a
              href={RACHEL_ART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              Rachel Pierce
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
