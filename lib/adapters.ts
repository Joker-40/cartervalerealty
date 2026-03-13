import type { PropertyCardModel, PropertyDetailModel } from '@/lib/types';

export const serviceEnv = {
  mapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
  mediaBaseUrl: process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? '',
  authIssuer: process.env.NEXT_PUBLIC_AUTH_ISSUER ?? '',
};

export const mediaAdapter = {
  resolve(path: string) {
    if (path.startsWith('http')) return path;
    if (serviceEnv.mediaBaseUrl) {
      return `${serviceEnv.mediaBaseUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
    }
    return path;
  },
};

export const analyticsAdapter = {
  provider: serviceEnv.analyticsId ? 'google-analytics' : 'mock-analytics',
  track(event: string, payload?: Record<string, unknown>) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[analytics]', event, payload ?? {});
    }
  },
};

export const mapsAdapter = {
  provider: serviceEnv.mapsKey ? 'google-maps' : 'mock-map',
  getPropertyMap(property: PropertyDetailModel) {
    return {
      center: property.coordinates,
      markers: [
        {
          id: property.id,
          label: property.title,
          coordinates: property.coordinates,
        },
      ],
      note: serviceEnv.mapsKey
        ? 'Google Maps is configured and ready to replace the mock canvas.'
        : 'Mock map adapter active. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to switch providers later.',
    };
  },
  getCollectionMap(properties: PropertyCardModel[]) {
    return {
      markers: properties.map((property) => ({
        id: property.id,
        label: property.title,
        coordinates: property.coordinates,
      })),
      note: serviceEnv.mapsKey
        ? 'Map adapter configured for live clustering.'
        : 'Mock map adapter active for clustering and property discovery.',
    };
  },
};
