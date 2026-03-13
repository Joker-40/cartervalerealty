'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { MarketSeries } from '@/lib/types';

export function LineChartCard({ series }: { series: MarketSeries }) {
  return (
    <article className="dashboard-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">{series.title}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{series.unit}</p>
        </div>
        <div className="rounded-full bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">{series.delta}</div>
      </div>
      <div className="mt-6 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={series.points}>
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#C9A227" strokeWidth={3} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
