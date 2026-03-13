import { describe, expect, it } from 'vitest';
import { leadCaptureSchema } from '@/lib/schemas';

describe('lead capture schema', () => {
  it('accepts a valid payload', () => {
    const result = leadCaptureSchema.safeParse({
      propertyId: 'skyline',
      propertySlug: 'skyline-reserve-penthouse',
      name: 'Taylor Rivers',
      email: 'taylor@example.com',
      phone: '5125550109',
      message: 'Please send the market comp packet and schedule a visit.',
    });

    expect(result.success).toBe(true);
  });

  it('rejects incomplete payloads', () => {
    const result = leadCaptureSchema.safeParse({
      name: 'T',
      email: 'not-an-email',
      phone: '123',
      message: 'short',
    });

    expect(result.success).toBe(false);
  });
});
