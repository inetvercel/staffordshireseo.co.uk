import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.staffordshireseo.co.uk"),
  title: {
    default:
      "SEO Company Staffordshire | Staffordshire SEO Agency | StaffordshireSEO",
    template: "%s | StaffordshireSEO",
  },
  description:
    "Staffordshire's leading SEO company. We get local businesses to page one of Google with proven SEO strategies. Trusted Staffordshire SEO agency serving Cannock, Tamworth, Lichfield, Stafford and beyond. Free SEO audit.",
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
  authors: [{ name: "StaffordshireSEO" }],
  creator: "StaffordshireSEO",
  publisher: "StaffordshireSEO",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.staffordshireseo.co.uk",
    siteName: "StaffordshireSEO",
    title: "SEO Company Staffordshire | Staffordshire SEO Agency | StaffordshireSEO",
    description:
      "Staffordshire's leading SEO company. Proven rankings, transparent reporting, no contracts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StaffordshireSEO - SEO Company Staffordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company Staffordshire | Staffordshire SEO Agency | StaffordshireSEO",
    description:
      "Staffordshire's leading SEO company. Proven rankings, transparent reporting, no contracts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.staffordshireseo.co.uk",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.staffordshireseo.co.uk",
  name: "StaffordshireSEO",
  description:
    "Staffordshire's leading SEO company, helping local businesses rank on page one of Google and grow online.",
  url: "https://www.staffordshireseo.co.uk",
  telephone: "+441234567890",
  email: "hello@staffordshireseo.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stafford",
    addressRegion: "Staffordshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.8057,
    longitude: -2.1216,
  },
  areaServed: [
    { "@type": "Place", name: "Staffordshire" },
    { "@type": "Place", name: "Cannock" },
    { "@type": "Place", name: "Tamworth" },
    { "@type": "Place", name: "Lichfield" },
    { "@type": "Place", name: "Stafford" },
    { "@type": "Place", name: "Burton upon Trent" },
  ],
  serviceType: [
    "SEO",
    "Local SEO",
    "Search Engine Optimisation",
    "Web Design",
    "E-commerce Development",
  ],
  priceRange: "££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  sameAs: [
    "https://www.facebook.com/staffordshireseo",
    "https://twitter.com/staffordshireseo",
    "https://www.linkedin.com/company/staffordshireseo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="bg-brand-navy text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
