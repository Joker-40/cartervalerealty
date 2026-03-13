import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { getAgents, getCompanyMetrics, getFeaturedProperties, getInsights, getTestimonials } from '@/lib/mock-data';
import { formatCompactNumber } from '@/lib/utils';
import { HeroSearchForm } from '@/modules/home/hero-search-form';
import { PropertyCard } from '@/modules/listings/property-card';
import { AgentCard } from '@/modules/shared/agent-card';
import { InsightCard } from '@/modules/shared/insight-card';
import { SectionHeading } from '@/modules/shared/section-heading';
import { StatCard } from '@/modules/shared/stat-card';

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const agents = getAgents().slice(0, 3);
  const metrics = getCompanyMetrics();
  const insights = getInsights();
  const testimonials = getTestimonials();

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Austin skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <span className="eyebrow border-white/20 bg-white/10 text-white">Austin brokerage intelligence platform</span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-white md:text-7xl">
              Premium discovery for real homes and smart capital decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {BRAND.name} combines brokerage expertise, neighborhood analytics, and premium service design for
              buyers, investors, and operators navigating Austin.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/properties" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-gold">
                Explore listings
              </Link>
              <Link href="/login" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                Broker login
              </Link>
            </div>
          </div>
          <HeroSearchForm />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured listings"
          title="High-conviction opportunities across residential and commercial segments"
          description="Every listing combines premium presentation with market context so buyers can evaluate not just the asset, but the strategy around it."
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Link href="/properties?segment=Commercial" className="surface-card overflow-hidden p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Commercial Properties</p>
            <h2 className="mt-4 text-4xl text-primary">Broker-grade leasing, retail, and mixed-use visibility.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
              Discover Class A office suites, street-facing retail, and growth-corridor mixed-use assets with leasing
              and underwriting context built into the experience.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View commercial inventory
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link href="/properties?segment=Residential" className="surface-card overflow-hidden p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Residential Homes</p>
            <h2 className="mt-4 text-4xl text-primary">Modern homes, refined search, and neighborhood intelligence.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
              Compare premium residences by location, lifestyle signal, and long-term value drivers instead of relying
              on generic listing grids.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View residential homes
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Company profile"
          title="Two decades of Austin market context, not just transaction processing"
          description="Our team advises on positioning, pricing, and investment quality across high-value residences, commercial leasing, and growth-market acquisitions."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {metrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-card p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Intelligence layer</p>
            <h2 className="mt-4 text-4xl text-primary">Designed more like a financial product than a listing brochure.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
              Search intent, live filters, market charts, and broker dashboards work together to help clients move from
              curiosity to conviction. The interface borrows the confidence of modern SaaS dashboards while staying
              warm enough for a brokerage brand.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Properties tracked', formatCompactNumber(438)],
                ['Saved client searches', formatCompactNumber(1920)],
                ['Market signals reviewed weekly', formatCompactNumber(280)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[22px] border border-stroke/60 bg-panel/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                  <p className="mt-3 font-serif text-3xl text-primary">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Coverage</p>
            <h3 className="mt-4 text-3xl text-primary">Austin, Westlake, Mueller, The Domain, East Austin, Round Rock</h3>
            <p className="mt-5 text-sm leading-7 text-muted">
              Residential moves, founder-driven office needs, flagship retail placements, and long-hold acquisitions
              all supported by Carter &amp; Vale’s advisory model.
            </p>
            <div className="mt-8 rounded-[24px] border border-stroke/60 bg-primary p-6 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Client service principle</p>
              <p className="mt-4 text-lg leading-8">
                The right transaction should still make sense after the excitement wears off. Our job is to keep the
                numbers and the human outcome aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Advisors"
          title="A cross-functional team built for high-value transactions"
          description="Residential specialists, commercial strategists, and investment-focused advisors working from the same intelligence layer."
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients describe the experience as clear, data-driven, and unusually calm."
          description="The premium interface is supported by premium service delivery. The transaction should feel informed from the first search to the closing table."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="dashboard-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white">
                  {testimonial.avatarLabel}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.clientName}</p>
                  <p className="text-sm text-muted">{testimonial.propertyType}</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-muted">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Market reads that help clients move faster and more intelligently"
          description="A curated editorial layer keeps buyers and operators current on trends, neighborhood shifts, and portfolio logic."
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {insights.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
