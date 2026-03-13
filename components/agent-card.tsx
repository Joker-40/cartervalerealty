'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Award } from 'lucide-react';
import type { Agent } from '@/lib/types';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative aspect-square bg-gray-200">
        <Image
          src={agent?.photoUrl ?? ''}
          alt={agent?.name ?? 'Agent'}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-primary mb-1">{agent?.name ?? ''}</h3>
        <p className="text-sm text-accent font-medium mb-3">{agent?.title ?? ''}</p>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Award size={16} className="text-accent" />
          <span>{agent?.yearsExperience ?? 0} years experience</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail size={16} className="text-accent flex-shrink-0" />
            <a href={`mailto:${agent?.email ?? ''}`} className="hover:text-accent transition-colors truncate">
              {agent?.email ?? ''}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} className="text-accent flex-shrink-0" />
            <a href={`tel:${agent?.phone ?? ''}`} className="hover:text-accent transition-colors">
              {agent?.phone ?? ''}
            </a>
          </div>
        </div>

        <Link
          href={`/agents#${agent?.id ?? ''}`}
          className="block w-full text-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
