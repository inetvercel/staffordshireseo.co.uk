import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Zap, TrendingUp, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Packages Staffordshire | Fixed-Price Monthly Retainers | StaffordshireSEO",
  description:
    "Fixed-price, productized SEO packages for Staffordshire businesses. No custom quotes, no scope creep, no long-term lock-in. Choose your package and start ranking.",
  keywords: [
    "SEO packages staffordshire",
    "monthly SEO retainer staffordshire",
    "fixed price SEO staffordshire",
    "local SEO package staffordshire",
    "SEO company packages staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk/packages",
  },
};

const packages = [
  {
    icon: Zap,
    name: "Local SEO Starter",
    price: "From £495",
    tagline: "Get found locally. Stop losing customers to competitors who rank above you.",
    description:
      "The foundation every local business needs. We get your Google Business Profile working properly, build local citations, and optimise your core pages so local buyers find you — not your competitors.",
    deliverables: [
      "Google Business Profile optimisation",
      "Local citation building & cleanup",
      "On-page SEO across core pages",
      "Foundational keyword targeting",
      "Monthly rank tracking report",
      "Local visibility improvements",
    ],
    bestFor: ["Small Local Businesses", "Trades & Contractors", "Independent Retailers", "Local Service Businesses"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    featured: false,
  },
  {
    icon: TrendingUp,
    name: "Growth SEO",
    price: "From £995",
    tagline: "Build rankings that compound month on month.",
    description:
      "Goes well beyond foundational SEO. Content production, authority building, technical health, and local landing pages — everything needed to grow organic traffic and leads consistently over time.",
    deliverables: [
      "Everything in Local SEO Starter",
      "SEO content production",
      "Authority building",
      "Technical SEO audit & ongoing fixes",
      "Local landing page creation",
      "Ongoing monthly optimisation",
    ],
    bestFor: ["Dental & Healthcare", "Accountants & Solicitors", "Professional Services", "Established Local Businesses"],
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/30",
    featured: true,
  },
  {
    icon: BarChart2,
    name: "Authority SEO",
    price: "From £1,995",
    tagline: "Dominate competitive industries. Rank where others can't.",
    description:
      "For businesses in competitive sectors that need more than optimisation — they need a genuine authority campaign. Aggressive link building, content scaling, and sustained authority growth to own your market.",
    deliverables: [
      "Everything in Growth SEO",
      "Aggressive link building & backlink campaigns",
      "Content scaling programme",
      "Full authority campaign management",
      "Competitor authority gap analysis",
      "Quarterly strategy review",
    ],
    bestFor: ["Competitive Industries", "Multi-location Businesses", "Businesses Targeting Aggressive Growth"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    featured: false,
  },
];

const idealClients = [
  { sector: "Legal & Solicitors", reason: "High-value leads, clear SEO ROI, retainer-friendly" },
  { sector: "Dental & Clinics", reason: "Appointment-driven, local intent searches, loyal patients" },
  { sector: "Accountants", reason: "Long client relationships, strong local search demand" },
  { sector: "Trades & Contractors", reason: "Lead-hungry, great ROI on local SEO, minimal fuss" },
  { sector: "Home Improvement", reason: "High ticket values, strong before/after keyword intent" },
  { sector: "Commercial Services", reason: "B2B, recurring revenue, values results over aesthetics" },
];

const notForYou = [
  "Early-stage startups with no revenue",
  "Businesses wanting creative/branding-first work",
  "Clients who need weekly calls and hand-holding",
  "Anyone wanting a one-off project with no ongoing commitment",
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 20%, rgba(245,158,11,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Productized SEO Packages
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
            Fixed Price.{" "}
            <span className="gradient-text">Fixed Deliverables.</span>
            <br className="hidden sm:block" /> Zero Fuss.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            No custom quotes. No scope creep. No endless revisions. Choose the
            package that fits your growth stage, pay monthly, and we handle the rest.
            You get results — we handle the work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
            >
              Get Started — Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
            >
              See the Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-brand-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Who We Work Best With
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Businesses already generating revenue that want more leads from Google —
                not startups looking for cheap exposure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {idealClients.map(({ sector, reason }) => (
                  <div
                    key={sector}
                    className="p-4 bg-brand-card border border-brand-gold/10 rounded-xl"
                  >
                    <p className="font-semibold text-white text-sm mb-1">{sector}</p>
                    <p className="text-slate-500 text-xs">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                This Is Probably Not For You If…
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                We are selective. Honest about it. This keeps our work quality high and
                our client relationships stress-free.
              </p>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-400 text-xs font-bold">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-brand-card border border-white/5 rounded-xl">
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-semibold">How we work:</span> Monthly
                  retainer. Async-first. Fixed deliverables each month. No lock-in —
                  cancel with 30 days notice. Results-only focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="gradient-text">SEO Package</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              All packages are monthly retainers. No setup fees. No annual contracts.
              Start with one month — stay because of results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map(({ icon: Icon, name, price, tagline, description, deliverables, bestFor, color, bg, border, featured }) => (
              <div
                key={name}
                className={`relative flex flex-col p-7 rounded-2xl border ${
                  featured
                    ? "border-brand-gold/40 bg-gradient-to-b from-brand-gold/5 to-transparent"
                    : `${border} bg-brand-card`
                }`}
              >
                {featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-brand-gold text-brand-navy text-xs font-bold rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-0.5">{name}</h3>
                <p className={`text-xs font-medium ${color} mb-4`}>{tagline}</p>

                <div className="flex items-end gap-1 mb-4">
                  <span className="font-display font-bold text-3xl text-white">{price}</span>
                  <span className="text-slate-500 text-sm mb-1">/month</span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-5">{description}</p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${featured ? "text-brand-gold" : color}`} />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mb-5">
                  <p className="text-xs text-slate-600 uppercase tracking-widest mb-2">Best for</p>
                  <div className="flex flex-wrap gap-1.5">
                    {bestFor.map((b) => (
                      <span key={b} className={`text-xs px-2 py-0.5 ${bg} border ${border} rounded-full ${color}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    featured
                      ? "bg-brand-gold hover:bg-brand-gold-light text-brand-navy shadow-gold"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 text-sm mt-8">
            All prices ex-VAT. Monthly rolling — cancel anytime with 30 days notice. No setup fees.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-brand-navy">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400">
            Simple, low-friction, async-first. Designed for busy business owners who want
            results — not a second job managing an agency.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { step: "01", title: "Free SEO Audit", body: "We analyse your current rankings, competitors, and opportunities. You get a clear picture of where you are and what it will take to rank." },
            { step: "02", title: "Choose Your Package", body: "Pick the package that fits your budget and growth stage. No custom negotiation — the deliverables are fixed and transparent." },
            { step: "03", title: "We Get to Work", body: "Month one kicks off immediately. Fixed deliverables are completed on schedule. No meetings required unless you want one." },
            { step: "04", title: "Rankings & Reports", body: "Monthly performance report lands in your inbox. Rankings up, traffic up, leads up. That's the only metric we care about." },
          ].map(({ step, title, body }) => (
            <div key={step} className="p-6 bg-brand-card border border-white/5 rounded-2xl">
              <span className="font-display font-bold text-3xl text-brand-gold/30 block mb-3">{step}</span>
              <h3 className="font-semibold text-white text-sm mb-2">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold hover:scale-105"
          >
            Start With a Free SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-slate-600 text-xs mt-3">No obligation. Response within 1 business day.</p>
        </div>
      </section>
    </>
  );
}
