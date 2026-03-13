'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Award, ChevronDown, ChevronUp } from 'lucide-react';
import type { Agent } from '@/lib/types';

interface AgentProfileCardProps {
  agent: Agent;
}

export function AgentProfileCard({ agent }: AgentProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      id={agent?.id ?? ''}
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
        <h3 className="text-2xl font-serif font-bold text-primary mb-1">{agent?.name ?? ''}</h3>
        <p className="text-accent font-medium mb-2">{agent?.title ?? ''}</p>
        <p className="text-sm text-gray-600 mb-4">Specialization: {agent?.specialization ?? ''}</p>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
          <Award size={18} className="text-accent" />
          <span className="font-medium">{agent?.yearsExperience ?? 0} years of experience</span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{agent?.bio ?? ''}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-accent font-medium mb-4 hover:text-accent/80 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Read Bio <ChevronDown size={16} />
            </>
          )}
        </button>

        <div className="space-y-2">
          <a
            href={`mailto:${agent?.email ?? ''}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            <Mail size={18} />
            Email
          </a>
          <a
            href={`tel:${agent?.phone ?? ''}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-accent text-primary font-medium rounded-md hover:bg-accent/90 transition-colors duration-200"
          >
            <Phone size={18} />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  );
}
