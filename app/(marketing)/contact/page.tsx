import type { Metadata } from 'next';
import Image from 'next/image';
import { BRAND } from '@/lib/constants';
import { LeadForm } from '@/modules/properties/lead-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Carter & Vale Realty Group for residential, commercial, or investment real estate advisory.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero section with SVG background */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/svgs/contact.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Tell us what you are buying, leasing, or evaluating next.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            We work with buyers, investors, and operators who want a cleaner, more intelligent process from first search to closing.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
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
    </div>
  );
}
