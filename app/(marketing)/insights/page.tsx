import type { Metadata } from 'next';
import { getInsights } from '@/lib/mock-data';
import { InsightCard } from '@/modules/shared/insight-card';
import { SectionHeading } from '@/modules/shared/section-heading';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Market insights, buying guides, and real estate intelligence from Carter & Vale Realty Group.',
};

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div className="mx-auto max-w-content space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Insights"
        title="Editorial context for buyers, operators, and investors."
        description="Short, decision-oriented reads on Austin market signals, leasing strategy, and residential buying logic."
      />
      <div className="grid gap-5 xl:grid-cols-3">
        {insights.map((article) => (
          <InsightCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
