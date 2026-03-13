import type { Metadata } from 'next';
import Image from 'next/image';
import { getAgents } from '@/lib/mock-data';
import { AgentCard } from '@/modules/shared/agent-card';

export const metadata: Metadata = {
  title: 'Agents',
  description: 'Meet Carter & Vale Realty Group advisors across residential, commercial, and investor services.',
};

export default function AgentsPage() {
  const agents = getAgents();

  return (
    <div>
      {/* Hero section with SVG background */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/svgs/agents.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Advisory team
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Experienced agents, broker strategists, and investor-minded operators
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            Each advisor combines relationship-led service with precise market context and a premium execution standard.
          </p>
        </div>
      </section>

      {/* Agents grid */}
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
