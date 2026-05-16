"use client";

import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Globe, Search } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Star, text: "5-Star Rated on Google" },
  { icon: TrendingUp, text: "200+ Businesses Ranked" },
  { icon: Globe, text: "Staffordshire Based" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy"
      aria-label="Hero section"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="orb w-[600px] h-[600px] bg-amber-500 -top-32 -left-32 animate-float-slow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="orb w-[500px] h-[500px] bg-blue-600 top-1/4 right-0 animate-float-medium"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="orb w-[400px] h-[400px] bg-purple-600 bottom-0 left-1/3 animate-float-fast"
          style={{ animationDelay: "0.8s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,158,11,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(5,11,24,0.7) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-8"
          >
            <Search className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-sm font-medium text-brand-gold">
              Staffordshire&apos;s #1 SEO Company
            </span>
          </motion.div>

          {/* Main headline — keyword-rich H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            SEO Company{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text relative inline-block">
              Staffordshire
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 5.5C50 2 100 1 150 2.5C200 4 250 5.5 299 3"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10"
          >
            We are Staffordshire&apos;s trusted SEO company — getting local businesses
            to page one of Google with proven strategies. More rankings, more enquiries,
            more revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-base rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold hover:scale-105"
            >
              Get Your Free SEO Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/seo-staffordshire"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-base rounded-xl transition-all duration-200"
            >
              Our SEO Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <span className="text-sm text-slate-400 font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
