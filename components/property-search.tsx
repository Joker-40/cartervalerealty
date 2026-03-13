'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { CITIES, PROPERTY_TYPES, TRANSACTION_TYPES } from '@/lib/constants';

export function PropertySearch() {
  const router = useRouter();
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e?.preventDefault?.();
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (propertyType) params.set('propertyType', propertyType);
    if (transactionType) params.set('transactionType', transactionType);
    router?.push?.(`/properties?${params?.toString?.() ?? ''}`);
  };

  return (
    <section className="bg-secondary-bg py-12">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={city}
                onChange={(e) => setCity(e?.target?.value ?? '')}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">All Cities</option>
                {CITIES?.map?.((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                )) ?? []}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e?.target?.value ?? '')}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Transaction</label>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e?.target?.value ?? '')}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">All</option>
                {TRANSACTION_TYPES?.map?.((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )) ?? []}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
