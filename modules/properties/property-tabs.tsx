'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import type { PropertyDetailModel } from '@/lib/types';
import { MapCanvas } from '@/modules/listings/map-canvas';
import { LineChartCard } from '@/modules/charts/line-chart-card';

const tabs = ['Overview', 'Amenities', 'Floor Plan', 'Location', 'Market Data'] as const;

export function PropertyTabs({ property }: { property: PropertyDetailModel }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Overview');

  function renderTabContent() {
    if (activeTab === 'Overview') {
      return (
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
      );
    }

    if (activeTab === 'Amenities') {
      return (
        <div className="mt-6 flex flex-wrap gap-3">
          {property.amenities.map((amenity) => (
            <span key={amenity} className="rounded-full bg-panel px-4 py-3 text-sm font-medium text-primary">
              {amenity}
            </span>
          ))}
        </div>
      );
    }

    if (activeTab === 'Floor Plan') {
      return (
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
      );
    }

    if (activeTab === 'Location') {
      return (
        <div className="mt-6">
          <MapCanvas properties={[property]} />
        </div>
      );
    }

    return (
      <div className="mt-6 grid gap-5 xl:grid-cols-3">
        {property.marketData.map((series) => (
          <LineChartCard key={series.id} series={series} />
        ))}
      </div>
    );
  }

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="dashboard-card p-5 sm:p-6"
    >
      <div className="relative flex flex-wrap gap-2 border-b border-stroke/60 pb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab ? 'text-white' : 'bg-panel text-muted'
            }`}
          >
            {activeTab === tab ? (
              <motion.span
                layoutId="property-tab-indicator"
                className="absolute inset-0 rounded-full bg-primary shadow-gold"
                transition={{ type: 'spring', stiffness: 340, damping: 30 }}
              />
            ) : null}
            <span className="relative">{tab}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
