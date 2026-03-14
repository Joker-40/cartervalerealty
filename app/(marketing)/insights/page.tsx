import type { Metadata } from 'next';
import { ArrowRight, ChartColumnBig, Newspaper, Sparkles } from 'lucide-react';
import { getInsights } from '@/lib/mock-data';
import { MarketingContentShell } from '@/modules/layout/marketing-content-shell';
import { MarketingHero } from '@/modules/layout/marketing-hero';
import { InsightCard } from '@/modules/shared/insight-card';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Market insights, buying guides, and real estate intelligence from Carter & Vale Realty Group.',
};

export default function InsightsPage() {
  const insights = getInsights();
  const categories = ['Market Trends', 'Commercial Strategy', 'Investor Guide'];
  const insightTypes = [
    { title: 'Trends', detail: 'Demand shifts across Austin submarkets', icon: ChartColumnBig },
    { title: 'Strategy', detail: 'How operators and founders should think about space', icon: Sparkles },
    { title: 'Action', detail: 'Decision-oriented guidance you can actually use', icon: ArrowRight },
  ] as const;

  return (
    <div>
      <MarketingHero
        eyebrow="Insights"
        title="Editorial context for buyers, operators, and investors."
        description="Short, decision-oriented reads on Austin market signals, leasing strategy, and residential buying logic."
        backgroundSrc="/svgs/insight.svg"
        highlights={['Market trends', 'Commercial strategy', 'Investor guide']}
      />

      <MarketingContentShell>
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="surface-card interactive-surface overflow-hidden p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/12 p-3 text-accent">
                <Newspaper className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Editorial approach</p>
            </div>
            <h2 className="mt-5 text-4xl text-primary">Built for clients who need signal, not content for content’s sake.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              These reads are designed to help buyers, operators, and investors interpret timing, demand shifts, and
              leasing logic without having to decode generic market fluff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-stroke/60 bg-panel/55 px-4 py-3 text-sm font-medium text-primary">
                  {category}
                </span>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-primary p-8 text-white shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,163,82,0.22),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">What you will find here</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {insightTypes.map((item) => {
                  const CardIcon = item.icon;

                  return (
                    <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                      <div className="w-fit rounded-2xl bg-white/10 p-3 text-accent">
                        <CardIcon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-lg font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/72">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {insights.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </MarketingContentShell>
    </div>
  );
}
