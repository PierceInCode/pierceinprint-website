// Connect.tsx — Social links and newsletter section

import { useEffect, useRef } from 'react';
import { socialLinks } from '../../data/links';
import SocialButton from '../ui/SocialButton';

export default function Connect() {
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
      id="connect"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 bg-sand-50"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-coral-500 mb-3">
            Stay Connected
          </p>
          <h2
            id="connect-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-ocean-700 mb-4"
          >
            Find Matthew Online
          </h2>
          <p className="font-sans text-driftwood-500 text-base leading-relaxed">
            Follow along for updates on new books, events, and behind-the-scenes from
            Sanibel Island.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3 mb-14">
          {socialLinks.map((link, i) => (
            <div key={link.id} className={`reveal reveal-delay-${i + 1}`}>
              <SocialButton link={link} />
            </div>
          ))}
        </div>

        {/* Newsletter Signup Placeholder */}
        {/*
          TODO: Wire this form to an email service provider (e.g. Mailchimp, Kit, Beehiiv).
          Replace the form action and add the appropriate hidden fields when ready.
        */}
        <div className="reveal rounded-2xl bg-ocean-600 text-white p-8 md:p-10 text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🌊</div>
          <h3 className="font-serif text-2xl font-bold mb-2">Join the Newsletter</h3>
          <p className="font-sans text-white/80 text-sm mb-6 leading-relaxed">
            Get updates on new books, author events, and stories from the island — delivered straight to your inbox.
          </p>

          {/* Newsletter form — not yet wired up */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Replace with actual newsletter integration (Mailchimp, Kit, etc.)
              alert('Newsletter signup coming soon! Follow @pierceinprint on X for updates.');
            }}
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              required
              className="
                flex-1 px-4 py-3 rounded-xl
                bg-white/15 border border-white/30
                text-white placeholder-white/50
                focus:outline-none focus:ring-2 focus:ring-white/50
                font-sans text-sm
              "
            />
            <button
              type="submit"
              className="
                px-6 py-3 rounded-xl
                bg-coral-500 hover:bg-coral-600
                text-white font-semibold text-sm
                transition-colors shadow-sm
                whitespace-nowrap
              "
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/40 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
