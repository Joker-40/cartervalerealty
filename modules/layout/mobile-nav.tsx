'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PUBLIC_MOBILE_NAV, WORKSPACE_MOBILE_NAV } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MobileNav({ variant }: { variant: 'public' | 'workspace' }) {
  const pathname = usePathname();
  const items = variant === 'workspace' ? WORKSPACE_MOBILE_NAV : PUBLIC_MOBILE_NAV;

  return (
    <motion.nav
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-50 rounded-[26px] border border-primary/10 bg-white/95 p-2 shadow-soft backdrop-blur-lg md:hidden"
    >
      <ul className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const [hrefPath, hrefQuery] = item.href.split('?');
          const active = pathname === hrefPath || pathname.startsWith(`${hrefPath}/`) || (hrefQuery === 'saved=true' && pathname === '/properties');

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'relative flex flex-col items-center justify-center rounded-2xl px-1 py-2 text-[0.68rem] font-medium transition',
                  active ? 'text-white' : 'text-muted hover:bg-panel hover:text-primary',
                )}
              >
                {active ? (
                  <motion.span
                    layoutId={`mobile-nav-active-${variant}`}
                    className="absolute inset-0 rounded-2xl bg-primary shadow-gold"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                ) : null}
                <Icon className="relative mb-1 h-4 w-4" />
                <span className="relative">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
