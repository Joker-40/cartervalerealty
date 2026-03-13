'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Properties', href: '/properties' },
    { name: 'Agents', href: '/agents' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt={BRAND.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white">{BRAND.name}</span>
              <span className="text-xs text-accent hidden sm:block">{BRAND.tagline}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation?.map?.((item) => (
              <Link
                key={item?.name ?? ''}
                href={item?.href ?? '#'}
                className="text-white hover:text-accent transition-colors duration-200 font-medium"
              >
                {item?.name ?? ''}
              </Link>
            )) ?? []}
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navigation?.map?.((item) => (
                <Link
                  key={item?.name ?? ''}
                  href={item?.href ?? '#'}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item?.name ?? ''}
                </Link>
              )) ?? []}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
