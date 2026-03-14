'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { TestimonialModel } from '@/lib/types';
import { fadeUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    filter: 'blur(8px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    filter: 'blur(8px)',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function TestimonialsCarousel({ testimonials }: { testimonials: TestimonialModel[] }) {
  const [[index, direction], setState] = useState([0, 0]);
  const activeTestimonial = testimonials[index];

  function paginate(nextDirection: number) {
    setState(([current]) => [
      (current + nextDirection + testimonials.length) % testimonials.length,
      nextDirection,
    ]);
  }

  useEffect(() => {
    const timer = window.setInterval(() => paginate(1), 6500);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  if (!activeTestimonial) {
    return null;
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="surface-card relative overflow-hidden bg-primary p-6 text-white sm:p-8 lg:p-10"
    >
      <div className="ambient-orb left-[8%] top-[16%] h-40 w-40 bg-accent/30" />
      <div className="ambient-orb right-[8%] top-[24%] h-48 w-48 bg-white/10 [animation-delay:1.7s]" />
      <div className="relative grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-end">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
            Client perspective
          </span>
          <h3 className="text-3xl font-semibold leading-tight">
            Premium service should feel confident, not performative.
          </h3>
          <p className="text-sm leading-7 text-white/70">
            Rotate through recent client notes on acquisition discipline, tour planning, and advisory clarity.
          </p>
        </div>

        <div className="min-h-[250px]">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.article
              key={activeTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-[28px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: activeTestimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-white/35" />
              </div>
              <p className="mt-6 text-lg leading-8 text-white/92">{activeTestimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sm font-semibold text-primary">
                  {activeTestimonial.avatarLabel}
                </div>
                <div>
                  <p className="font-semibold text-white">{activeTestimonial.clientName}</p>
                  <p className="text-sm text-white/70">{activeTestimonial.propertyType}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 lg:flex-col">
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="interactive-surface inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            className="interactive-surface inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2">
        {testimonials.map((testimonial, testimonialIndex) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() =>
              setState([testimonialIndex, testimonialIndex > index ? 1 : -1])
            }
            className={cn(
              'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition',
              testimonialIndex === index
                ? 'bg-accent text-primary'
                : 'border border-white/14 bg-white/8 text-white/70 hover:text-white',
            )}
            aria-label={`Show testimonial from ${testimonial.clientName}`}
          >
            {testimonial.avatarLabel}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
