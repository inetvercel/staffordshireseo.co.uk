"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/locations";

export default function LocalAreas() {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-brand-navy-light relative overflow-hidden"
      id="locations"
      aria-labelledby="locations-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Areas We Cover
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="locations-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            SEO &amp; Web Design Across{" "}
            <span className="gradient-text">All of Staffordshire</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Whether you&apos;re in Cannock, Tamworth, Lichfield or beyond — we know
            the Staffordshire market inside out and deliver results for local businesses.
          </motion.p>
        </div>

        {/* Location cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {locations.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group flex items-center gap-2.5 p-4 bg-brand-card border border-white/5 hover:border-brand-gold/30 rounded-xl transition-all duration-200 hover:bg-brand-card-light"
              >
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-medium text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                    {location.name}
                  </p>
                  <p className="text-xs text-slate-600 truncate">SEO &amp; Web Design</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to all locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Don&apos;t see your town? We cover all of Staffordshire and surrounding areas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-medium text-sm transition-colors"
          >
            Get in touch to discuss your area
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
