'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { LeadCapturePayload, PropertyDetailModel } from '@/lib/types';
import { leadCaptureSchema, type LeadCaptureSchema } from '@/lib/schemas';

export function LeadForm({ property }: { property?: PropertyDetailModel }) {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadCaptureSchema>({
    resolver: zodResolver(leadCaptureSchema),
    defaultValues: {
      propertyId: property?.id,
      propertySlug: property?.slug,
      message: property
        ? `Hi Carter & Vale team, I would like more information about ${property.title}.`
        : 'Hi Carter & Vale team, I would like to speak with an advisor about my real estate goals.',
    },
  });

  async function onSubmit(values: LeadCapturePayload) {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSuccessMessage('Something went wrong. Please try again.');
      return;
    }

    setSuccessMessage('Request received. A Carter & Vale advisor will reach out shortly.');
    reset({
      propertyId: property?.id,
      propertySlug: property?.slug,
      name: '',
      email: '',
      phone: '',
      message: property
        ? `Hi Carter & Vale team, I would like more information about ${property.title}.`
        : 'Hi Carter & Vale team, I would like to speak with an advisor about my real estate goals.',
    });
  }

  return (
    <div className="dashboard-card p-5">
      <h3 className="text-2xl text-primary">Request property intelligence</h3>
      <p className="mt-2 text-sm leading-6 text-muted">
        {property
          ? 'Reach the assigned advisor directly for pricing context, showing requests, and underwriting details.'
          : 'Reach Carter & Vale directly for buyer strategy, commercial representation, or portfolio planning.'}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted">
            Name
            <input {...register('name')} className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none" />
            {errors.name ? <span className="mt-1 block text-xs text-danger">{errors.name.message}</span> : null}
          </label>
          <label className="block text-sm text-muted">
            Email
            <input {...register('email')} className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none" />
            {errors.email ? <span className="mt-1 block text-xs text-danger">{errors.email.message}</span> : null}
          </label>
        </div>
        <label className="block text-sm text-muted">
          Phone
          <input {...register('phone')} className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none" />
          {errors.phone ? <span className="mt-1 block text-xs text-danger">{errors.phone.message}</span> : null}
        </label>
        <label className="block text-sm text-muted">
          Message
          <textarea
            {...register('message')}
            rows={5}
            className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none"
          />
          {errors.message ? <span className="mt-1 block text-xs text-danger">{errors.message.message}</span> : null}
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : 'Request info'}
        </button>
      </form>
      {successMessage ? <p className="mt-4 text-sm text-success">{successMessage}</p> : null}
    </div>
  );
}
