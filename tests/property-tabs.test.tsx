import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { getFeaturedProperties } from '@/lib/mock-data';
import { PropertyTabs } from '@/modules/properties/property-tabs';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => <img alt={String(props.alt ?? '')} />,
}));

describe('PropertyTabs', () => {
  const property = getFeaturedProperties()[0];

  it('switches from overview to amenities', async () => {
    const user = userEvent.setup();

    render(<PropertyTabs property={property} />);

    expect(screen.getByText('Executive summary')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Amenities' }));

    await waitFor(() => {
      expect(screen.getByText(property.amenities[0])).toBeInTheDocument();
      expect(screen.queryByText('Executive summary')).not.toBeInTheDocument();
    });
  });
});
