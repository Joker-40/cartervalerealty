'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import type { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/properties/${property?.id ?? ''}`}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
            <Image
              src={property?.galleryImages?.[0] ?? ''}
              alt={property?.title ?? 'Property'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-primary text-sm font-semibold rounded-md">
              {property?.transactionType ?? ''}
            </div>
          </div>

          <div className="p-6">
            <div className="mb-2">
              <div className="text-2xl font-bold text-accent mb-1">
                {formatPrice(property?.price ?? 0)}
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-2 line-clamp-1">
                {property?.title ?? ''}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={16} className="text-accent flex-shrink-0" />
              <span className="text-sm line-clamp-1">
                {property?.address ?? ''}, {property?.city ?? ''}, {property?.state ?? ''}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-200 pt-4">
              {property?.bedrooms != null && (
                <div className="flex items-center gap-1">
                  <Bed size={16} className="text-accent" />
                  <span>{property?.bedrooms ?? 0}</span>
                </div>
              )}
              {property?.bathrooms != null && (
                <div className="flex items-center gap-1">
                  <Bath size={16} className="text-accent" />
                  <span>{property?.bathrooms ?? 0}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Square size={16} className="text-accent" />
                <span>{property?.squareFootage?.toLocaleString?.() ?? 0} sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
