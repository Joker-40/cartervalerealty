'use client';

import type { PropertyDetailModel, SearchFilters } from '@/lib/types';
import { PropertyCard } from '@/modules/listings/property-card';
import { useFavoritesStore } from '@/stores/use-favorites-store';

export function PropertyGrid({
  properties,
  filters,
}: {
  properties: PropertyDetailModel[];
  filters: SearchFilters;
}) {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const hasHydrated = useFavoritesStore((state) => state.hasHydrated);

  const visibleProperties =
    !filters.saved
      ? properties
      : !hasHydrated
        ? []
        : properties.filter((property) => favoriteIds.includes(property.id));

  if (filters.saved && !hasHydrated) {
    return <div className="dashboard-card p-6 text-sm text-muted">Loading your saved properties…</div>;
  }

  if (visibleProperties.length === 0) {
    return (
      <div className="dashboard-card p-8">
        <h3 className="text-2xl text-primary">No properties match this filter set.</h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
          Try expanding your price range, removing an amenity, or exploring another Austin submarket.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {visibleProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
