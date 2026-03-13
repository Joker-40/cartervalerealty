import { dashboardCharts, dashboardMetrics, pipelineLeads } from '@/lib/mock-data';
import { PipelineBoard } from '@/modules/workspace/pipeline-board';
import { StatCard } from '@/modules/shared/stat-card';
import { LineChartCard } from '@/modules/charts/line-chart-card';

export default function DashboardPage() {
  const chartSeries = [
    {
      id: 'revenue',
      title: 'Monthly revenue',
      unit: '$M',
      delta: '+9.1%',
      points: dashboardCharts.revenue,
    },
    {
      id: 'views',
      title: 'Property views',
      unit: 'Views',
      delta: '+17%',
      points: dashboardCharts.views,
    },
    {
      id: 'conversion',
      title: 'Lead conversion',
      unit: '%',
      delta: '+6 pts',
      points: dashboardCharts.conversion,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-5 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} detail={metric.delta} />
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {chartSeries.map((series) => (
          <LineChartCard key={series.id} series={series} />
        ))}
      </div>
      <section className="space-y-4">
        <div>
          <span className="eyebrow">CRM pipeline</span>
          <h2 className="mt-4 text-3xl text-primary">Lead movement across the active deal funnel</h2>
        </div>
        <PipelineBoard initialItems={pipelineLeads} />
      </section>
    </div>
  );
}
