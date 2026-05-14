"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

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
            Get a free, no-obligation SEO audit and website review. We&apos;ll analyse
            your current position and show you exactly how to rank higher on Google.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "01234 567 890",
                      href: "tel:+441234567890",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@staffordshireseo.co.uk",
                      href: "mailto:hello@staffordshireseo.co.uk",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Stafford, Staffordshire, UK",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Mon–Fri: 9am – 5:30pm",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-slate-300 hover:text-brand-gold transition-colors text-sm font-medium"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-slate-300 text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust block */}
              <div className="p-6 bg-brand-card border border-brand-gold/10 rounded-2xl">
                <h3 className="font-display font-semibold text-white mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free SEO audit of your current website",
                    "Competitor analysis for your Staffordshire market",
                    "Clear recommendations with no obligation",
                    "Response within 1 business day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-brand-card border border-green-500/20 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400">
                    Thank you for getting in touch. We&apos;ll be back to you within one
                    business day with your free SEO audit.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 bg-brand-card border border-white/5 rounded-2xl"
                  aria-label="Contact form"
                >
                  <h2 className="font-display font-bold text-xl text-white mb-6">
                    Get Your Free SEO Audit
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                        placeholder="James Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                        placeholder="james@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                        placeholder="01234 567 890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Your Website
                      </label>
                      <input
                        id="website"
                        type="url"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                        placeholder="https://yoursite.co.uk"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-brand-navy">Select a service...</option>
                      <option value="seo" className="bg-brand-navy">SEO Staffordshire</option>
                      <option value="web-design" className="bg-brand-navy">Website Design</option>
                      <option value="ecommerce" className="bg-brand-navy">E-commerce Website</option>
                      <option value="maintenance" className="bg-brand-navy">Website Maintenance</option>
                      <option value="other" className="bg-brand-navy">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Tell Us About Your Business *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-navy border border-white/10 focus:border-brand-gold/50 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors resize-none"
                      placeholder="Tell us about your business, your goals, and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-brand-gold hover:bg-brand-gold-light disabled:opacity-70 text-brand-navy font-bold rounded-xl transition-all duration-200 shadow-gold"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message &amp; Get Free Audit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-600 text-center">
                    By submitting this form you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
