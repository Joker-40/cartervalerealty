import type { ReactNode } from 'react';
import { PublicDiscoveryShell } from '@/modules/layout/public-discovery-shell';

export default function PropertiesLayout({ children }: { children: ReactNode }) {
  return (
    <PublicDiscoveryShell
      title="Property Discovery"
      description="Explore Austin residential and commercial inventory with advanced filtering, market context, and public-facing property intelligence."
      quickActionHref="/contact"
      quickActionLabel="Book a tour"
    >
      {children}
    </PublicDiscoveryShell>
  );
}
