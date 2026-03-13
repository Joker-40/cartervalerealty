import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { LogoMark } from '@/modules/layout/logo-mark';

export function SiteFooter() {
  return (
    <footer className="border-t border-stroke/60 bg-primary text-white">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <LogoMark inverse />
            <p className="mt-5 text-sm leading-7 text-white/72">
              Carter &amp; Vale Realty Group blends brokerage service with market intelligence for residential
              buyers, commercial operators, and long-horizon investors across Austin.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="font-semibold text-white">Contact</p>
              <p className="mt-2">{BRAND.address}</p>
              <p>{BRAND.phone}</p>
              <p>{BRAND.email}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Explore</p>
              <div className="mt-2 flex flex-col gap-2">
                <Link href="/properties">Properties</Link>
                <Link href="/agents">Agents</Link>
                <Link href="/insights">Insights</Link>
                <Link href="/login">Broker Login</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-xs uppercase tracking-[0.24em] text-white/50">
          {new Date().getFullYear()} Carter &amp; Vale Realty Group
        </div>
      </div>
    </footer>
  );
}
