"use client";

import Link from "next/link";
import { Monitor, Search, ShoppingCart, Wrench, BarChart2, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Web Design Staffordshire",
    description:
      "Bespoke, high-performance websites crafted to convert visitors into customers. Mobile-first, blazing fast, and built to rank.",
    href: "/services/web-design-staffordshire",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20 hover:border-blue-500/40",
    iconColor: "text-blue-400",
    tags: ["Custom Design", "Mobile-First", "CMS"],
  },
  {
    icon: Search,
    title: "SEO Staffordshire",
    description:
      "Proven local SEO strategies that get your business to page one of Google. More organic traffic, more leads, more sales.",
    href: "/services/seo-staffordshire",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30 hover:border-amber-500/50",
    iconColor: "text-amber-400",
    tags: ["Local SEO", "On-Page", "Link Building"],
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Staffordshire",
    description:
      "Powerful online stores that sell around the clock. Full-featured e-commerce websites that grow with your business.",
    href: "/services/ecommerce-staffordshire",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    tags: ["Shopify", "WooCommerce", "Payments"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website secure, fast, and up-to-date with our monthly maintenance packages. We handle the tech so you don't have to.",
    href: "/services/website-maintenance-staffordshire",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20 hover:border-purple-500/40",
    iconColor: "text-purple-400",
    tags: ["Security", "Updates", "Backups"],
  },
  {
    icon: BarChart2,
    title: "Local SEO Staffordshire",
    description:
      "Dominate Google Maps and local search results across Staffordshire. Get found by customers searching in your area.",
    href: "/services/seo-staffordshire#local-seo",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20 hover:border-rose-500/40",
    iconColor: "text-rose-400",
    tags: ["Google Business", "Maps", "Citations"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "SEO-optimised content that builds authority and drives organic traffic. Blog posts, landing pages, and more.",
    href: "/services/seo-staffordshire#content",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    tags: ["Copywriting", "Blogs", "SEO Copy"],
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
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Staffordshire Web Design &amp;{" "}
            <span className="gradient-text">SEO Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Everything your business needs to thrive online — from a beautiful website to
            dominating Google search across Staffordshire.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col h-full p-7 bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl card-hover overflow-hidden`}
                style={{
                  background: "rgba(17, 30, 51, 0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-brand-gold/20 text-brand-gold rounded-full border border-brand-gold/30">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} border ${service.border.split(" ")[0]} flex items-center justify-center mb-5 flex-shrink-0`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400 group-hover:text-brand-gold transition-colors duration-200">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
