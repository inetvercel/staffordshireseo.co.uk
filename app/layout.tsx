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
      "Website Design & SEO Staffordshire | StaffordshireSEO",
    template: "%s | StaffordshireSEO",
  },
  description:
    "Staffordshire's leading web design and SEO agency. We build stunning, fast websites and dominate local search for businesses across Staffordshire. Get your free SEO audit today.",
  keywords: [
    "website design staffordshire",
    "web design staffordshire",
    "staffordshire website design",
    "staffordshire website company",
    "SEO staffordshire",
    "local seo staffordshire",
    "website design company staffordshire",
    "ecommerce website staffordshire",
    "bespoke website design staffordshire",
    "website maintenance staffordshire",
  ],
  authors: [{ name: "StaffordshireSEO" }],
  creator: "StaffordshireSEO",
  publisher: "StaffordshireSEO",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.staffordshireseo.co.uk",
    siteName: "StaffordshireSEO",
    title: "Website Design & SEO Staffordshire | StaffordshireSEO",
    description:
      "Staffordshire's leading web design and SEO agency. Stunning websites, proven results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StaffordshireSEO - Website Design & SEO Staffordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & SEO Staffordshire | StaffordshireSEO",
    description:
      "Staffordshire's leading web design and SEO agency. Stunning websites, proven results.",
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
    "Staffordshire's leading web design and SEO agency, helping local businesses rank higher and grow online.",
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
    "Web Design",
    "SEO",
    "E-commerce Development",
    "Website Maintenance",
    "Local SEO",
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
