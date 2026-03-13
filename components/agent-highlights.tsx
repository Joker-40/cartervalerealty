import { prisma } from '@/lib/prisma';
import { AgentCard } from '@/components/agent-card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function AgentHighlights() {
  const agents = await prisma.agent.findMany({
    take: 4,
    orderBy: { yearsExperience: 'desc' },
  });

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Meet Our Expert <span className="text-accent">Agents</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team brings years of expertise to help you find your perfect property
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {agents?.map?.((agent) => (
            <AgentCard key={agent?.id ?? ''} agent={agent} />
          )) ?? []}
        </div>

        <div className="text-center">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Agents
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
