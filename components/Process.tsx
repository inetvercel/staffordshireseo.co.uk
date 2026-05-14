"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyse your current website, competitors, and target keywords across Staffordshire to identify the biggest opportunities for growth.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy & Planning",
    description:
      "We build a bespoke SEO and web design roadmap tailored to your business goals, target audience, and Staffordshire market.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation",
    description:
      "Our team gets to work building your stunning new website and implementing proven on-page SEO, technical fixes, and content.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Grow & Report",
    description:
      "We monitor rankings, traffic, and leads every month — sharing clear reports and continuously optimising for better results.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export default function Process() {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-brand-navy-light relative overflow-hidden"
      id="process"
      aria-labelledby="process-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.12) 0%, transparent 60%)",
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
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="process-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Our Proven{" "}
            <span className="gradient-text">4-Step Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            From initial audit to ongoing results — a clear, transparent process that
            delivers measurable growth for your Staffordshire business.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.3) 20%, rgba(245,158,11,0.3) 80%, transparent)",
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-7 bg-brand-card border ${step.border} rounded-2xl`}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center`}
                >
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <span
                  className="font-display font-bold text-4xl"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {step.step}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
