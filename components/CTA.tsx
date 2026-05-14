"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden"
      aria-labelledby="cta-heading"
      style={{
        background:
          "linear-gradient(135deg, #0D1626 0%, #050B18 50%, #0D1626 100%)",
      }}
    >
      {/* Animated gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Border top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
          <span className="text-sm font-medium text-brand-gold">
            Currently accepting new clients
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          id="cta-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready to Dominate{" "}
          <span className="gradient-text">Staffordshire Search?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Get a free, no-obligation SEO audit and website review. We&apos;ll show you
          exactly what&apos;s holding your business back — and how to fix it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-base rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold hover:scale-105"
          >
            Get My Free SEO Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="tel:+441234567890"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-base rounded-xl transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            01234 567 890
          </Link>
        </motion.div>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm"
        >
          <Mail className="w-4 h-4" />
          <span>Or email us at{" "}</span>
          <a
            href="mailto:hello@staffordshireseo.co.uk"
            className="text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            hello@staffordshireseo.co.uk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
