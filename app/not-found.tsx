import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="surface-card max-w-xl p-10 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-5xl text-primary">This property signal is unavailable.</h1>
        <p className="mt-5 text-sm leading-7 text-muted">
          The page may have moved, the listing may no longer be active, or the route was entered incorrectly.
        </p>
        <Link href="/properties" className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold">
          Return to discovery
        </Link>
      </div>
    </div>
  );
}
