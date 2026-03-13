'use client';

import { useState } from 'react';
import { Map, Rows3 } from 'lucide-react';
import type { PropertyDetailModel, SearchFilters } from '@/lib/types';
import { MapCanvas } from '@/modules/listings/map-canvas';
import { ListingsFilterPanel } from '@/modules/listings/listings-filter-panel';
import { PropertyGrid } from '@/modules/listings/property-grid';

export function ListingsExplorer({
  properties,
  filters,
}: {
  properties: PropertyDetailModel[];
  filters: SearchFilters;
}) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <div className="rounded-full border border-stroke/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Discovery view
        </div>
        <button
          type="button"
          onClick={() => setShowMap((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
        >
          {showMap ? <Rows3 className="h-4 w-4" /> : <Map className="h-4 w-4" />}
          {showMap ? 'Show cards' : 'Show map'}
        </button>
      </div>
      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className={`${showMap ? 'hidden lg:block' : 'block'} space-y-6`}>
          <ListingsFilterPanel initialFilters={filters} />
          <div className="hidden xl:block">
            <MapCanvas properties={properties} compact />
          </div>
        </div>
        <div className="space-y-6">
          <div className={`${showMap ? 'block' : 'hidden lg:block xl:hidden'}`}>
            <MapCanvas properties={properties} />
          </div>
          <div className={`${showMap ? 'hidden lg:block' : 'block'}`}>
            <PropertyGrid properties={properties} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
