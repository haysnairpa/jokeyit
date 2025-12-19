import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jokey.IT - Solusi Digital Terbaik untuk UMKM & Startup Indonesia",
  description: "Jasa pembuatan website, aplikasi mobile, dan solusi digital profesional untuk UMKM, startup, dan organisasi di Indonesia. Konsultasi gratis dan support 24/7.",
  keywords: "jasa digital, pembuatan website, aplikasi mobile, solusi digital, web development, digital marketing, jokey.it",
  manifest: "/manifest.json?v=1",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jokey.id",
    siteName: "Jokey.IT",
    title: "Jokey.IT - Solusi Digital Terbaik untuk UMKM & Startup",
    description: "Jasa pembuatan website, aplikasi mobile, dan solusi digital profesional untuk bisnis Anda.",
    images: [
      {
        url: "https://jokey.id/jokeyit.png",
        width: 1200,
        height: 630,
        alt: "Jokey.IT - Solusi Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jokey.IT - Solusi Digital Terbaik",
    description: "Jasa pembuatan website, aplikasi mobile, dan solusi digital profesional.",
    images: ["https://jokey.id/jokeyit.png"],
  },
  icons: {
    icon: [
      { url: "/jokeyit.png?v=1", sizes: "any" },
      { url: "/jokeyit.png?v=1", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/jokeyit.png?v=1",
    apple: { url: "/jokeyit.png?v=1", sizes: "180x180", type: "image/png" },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/jokeyit.png?v=1",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/jokeyit.png?v=1",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jokey.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/jokeyit.png?v=1" sizes="any" />
        <link rel="icon" type="image/png" href="/jokeyit.png?v=1" />
        <link rel="apple-touch-icon" href="/jokeyit.png?v=1" />
        <link rel="shortcut icon" type="image/png" href="/jokeyit.png?v=1" />
        <link rel="manifest" href="/manifest.json?v=1" />
        <link rel="canonical" href="https://jokey.id" />
        <meta name="msapplication-TileImage" content="/jokeyit.png?v=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jokey.IT",
              url: "https://jokey.id",
              logo: "https://jokey.id/jokeyit.png",
              description: "Jasa pembuatan website, aplikasi mobile, dan solusi digital profesional untuk UMKM, startup, dan organisasi di Indonesia.",
              sameAs: [
                "https://www.instagram.com/jokey.it",
                "https://wa.me/6285198690654?text=Halo%20jokey.it%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "jokeydigitalize@gmail.com",
                availableLanguage: ["id", "en"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
