'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

interface MarketingHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  backgroundSrc: string;
  highlights?: string[];
}

export function MarketingHero({
  eyebrow,
  title,
  description,
  backgroundSrc,
  highlights = [],
}: MarketingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image src={backgroundSrc} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-primary/36" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/52 via-primary/84 to-primary" />
        <div className="absolute inset-y-0 left-0 w-[74%] bg-gradient-to-r from-primary via-primary/88 to-transparent" />
        <div className="ambient-orb left-[8%] top-[14%] h-44 w-44 bg-accent/20" />
        <div className="ambient-orb right-[10%] top-[18%] h-52 w-52 bg-white/10 [animation-delay:1.8s]" />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="relative max-w-4xl overflow-hidden rounded-[32px] border border-white/12 bg-primary/68 px-6 py-8 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.62)] backdrop-blur-lg sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
          <motion.span
            variants={fadeUp}
            className="relative inline-flex rounded-full border border-white/24 bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.36)] md:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="relative mt-5 max-w-2xl text-base leading-7 text-white"
          >
            {description}
          </motion.p>
          {highlights.length ? (
            <motion.div variants={fadeUp} className="relative mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/18 bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
