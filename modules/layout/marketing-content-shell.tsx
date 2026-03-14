import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function MarketingContentShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,163,82,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(18,32,50,0.08),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stroke/80 to-transparent" />
      <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-[8%] top-44 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(18,32,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,32,50,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
