'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  testimonialText: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientTitle: 'Business Owner',
    testimonialText: 'Carter & Vale helped us find the perfect office space for our growing startup. Their professionalism and market knowledge made the process seamless.',
    rating: 5,
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    clientTitle: 'Real Estate Investor',
    testimonialText: 'The investment properties they recommended have exceeded our ROI expectations. Their team truly understands the Texas market.',
    rating: 5,
  },
  {
    id: '3',
    clientName: 'Emily Rodriguez',
    clientTitle: 'Homeowner',
    testimonialText: 'We found our dream home thanks to Carter & Vale. The entire team was supportive, responsive, and genuinely cared about our needs.',
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials?.length ?? 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials?.length ?? 1)) % (testimonials?.length ?? 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials?.length ?? 1));
  };

  const current = testimonials?.[currentIndex];

  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current?.id ?? currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-8 md:p-12"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array?.from?.({ length: current?.rating ?? 5 })?.map?.((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  )) ?? []}
                </div>

                <p className="text-lg md:text-xl text-gray-700 mb-8 italic text-center leading-relaxed">
                  &ldquo;{current?.testimonialText ?? ''}&rdquo;
                </p>

                <div className="text-center">
                  <div className="font-bold text-xl text-primary">{current?.clientName ?? ''}</div>
                  <div className="text-sm text-accent font-medium">{current?.clientTitle ?? ''}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials?.map?.((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            )) ?? []}
          </div>
        </div>
      </div>
    </section>
  );
}
