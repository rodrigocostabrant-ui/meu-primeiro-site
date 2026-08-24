export function GlassesMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="55" cy="40" r="34" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="165" cy="40" r="34" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M89 36c8-6 34-6 42 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 38C13 34 4 36 1 41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M199 38c8-4 17-2 20 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
