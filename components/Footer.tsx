import Link from "next/link";
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const serviceLinks = [
  { label: "Web Design Staffordshire", href: "/services/web-design-staffordshire" },
  { label: "SEO Staffordshire", href: "/services/seo-staffordshire" },
  { label: "E-commerce Staffordshire", href: "/services/ecommerce-staffordshire" },
  { label: "Website Maintenance", href: "/services/website-maintenance-staffordshire" },
  { label: "Local SEO", href: "/services/seo-staffordshire#local-seo" },
];

const locationLinks = [
  { label: "Cannock SEO", href: "/locations/cannock" },
  { label: "Tamworth SEO", href: "/locations/tamworth" },
  { label: "Lichfield SEO", href: "/locations/lichfield" },
  { label: "Stafford SEO", href: "/locations/stafford" },
  { label: "Burton upon Trent SEO", href: "/locations/burton-upon-trent" },
  { label: "All Locations →", href: "/locations" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/about#work" },
  { label: "Contact Us", href: "/contact" },
  { label: "Free SEO Audit", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/5" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit" aria-label="StaffordshireSEO Home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center">
                <Zap className="w-4 h-4 text-brand-navy fill-brand-navy" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Staffordshire<span className="text-brand-gold">SEO</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Staffordshire&apos;s leading web design and SEO agency. We help local businesses
              rank higher on Google and grow their revenue online.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-gold transition-colors group"
                >
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>01234 567 890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@staffordshireseo.co.uk"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-brand-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>hello@staffordshireseo.co.uk</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Stafford, Staffordshire, UK</span>
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter / X" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-gold transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Locations
            </h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-gold transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-gold transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Taking on new clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} StaffordshireSEO. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
