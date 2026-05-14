"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to rank on Google in Staffordshire?",
    answer:
      "For most local Staffordshire businesses, you can expect to see meaningful improvements in 3–6 months. More competitive industries may take 6–12 months. We provide monthly ranking reports so you can track progress from day one.",
  },
  {
    question: "How much does website design in Staffordshire cost?",
    answer:
      "Our bespoke website design packages start from £1,500 for a professional 5-page website. E-commerce websites start from £3,000. Every project is different, so contact us for a free quote tailored to your requirements.",
  },
  {
    question: "Do you work with all types of Staffordshire businesses?",
    answer:
      "Yes — we've worked with businesses across Staffordshire ranging from sole traders and SMEs to larger companies. Our clients include plumbers, solicitors, manufacturers, retailers, restaurants, and many more.",
  },
  {
    question: "What does your SEO Staffordshire service include?",
    answer:
      "Our SEO service includes a full technical audit, keyword research, on-page optimisation, content creation, link building, Google Business Profile management, and monthly reporting. No hidden extras.",
  },
  {
    question: "Can you help with local SEO in specific Staffordshire towns?",
    answer:
      "Absolutely. We create dedicated local SEO campaigns targeting specific towns such as Cannock, Tamworth, Lichfield, Stafford, Burton upon Trent, and more. We know the Staffordshire market inside out.",
  },
  {
    question: "Do you offer website maintenance packages in Staffordshire?",
    answer:
      "Yes, our website maintenance packages start from £99/month and include security updates, plugin updates, backups, uptime monitoring, and minor content changes. Perfect for businesses that need peace of mind.",
  },
  {
    question: "Is there a minimum contract length for your SEO services?",
    answer:
      "We recommend a minimum of 3 months for SEO to start delivering results, but we don't lock you into long contracts. We believe in earning your business every month through performance and transparency.",
  },
  {
    question: "Do you build e-commerce websites in Staffordshire?",
    answer:
      "Yes. We specialise in building Shopify and WooCommerce stores for Staffordshire businesses. We handle everything from design to product setup, payment integration, and SEO optimisation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-brand-navy relative"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Everything you need to know about our Staffordshire web design and SEO services.
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/5 hover:border-brand-gold/20 rounded-xl overflow-hidden transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-white text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
