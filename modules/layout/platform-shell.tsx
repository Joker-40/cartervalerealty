'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Bell, Plus, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { WORKSPACE_NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { GlobalSearch } from '@/modules/layout/global-search';
import { LogoMark } from '@/modules/layout/logo-mark';
import { MobileNav } from '@/modules/layout/mobile-nav';

interface PlatformShellProps {
  children: ReactNode;
  title: string;
  description: string;
  quickActionLabel: string;
  quickActionHref: string;
  sessionLabel: string;
}

export function PlatformShell({
  children,
  title,
  description,
  quickActionLabel,
  quickActionHref,
  sessionLabel,
}: PlatformShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-grid-fade pb-24 md:pb-0">
      <div className="mx-auto flex max-w-[1640px] gap-6 px-3 py-3 sm:px-6 lg:px-8">
        <aside className="sticky top-3 hidden h-[calc(100vh-24px)] w-[280px] shrink-0 flex-col rounded-[30px] border border-stroke/70 bg-primary px-6 py-6 text-white shadow-soft lg:flex">
          <LogoMark href="/app/dashboard" inverse />
          <div className="mt-10 flex-1 space-y-2">
            {WORKSPACE_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                    active ? 'bg-white/12 text-white shadow-gold' : 'text-white/68 hover:bg-white/8 hover:text-white',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/8 p-4 text-sm text-white/72">
            <p className="font-semibold text-white">Smart signal</p>
            <p className="mt-2 leading-6">
              Inventory velocity is strongest this week in Downtown Austin and The Domain corridors.
            </p>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <header className="sticky top-3 z-30 flex flex-col gap-4 rounded-[30px] border border-stroke/70 bg-white/88 px-4 py-4 shadow-soft backdrop-blur-xl sm:px-6">
            <div className="flex items-center gap-4 lg:hidden">
              <LogoMark compact />
            </div>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Premium market intelligence
                </div>
                <h1 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">{title}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted md:text-base">{description}</p>
              </div>
              <div className="flex items-center gap-3 xl:min-w-[520px] xl:justify-end">
                <GlobalSearch />
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stroke/70 bg-white text-primary shadow-soft">
                  <Bell className="h-4 w-4" />
                </button>
                <Link
                  href={quickActionHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold transition hover:bg-primary/95"
                >
                  <Plus className="h-4 w-4" />
                  {quickActionLabel}
                </Link>
                <div className="hidden rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-right text-xs font-medium text-primary sm:block">
                  {sessionLabel}
                </div>
                <Link
                  href="/api/auth/logout"
                  className="hidden rounded-full border border-stroke/70 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-soft sm:inline-flex"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </header>
          <main className="min-w-0">{children}</main>
        </div>
      </div>
      <MobileNav variant="workspace" />
    </div>
  );
}
