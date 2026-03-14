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
    <section className="bg-canvas px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pb-6 lg:pt-8">
      <div
        className="relative mx-auto max-w-content overflow-hidden rounded-[34px] border border-stroke/50 shadow-soft min-h-[320px] sm:min-h-[360px] lg:min-h-0"
        style={{ aspectRatio: '3 / 1' }}
      >
        <div className="absolute inset-0">
          <Image src={backgroundSrc} alt="" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" />
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
          className="relative flex h-full items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="relative max-w-4xl overflow-hidden rounded-[30px] border border-white/12 bg-primary/68 px-6 py-6 shadow-soft backdrop-blur-lg sm:px-8 lg:max-w-3xl lg:px-9">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
            <motion.span
              variants={fadeUp}
              className="relative inline-flex rounded-full border border-white/24 bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="relative mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="relative mt-4 max-w-2xl text-sm leading-7 text-white sm:text-base"
            >
              {description}
            </motion.p>
            {highlights.length ? (
              <motion.div variants={fadeUp} className="relative mt-6 flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/18 bg-white/14 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white"
                  >
                    {highlight}
                  </span>
                ))}
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
