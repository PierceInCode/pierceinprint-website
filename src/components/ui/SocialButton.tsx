// SocialButton.tsx — Styled link button used in the Connect section

import type { SocialLink } from '../../data/links';

interface SocialButtonProps {
  link: SocialLink;
  className?: string;
}

// Simple inline SVG icons — no icon library dependency needed
function Icon({ name }: { name: string }) {
  switch (name) {
    case 'amazon':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.769-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.097v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.128-.819-1.784-.819-1.214 0-2.294.623-2.56 1.917-.054.285-.264.567-.549.582l-3.077-.333c-.258-.059-.547-.265-.472-.66.707-3.716 4.064-4.836 7.072-4.836 1.537 0 3.547.41 4.76 1.574 1.537 1.436 1.391 3.351 1.391 5.436v4.923c0 1.481.613 2.131 1.192 2.932.202.285.247.628-.011.839l-2.391 2.07z"/>
          <path d="M20.945 17.118c-.422-.54-.873-1.006-1.276-1.429-.394-.413-.629-.636-.629-1.001V8.616c0-2.169.155-4.16-1.453-5.651C16.296 1.741 14.2 1.2 12.5 1.2c-3.45 0-7.293 1.292-8.107 5.461-.086.453.25.695.558.762l3.6.389c.339-.017.584-.352.638-.689.308-1.488 1.567-2.206 2.978-2.206.763 0 1.629.281 2.082.978.53.788.46 1.858.46 2.772v.5c-1.522.17-3.512.28-5.006.898-1.727.703-2.936 2.144-2.936 4.231 0 2.694 1.694 4.039 3.874 4.039 1.841 0 2.847-.432 4.271-1.88.47.681.624 1.01 1.479 1.731.193.154.47.142.643-.032l.016.016 2.283-1.979c.194-.168.166-.432-.011-.675z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'goodreads':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.828H8.3c.207 2.496 2.05 3.405 4.25 3.405 2.83 0 4.353-1.538 4.353-4.353v-1.368h-.044c-.759 1.496-2.274 2.454-4.395 2.454-3.608 0-6.274-2.891-6.274-6.917 0-4.289 2.5-7.066 6.34-7.066 2.2 0 3.717 1.056 4.419 2.552h.045V4.5H20v12.995c0 4.285-2.614 6.5-8.57 6.5zM12 6.1c-2.5 0-3.995 1.96-3.995 4.93 0 2.908 1.413 4.818 3.934 4.818 2.653 0 4.025-1.993 4.025-4.9C15.964 8.136 14.507 6.1 12 6.1z"/>
        </svg>
      );
    case 'art':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      );
  }
}

export default function SocialButton({ link, className = '' }: SocialButtonProps) {
  const displayText = link.displayLabel ?? link.label;

  if (link.comingSoon) {
    return (
      <div
        className={`
          flex items-center gap-3 px-6 py-4
          bg-sand-100 border border-sand-200 rounded-xl
          text-driftwood-400 cursor-default
          ${className}
        `}
        title="Coming soon"
      >
        <span className="flex-shrink-0 opacity-50"><Icon name={link.icon} /></span>
        <span className="font-medium">{displayText}</span>
        <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-coral-500 bg-coral-400/10 px-2 py-0.5 rounded-full">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <a
      href={link.url}
      target={link.external !== false ? '_blank' : undefined}
      rel={link.external !== false ? 'noopener noreferrer' : undefined}
      className={`
        flex items-center gap-3 px-6 py-4
        bg-white border border-sand-200 rounded-xl
        text-ocean-600 hover:text-ocean-700
        hover:bg-sand-50 hover:border-ocean-400
        hover:shadow-md
        transition-all duration-200
        group
        ${className}
      `}
    >
      <span className="flex-shrink-0"><Icon name={link.icon} /></span>
      <span className="font-medium">{displayText}</span>
      <svg
        className="ml-auto w-4 h-4 opacity-40 group-hover:opacity-70 group-hover:translate-x-0.5 transition-transform"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M3 8h10M9 4l4 4-4 4"/>
      </svg>
    </a>
  );
}
