'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
    </motion.div>
  );
}
