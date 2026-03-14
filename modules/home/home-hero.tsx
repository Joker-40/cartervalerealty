'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, MapPinned, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { HeroSearchForm } from '@/modules/home/hero-search-form';

const signalCards = [
  {
    label: 'Luxury demand',
    value: '+8.2%',
    detail: 'Downtown momentum',
    icon: BarChart3,
  },
  {
    label: 'Tour velocity',
    value: '23 Days',
    detail: 'Premium inventory median',
    icon: Sparkles,
  },
  {
    label: 'Coverage',
    value: '6 districts',
    detail: 'Austin growth corridors',
    icon: MapPinned,
  },
] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Austin skyline"
          fill
          priority
          className="object-cover scale-[1.04]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/84 to-primary/72" />
        <div className="ambient-orb left-[8%] top-[16%] h-56 w-56 bg-accent/25" />
        <div className="ambient-orb right-[6%] top-[8%] h-64 w-64 bg-white/10 [animation-delay:2s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas via-canvas/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]"
        >
          <div className="max-w-3xl">
            <motion.span
              variants={fadeUp}
              className="eyebrow border-white/20 bg-white/10 text-white"
            >
              Austin brokerage intelligence platform
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl xl:text-[2.4rem]"
            >
              Premium discovery for real homes and smart capital decisions.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base"
            >
              {BRAND.name} combines brokerage expertise, neighborhood analytics, and premium service design for
              buyers, investors, and operators navigating Austin.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="interactive-surface shimmer-border inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-gold"
              >
                Explore listings
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="interactive-surface inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Broker login
              </Link>
            </motion.div>
            {/* <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2.5">
              {['Neighborhood intelligence', 'Yield snapshots', 'Broker-led tours'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/76"
                >
                  {chip}
                </span>
              ))}
            </motion.div> */}
            <motion.div variants={fadeUp} className="max-w-[880px]">
              <HeroSearchForm />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative hidden xl:block">
            <div className="absolute inset-0 rounded-[34px] border border-white/12 bg-white/8 backdrop-blur-md" />
            <div className="relative grid gap-4 p-4">
              {signalCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.label}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 7 + index,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="rounded-[28px] border border-white/12 bg-white/10 p-5 text-white shadow-soft backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/62">{card.label}</p>
                        <p className="mt-3 text-3xl font-semibold">{card.value}</p>
                        <p className="mt-2 text-sm text-white/72">{card.detail}</p>
                      </div>
                      <div className="rounded-2xl bg-white/12 p-3 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
