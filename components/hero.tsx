'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gray-200">
          <Image
            src="/hero-background.png"
            alt="Luxury real estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            {BRAND?.name ?? ''}
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-8">
            {BRAND?.tagline ?? ''}
          </p>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Premier real estate services across Texas - finding your perfect property in Austin, Dallas, and Houston
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="px-8 py-4 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Visit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
