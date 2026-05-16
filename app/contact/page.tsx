import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Our Staffordshire SEO Company | Free SEO Audit",
  description:
    "Get in touch with StaffordshireSEO — Staffordshire's leading SEO company. Request your free SEO audit today and find out exactly how to rank higher on Google.",
  keywords: [
    "contact staffordshire SEO company",
    "free SEO audit staffordshire",
    "SEO consultation staffordshire",
    "staffordshire SEO agency contact",
    "SEO quote staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            Let&apos;s Grow Your{" "}
            <span className="gradient-text">Staffordshire Business</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get a free, no-obligation SEO audit from Staffordshire&apos;s trusted SEO
            company. We&apos;ll show you exactly how to rank higher on Google.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
