import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/locations";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Company Covering All of Staffordshire | Local Locations | StaffordshireSEO",
  description:
    "StaffordshireSEO is the SEO company serving every town across Staffordshire. Find your local area and discover how our SEO agency can get your business to page one of Google.",
  keywords: [
    "SEO company staffordshire locations",
    "local SEO staffordshire towns",
    "staffordshire SEO agency coverage",
    "SEO near me staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Areas We Cover
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            SEO &amp; Web Design Across{" "}
            <span className="gradient-text">All of Staffordshire</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From Cannock to Tamworth, Lichfield to Newcastle-under-Lyme — we deliver
            expert local SEO and bespoke web design to businesses throughout
            Staffordshire.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex flex-col p-6 bg-brand-card border border-white/5 hover:border-brand-gold/30 rounded-2xl transition-all duration-200 hover:bg-brand-card-light card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-white text-base group-hover:text-brand-gold transition-colors">
                        {location.name}
                      </h2>
                      {location.population && (
                        <p className="text-xs text-slate-500">
                          Pop. {location.population.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>

                {location.description && (
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {location.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["SEO", "Web Design", "Local SEO"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-brand-navy border border-white/5 text-slate-500 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
