"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Staffordshire Businesses",
    sublabel: "helped to rank on Google",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: TrendingUp,
    value: "94%",
    label: "Rank on Page One",
    sublabel: "within 6 months",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Award,
    value: "5★",
    label: "Google Rating",
    sublabel: "from verified clients",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years Experience",
    sublabel: "in Staffordshire digital",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export default function Stats() {
  return (
    <section
      className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-brand-navy relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Divider line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col items-start p-6 rounded-2xl border ${stat.border} ${stat.bg}`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-4`}
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span
                className={`font-display font-bold text-3xl md:text-4xl ${stat.color} mb-1`}
              >
                {stat.value}
              </span>
              <span className="font-semibold text-white text-sm md:text-base">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
