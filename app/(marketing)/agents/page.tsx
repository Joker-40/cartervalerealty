import type { Metadata } from 'next';
import { getAgents } from '@/lib/mock-data';
import { AgentCard } from '@/modules/shared/agent-card';
import { SectionHeading } from '@/modules/shared/section-heading';

export const metadata: Metadata = {
  title: 'Agents',
  description: 'Meet Carter & Vale Realty Group advisors across residential, commercial, and investor services.',
};

export default function AgentsPage() {
  const agents = getAgents();

  return (
    <div className="mx-auto max-w-content space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Advisory team"
        title="Experienced agents, broker strategists, and investor-minded operators"
        description="Each advisor combines relationship-led service with precise market context and a premium execution standard."
      />
      <div className="grid gap-5 xl:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
