import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://gorodmasterov.kg";
const SITE_NAME = "Город Мастеров";
const TITLE = "Город Мастеров — Мастер за 20 минут в Бишкеке | Электрик, Сантехник";
const DESCRIPTION =
  "Вызовите проверенного мастера за 20 минут в Бишкеке. Электрик, сантехник, сборка мебели и другие услуги. Заказ через Telegram — быстро, удобно и надёжно.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "мастер Бишкек",
    "сантехник Бишкек",
    "электрик Бишкек",
    "мастер на час Бишкек",
    "вызов мастера Бишкек",
    "ремонт квартиры Бишкек",
    "сборка мебели Бишкек",
    "домашний мастер Бишкек",
    "мастер недорого Бишкек",
    "город мастеров",
    "мастера рядом",
    "услуги мастера",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ru_KG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Город Мастеров — мастера в Бишкеке",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Город Мастеров",
  description: DESCRIPTION,
  url: SITE_URL,
  areaServed: {
    "@type": "City",
    name: "Бишкек",
    addressCountry: "KG",
  },
  priceRange: "от 200 сом",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Russian", "Kyrgyz"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги мастеров",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Электрик" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Сантехник" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Сборка мебели" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Уборка" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
