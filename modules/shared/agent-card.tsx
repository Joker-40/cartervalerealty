import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import type { AgentSummary } from '@/lib/types';

export function AgentCard({ agent }: { agent: AgentSummary }) {
  return (
    <article className="dashboard-card p-6">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
          <Image
            src={agent.headshot}
            alt={agent.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-serif text-2xl text-primary">{agent.name}</p>
          <p className="mt-1 text-sm font-medium text-accent">{agent.title}</p>
          <p className="mt-1 text-sm text-muted">{agent.yearsExperience} years experience</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{agent.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {agent.specialties.map((specialty) => (
          <span key={specialty} className="rounded-full bg-panel px-3 py-2 text-xs font-medium text-primary">
            {specialty}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-3 text-sm text-muted">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-accent" />
          {agent.phone}
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-accent" />
          {agent.email}
        </div>
      </div>
      <Link
        href={`/contact?agent=${encodeURIComponent(agent.name)}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        Contact advisor
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
