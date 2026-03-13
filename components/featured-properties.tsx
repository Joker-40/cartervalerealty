import { prisma } from '@/lib/prisma';
import { PropertyCard } from '@/components/property-card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function FeaturedProperties() {
  const properties = await prisma.property.findMany({
    where: { featured: true },
    take: 4,
    include: { agent: true },
  });

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Featured <span className="text-accent">Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {properties?.map?.((property) => (
            <PropertyCard key={property?.id ?? ''} property={property} />
          )) ?? []}
        </div>

        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Properties
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
