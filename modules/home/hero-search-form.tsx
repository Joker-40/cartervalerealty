'use client';

import { startTransition, useState } from 'react';
import type { FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PROPERTY_TYPES, TRANSACTION_TYPES } from '@/lib/constants';
import { buildQueryString } from '@/lib/utils';

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
    <form onSubmit={handleSubmit} className="surface-card mt-10 grid gap-4 p-4 md:grid-cols-6 md:p-5">
      <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
        Intent
        <select value={intent} onChange={(event) => setIntent(event.target.value as (typeof TRANSACTION_TYPES)[number])} className="mt-2 w-full bg-transparent text-primary outline-none">
          {TRANSACTION_TYPES.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
      <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted md:col-span-2">
        Location
        <input value={location} onChange={(event) => setLocation(event.target.value)} className="mt-2 w-full bg-transparent text-primary outline-none" />
      </label>
      <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
        Price cap
        <input
          type="range"
          min={300000}
          max={3500000}
          step={50000}
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}
          className="mt-3 w-full accent-[rgb(var(--accent))]"
        />
        <span className="mt-2 block font-mono text-sm text-primary">${price.toLocaleString('en-US')}</span>
      </label>
      <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
        Beds
        <input
          type="number"
          min={1}
          value={bedrooms}
          onChange={(event) => setBedrooms(Number(event.target.value))}
          className="mt-2 w-full bg-transparent text-primary outline-none"
        />
      </label>
      <div className="grid gap-4 md:col-span-6 md:grid-cols-[1.2fr_220px]">
        <label className="rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3 text-sm text-muted">
          Property type
          <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className="mt-2 w-full bg-transparent text-primary outline-none">
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-white shadow-gold transition hover:bg-primary/95"
        >
          <Search className="h-4 w-4" />
          Search Properties
        </button>
      </div>
    </form>
  );
}
