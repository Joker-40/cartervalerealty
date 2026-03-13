import type { ReactNode } from 'react';
import { MobileNav } from '@/modules/layout/mobile-nav';
import { PublicHeader } from '@/modules/layout/public-header';
import { SiteFooter } from '@/modules/layout/site-footer';

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileNav variant="public" />
    </div>
  );
}
