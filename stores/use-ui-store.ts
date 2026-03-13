'use client';

import { create } from 'zustand';

interface UiState {
  filterDrawerOpen: boolean;
  toggleFilterDrawer: () => void;
  setFilterDrawerOpen: (value: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  filterDrawerOpen: false,
  toggleFilterDrawer: () => set((state) => ({ filterDrawerOpen: !state.filterDrawerOpen })),
  setFilterDrawerOpen: (value) => set({ filterDrawerOpen: value }),
}));
