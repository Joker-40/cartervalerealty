import { dashboardCharts, getInsights } from '@/lib/mock-data';
import { LineChartCard } from '@/modules/charts/line-chart-card';
import { InsightCard } from '@/modules/shared/insight-card';

export default function AnalyticsPage() {
  const insights = getInsights();
  const series = [
    { id: 'revenue', title: 'Revenue trend', unit: '$M', delta: '+9.1%', points: dashboardCharts.revenue },
    { id: 'views', title: 'View velocity', unit: 'views', delta: '+17%', points: dashboardCharts.views },
    { id: 'conversion', title: 'Lead conversion', unit: '%', delta: '+6 pts', points: dashboardCharts.conversion },
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Analytics</span>
        <h2 className="mt-4 text-3xl text-primary">Operational and market performance at a glance</h2>
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {series.map((item) => (
          <LineChartCard key={item.id} series={item} />
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {insights.map((article) => (
          <InsightCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
