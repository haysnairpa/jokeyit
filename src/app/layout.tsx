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
  title: "Jokey Digitalize",
  description: "Jokey Digitalize - Solusi Digital yang Tepat untuk Kebutuhan Anda",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/jokeyit.png", sizes: "any" },
      { url: "/jokeyit.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/jokeyit.png",
    apple: { url: "/jokeyit.png", sizes: "180x180", type: "image/png" },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/jokeyit.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/jokeyit.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jokeyit.png" sizes="any" />
        <link rel="apple-touch-icon" href="/jokeyit.png" />
        <link rel="manifest" href="/manifest.json" />
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
