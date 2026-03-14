// Badge.tsx — Reusable badge component (e.g. "Coming Soon", "New", etc.)

interface BadgeProps {
  label: string;
  variant?: 'coral' | 'mangrove' | 'ocean' | 'sand';
  className?: string;
}

const variantClasses: Record<string, string> = {
  coral: 'bg-coral-500 text-white',
  mangrove: 'bg-mangrove-500 text-white',
  ocean: 'bg-ocean-600 text-white',
  sand: 'bg-sand-200 text-driftwood-600',
};

export default function Badge({ label, variant = 'coral', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-block
        px-3 py-1
        text-xs font-semibold font-sans tracking-wide uppercase
        rounded-full
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {label}
    </span>
  );
}
