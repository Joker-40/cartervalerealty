import type { Metadata } from 'next';
import { CalendarRange, MapPin, PhoneCall, Sparkles } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { MarketingContentShell } from '@/modules/layout/marketing-content-shell';
import { MarketingHero } from '@/modules/layout/marketing-hero';
import { LeadForm } from '@/modules/properties/lead-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Carter & Vale Realty Group for residential, commercial, or investment real estate advisory.',
};

export default function ContactPage() {
  const nextSteps = [
    {
      title: 'Share context',
      detail: 'Tell us whether this is residential, commercial, or investment-focused.',
      icon: Sparkles,
    },
    {
      title: 'Get matched',
      detail: 'We connect you with the right advisor for the opportunity and timeline.',
      icon: PhoneCall,
    },
    {
      title: 'Set the next step',
      detail: 'Tour, underwriting review, or strategy call depending on what you need.',
      icon: CalendarRange,
    },
  ] as const;

  return (
    <div>
      <MarketingHero
        eyebrow="Contact"
        title="Tell us what you are buying, leasing, or evaluating next."
        description="We work with buyers, investors, and operators who want a cleaner, more intelligent process from first search to closing."
        backgroundSrc="/svgs/contact.svg"
        highlights={['Buyer representation', 'Commercial leasing', 'Portfolio planning']}
      />

      <MarketingContentShell>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <article className="surface-card interactive-surface overflow-hidden p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-accent/12 p-3 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Austin office</p>
              </div>
              <h2 className="mt-4 text-4xl text-primary">{BRAND.address}</h2>
              <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
                <p>{BRAND.phone}</p>
                <p>{BRAND.email}</p>
                <p>Appointments available in person or virtually throughout the week.</p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-primary p-8 text-white shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,163,82,0.24),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.22em] text-white/62">What happens next</p>
                <div className="mt-8 space-y-4">
                  {nextSteps.map((step) => {
                    const StepIcon = step.icon;

                    return (
                      <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl bg-white/10 p-3 text-accent">
                            <StepIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-lg font-semibold">{step.title}</p>
                            <p className="mt-2 text-sm leading-7 text-white/72">{step.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
          <LeadForm />
        </div>
      </MarketingContentShell>
    </div>
  );
}
