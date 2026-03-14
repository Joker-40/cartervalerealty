import type { Metadata } from 'next';
import { Compass, Landmark, Sparkles } from 'lucide-react';
import { BRAND, SERVICE_AREAS } from '@/lib/constants';
import { getAgents, getCompanyMetrics } from '@/lib/mock-data';
import { MarketingContentShell } from '@/modules/layout/marketing-content-shell';
import { MarketingHero } from '@/modules/layout/marketing-hero';
import { AgentCard } from '@/modules/shared/agent-card';
import { SectionHeading } from '@/modules/shared/section-heading';
import { StatCard } from '@/modules/shared/stat-card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Carter & Vale Realty Group, its Austin market focus, and premium advisory model.',
};

export default function AboutPage() {
  const metrics = getCompanyMetrics();
  const agents = getAgents();
  const principles = [
    { label: 'Clarity first', icon: Sparkles },
    { label: 'Market context', icon: Landmark },
    { label: 'Disciplined execution', icon: Compass },
  ] as const;

  return (
    <div>
      <MarketingHero
        eyebrow="About Carter & Vale"
        title="A brokerage built around clarity, premium execution, and disciplined market reads."
        description={`${BRAND.name} serves Austin-area residential and commercial clients with an approach that blends advisory depth, client service, and high-signal interface design.`}
        backgroundSrc="/svgs/about.svg"
        highlights={['Broker-led strategy', 'Austin market depth', 'Premium client experience']}
      />

      <MarketingContentShell>
        <div className="grid gap-5 lg:grid-cols-3">
          {metrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card interactive-surface overflow-hidden p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primary/8 p-3 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">How we work</p>
            </div>
            <h2 className="mt-4 text-4xl text-primary">Brokerage service with an operating model that respects capital.</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
              <p>
                The firm grew out of a simple observation: premium real estate clients rarely need more noise. They need
                a cleaner read on value, timing, and fit.
              </p>
              <p>
                That means sharper search tools, more legible market data, better preparation before tours, and a point
                of view on how the asset fits the client’s actual life or balance sheet.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => {
                const CardIcon = principle.icon;

                return (
                  <div key={principle.label} className="rounded-[22px] border border-stroke/60 bg-panel/55 p-4">
                    <CardIcon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-sm font-semibold text-primary">{principle.label}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-primary p-8 text-white shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,163,82,0.22),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-white/62">Service areas</p>
              <p className="mt-4 text-3xl font-semibold">Austin neighborhoods and growth corridors with distinct demand profiles.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {SERVICE_AREAS.map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Team"
            title="Advisors with distinct domain strengths and one shared client standard"
            description="The team spans luxury residential, commercial leasing, investor services, and neighborhood-specific expertise."
          />
        </div>
        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </MarketingContentShell>
    </div>
  );
}
