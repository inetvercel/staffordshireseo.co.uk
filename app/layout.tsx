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
    default: "StaffordshireSEO | SEO Company & Agency Staffordshire",
    template: "%s | StaffordshireSEO",
  },
  description:
    "Staffordshire's leading SEO company, helping local businesses rank on page one of Google and grow online. Professional SEO services across Staffordshire.",
  keywords: [
    "SEO company Staffordshire",
    "SEO agency Staffordshire",
    "Staffordshire SEO",
    "local SEO Staffordshire",
    "SEO services Staffordshire",
    "Google ranking Staffordshire",
    "SEO expert Staffordshire",
    "search engine optimisation Staffordshire",
  ],
  authors: [{ name: "StaffordshireSEO" }],
  creator: "StaffordshireSEO",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "Z8pnBJ5tp6O_8-wJ2yJXNo2x_wvuIg_lP7uXPPuCR7s",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.staffordshireseo.co.uk",
    siteName: "StaffordshireSEO",
    title: "StaffordshireSEO | SEO Company & Agency Staffordshire",
    description:
      "Staffordshire's leading SEO company. We help local businesses rank on page one of Google and grow their revenue online.",
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
    title: "StaffordshireSEO | SEO Company & Agency Staffordshire",
    description:
      "Staffordshire's leading SEO company. We help local businesses rank on page one of Google.",
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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.staffordshireseo.co.uk",
  name: "StaffordshireSEO",
  description:
    "Staffordshire's leading SEO company, helping local businesses rank on page one of Google and grow online.",
  url: "https://www.staffordshireseo.co.uk",
  email: "hello@staffordshireseo.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Station Ct",
    addressLocality: "Cannock",
    postalCode: "WS11 0EJ",
    addressRegion: "Staffordshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.6916,
    longitude: -2.0319,
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PD02DQFDEM"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PD02DQFDEM');
            `,
          }}
        />
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
