'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { CITIES, PROPERTY_TYPES, TRANSACTION_TYPES } from '@/lib/constants';
import type { PropertyFilters as FilterType } from '@/lib/types';

interface PropertyFiltersProps {
  currentFilters: FilterType;
}

export function PropertyFilters({ currentFilters }: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterType>(currentFilters ?? {});

  const handleFilterChange = (key: keyof FilterType, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filters?.city) params.set('city', filters.city);
    if (filters?.minPrice) params.set('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.set('maxPrice', filters.maxPrice.toString());
    if (filters?.bedrooms) params.set('bedrooms', filters.bedrooms.toString());
    if (filters?.bathrooms) params.set('bathrooms', filters.bathrooms.toString());
    if (filters?.propertyType) params.set('propertyType', filters.propertyType);
    if (filters?.transactionType) params.set('transactionType', filters.transactionType);
    router?.push?.(`/properties?${params?.toString?.() ?? ''}`);
  };

  const clearFilters = () => {
    setFilters({});
    router?.push?.('/properties');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-serif font-bold text-primary">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            value={filters?.city ?? ''}
            onChange={(e) => handleFilterChange('city', e?.target?.value ?? '')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Cities</option>
            {CITIES?.map?.((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            )) ?? []}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters?.minPrice ?? ''}
              onChange={(e) => handleFilterChange('minPrice', e?.target?.value ? parseInt(e.target.value) : undefined)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters?.maxPrice ?? ''}
              onChange={(e) => handleFilterChange('maxPrice', e?.target?.value ? parseInt(e.target.value) : undefined)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select
            value={filters?.bedrooms ?? ''}
            onChange={(e) => handleFilterChange('bedrooms', e?.target?.value ? parseInt(e.target.value) : undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <select
            value={filters?.bathrooms ?? ''}
            onChange={(e) => handleFilterChange('bathrooms', e?.target?.value ? parseFloat(e.target.value) : undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            value={filters?.propertyType ?? ''}
            onChange={(e) => handleFilterChange('propertyType', e?.target?.value ?? '')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All Types</option>
            {PROPERTY_TYPES?.map?.((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            )) ?? []}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Type</label>
          <select
            value={filters?.transactionType ?? ''}
            onChange={(e) => handleFilterChange('transactionType', e?.target?.value ?? '')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">All</option>
            {TRANSACTION_TYPES?.map?.((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            )) ?? []}
          </select>
        </div>

        <div className="space-y-2 pt-4">
          <button
            onClick={applyFilters}
            className="w-full px-4 py-2 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200"
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
