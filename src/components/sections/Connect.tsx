// Connect.tsx — Social links and newsletter section

import { useEffect, useRef, useState } from 'react';
import { socialLinks } from '../../data/links';
import SocialButton from '../ui/SocialButton';

type SubscribeStatus = 'idle' | 'loading' | 'success' | 'already_subscribed' | 'error';

const matthewLinks = socialLinks.filter((l) => l.group === 'matthew');
const rachelLinks = socialLinks.filter((l) => l.group === 'rachel');

export default function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscribeStatus>('idle');

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
            Find Matthew & Rachel Online
          </h2>
          <p className="font-sans text-driftwood-500 text-base leading-relaxed">
            Follow along for updates on new books, events, and behind-the-scenes from
            Sanibel Island.
          </p>
        </div>

        {/* Social links — two rows by person */}
        <div className="flex flex-col gap-8 mb-14">
          <div className="reveal reveal-delay-1">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-driftwood-400 text-center mb-4">
              Matthew Pierce
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {matthewLinks.map((link) => (
                <SocialButton key={link.id} link={link} />
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-driftwood-400 text-center mb-4">
              Rachel Pierce
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {rachelLinks.map((link) => (
                <SocialButton key={link.id} link={link} />
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="reveal rounded-2xl bg-ocean-600 text-white p-8 md:p-10 text-center">
          <div className="text-4xl mb-4" aria-hidden="true">🌊</div>
          <h3 className="font-serif text-2xl font-bold mb-2">Join the Newsletter</h3>
          <p className="font-sans text-white/80 text-sm mb-6 leading-relaxed">
            Get updates on new books, author events, and stories from the island — delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <p className="font-sans text-white font-medium">You're on the list! Watch your inbox.</p>
          ) : status === 'already_subscribed' ? (
            <p className="font-sans text-white/80 font-medium">You're already subscribed.</p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus('loading');
                try {
                  const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  });
                  const data = await res.json();
                  if (res.ok && data.status === 'subscribed') {
                    setStatus('success');
                  } else if (res.ok && data.status === 'already_subscribed') {
                    setStatus('already_subscribed');
                  } else {
                    setStatus('error');
                  }
                } catch {
                  setStatus('error');
                }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="
                  flex-1 px-4 py-3 rounded-xl
                  bg-white/15 border border-white/30
                  text-white placeholder-white/50
                  focus:outline-none focus:ring-2 focus:ring-white/50
                  font-sans text-sm
                  disabled:opacity-60
                "
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="
                  px-6 py-3 rounded-xl
                  bg-coral-500 hover:bg-coral-600
                  text-white font-semibold text-sm
                  transition-colors shadow-sm
                  whitespace-nowrap
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="font-sans text-white/70 text-sm mt-3">Something went wrong. Please try again.</p>
          )}
          {status !== 'success' && status !== 'already_subscribed' && (
            <p className="text-xs text-white/40 mt-3">No spam. Unsubscribe anytime.</p>
          )}
        </div>
      </div>
    </section>
  );
}
