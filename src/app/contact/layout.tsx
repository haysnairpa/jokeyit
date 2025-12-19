import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - Jokey.IT | Konsultasi Digital Gratis",
  description: "Hubungi Jokey.IT untuk konsultasi gratis tentang solusi digital Anda. Tim kami siap membantu mewujudkan ide digital Anda dengan profesional.",
  openGraph: {
    title: "Hubungi Kami - Jokey.IT",
    description: "Hubungi Jokey.IT untuk konsultasi gratis tentang solusi digital Anda.",
    url: "https://jokey.id/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://jokey.id/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
