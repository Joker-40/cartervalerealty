'use client';

import { startTransition, useState } from 'react';
import type { FormEvent } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { PROPERTY_TYPES, SERVICE_AREAS, TRANSACTION_TYPES } from '@/lib/constants';
import { cn, buildQueryString } from '@/lib/utils';

export function HeroSearchForm() {
  const router = useRouter();
  const [intent, setIntent] = useState<(typeof TRANSACTION_TYPES)[number]>('buy');
  const [location, setLocation] = useState('Austin');
  const [price, setPrice] = useState(1500000);
  const [bedrooms, setBedrooms] = useState(2);
  const [propertyType, setPropertyType] = useState('Condo');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = buildQueryString({
      intent,
      location,
      maxPrice: price,
      bedrooms,
      propertyType,
    });

    startTransition(() => {
      router.push(`/properties?${query}`);
    });
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      onSubmit={handleSubmit}
      className="surface-card mt-8 grid gap-4 p-4 lg:grid-cols-[1.35fr_0.9fr] lg:items-start lg:gap-4"
    >
      <div className="space-y-4">
        <div className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">Intent</p>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
              {intent.toUpperCase()}
            </span>
          </div>
          <div className="mt-3 inline-flex flex-wrap gap-2 rounded-full bg-white/70 p-1.5">
            {TRANSACTION_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setIntent(type)}
                className={cn(
                  'rounded-full px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition',
                  intent === type
                    ? 'bg-primary text-white shadow-gold'
                    : 'text-primary hover:bg-panel',
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-3 md:grid-cols-[minmax(0,1.2fr)_132px_180px]">
          <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">Location</span>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mt-2 block w-full bg-transparent text-base font-medium text-primary outline-none"
              placeholder="Austin"
            />
          </label>

          <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">Beds</span>
            <input
              type="number"
              min={1}
              value={bedrooms}
              onChange={(event) => setBedrooms(Number(event.target.value))}
              className="mt-2 block w-full bg-transparent text-base font-medium text-primary outline-none"
            />
          </label>

          <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">Property type</span>
            <select
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
              className="mt-2 block w-full bg-transparent text-base font-medium text-primary outline-none"
            >
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="rounded-2xl border border-stroke/60 bg-panel/40 px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Popular
            </span>
            {SERVICE_AREAS.slice(0, 4).map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setLocation(area)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition',
                  location === area
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-white text-muted hover:text-primary',
                )}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">Price cap</span>
          <input
            type="range"
            min={300000}
            max={3500000}
            step={50000}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="mt-3 w-full accent-[rgb(var(--accent))]"
          />
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="font-mono text-sm text-primary">${price.toLocaleString('en-US')}</span>
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">{propertyType}</span>
          </div>
        </label>

        <div className="rounded-2xl border border-stroke/60 bg-primary/95 px-4 py-4 text-white">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/58">Search summary</p>
          <p className="mt-2 text-sm font-semibold">
            {intent.toUpperCase()} {propertyType.toLowerCase()} in {location}
          </p>
          <p className="mt-1 text-xs leading-6 text-white/72">
            Up to ${price.toLocaleString('en-US')} with {bedrooms}+ bedrooms
          </p>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:bg-primary/95"
        >
          <Search className="h-4 w-4" />
          Search Properties
        </motion.button>
      </div>
    </motion.form>
  );
}
