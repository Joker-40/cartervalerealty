import { describe, expect, it } from 'vitest';
import { buildQueryString, parseSearchFilters } from '@/lib/utils';

describe('search filter utilities', () => {
  it('parses query values into typed filters', () => {
    const filters = parseSearchFilters({
      intent: 'buy',
      minPrice: '500000',
      amenities: 'Pool,Smart Home',
      saved: 'true',
    });

    expect(filters.intent).toBe('buy');
    expect(filters.minPrice).toBe(500000);
    expect(filters.amenities).toEqual(['Pool', 'Smart Home']);
    expect(filters.saved).toBe(true);
  });

  it('serializes filters into a query string', () => {
    const query = buildQueryString({
      intent: 'lease',
      location: 'Austin',
      amenities: ['Conference Rooms'],
    });

    expect(query).toContain('intent=lease');
    expect(query).toContain('location=Austin');
    expect(query).toContain('amenities=Conference+Rooms');
  });
});
