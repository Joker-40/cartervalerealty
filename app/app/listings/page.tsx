import Link from 'next/link';
import { getProperties } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';

export default function WorkspaceListingsPage() {
  const properties = getProperties();

  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Listings</span>
        <h2 className="mt-4 text-3xl text-primary">Active inventory overview</h2>
      </div>
      <div className="grid gap-4">
        {properties.map((property) => (
          <article key={property.id} className="dashboard-card grid gap-4 p-5 lg:grid-cols-[1.2fr_0.8fr_0.7fr_160px] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">{property.transactionType}</p>
              <h3 className="mt-2 text-2xl text-primary">{property.title}</h3>
              <p className="mt-2 text-sm text-muted">{property.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Price</p>
              <p className="mt-2 font-serif text-3xl text-primary">{formatPrice(property.price)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Status</p>
              <p className="mt-2 rounded-full bg-panel px-3 py-2 text-sm font-medium text-primary">{property.badges[0]}</p>
            </div>
            <Link
              href={`/properties/${property.slug}`}
              className="inline-flex justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white"
            >
              View
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
