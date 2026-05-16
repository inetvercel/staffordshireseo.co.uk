import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Search, Lightbulb, Building2 } from "lucide-react";
import { locations, getLocationBySlug } from "@/lib/locations";
import CTA from "@/components/CTA";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};

  return {
    title: `SEO Company ${location.name} | ${location.name} SEO Agency | StaffordshireSEO`,
    description: `Looking for an SEO company in ${location.name}? StaffordshireSEO is the trusted local SEO agency getting ${location.name} businesses to page one of Google. Free SEO audit — no obligation.`,
    keywords: [
      `SEO company ${location.name}`,
      `${location.name} SEO company`,
      `SEO agency ${location.name}`,
      `${location.name} SEO agency`,
      `${location.name} SEO`,
      `SEO ${location.name}`,
      `local SEO ${location.name}`,
      `search engine optimisation ${location.name}`,
    ],
    alternates: {
      canonical: `https://www.staffordshireseo.co.uk/locations/${params.slug}`,
    },
  };
}

export default function LocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `SEO Company ${location.name}`,
    description: location.heroSubtext,
    provider: {
      "@type": "LocalBusiness",
      name: "StaffordshireSEO",
      url: "https://www.staffordshireseo.co.uk",
    },
    areaServed: { "@type": "Place", name: `${location.name}, Staffordshire` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero — unique headline + subtext per location */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 30%, rgba(245,158,11,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-6"
            >
              ← All Locations
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
                {location.name}, Staffordshire
                {location.population && (
                  <span className="text-slate-600 font-normal normal-case tracking-normal ml-2">
                    · Pop. {location.population}
                  </span>
                )}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              <span className="gradient-text">{location.heroHeadline.split("—")[0].trim()}</span>
              {location.heroHeadline.includes("—") && (
                <>
                  {" "}—{" "}
                  <span className="text-white">{location.heroHeadline.split("—")[1].trim()}</span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {location.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
              >
                Free {location.name} SEO Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#market"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Why {location.name}?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — unique per location */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-brand-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {location.stats.map(({ value, label }) => (
              <div key={label} className="text-center p-5 bg-brand-card rounded-2xl border border-white/5">
                <span className="font-display font-bold text-2xl text-brand-gold block mb-1">
                  {value}
                </span>
                <span className="text-slate-400 text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market context — unique paragraph + industry tags per location */}
      <section id="market" className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                  The {location.name} Market
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                What Makes{" "}
                <span className="gradient-text">{location.name}</span>{" "}
                Different
              </h2>
              <p className="text-slate-400 leading-relaxed text-base mb-8">
                {location.marketContext}
              </p>
              <div>
                <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">
                  Key local industries
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1.5 bg-brand-navy border border-brand-gold/15 text-slate-300 text-xs rounded-full font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO insight callout — unique per location */}
            <div className="flex flex-col gap-5">
              <div className="p-7 bg-brand-card border border-brand-gold/20 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-3">
                      The {location.name} SEO Opportunity
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {location.seoInsight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nearby areas */}
              {location.nearbyTowns && location.nearbyTowns.length > 0 && (
                <div className="p-6 bg-brand-card border border-white/5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="w-4 h-4 text-slate-500" />
                    <h3 className="text-sm font-semibold text-slate-400">
                      We also cover nearby areas
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyTowns.map((town) => {
                      const nearbyLoc = locations.find(
                        (l) => l.name.toLowerCase() === town.toLowerCase()
                      );
                      return nearbyLoc ? (
                        <Link
                          key={town}
                          href={`/locations/${nearbyLoc.slug}`}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy border border-white/10 hover:border-brand-gold/30 text-slate-400 hover:text-brand-gold text-xs rounded-full transition-all"
                        >
                          <MapPin className="w-3 h-3" />
                          {town}
                        </Link>
                      ) : (
                        <span
                          key={town}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy border border-white/10 text-slate-600 text-xs rounded-full"
                        >
                          <MapPin className="w-3 h-3" />
                          {town}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <Link
                      href="/locations"
                      className="text-xs text-brand-gold hover:text-brand-gold-light transition-colors inline-flex items-center gap-1"
                    >
                      View all Staffordshire locations <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why us — unique reasons per location */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Why {location.name} Businesses{" "}
              <span className="gradient-text">Choose StaffordshireSEO</span>
            </h2>
            <p className="text-slate-400">
              We don&apos;t apply a generic template to every town. Here&apos;s
              specifically why our approach works for {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
            {location.uniqueReasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 p-6 bg-brand-card border border-white/5 rounded-2xl"
              >
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold hover:scale-105"
            >
              Get Your Free {location.name} SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
