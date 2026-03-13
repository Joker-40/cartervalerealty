'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Trophy, TrendingUp } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export function CompanyOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Building2, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Trophy, value: '12', label: 'Years Experience' },
    { icon: TrendingUp, value: '$2B+', label: 'Total Value' },
  ];

  return (
    <section className="py-20 bg-secondary-bg" ref={ref}>
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            About <span className="text-accent">{BRAND?.name ?? ''}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Since {BRAND?.founded ?? ''}, we have been dedicated to connecting clients with their ideal properties. 
            Our expertise spans commercial real estate, office leasing, residential homes, and investment properties 
            across Texas&apos;s most vibrant markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats?.map?.((stat, index) => {
            const Icon = stat?.icon;
            return (
              <motion.div
                key={stat?.label ?? index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {Icon && <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />}
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat?.value ?? ''}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat?.label ?? ''}</div>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}
