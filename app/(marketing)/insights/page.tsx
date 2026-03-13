import type { Metadata } from 'next';
import Image from 'next/image';
import { getInsights } from '@/lib/mock-data';
import { InsightCard } from '@/modules/shared/insight-card';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Market insights, buying guides, and real estate intelligence from Carter & Vale Realty Group.',
};

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div>
      {/* Hero section with SVG background */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/svgs/insight.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/80" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Insights
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Editorial context for buyers, operators, and investors.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            Short, decision-oriented reads on Austin market signals, leasing strategy, and residential buying logic.
          </p>
        </div>
      </section>

      {/* Insights grid */}
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-3">
          {insights.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
