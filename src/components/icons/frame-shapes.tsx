type ShapeProps = { className?: string };

export function RoundFrame({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden="true">
      <circle cx="52" cy="45" r="38" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="148" cy="45" r="38" stroke="currentColor" strokeWidth="1.4" />
      <path d="M90 40c6-6 24-6 30 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 42c-6-4-12-2-14 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M186 42c6-4 12-2 14 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CatEyeFrame({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 52c0-24 20-34 42-30 20 4 26 16 26 26 0 16-16 26-36 26S16 66 16 52Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M116 52c0-24 20-34 42-30 20 4 26 16 26 26 0 16-16 26-36 26s-32-8-32-22Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M84 38c6-5 22-5 28 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 46c-6-4-11-2-13 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M186 46c6-4 11-2 13 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function AviatorFrame({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 40c0-6 14-11 34-11s36 6 36 18c0 16-14 28-34 28S18 60 18 51v-11Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M112 40c0-6 14-11 34-11s36 6 36 18c0 16-14 28-34 28-19 0-36-15-36-24v-11Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M88 34c6-5 18-5 24 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 36c-6-5-12-3-14 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M184 36c6-5 12-3 14 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function RectFrame({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden="true">
      <rect x="14" y="20" width="76" height="48" rx="10" stroke="currentColor" strokeWidth="1.4" />
      <rect x="110" y="20" width="76" height="48" rx="10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M90 40h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 42c-6-4-12-2-14 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M186 42c6-4 12-2 14 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
