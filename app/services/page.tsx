import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Search, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Web Design & SEO Services Staffordshire | StaffordshireSEO",
  description:
    "Explore our full range of web design and SEO services for Staffordshire businesses. From bespoke website design to local SEO, e-commerce and website maintenance.",
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/services",
  },
};

const services = [
  {
    icon: Monitor,
    title: "Website Design Staffordshire",
    description:
      "Bespoke, stunning websites built from scratch for Staffordshire businesses. Mobile-first, lightning-fast, and built to rank on Google from day one.",
    href: "/services/web-design-staffordshire",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    features: ["100% bespoke design", "Core Web Vitals optimised", "SEO built-in", "Full CMS"],
  },
  {
    icon: Search,
    title: "SEO Staffordshire",
    description:
      "Proven local SEO strategies that get Staffordshire businesses to page one of Google and keep them there. Full transparency, monthly reporting.",
    href: "/services/seo-staffordshire",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    features: ["Local SEO", "Technical SEO", "Content strategy", "Link building"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites Staffordshire",
    description:
      "Powerful online stores built on Shopify or WooCommerce for Staffordshire retailers. Designed to convert visitors into customers and rank on Google.",
    href: "/services/ecommerce-staffordshire",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    features: ["Shopify & WooCommerce", "Product SEO", "Payment integration", "Mobile-first"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance Staffordshire",
    description:
      "Keep your website secure, fast, and up to date. Monthly maintenance plans covering updates, backups, monitoring, and minor content changes.",
    href: "/services/website-maintenance-staffordshire",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    features: ["Security updates", "Daily backups", "Uptime monitoring", "Content changes"],
  },
];

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            Everything Your Business Needs{" "}
            <span className="gradient-text">to Grow Online</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From stunning website design to page-one SEO rankings — we offer a complete
            digital growth service for Staffordshire businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, href, color, bg, border, features }) => (
              <div
                key={title}
                className={`flex flex-col p-8 bg-brand-card border ${border} rounded-2xl`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h2 className="font-display font-bold text-xl text-white mb-3">
                  {title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className={`w-1.5 h-1.5 rounded-full ${bg} border ${border} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${color} hover:opacity-80 transition-opacity`}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
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
