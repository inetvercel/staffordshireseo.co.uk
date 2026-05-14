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
  title: "Website Design & SEO Staffordshire | StaffordshireSEO",
  description:
    "Staffordshire's leading website design and SEO agency. We build stunning websites and get local businesses to page one of Google. Serving Cannock, Tamworth, Lichfield, Stafford and all of Staffordshire. Get your free SEO audit today.",
  keywords: [
    "website design staffordshire",
    "web design staffordshire",
    "staffordshire website design",
    "staffordshire website company",
    "SEO staffordshire",
    "local seo staffordshire",
    "website design company staffordshire",
    "bespoke website design staffordshire",
    "manufacturing website design staffordshire",
    "ecommerce website staffordshire",
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
