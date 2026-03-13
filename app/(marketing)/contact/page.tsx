import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';
import { LeadForm } from '@/modules/properties/lead-form';
import { SectionHeading } from '@/modules/shared/section-heading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Carter & Vale Realty Group for residential, commercial, or investment real estate advisory.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us what you are buying, leasing, or evaluating next."
        description="We work with buyers, investors, and operators who want a cleaner, more intelligent process from first search to closing."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="surface-card p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Austin office</p>
          <h2 className="mt-4 text-4xl text-primary">{BRAND.address}</h2>
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>{BRAND.phone}</p>
            <p>{BRAND.email}</p>
            <p>Appointments available in person or virtually throughout the week.</p>
          </div>
        </article>
        <LeadForm />
      </div>
    </div>
  );
}
