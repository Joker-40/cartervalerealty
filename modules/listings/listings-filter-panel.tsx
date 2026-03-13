'use client';

import { startTransition, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AMENITIES, PROPERTY_SEGMENTS, PROPERTY_TYPES, TRANSACTION_TYPES } from '@/lib/constants';
import type { SearchFilters } from '@/lib/types';
import { buildQueryString } from '@/lib/utils';

export function ListingsFilterPanel({ initialFilters }: { initialFilters: SearchFilters }) {
  const router = useRouter();
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  function update<K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function toggleAmenity(amenity: string) {
    const current = filters.amenities ?? [];
    update(
      'amenities',
      current.includes(amenity) ? current.filter((item) => item !== amenity) : [...current, amenity],
    );
  }

  function applyFilters() {
    startTransition(() => {
      router.push(`/properties?${buildQueryString(filters)}`);
    });
  }

  return (
    <div className="dashboard-card p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-accent/10 p-3 text-accent">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Filters</h3>
          <p className="text-sm text-muted">Refine by intent, type, and asset quality.</p>
        </div>
      </div>
      <div className="mt-6 space-y-4 text-sm">
        <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
          Intent
          <select
            value={filters.intent ?? ''}
            onChange={(event) => update('intent', event.target.value ? (event.target.value as SearchFilters['intent']) : undefined)}
            className="mt-2 w-full bg-transparent text-primary outline-none"
          >
            <option value="">All</option>
            {TRANSACTION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
          Segment
          <select
            value={filters.segment ?? ''}
            onChange={(event) => update('segment', event.target.value ? (event.target.value as SearchFilters['segment']) : undefined)}
            className="mt-2 w-full bg-transparent text-primary outline-none"
          >
            <option value="">All</option>
            {PROPERTY_SEGMENTS.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </label>
        <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
          Location
          <input
            value={filters.location ?? ''}
            onChange={(event) => update('location', event.target.value || undefined)}
            placeholder="Austin, Mueller, The Domain"
            className="mt-2 w-full bg-transparent text-primary outline-none placeholder:text-muted"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Min price
            <input
              type="number"
              value={filters.minPrice ?? ''}
              onChange={(event) => update('minPrice', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Max price
            <input
              type="number"
              value={filters.maxPrice ?? ''}
              onChange={(event) => update('maxPrice', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
        </div>
        <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
          Price slider
          <input
            type="range"
            min={300000}
            max={3500000}
            step={50000}
            value={filters.maxPrice ?? 1500000}
            onChange={(event) => update('maxPrice', Number(event.target.value))}
            className="mt-3 w-full accent-[rgb(var(--accent))]"
          />
          <span className="mt-2 block font-mono text-primary">${(filters.maxPrice ?? 1500000).toLocaleString()}</span>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Beds
            <input
              type="number"
              value={filters.bedrooms ?? ''}
              onChange={(event) => update('bedrooms', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Baths
            <input
              type="number"
              value={filters.bathrooms ?? ''}
              onChange={(event) => update('bathrooms', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Min sqft
            <input
              type="number"
              value={filters.minSquareFeet ?? ''}
              onChange={(event) => update('minSquareFeet', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
          <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
            Year built after
            <input
              type="number"
              value={filters.yearBuiltMin ?? ''}
              onChange={(event) => update('yearBuiltMin', event.target.value ? Number(event.target.value) : undefined)}
              className="mt-2 w-full bg-transparent text-primary outline-none"
            />
          </label>
        </div>
        <label className="block rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-3 text-muted">
          Property type
          <select
            value={filters.propertyType ?? ''}
            onChange={(event) => update('propertyType', event.target.value || undefined)}
            className="mt-2 w-full bg-transparent text-primary outline-none"
          >
            <option value="">All types</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <div className="rounded-2xl border border-stroke/60 bg-panel/60 px-4 py-4">
          <p className="text-sm font-medium text-primary">Amenities</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {AMENITIES.map((amenity) => {
              const active = filters.amenities?.includes(amenity);

              return (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => toggleAmenity(amenity)}
                  className={`rounded-full px-3 py-2 text-xs font-medium transition ${
                    active ? 'bg-primary text-white' : 'bg-white text-muted'
                  }`}
                >
                  {amenity}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={applyFilters}
          className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold"
        >
          Apply filters
        </button>
        <button
          type="button"
          onClick={() => {
            setFilters({});
            startTransition(() => {
              router.push('/properties');
            });
          }}
          className="rounded-2xl border border-stroke/70 bg-white px-5 py-3 text-sm font-semibold text-primary"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
