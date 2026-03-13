'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { PropertyDetailModel } from '@/lib/types';
import { MapCanvas } from '@/modules/listings/map-canvas';
import { LineChartCard } from '@/modules/charts/line-chart-card';

const tabs = ['Overview', 'Amenities', 'Floor Plan', 'Location', 'Market Data'] as const;

export function PropertyTabs({ property }: { property: PropertyDetailModel }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Overview');

  return (
    <section className="dashboard-card p-5 sm:p-6">
      <div className="flex flex-wrap gap-2 border-b border-stroke/60 pb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab ? 'bg-primary text-white' : 'bg-panel text-muted'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Overview' ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h3 className="text-2xl text-primary">Executive summary</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{property.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Neighborhood growth', property.neighborhoodGrowth],
                ['Rental yield', property.rentalYield],
                ['Built', String(property.yearBuilt)],
                ['Asset type', property.propertyType],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-stroke/60 bg-panel/60 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
                  <p className="mt-2 font-serif text-2xl text-primary">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-stroke/60 bg-panel/50 p-5">
            <p className="text-sm font-semibold text-primary">Why this asset stands out</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {property.locationHighlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {activeTab === 'Amenities' ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {property.amenities.map((amenity) => (
            <span key={amenity} className="rounded-full bg-panel px-4 py-3 text-sm font-medium text-primary">
              {amenity}
            </span>
          ))}
        </div>
      ) : null}

      {activeTab === 'Floor Plan' ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {property.floorPlans.map((plan) => (
            <div key={plan.id} className="overflow-hidden rounded-[24px] border border-stroke/60 bg-panel/40">
              <div className="relative aspect-[4/3]">
                <Image src={plan.image} alt={plan.label} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-primary">{plan.label}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {activeTab === 'Location' ? (
        <div className="mt-6">
          <MapCanvas properties={[property]} />
        </div>
      ) : null}

      {activeTab === 'Market Data' ? (
        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {property.marketData.map((series) => (
            <LineChartCard key={series.id} series={series} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
