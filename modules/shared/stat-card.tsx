'use client';

import { motion } from 'framer-motion';
import { fadeUp, gentleScale } from '@/lib/motion';

interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true, amount: 0.25 }}
      className="dashboard-card interactive-surface shimmer-border p-6"
    >
      <motion.div variants={gentleScale}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{label}</p>
        <p className="mt-4 font-serif text-4xl text-primary">{value}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
      </motion.div>
    </motion.article>
  );
}
