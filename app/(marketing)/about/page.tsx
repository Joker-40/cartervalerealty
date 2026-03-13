import type { Metadata } from 'next';
import Image from 'next/image';
import { BRAND, SERVICE_AREAS } from '@/lib/constants';
import { getAgents, getCompanyMetrics } from '@/lib/mock-data';
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

  return (
    <div>
      {/* Hero section with SVG background */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/svgs/about.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            About Carter &amp; Vale
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            A brokerage built around clarity, premium execution, and disciplined market reads.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            {BRAND.name} serves Austin-area residential and commercial clients with an approach that blends advisory depth, client service, and high-signal interface design.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-content space-y-16 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">How we work</p>
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
        </article>
        <article className="surface-card p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Service areas</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="rounded-full bg-panel px-4 py-3 text-sm font-medium text-primary">
                {area}
              </span>
            ))}
          </div>
        </article>
      </div>
      <SectionHeading
        eyebrow="Team"
        title="Advisors with distinct domain strengths and one shared client standard"
        description="The team spans luxury residential, commercial leasing, investor services, and neighborhood-specific expertise."
      />
      <div className="grid gap-5 xl:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
      </div>
    </div>
  );
}
