"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Design Staffordshire", href: "/services/web-design-staffordshire" },
      { label: "SEO Staffordshire", href: "/services/seo-staffordshire" },
      { label: "E-commerce Staffordshire", href: "/services/ecommerce-staffordshire" },
      { label: "Website Maintenance", href: "/services/website-maintenance-staffordshire" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Cannock SEO", href: "/locations/cannock" },
      { label: "Tamworth SEO", href: "/locations/tamworth" },
      { label: "Lichfield SEO", href: "/locations/lichfield" },
      { label: "Stafford SEO", href: "/locations/stafford" },
      { label: "Burton upon Trent SEO", href: "/locations/burton-upon-trent" },
      { label: "View All Areas →", href: "/locations" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="StaffordshireSEO - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center shadow-gold-sm group-hover:shadow-gold transition-all duration-300">
              <Zap className="w-4 h-4 text-brand-navy fill-brand-navy" />
            </div>
            <span className="font-display font-bold text-lg text-white hidden sm:block">
              Staffordshire<span className="text-brand-gold">SEO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200",
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-brand-card border border-brand-gold/10 rounded-xl shadow-card overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:text-brand-gold hover:bg-white/5 transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold text-sm rounded-lg transition-all duration-200 shadow-gold-sm hover:shadow-gold"
            >
              Free SEO Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy/98 backdrop-blur-xl border-t border-brand-gold/10 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-400 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center px-5 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold rounded-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Free SEO Audit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
