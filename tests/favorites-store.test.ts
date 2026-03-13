import { beforeEach, describe, expect, it } from 'vitest';
import { useFavoritesStore } from '@/stores/use-favorites-store';

describe('favorites store', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favoriteIds: [], hasHydrated: true });
  });

  it('adds and removes favorites', () => {
    useFavoritesStore.getState().toggleFavorite('property-1');
    expect(useFavoritesStore.getState().favoriteIds).toEqual(['property-1']);

    useFavoritesStore.getState().toggleFavorite('property-1');
    expect(useFavoritesStore.getState().favoriteIds).toEqual([]);
  });
});
