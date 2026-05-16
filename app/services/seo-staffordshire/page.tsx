import type { Metadata } from "next";
import Link from "next/link";
import { Search, CheckCircle, ArrowRight, TrendingUp, MapPin, BarChart2, FileText, Link2 } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Company Staffordshire | SEO Services & Agency | StaffordshireSEO",
  description:
    "Staffordshire's trusted SEO company delivering proven page-one Google rankings. Local SEO, technical SEO, link building and content from an SEO agency that guarantees transparency. Free audit.",
  keywords: [
    "SEO company staffordshire",
    "SEO agency staffordshire",
    "staffordshire SEO company",
    "staffordshire SEO agency",
    "SEO staffordshire",
    "local SEO staffordshire",
    "search engine optimisation staffordshire",
    "google ranking staffordshire",
    "SEO services staffordshire",
    "cannock SEO",
    "tamworth SEO",
    "lichfield SEO",
    "stafford SEO",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/services/seo-staffordshire",
  },
};

const seoServices = [
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate Google Maps and local results. We optimise your Google Business Profile and build local citations across Staffordshire.",
    id: "local-seo",
  },
  {
    icon: BarChart2,
    title: "On-Page SEO",
    description:
      "We optimise every page for your target keywords — titles, meta descriptions, headings, content, internal links and structured data.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "SEO-rich content that ranks and converts. Blog posts, landing pages and location pages targeting Staffordshire search terms.",
    id: "content",
  },
  {
    icon: Link2,
    title: "Link Building",
    description:
      "High-authority backlinks from relevant UK and Staffordshire sites that build your domain authority and rankings.",
  },
  {
    icon: TrendingUp,
    title: "Technical SEO",
    description:
      "Full technical audit and fixes — site speed, Core Web Vitals, crawlability, schema markup and more.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "In-depth keyword research to find the most valuable search terms for your Staffordshire business and target audience.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Staffordshire",
  description:
    "Local SEO and search engine optimisation services for businesses across Staffordshire.",
  provider: {
    "@type": "LocalBusiness",
    name: "StaffordshireSEO",
    url: "https://www.staffordshireseo.co.uk",
  },
  areaServed: { "@type": "Place", name: "Staffordshire, UK" },
  serviceType: "Search Engine Optimisation",
};

export default function SEOStaffordshirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-6"
            >
              ← Back to Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                SEO Services
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              SEO{" "}
              <span className="gradient-text">Staffordshire</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We get Staffordshire businesses to the top of Google. Our proven local SEO
              strategies drive more organic traffic, more enquiries, and more revenue —
              with full transparency and monthly reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
              >
                Get Free SEO Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#seo-services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Our SEO Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section
        id="seo-services"
        className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="gradient-text">SEO Services</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A complete, end-to-end SEO service covering everything your Staffordshire
              business needs to rank higher and grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map(({ icon: Icon, title, description, id }) => (
              <div
                key={title}
                id={id}
                className="flex flex-col p-7 bg-brand-card border border-white/5 hover:border-brand-gold/20 rounded-2xl transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-brand-gold transition-colors">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for SEO */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
                Why StaffordshireSEO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Staffordshire&apos;s Most{" "}
                <span className="gradient-text">Trusted SEO Agency</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We&apos;re not a faceless national agency. We&apos;re a local Staffordshire
                team who understand your market, your competitors, and your customers. That
                local insight makes all the difference.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated Staffordshire SEO specialists",
                  "Clear monthly ranking and traffic reports",
                  "No long-term lock-in contracts",
                  "Honest, jargon-free communication",
                  "Proven track record of page-one results",
                  "Strategy tailored to your exact business goals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "94%", label: "Clients on page 1", sublabel: "within 6 months" },
                { value: "3x", label: "Average traffic increase", sublabel: "in first year" },
                { value: "200+", label: "Keywords ranked", sublabel: "per client average" },
                { value: "£0", label: "Setup fee", sublabel: "start seeing ROI faster" },
              ].map(({ value, label, sublabel }) => (
                <div
                  key={label}
                  className="flex flex-col p-6 bg-brand-card border border-brand-gold/10 rounded-2xl"
                >
                  <span className="font-display font-bold text-3xl text-brand-gold mb-1">
                    {value}
                  </span>
                  <span className="font-semibold text-white text-sm">{label}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location links */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white mb-8 text-center">
            Local SEO Across Staffordshire
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Cannock SEO", href: "/locations/cannock" },
              { name: "Tamworth SEO", href: "/locations/tamworth" },
              { name: "Lichfield SEO", href: "/locations/lichfield" },
              { name: "Stafford SEO", href: "/locations/stafford" },
              { name: "Burton upon Trent SEO", href: "/locations/burton-upon-trent" },
              { name: "Newcastle-under-Lyme SEO", href: "/locations/newcastle-under-lyme" },
              { name: "Rugeley SEO", href: "/locations/rugeley" },
              { name: "Burntwood SEO", href: "/locations/burntwood" },
              { name: "Leek SEO", href: "/locations/leek" },
              { name: "Uttoxeter SEO", href: "/locations/uttoxeter" },
            ].map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 bg-brand-card border border-white/10 hover:border-brand-gold/30 text-slate-300 hover:text-brand-gold text-sm rounded-full transition-all duration-200"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
