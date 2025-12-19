export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jokey.IT",
  url: "https://jokey.id",
  logo: "https://jokey.id/jokeyit.png",
  description: "Jasa pembuatan website, aplikasi mobile, dan solusi digital profesional untuk UMKM, startup, dan organisasi di Indonesia.",
  sameAs: [
    "https://www.instagram.com/jokey.it",
    "https://wa.me/62",
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
};

export const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pembuatan Website",
    description: "Website profesional dengan desain menarik dan responsif untuk bisnis, portfolio, atau toko online Anda.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aplikasi Mobile",
    description: "Aplikasi mobile yang intuitif dan fungsional untuk Android dan iOS, sesuai dengan kebutuhan bisnis Anda.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sistem Internal",
    description: "Sistem manajemen internal untuk meningkatkan efisiensi operasional dan produktivitas tim Anda.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing Page Event",
    description: "Landing page menarik untuk event, promosi, atau produk baru yang dapat meningkatkan konversi.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maintenance & Update",
    description: "Layanan pemeliharaan dan pembaruan untuk memastikan website atau aplikasi Anda selalu up-to-date.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Optimasi Performa",
    description: "Peningkatan kecepatan dan performa website atau aplikasi untuk pengalaman pengguna yang lebih baik.",
    provider: {
      "@type": "Organization",
      name: "Jokey.IT",
      url: "https://jokey.id",
    },
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama waktu pengerjaan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan tergantung kompleksitas website. Umumnya website sederhana membutuhkan 2-4 minggu, sementara website kompleks membutuhkan 1-3 bulan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada garansi untuk layanan Anda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami memberikan garansi 100% kepuasan pelanggan. Jika Anda tidak puas, kami akan melakukan revisi hingga Anda puas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Anda menyediakan support setelah project selesai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami menyediakan support 24/7 untuk memastikan website atau aplikasi Anda berjalan dengan baik.",
      },
    },
  ],
};
