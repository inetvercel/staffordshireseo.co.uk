import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, CheckCircle, ArrowRight, Star, Zap, Globe, Search, Smartphone } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Website Design Staffordshire | Bespoke Web Design | StaffordshireSEO",
  description:
    "Award-winning website design in Staffordshire. Bespoke, mobile-first websites built to rank on Google and convert visitors into customers. Serving businesses across Staffordshire. Get a free quote today.",
  keywords: [
    "website design staffordshire",
    "web design staffordshire",
    "staffordshire website design",
    "staffordshire website company",
    "bespoke website design staffordshire",
    "website design company staffordshire",
    "website designer staffordshire",
    "website design agency staffordshire",
    "manufacturing website design staffordshire",
    "website development staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/services/web-design-staffordshire",
  },
};

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Core Web Vitals optimised for top Google rankings" },
  { icon: Smartphone, title: "Mobile First", description: "Beautiful on every device, from phone to desktop" },
  { icon: Search, title: "SEO Built-In", description: "Every page structured to rank from day one" },
  { icon: Globe, title: "CMS Powered", description: "Easily update your own content at any time" },
];

const packages = [
  {
    name: "Starter",
    price: "£1,500",
    description: "Perfect for sole traders and new businesses",
    features: [
      "5-page custom website",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form",
      "Google Analytics",
      "1 round of revisions",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    price: "£3,000",
    description: "Ideal for growing Staffordshire businesses",
    features: [
      "Up to 15 pages",
      "Custom design & animations",
      "Full SEO optimisation",
      "Blog / news section",
      "Speed optimised",
      "3 rounds of revisions",
      "1 month support",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger businesses with complex needs",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce integration",
      "API integrations",
      "Ongoing SEO & maintenance",
      "Dedicated account manager",
      "Priority support",
    ],
    cta: "Get a Quote",
    featured: false,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design Staffordshire",
  description:
    "Bespoke website design services for businesses across Staffordshire. Mobile-first, SEO-optimised websites built to convert.",
  provider: {
    "@type": "LocalBusiness",
    name: "StaffordshireSEO",
    url: "https://www.staffordshireseo.co.uk",
  },
  areaServed: { "@type": "Place", name: "Staffordshire, UK" },
  serviceType: "Website Design",
};

export default function WebDesignStaffordshirePage() {
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
              "radial-gradient(ellipse at 60% 30%, rgba(59,130,246,0.1) 0%, transparent 60%)",
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
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Web Design
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Website Design{" "}
              <span className="gradient-text">Staffordshire</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We build beautiful, high-performance websites for Staffordshire businesses
              that rank on Google and turn visitors into paying customers. No templates —
              every website is bespoke, built around your brand and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-start p-6 bg-brand-card border border-white/5 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Staffordshire&apos;s Most Trusted{" "}
                <span className="gradient-text">Web Design Agency</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Based in the heart of Staffordshire, we understand the local market better than
                any national agency. Our bespoke websites are built from scratch — no page builders,
                no cheap templates — just clean, fast, conversion-optimised code.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every website we build includes full on-page SEO, structured data, and
                Core Web Vitals optimisation as standard, giving you the best possible
                foundation for ranking in Staffordshire local search.
              </p>
              <ul className="space-y-3">
                {[
                  "100% bespoke design — no templates ever",
                  "Built for Google rankings from day one",
                  "Staffordshire-based team you can actually meet",
                  "Full project managed from brief to launch",
                  "Ongoing support and maintenance available",
                  "Transparent pricing, no hidden costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(17,30,51,0.8) 100%)",
                  minHeight: "400px",
                }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 h-6 ml-4 bg-white/5 rounded-full" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-brand-gold/10 border border-brand-gold/20 rounded-lg w-2/3" />
                    <div className="h-3 bg-white/5 rounded-full w-full" />
                    <div className="h-3 bg-white/5 rounded-full w-4/5" />
                    <div className="h-3 bg-white/5 rounded-full w-3/5" />
                    <div className="h-10 bg-brand-gold/20 border border-brand-gold/30 rounded-lg w-1/3 mt-4" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-20 bg-white/3 border border-white/5 rounded-xl"
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">Page Speed: 98/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="packages"
        className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Web Design{" "}
              <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Transparent pricing for Staffordshire website design. No hidden costs, no
              nasty surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  pkg.featured
                    ? "border-brand-gold/40 bg-gradient-to-b from-brand-gold/5 to-transparent"
                    : "border-white/10 bg-brand-card"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-brand-gold text-brand-navy text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">{pkg.description}</p>
                  <span className="font-display font-bold text-3xl text-white">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          pkg.featured ? "text-brand-gold" : "text-emerald-400"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    pkg.featured
                      ? "bg-brand-gold hover:bg-brand-gold-light text-brand-navy shadow-gold"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
