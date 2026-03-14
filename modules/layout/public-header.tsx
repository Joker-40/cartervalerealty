'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { LogoMark } from '@/modules/layout/logo-mark';

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-stroke/60 bg-canvas/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <LogoMark />
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-3 text-sm font-medium text-muted lg:flex"
        >
          {PUBLIC_NAV_ITEMS.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <Link
                href={item.href}
                className={cn(
                  'relative inline-flex rounded-full px-4 py-2 transition',
                  isActive(item.href)
                    ? 'bg-primary text-white shadow-gold'
                    : 'hover:bg-white hover:text-primary',
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="interactive-surface hidden items-center gap-2 rounded-full border border-stroke/70 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition hover:border-primary/30 hover:text-primary lg:inline-flex"
          >
            Broker Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stroke/70 bg-white text-primary shadow-soft transition hover:border-primary/30 hover:text-primary lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            href="/login"
            className="hidden rounded-full border border-stroke/70 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-soft sm:inline-flex lg:hidden"
          >
            Login
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-stroke/60 bg-white/95 lg:hidden"
          >
            <div className="mx-auto max-w-content px-4 py-4 sm:px-6">
              <nav className="grid gap-2">
                {PUBLIC_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-semibold transition',
                      isActive(item.href)
                        ? 'bg-primary text-white shadow-gold'
                        : 'bg-panel/70 text-primary hover:bg-panel',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 rounded-2xl border border-stroke/70 bg-white px-4 py-3 text-sm font-semibold text-primary"
                >
                  Broker login
                </Link>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
