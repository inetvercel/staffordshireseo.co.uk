"use client";

import Link from "next/link";
import { Zap, TrendingUp, BarChart2, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    icon: Zap,
    name: "Local SEO",
    price: "£399/mo",
    description:
      "Foundation local SEO for businesses that want to own their town's search results. Google Business, on-page, citations, and monthly reporting.",
    href: "/packages",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20 hover:border-amber-500/40",
    iconColor: "text-amber-400",
    tags: ["Local SEO", "Google Business", "Citations"],
  },
  {
    icon: TrendingUp,
    name: "SEO + Content",
    price: "£599/mo",
    description:
      "Local SEO plus a monthly content output that builds topical authority. The compound approach to ranking — content that gets better over time.",
    href: "/packages",
    color: "from-brand-gold/20 to-brand-gold/5",
    border: "border-brand-gold/30 hover:border-brand-gold/50",
    iconColor: "text-brand-gold",
    tags: ["SEO", "4 Posts/Month", "Content Strategy"],
    featured: true,
  },
  {
    icon: BarChart2,
    name: "Authority Growth",
    price: "£799/mo",
    description:
      "For competitive local markets. Adds link building, competitor intelligence, and technical SEO to the content foundation — built to win.",
    href: "/packages",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20 hover:border-blue-500/40",
    iconColor: "text-blue-400",
    tags: ["Link Building", "Technical SEO", "Competitor Intel"],
  },
  {
    icon: Bot,
    name: "AI SEO",
    price: "£1,199/mo",
    description:
      "High-output SEO at scale. AI-assisted content workflows, topical map build-out, and location page generation for maximum organic reach.",
    href: "/packages",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20 hover:border-purple-500/40",
    iconColor: "text-purple-400",
    tags: ["AI Content", "Topical Maps", "Scale"],
  },
];

export default function Services() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-brand-navy-light overflow-hidden"
      id="services"
      aria-labelledby="services-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Productized SEO Packages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Fixed Price.{" "}
            <span className="gradient-text">Fixed Deliverables.</span>
            {" "}Real Rankings.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            No custom quotes. No scope creep. No endless meetings. Choose your monthly
            SEO package and we handle everything — you focus on your business.
          </motion.p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link
                href={pkg.href}
                className={`group relative flex flex-col h-full p-7 bg-gradient-to-br ${pkg.color} border ${pkg.border} rounded-2xl card-hover overflow-hidden`}
                style={{
                  background: "rgba(17, 30, 51, 0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-brand-gold/20 text-brand-gold rounded-full border border-brand-gold/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} border ${pkg.border.split(" ")[0]} flex items-center justify-center mb-5 flex-shrink-0`}
                >
                  <pkg.icon className={`w-6 h-6 ${pkg.iconColor}`} />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-0.5 group-hover:text-brand-gold transition-colors duration-200">
                  {pkg.name}
                </h3>
                <p className={`text-sm font-semibold ${pkg.iconColor} mb-3`}>{pkg.price}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400 group-hover:text-brand-gold transition-colors duration-200">
                  View package details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold hover:scale-105"
          >
            See Full Package Details &amp; Pricing <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-slate-600 text-sm mt-3">Monthly rolling · No lock-in contracts · Free SEO audit to start</p>
        </motion.div>
      </div>
    </section>
  );
}
