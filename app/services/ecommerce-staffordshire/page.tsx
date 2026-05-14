import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, CheckCircle, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "E-commerce Website Design Staffordshire | Online Shops | StaffordshireSEO",
  description:
    "Expert e-commerce website design in Staffordshire. We build Shopify and WooCommerce stores that rank on Google and convert visitors into customers. Free consultation available.",
  keywords: [
    "ecommerce website staffordshire",
    "online shop staffordshire",
    "shopify staffordshire",
    "woocommerce staffordshire",
    "ecommerce web design staffordshire",
    "online store staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/services/ecommerce-staffordshire",
  },
};

export default function EcommerceStaffordshirePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 30%, rgba(16,185,129,0.08) 0%, transparent 60%)",
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
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                E-commerce
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              E-commerce Websites{" "}
              <span className="gradient-text">Staffordshire</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              We build powerful, conversion-focused online stores for Staffordshire
              retailers. Whether it&apos;s Shopify or WooCommerce, we create e-commerce
              websites that rank on Google and turn visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                E-commerce Built to{" "}
                <span className="gradient-text">Sell &amp; Rank</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our Staffordshire e-commerce websites are built with two goals in mind:
                ranking high on Google and converting visitors into buyers. Every product
                page, category, and checkout flow is optimised for maximum performance.
              </p>
              <ul className="space-y-3">
                {[
                  "Shopify and WooCommerce specialists",
                  "Product and category page SEO optimisation",
                  "Fast-loading, mobile-first design",
                  "Secure payment gateway integration",
                  "Abandoned cart and upsell functionality",
                  "Inventory management and order tracking",
                  "Google Shopping and Meta integration",
                  "Ongoing SEO and performance monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "£3,000+", label: "Starting price", sublabel: "Full e-commerce store" },
                { value: "60%", label: "Avg. sales increase", sublabel: "After redesign" },
                { value: "98/100", label: "Page speed score", sublabel: "Core Web Vitals" },
                { value: "6 wks", label: "Average delivery", sublabel: "From brief to launch" },
              ].map(({ value, label, sublabel }) => (
                <div
                  key={label}
                  className="p-6 bg-brand-card border border-emerald-500/10 rounded-2xl"
                >
                  <span className="font-display font-bold text-3xl text-emerald-400 block mb-1">
                    {value}
                  </span>
                  <span className="font-semibold text-white text-sm block">{label}</span>
                  <span className="text-xs text-slate-500">{sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
