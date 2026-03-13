import type { ReactNode } from 'react';
import Link from 'next/link';
import { CalendarRange, Search } from 'lucide-react';
import { MobileNav } from '@/modules/layout/mobile-nav';
import { PublicHeader } from '@/modules/layout/public-header';
import { SiteFooter } from '@/modules/layout/site-footer';
import { GlobalSearch } from '@/modules/layout/global-search';

interface PublicDiscoveryShellProps {
  children: ReactNode;
  title: string;
  description: string;
  quickActionHref: string;
  quickActionLabel: string;
}

export function PublicDiscoveryShell({
  children,
  title,
  description,
  quickActionHref,
  quickActionLabel,
}: PublicDiscoveryShellProps) {
  return (
    <div className="min-h-screen bg-grid-fade">
      <PublicHeader />
      <section className="border-b border-stroke/60 bg-white/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">
                <Search className="h-3.5 w-3.5" />
                Public property discovery
              </span>
              <h1 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">{title}</h1>
              <p className="mt-3 text-sm leading-7 text-muted md:text-base">{description}</p>
            </div>
            <div className="flex items-center gap-3">
              <GlobalSearch placeholder="Search Austin neighborhoods or addresses" />
              <Link
                href={quickActionHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold transition hover:bg-primary/95"
              >
                <CalendarRange className="h-4 w-4" />
                {quickActionLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      <SiteFooter />
      <MobileNav variant="public" />
    </div>
  );
}
