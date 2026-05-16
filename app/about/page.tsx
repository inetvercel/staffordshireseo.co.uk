import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Award, Heart, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About StaffordshireSEO | Staffordshire SEO Company",
  description:
    "Meet the team behind Staffordshire's leading SEO company. 10+ years of proven Google rankings for local businesses. No lock-in contracts, transparent reporting, real results.",
  keywords: [
    "about staffordshire SEO company",
    "staffordshire SEO agency team",
    "local SEO company staffordshire",
    "SEO specialists staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/about",
  },
};

const values = [
  {
    icon: Heart,
    title: "Local First",
    description:
      "We are a Staffordshire business, serving Staffordshire businesses. We genuinely care about the local economy and the success of our clients.",
  },
  {
    icon: Award,
    title: "Results-Driven",
    description:
      "We obsess over real outcomes — rankings, traffic, leads, and revenue. Vanity metrics mean nothing; we focus only on what moves your business forward.",
  },
  {
    icon: Users,
    title: "Transparent",
    description:
      "No jargon, no hidden fees, no smoke and mirrors. Clear monthly reports, honest communication, and strategies you can actually understand.",
  },
  {
    icon: CheckCircle,
    title: "No Lock-In",
    description:
      "We earn your business every single month. No long-term contracts means you stay because of results, not because you have no choice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 40% 30%, rgba(245,158,11,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Staffordshire&apos;s{" "}
              <span className="gradient-text">Local SEO & Web Design</span>{" "}
              Agency
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We&apos;re a team of Staffordshire-based digital marketing specialists who
              are passionate about helping local businesses grow online. No faceless
              national agencies — just a dedicated local team who genuinely care about
              your results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Born &amp; Built in{" "}
                <span className="gradient-text">Staffordshire</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  StaffordshireSEO was founded by a team of digital marketing
                  professionals who grew tired of seeing Staffordshire businesses
                  overpaying national agencies for poor results and zero local
                  knowledge.
                </p>
                <p>
                  We set out to build an agency that combined the expertise of a large
                  agency with the personal service and local knowledge of a truly local
                  business. Over a decade later, we&apos;ve helped 200+ Staffordshire
                  businesses rank on page one of Google and build stunning websites that
                  actually convert.
                </p>
                <p>
                  From Cannock to Tamworth, Lichfield to Newcastle-under-Lyme — we know
                  the Staffordshire market inside out, and we use that knowledge to
                  deliver results that national agencies simply can&apos;t match.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "10+", label: "Years in Staffordshire", sublabel: "Deep local market knowledge" },
                { value: "200+", label: "Clients Helped", sublabel: "Across all of Staffordshire" },
                { value: "94%", label: "Page One Rankings", sublabel: "Within 6 months average" },
                { value: "5★", label: "Google Rating", sublabel: "From verified local clients" },
              ].map(({ value, label, sublabel }) => (
                <div
                  key={label}
                  className="p-6 bg-brand-card border border-brand-gold/10 rounded-2xl"
                >
                  <span className="font-display font-bold text-3xl text-brand-gold block mb-1">
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

      {/* Values */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              What We{" "}
              <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our values aren&apos;t just words on a wall — they&apos;re how we work
              every day with every client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col p-7 bg-brand-card border border-white/5 rounded-2xl"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
