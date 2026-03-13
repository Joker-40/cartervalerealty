import type { MetadataRoute } from 'next';
import { getProperties } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/about', '/agents', '/contact', '/insights', '/properties'];

  return [
    ...staticRoutes.map((route) => ({
      url: `https://cartervalerealty.example${route}`,
      lastModified: new Date(),
    })),
    ...getProperties().map((property) => ({
      url: `https://cartervalerealty.example/properties/${property.slug}`,
      lastModified: new Date(),
    })),
  ];
}
