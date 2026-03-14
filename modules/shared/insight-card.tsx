'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, gentleScale } from '@/lib/motion';
import type { InsightArticle } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function InsightCard({ article }: { article: InsightArticle }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true, amount: 0.2 }}
      className="dashboard-card interactive-surface p-6"
    >
      <motion.div variants={gentleScale}>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{article.category}</span>
        <h3 className="mt-4 text-2xl text-primary">{article.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{article.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted">
          <span>{formatDate(article.publishDate)}</span>
          <span>{article.readTime}</span>
        </div>
        <Link href="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read insight
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.article>
  );
}
