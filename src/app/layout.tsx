import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// MONNITE-SEO: Homepage meta — primary keyword + brand, max 60-char title, 160-char description
export const metadata: Metadata = {
  title: "Monnite Studio — UI/UX & Web Design Agency Bali",
  description: "End-to-end design and development studio in Tabanan, Bali. We build websites, apps, and systems — one team, no handoffs. Fixed-price, 4–8 weeks.",
  keywords: [
    // Brand & Local
    "Monnite Studio",
    "monnite",
    "UI/UX Design Agency Bali",
    "Webflow Developer Bali",
    "Framer Designer Bali",
    "Creative Studio Bali",
    "Product Design Consultant Bali",
    "Digital Agency Bali",
    "UI UX Designer Tabanan",
    "web design Bali",
    "web development Bali",
    "Jasa Pembuatan Website Tabanan",
    // No Handoff
    "end-to-end product design and development",
    "design to development agency no handoff",
    "integrated UI/UX and Webflow development",
    "full-cycle digital product studio",
    "agency yang bisa desain sekaligus coding",
    "design-led development partner",
    // Strategy
    "digital product strategy consultant",
    "product discovery workshop for startups",
    "UX audit for digital products",
    "jasa validasi ide aplikasi",
    // Niche / Custom
    "custom ERP UI UX redesign",
    "custom POS development Bali",
    "sistem digital khusus bisnis retail klinik",
    // Aesthetic / Tools
    "premium minimalist website design",
    "Webflow expert Indonesia",
    "Framer animation for professional websites",
    "high-end landing page design Bali",
  ],
  authors: [{ name: "Monnite Studio", url: "https://monnitestudio.com" }],
  creator: "Monnite Studio",
  metadataBase: new URL("https://monnitestudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://monnitestudio.com",
    title: "Monnite Studio — UI/UX & Web Design Agency Bali",
    description: "End-to-end design and development studio in Tabanan, Bali. We build websites, apps, and systems — one team, no handoffs.",
    siteName: "Monnite Studio",
    images: [
      {
        url: "https://monnitestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monnite Studio — UI/UX & Web Design Agency Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monnite Studio — UI/UX & Web Design Agency Bali",
    description: "End-to-end design and development studio in Tabanan, Bali. One team, no handoffs, fixed-price.",
    images: ["https://monnitestudio.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased selection:bg-white selection:text-black`}>
        <JsonLd />
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
