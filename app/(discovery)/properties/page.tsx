import type { Metadata } from 'next';
import { getProperties } from '@/lib/mock-data';
import { parseSearchFilters } from '@/lib/utils';
import { ListingsExplorer } from '@/modules/listings/listings-explorer';

export const metadata: Metadata = {
  title: 'Properties',
  description: 'Advanced Austin property search with market-aware filtering for residential and commercial inventory.',
};

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const filters = parseSearchFilters(searchParams);
  const properties = getProperties({ ...filters, saved: false });

  return <ListingsExplorer properties={properties} filters={filters} />;
}
