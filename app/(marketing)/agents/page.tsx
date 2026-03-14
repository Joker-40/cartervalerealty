import type { Metadata } from 'next';
import { ArrowRight, BriefcaseBusiness, Building2, Sparkles } from 'lucide-react';
import { getAgents } from '@/lib/mock-data';
import { MarketingContentShell } from '@/modules/layout/marketing-content-shell';
import { MarketingHero } from '@/modules/layout/marketing-hero';
import { AgentCard } from '@/modules/shared/agent-card';

export const metadata: Metadata = {
  title: 'Agents',
  description: 'Meet Carter & Vale Realty Group advisors across residential, commercial, and investor services.',
};

export default function AgentsPage() {
  const agents = getAgents();
  const specialties = ['Luxury residences', 'Commercial representation', 'Investor advisory', 'Relocation strategy'];
  const coverageCards = [
    { title: 'Residential', detail: 'Buyer positioning and premium tour strategy', icon: Building2 },
    { title: 'Commercial', detail: 'Leasing logic and operator fit', icon: BriefcaseBusiness },
    { title: 'Investor', detail: 'Yield, risk, and exit-minded framing', icon: Sparkles },
  ] as const;

  return (
    <div>
      <MarketingHero
        eyebrow="Advisory team"
        title="Experienced agents, broker strategists, and investor-minded operators"
        description="Each advisor combines relationship-led service with precise market context and a premium execution standard."
        backgroundSrc="/svgs/agents.svg"
        highlights={['Luxury homes', 'Commercial advisory', 'Investment strategy']}
      />

      <MarketingContentShell>
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="surface-card interactive-surface overflow-hidden p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/12 p-3 text-accent">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">How our advisors operate</p>
            </div>
            <h2 className="mt-5 text-4xl text-primary">Relationship-led, but never light on market signal.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
              Clients work with specialists who can move from neighborhood nuance to negotiation leverage without
              changing tone or losing speed. The experience is meant to feel calm, informed, and decisive.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {specialties.map((specialty) => (
                <div key={specialty} className="rounded-[22px] border border-stroke/60 bg-panel/55 px-4 py-4">
                  <p className="text-sm font-semibold text-primary">{specialty}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-primary p-8 text-white shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,163,82,0.22),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">Advisory coverage</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {coverageCards.map((card) => {
                  const MetricIcon = card.icon;

                  return (
                    <div key={card.title} className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                      <div className="w-fit rounded-2xl bg-white/10 p-3 text-accent">
                        <MetricIcon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-lg font-semibold">{card.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/72">{card.detail}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Match with an advisor
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </MarketingContentShell>
    </div>
  );
}
