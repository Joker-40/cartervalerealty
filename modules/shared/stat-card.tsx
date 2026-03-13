interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="dashboard-card p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">{label}</p>
      <p className="mt-4 font-serif text-4xl text-primary">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
    </article>
  );
}
