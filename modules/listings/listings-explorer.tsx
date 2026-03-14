'use client';

import { useState } from 'react';
import { Map, Rows3 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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
        <div className="relative inline-flex rounded-full border border-stroke/70 bg-white p-1 shadow-soft">
          {[
            { label: 'Cards', value: false, icon: Rows3 },
            { label: 'Map', value: true, icon: Map },
          ].map((view) => {
            const Icon = view.icon;
            const active = showMap === view.value;

            return (
              <button
                key={view.label}
                type="button"
                onClick={() => setShowMap(view.value)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? 'text-white' : 'text-primary'
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="listing-view-toggle"
                    className="absolute inset-0 rounded-full bg-primary shadow-gold"
                    transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                  />
                ) : null}
                <Icon className="relative h-4 w-4" />
                <span className="relative">{view.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className={`${showMap ? 'hidden lg:block' : 'block'} space-y-6`}>
          <ListingsFilterPanel initialFilters={filters} />
          <div className="hidden xl:block">
            <MapCanvas properties={properties} compact />
          </div>
        </div>
        <div className="space-y-6">
          <div className="hidden lg:block xl:hidden">
            <MapCanvas properties={properties} />
          </div>
          <div className="hidden lg:block">
            <PropertyGrid properties={properties} filters={filters} />
          </div>
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              {showMap ? (
                <motion.div
                  key="map-view"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MapCanvas properties={properties} />
                </motion.div>
              ) : (
                <motion.div
                  key="card-view"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PropertyGrid properties={properties} filters={filters} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
