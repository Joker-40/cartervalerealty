import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SearchFilters } from '@/lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function parseNumber(value: string | string[] | undefined) {
  if (!value) return undefined;
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function parseSearchFilters(
  searchParams: Record<string, string | string[] | undefined>,
): SearchFilters {
  const amenities = searchParams.amenities;
  const amenityValues = Array.isArray(amenities)
    ? amenities
    : typeof amenities === 'string' && amenities.length > 0
      ? amenities.split(',')
      : [];

  return {
    saved: (Array.isArray(searchParams.saved) ? searchParams.saved[0] : searchParams.saved) === 'true',
    intent: ['buy', 'rent', 'lease'].includes(String(searchParams.intent))
      ? (searchParams.intent as SearchFilters['intent'])
      : undefined,
    location: Array.isArray(searchParams.location) ? searchParams.location[0] : searchParams.location,
    minPrice: parseNumber(searchParams.minPrice),
    maxPrice: parseNumber(searchParams.maxPrice),
    bedrooms: parseNumber(searchParams.bedrooms),
    bathrooms: parseNumber(searchParams.bathrooms),
    minSquareFeet: parseNumber(searchParams.minSquareFeet),
    maxSquareFeet: parseNumber(searchParams.maxSquareFeet),
    yearBuiltMin: parseNumber(searchParams.yearBuiltMin),
    propertyType: Array.isArray(searchParams.propertyType) ? searchParams.propertyType[0] : searchParams.propertyType,
    segment:
      searchParams.segment === 'Residential' || searchParams.segment === 'Commercial'
        ? searchParams.segment
        : undefined,
    amenities: amenityValues,
  };
}

export function buildQueryString(filters: SearchFilters) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value == null) return;
    if (Array.isArray(value)) {
      if (value.length > 0) params.set(key, value.join(','));
      return;
    }
    if (value === '') return;
    params.set(key, String(value));
  });

  return params.toString();
}

export function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
