import Image from 'next/image';
import { Mail, Phone, Award } from 'lucide-react';
import type { Agent } from '@/lib/types';

interface AgentContactProps {
  agent: Agent;
}

export function AgentContact({ agent }: AgentContactProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h3 className="text-xl font-serif font-bold text-primary mb-4">Your Agent</h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <Image src={agent?.photoUrl ?? ''} alt={agent?.name ?? ''} fill className="object-cover" />
        </div>
        <div>
          <div className="font-bold text-lg text-primary">{agent?.name ?? ''}</div>
          <div className="text-sm text-accent font-medium">{agent?.title ?? ''}</div>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <Award size={14} className="text-accent" />
            <span>{agent?.yearsExperience ?? 0} years</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{agent?.bio ?? ''}</p>

      <div className="space-y-2">
        <a
          href={`mailto:${agent?.email ?? ''}`}
          className="flex items-center gap-2 w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          <Mail size={18} />
          Email Agent
        </a>
        <a
          href={`tel:${agent?.phone ?? ''}`}
          className="flex items-center gap-2 w-full px-4 py-2 bg-accent text-primary font-medium rounded-md hover:bg-accent/90 transition-colors duration-200"
        >
          <Phone size={18} />
          Call Agent
        </a>
      </div>
    </div>
  );
}
