import { prisma } from '@/lib/prisma';
import { PropertyCard } from '@/components/property-card';

interface SimilarPropertiesProps {
  currentPropertyId: string;
  city: string;
  propertyType: string;
}

export async function SimilarProperties({ currentPropertyId, city, propertyType }: SimilarPropertiesProps) {
  const properties = await prisma.property.findMany({
    where: {
      id: { not: currentPropertyId },
      OR: [
        { city },
        { propertyType },
      ],
    },
    take: 4,
    include: { agent: true },
  });

  if ((properties?.length ?? 0) === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-serif font-bold text-primary mb-8">
        Similar <span className="text-accent">Properties</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties?.map?.((property) => (
          <PropertyCard key={property?.id ?? ''} property={property} />
        )) ?? []}
      </div>
    </section>
  );
}
