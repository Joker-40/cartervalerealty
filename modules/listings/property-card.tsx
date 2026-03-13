'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyDetailModel } from '@/lib/types';
import { analyticsAdapter, mediaAdapter } from '@/lib/adapters';
import { cn, formatPrice } from '@/lib/utils';
import { useFavoritesStore } from '@/stores/use-favorites-store';

export function PropertyCard({ property }: { property: PropertyDetailModel }) {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = favoriteIds.includes(property.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="dashboard-card overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={mediaAdapter.resolve(property.coverImage)}
          alt={property.title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {property.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-white/92 px-3 py-2 text-xs font-semibold text-primary shadow-soft">
                {badge}
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Save property"
            onClick={() => {
              toggleFavorite(property.id);
              analyticsAdapter.track('favorite_toggled', { propertyId: property.id, favorite: !isFavorite });
            }}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/92 shadow-soft backdrop-blur',
              isFavorite ? 'border-accent text-accent' : 'border-white/60 text-primary',
            )}
          >
            <Heart className={cn('h-4 w-4', isFavorite && 'fill-current')} />
          </button>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">{property.transactionType.toUpperCase()}</p>
            <h3 className="mt-2 text-2xl text-primary">{property.title}</h3>
          </div>
          <p className="text-2xl font-semibold text-primary">{formatPrice(property.price)}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent" />
          {property.address}, {property.neighborhood}
        </div>
        <p className="text-sm leading-7 text-muted">{property.summary}</p>
        <div className="flex flex-wrap gap-3 text-sm text-muted">
          {property.bedrooms ? <span>{property.bedrooms} beds</span> : null}
          {property.bathrooms ? <span>{property.bathrooms} baths</span> : null}
          <span className="inline-flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-accent" />
            {property.squareFeet.toLocaleString()} sq ft
          </span>
        </div>
        <Link href={`/properties/${property.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View details
        </Link>
      </div>
    </motion.article>
  );
}
