import { pipelineLeads } from '@/lib/mock-data';

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Clients</span>
        <h2 className="mt-4 text-3xl text-primary">Lead and client roster</h2>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        {pipelineLeads.map((lead) => (
          <article key={lead.id} className="dashboard-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{lead.stage}</p>
            <h3 className="mt-3 text-2xl text-primary">{lead.name}</h3>
            <p className="mt-2 text-sm text-muted">{lead.interest}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-stroke/60 bg-panel/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Property</p>
                <p className="mt-2 text-sm font-semibold text-primary">{lead.property}</p>
              </div>
              <div className="rounded-2xl border border-stroke/60 bg-panel/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Value</p>
                <p className="mt-2 text-sm font-semibold text-primary">{lead.value}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
