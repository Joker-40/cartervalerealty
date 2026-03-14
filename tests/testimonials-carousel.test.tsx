import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { getTestimonials } from '@/lib/mock-data';
import { TestimonialsCarousel } from '@/modules/home/testimonials-carousel';

describe('TestimonialsCarousel', () => {
  it('moves to the next testimonial when prompted', async () => {
    const user = userEvent.setup();
    const testimonials = getTestimonials();

    render(<TestimonialsCarousel testimonials={testimonials} />);

    expect(screen.getByText(testimonials[0].clientName)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }));

    await waitFor(() => {
      expect(screen.getByText(testimonials[1].clientName)).toBeInTheDocument();
    });
  });
});
