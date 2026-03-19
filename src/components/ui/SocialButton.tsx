// SocialButton.tsx — Icon-only social link used in the Connect section

import type { SocialLink } from '../../data/links';

interface SocialButtonProps {
  link: SocialLink;
  className?: string;
}

function iconColorClass(name: string): string {
  switch (name) {
    case 'amazon':    return 'text-[#FF9900]';
    case 'twitter':   return 'text-black';
    case 'goodreads': return 'text-[#553B08]';
    case 'art':       return 'text-coral-500';
    case 'facebook':  return 'text-[#1877F2]';
    case 'instagram': return 'text-[#E1306C]';
    default:          return 'text-driftwood-500';
  }
}

function Icon({ name }: { name: string }) {
  switch (name) {
    case 'amazon':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.769-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.097v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.128-.819-1.784-.819-1.214 0-2.294.623-2.56 1.917-.054.285-.264.567-.549.582l-3.077-.333c-.258-.059-.547-.265-.472-.66.707-3.716 4.064-4.836 7.072-4.836 1.537 0 3.547.41 4.76 1.574 1.537 1.436 1.391 3.351 1.391 5.436v4.923c0 1.481.613 2.131 1.192 2.932.202.285.247.628-.011.839l-2.391 2.07z"/>
          <path d="M20.945 17.118c-.422-.54-.873-1.006-1.276-1.429-.394-.413-.629-.636-.629-1.001V8.616c0-2.169.155-4.16-1.453-5.651C16.296 1.741 14.2 1.2 12.5 1.2c-3.45 0-7.293 1.292-8.107 5.461-.086.453.25.695.558.762l3.6.389c.339-.017.584-.352.638-.689.308-1.488 1.567-2.206 2.978-2.206.763 0 1.629.281 2.082.978.53.788.46 1.858.46 2.772v.5c-1.522.17-3.512.28-5.006.898-1.727.703-2.936 2.144-2.936 4.231 0 2.694 1.694 4.039 3.874 4.039 1.841 0 2.847-.432 4.271-1.88.47.681.624 1.01 1.479 1.731.193.154.47.142.643-.032l.016.016 2.283-1.979c.194-.168.166-.432-.011-.675z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'goodreads':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.828H8.3c.207 2.496 2.05 3.405 4.25 3.405 2.83 0 4.353-1.538 4.353-4.353v-1.368h-.044c-.759 1.496-2.274 2.454-4.395 2.454-3.608 0-6.274-2.891-6.274-6.917 0-4.289 2.5-7.066 6.34-7.066 2.2 0 3.717 1.056 4.419 2.552h.045V4.5H20v12.995c0 4.285-2.614 6.5-8.57 6.5zM12 6.1c-2.5 0-3.995 1.96-3.995 4.93 0 2.908 1.413 4.818 3.934 4.818 2.653 0 4.025-1.993 4.025-4.9C15.964 8.136 14.507 6.1 12 6.1z"/>
        </svg>
      );
    case 'art':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      );
  }
}

export default function SocialButton({ link, className = '' }: SocialButtonProps) {
  const colorClass = iconColorClass(link.icon);

  if (link.comingSoon) {
    return (
      <span
        className={`opacity-30 cursor-default ${colorClass} ${className}`}
        title={link.label}
        aria-label={link.label}
      >
        <Icon name={link.icon} />
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target={link.external !== false ? '_blank' : undefined}
      rel={link.external !== false ? 'noopener noreferrer' : undefined}
      title={link.label}
      aria-label={link.label}
      className={`
        hover:opacity-70
        transition-opacity duration-200
        ${colorClass}
        ${className}
      `}
    >
      <Icon name={link.icon} />
    </a>
  );
}
