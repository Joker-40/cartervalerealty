import { mapsAdapter } from '@/lib/adapters';
import type { PropertyDetailModel } from '@/lib/types';

export function MapCanvas({
  properties,
  compact = false,
}: {
  properties: PropertyDetailModel[];
  compact?: boolean;
}) {
  const map = mapsAdapter.getCollectionMap(properties);

  return (
    <div className="dashboard-card relative overflow-hidden p-5">
      <div className="grid-pattern absolute inset-0 opacity-60" />
      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-primary">Market map</h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{map.note}</p>
        </div>
        <div className="rounded-full bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {mapsAdapter.provider}
        </div>
      </div>
      <div className={`${compact ? 'mt-6 h-[280px]' : 'mt-8 h-[420px]'} relative overflow-hidden rounded-[24px] border border-stroke/60 bg-primary`}>
        {map.markers.map((marker, index) => (
          <div
            key={marker.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-primary shadow-soft"
            style={{
              left: `${22 + ((index * 17) % 56)}%`,
              top: `${18 + ((index * 19) % 58)}%`,
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            {marker.label}
          </div>
        ))}
      </div>
    </div>
  );
}
