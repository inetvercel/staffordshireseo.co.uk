import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import LocalAreas from "@/components/LocalAreas";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Company Staffordshire | Staffordshire SEO Agency | StaffordshireSEO",
  description:
    "StaffordshireSEO is Staffordshire's leading SEO company. We get local businesses to page one of Google with proven SEO strategies. Serving Cannock, Tamworth, Lichfield, Stafford and all of Staffordshire. Free SEO audit.",
  keywords: [
    "SEO company staffordshire",
    "staffordshire SEO company",
    "SEO agency staffordshire",
    "staffordshire SEO agency",
    "SEO staffordshire",
    "staffordshire SEO",
    "local SEO staffordshire",
    "SEO services staffordshire",
    "search engine optimisation staffordshire",
    "google ranking staffordshire",
  ],
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <LocalAreas />
      <FAQ />
      <CTA />
    </>
  );
}
