import Link from 'next/link';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants';
import { LogoMark } from '@/modules/layout/logo-mark';

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stroke/60 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-content items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <LogoMark />
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {PUBLIC_NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-full border border-stroke/70 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition hover:border-primary/30 hover:text-primary md:inline-flex"
          >
            Broker Login
          </Link>
          <Link
            href="/login"
            className="inline-flex rounded-full border border-stroke/70 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-soft lg:hidden"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
