import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Bath, BedDouble, CalendarRange, MapPin, Maximize2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getFeaturedProperties, getPropertyBySlug } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';
import { LeadForm } from '@/modules/properties/lead-form';
import { PropertyCard } from '@/modules/listings/property-card';

const PropertyTabs = dynamic(
  () => import('@/modules/properties/property-tabs').then((module) => module.PropertyTabs),
  {
    loading: () => <div className="dashboard-card p-6 text-sm text-muted">Loading market modules…</div>,
  },
);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: 'Property not found',
    };
  }

  return {
    title: property.title,
    description: property.summary,
    openGraph: {
      title: property.title,
      description: property.summary,
      images: [property.coverImage],
    },
  };
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = getFeaturedProperties().filter((item) => item.id !== property.id).slice(0, 2);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.title,
    description: property.summary,
    url: `https://cartervalerealty.example/properties/${property.slug}`,
    image: property.gallery,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zipCode,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: property.price,
    },
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-stroke/70 bg-panel">
            <Image src={property.gallery[0]} alt={property.title} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 60vw" priority />
          </div>
          <div className="grid gap-4">
            {property.gallery.slice(1).map((image, index) => (
              <div key={`${image}-${index}`} className="relative min-h-[200px] overflow-hidden rounded-[28px] border border-stroke/70 bg-panel">
                <Image src={image} alt={`${property.title} gallery image ${index + 2}`} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 30vw" />
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="dashboard-card p-6">
            <div className="flex flex-wrap gap-2">
              {property.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl text-primary">{property.title}</h1>
            <p className="mt-3 text-sm leading-7 text-muted">{property.summary}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              {property.address}, {property.city}, {property.state}
            </div>
            <p className="mt-6 font-serif text-5xl text-primary">{formatPrice(property.price)}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-stroke/60 bg-panel/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Property type</p>
                <p className="mt-2 text-lg font-semibold text-primary">{property.propertyType}</p>
              </div>
              <div className="rounded-[22px] border border-stroke/60 bg-panel/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{property.heroStat.label}</p>
                <p className="mt-2 text-lg font-semibold text-primary">{property.heroStat.value}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-muted sm:grid-cols-2">
              {property.bedrooms ? (
                <div className="inline-flex items-center gap-2 rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3">
                  <BedDouble className="h-4 w-4 text-accent" />
                  {property.bedrooms} bedrooms
                </div>
              ) : null}
              {property.bathrooms ? (
                <div className="inline-flex items-center gap-2 rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3">
                  <Bath className="h-4 w-4 text-accent" />
                  {property.bathrooms} bathrooms
                </div>
              ) : null}
              <div className="inline-flex items-center gap-2 rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3">
                <Maximize2 className="h-4 w-4 text-accent" />
                {property.squareFeet.toLocaleString()} sq ft
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-stroke/60 bg-panel/50 px-4 py-3">
                <CalendarRange className="h-4 w-4 text-accent" />
                Built {property.yearBuilt}
              </div>
            </div>
          </div>
          <div className="dashboard-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Assigned advisor</p>
            <div className="mt-4 flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={property.agent.headshot}
                  alt={property.agent.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h2 className="text-2xl text-primary">{property.agent.name}</h2>
                <p className="mt-1 text-sm text-muted">{property.agent.title}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{property.agent.bio}</p>
            <div className="mt-5 space-y-2 text-sm text-muted">
              <p>{property.agent.phone}</p>
              <p>{property.agent.email}</p>
            </div>
            <div className="mt-5 grid gap-2 text-sm">
              <Link href="/contact" className="rounded-2xl bg-primary px-4 py-3 text-center font-semibold text-white shadow-gold">
                Call advisor
              </Link>
              <Link href="/contact" className="rounded-2xl border border-stroke/70 bg-white px-4 py-3 text-center font-semibold text-primary">
                Schedule visit
              </Link>
            </div>
          </div>
          <LeadForm property={property} />
        </aside>
      </section>

      <PropertyTabs property={property} />

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Similar opportunities</span>
            <h2 className="mt-4 text-3xl text-primary">Related Carter &amp; Vale inventory</h2>
          </div>
          <Link href="/properties" className="text-sm font-semibold text-primary">
            Back to search
          </Link>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          {relatedProperties.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
