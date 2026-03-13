import type { ReactNode } from 'react';
import { MarketingShell } from '@/modules/layout/marketing-shell';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}
