"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mark Thompson",
    company: "Thompson Plumbing, Cannock",
    rating: 5,
    text: "StaffordshireSEO transformed our online presence. We went from page 3 to position 1 for 'plumber Cannock' within 4 months. Our phone hasn't stopped ringing since.",
    initials: "MT",
    color: "bg-blue-500",
  },
  {
    name: "Sarah Williams",
    company: "Williams Interiors, Stafford",
    rating: 5,
    text: "The new website they built for us is absolutely stunning. Our customers constantly comment on how professional it looks. Sales are up 60% since launch.",
    initials: "SW",
    color: "bg-emerald-500",
  },
  {
    name: "James Harrison",
    company: "Harrison Manufacturing, Tamworth",
    rating: 5,
    text: "After years of failing with other agencies, StaffordshireSEO delivered real results. We now rank for over 50 keywords and our organic traffic has trebled.",
    initials: "JH",
    color: "bg-amber-500",
  },
  {
    name: "Lisa Patel",
    company: "Patel Law, Lichfield",
    rating: 5,
    text: "Professional, transparent, and genuinely knowledgeable about the Staffordshire market. I couldn't recommend them highly enough to any local business.",
    initials: "LP",
    color: "bg-purple-500",
  },
  {
    name: "David Cooper",
    company: "Cooper Accountants, Burton upon Trent",
    rating: 5,
    text: "Monthly reporting is brilliant — we always know exactly where we stand. Our Google Business profile now generates 20+ enquiries per month.",
    initials: "DC",
    color: "bg-rose-500",
  },
  {
    name: "Emma Clarke",
    company: "Clarke Beauty, Rugeley",
    rating: 5,
    text: "My e-commerce site was built beautifully and optimised from day one. I rank for all my target keywords and the online bookings have exceeded all expectations.",
    initials: "EC",
    color: "bg-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-brand-navy relative overflow-hidden"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Client Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Trusted by{" "}
            <span className="gradient-text">Staffordshire Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Real results for real businesses across Staffordshire. Don&apos;t take our
            word for it.
          </motion.p>

          {/* Star rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-1.5 mt-5"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-amber-400 fill-amber-400"
              />
            ))}
            <span className="ml-2 text-sm font-medium text-slate-300">
              5.0 from 80+ Google reviews
            </span>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative flex flex-col p-7 bg-brand-card border border-white/5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300"
              aria-label={`Testimonial from ${t.name}`}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-white/5"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
