import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Search, Monitor, ShoppingCart } from "lucide-react";
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
    name: `SEO & Web Design ${location.name}`,
    description: `Expert SEO and website design services for businesses in ${location.name}, Staffordshire.`,
    provider: {
      "@type": "LocalBusiness",
      name: "StaffordshireSEO",
      url: "https://www.staffordshireseo.co.uk",
    },
    areaServed: {
      "@type": "Place",
      name: `${location.name}, Staffordshire`,
    },
  };

  const services = [
    {
      icon: Search,
      title: `SEO ${location.name}`,
      description: `Get your ${location.name} business to the top of Google. We deliver proven local SEO results that drive real enquiries.`,
      href: `/services/seo-staffordshire`,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      icon: Monitor,
      title: `Web Design ${location.name}`,
      description: `Bespoke, conversion-focused websites for ${location.name} businesses. Mobile-first, fast, and built to rank.`,
      href: `/services/web-design-staffordshire`,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: ShoppingCart,
      title: `E-commerce ${location.name}`,
      description: `Powerful online stores for ${location.name} retailers. We build Shopify and WooCommerce stores that sell.`,
      href: `/services/ecommerce-staffordshire`,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero */}
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
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
                {location.name}, Staffordshire
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              SEO &amp; Web Design in{" "}
              <span className="gradient-text">{location.name}</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We help {location.name} businesses rank higher on Google, attract more
              local customers, and grow their revenue online. Expert SEO and bespoke
              website design — all from a local Staffordshire team.
            </p>

            {location.description && (
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {location.description}
                {location.population && (
                  <> With a population of around {location.population}, {location.name} has a thriving local business community we know well.</>
                )}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
              >
                Free {location.name} SEO Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this location */}
      <section
        id="services"
        className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="gradient-text">{location.name} Services</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Tailored digital marketing and web design services specifically for{" "}
              {location.name} businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, href, color, bg, border }) => (
              <Link
                key={title}
                href={href}
                className={`group flex flex-col p-7 bg-brand-card border ${border} hover:border-opacity-60 rounded-2xl card-hover`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className={`font-display font-bold text-lg text-white mb-2.5 group-hover:${color} transition-colors`}>
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {description}
                </p>
                <div className={`flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:${color} transition-colors`}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for this location */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Why {location.name} Businesses{" "}
                <span className="gradient-text">Choose Us</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                As a Staffordshire-based agency, we understand the local {location.name}{" "}
                market better than any out-of-town competitor. We know your customers,
                your local competitors, and exactly what it takes to rank in{" "}
                {location.name} search results.
              </p>
              <ul className="space-y-4">
                {[
                  `Deep knowledge of the ${location.name} local market`,
                  "Proven track record of page-one Google rankings",
                  "Transparent monthly reporting with no jargon",
                  "No long-term contracts — earn our business monthly",
                  "Dedicated account manager who knows your business",
                  "Results-focused strategies, not vanity metrics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby areas */}
            {location.nearbyTowns && location.nearbyTowns.length > 0 && (
              <div className="p-8 bg-brand-card border border-white/5 rounded-2xl">
                <h3 className="font-display font-semibold text-white text-lg mb-5">
                  We Also Cover Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {location.nearbyTowns.map((town) => {
                    const nearbyLoc = locations.find(
                      (l) => l.name.toLowerCase() === town.toLowerCase()
                    );
                    return nearbyLoc ? (
                      <Link
                        key={town}
                        href={`/locations/${nearbyLoc.slug}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy border border-white/10 hover:border-brand-gold/30 text-slate-400 hover:text-brand-gold text-sm rounded-full transition-all"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {town}
                      </Link>
                    ) : (
                      <span
                        key={town}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy border border-white/10 text-slate-500 text-sm rounded-full"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {town}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <Link
                    href="/locations"
                    className="text-sm text-brand-gold hover:text-brand-gold-light transition-colors inline-flex items-center gap-1.5"
                  >
                    View all Staffordshire locations <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
