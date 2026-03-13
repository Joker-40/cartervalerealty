import { z } from 'zod';

export const leadCaptureSchema = z.object({
  propertyId: z.string().optional(),
  propertySlug: z.string().optional(),
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email.'),
  phone: z.string().min(10, 'Enter a valid phone number.'),
  message: z.string().min(10, 'Tell us a bit more about your goals.'),
});

export type LeadCaptureSchema = z.infer<typeof leadCaptureSchema>;
