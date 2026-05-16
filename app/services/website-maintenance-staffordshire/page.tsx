import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, CheckCircle, ArrowRight, Shield, RefreshCw, Bell, FileEdit } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Website Maintenance Staffordshire | SEO Company Care Plans | StaffordshireSEO",
  description:
    "Monthly website maintenance plans from Staffordshire's trusted SEO company. Security updates, backups, uptime monitoring and SEO health checks from £99/month. Keep your site safe and ranking.",
  keywords: [
    "website maintenance staffordshire",
    "website maintenance SEO staffordshire",
    "website care plan staffordshire",
    "SEO maintenance staffordshire",
    "website support staffordshire",
    "wordpress maintenance staffordshire",
  ],
  alternates: {
    canonical:
      "https://www.staffordshireseo.co.uk/services/website-maintenance-staffordshire",
  },
};

const plans = [
  {
    name: "Essential",
    price: "£99",
    period: "/month",
    features: [
      "Monthly security updates",
      "Daily automated backups",
      "Uptime monitoring",
      "Monthly performance report",
      "1 hour content changes",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "£199",
    period: "/month",
    features: [
      "Weekly security updates",
      "Daily automated backups",
      "Real-time uptime monitoring",
      "Monthly SEO health report",
      "3 hours content changes",
      "Priority support",
      "Speed optimisation",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "£349",
    period: "/month",
    features: [
      "Daily security scans & updates",
      "Hourly automated backups",
      "24/7 uptime monitoring",
      "Monthly SEO & performance report",
      "6 hours content changes",
      "Same-day priority support",
      "Quarterly design refresh",
      "Google Analytics review",
    ],
    featured: false,
  },
];

const features = [
  { icon: Shield, title: "Security Updates", description: "Regular plugin, theme, and CMS updates to keep your site protected from vulnerabilities." },
  { icon: RefreshCw, title: "Daily Backups", description: "Automated daily backups stored securely off-site so you never lose your data." },
  { icon: Bell, title: "Uptime Monitoring", description: "We monitor your website 24/7 and alert you instantly if it ever goes down." },
  { icon: FileEdit, title: "Content Changes", description: "Need to update text, images, or prices? We handle minor content changes as part of your plan." },
];

export default function WebsiteMaintenanceStaffordshirePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 30%, rgba(168,85,247,0.08) 0%, transparent 60%)",
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
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                Website Maintenance
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Website Maintenance{" "}
              <span className="gradient-text">Staffordshire</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Keep your Staffordshire business website secure, fast, and always online.
              Our monthly care plans cover everything from security updates and backups
              to content changes and performance monitoring.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
            >
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              What&apos;s <span className="gradient-text">Included</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every maintenance plan includes these core services to keep your website
              healthy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col p-7 bg-brand-card border border-white/5 rounded-2xl"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Maintenance <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-slate-400">
              Transparent monthly pricing with no hidden costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  plan.featured
                    ? "border-brand-gold/40 bg-gradient-to-b from-brand-gold/5 to-transparent"
                    : "border-white/10 bg-brand-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-brand-gold text-brand-navy text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-display font-bold text-3xl text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.featured ? "text-brand-gold" : "text-purple-400"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.featured
                      ? "bg-brand-gold hover:bg-brand-gold-light text-brand-navy shadow-gold"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  Get Started
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
