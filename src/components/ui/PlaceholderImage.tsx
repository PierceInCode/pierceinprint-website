// PlaceholderImage.tsx
// Renders a styled placeholder div wherever a real image should go.
// REPLACE WITH ACTUAL IMAGE: swap this component usage with a real <img> tag,
// or pass an `src` prop to render the actual image.

interface PlaceholderImageProps {
  alt: string;
  aspectRatio?: 'book-cover' | 'portrait' | 'square' | 'landscape';
  className?: string;
  /** If provided, renders an actual <img> tag instead of the placeholder */
  src?: string;
}

const aspectRatioClasses: Record<string, string> = {
  'book-cover': 'aspect-[4/5]', // Standard picture book portrait ratio
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-video',
};

export default function PlaceholderImage({
  alt,
  aspectRatio = 'book-cover',
  className = '',
  src,
}: PlaceholderImageProps) {
  // REPLACE WITH ACTUAL IMAGE: when a real image file is available,
  // pass the src prop and this component will render it as an <img> tag.
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      data-placeholder="REPLACE WITH ACTUAL IMAGE"
      className={`
        ${aspectRatioClasses[aspectRatio] ?? aspectRatioClasses['book-cover']}
        w-full
        bg-gradient-to-br from-ocean-400/20 via-sand-200 to-coral-400/20
        flex flex-col items-center justify-center
        border-2 border-dashed border-ocean-400/30
        rounded-lg
        ${className}
      `}
    >
      {/* Wave / coastal icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-ocean-600/40 mb-2"
        aria-hidden="true"
      >
        {/* Simple open book icon */}
        <path
          d="M6 10C6 10 14 8 24 10C34 8 42 10 42 10V38C42 38 34 36 24 38C14 36 6 38 6 38V10Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="24" y1="10" x2="24" y2="38" stroke="currentColor" strokeWidth="2.5" />
      </svg>
      <span className="text-xs text-ocean-600/50 font-sans text-center px-4">
        {alt}
      </span>
    </div>
  );
}
