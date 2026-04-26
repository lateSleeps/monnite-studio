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

export const metadata: Metadata = {
  title: "Monnite Studio | Jasa Pembuatan Website & Design Agency Bali",
  description: "Monnite Studio — jasa pembuatan website profesional di Bali & Tabanan. Design agency Bali untuk startup, brand, dan bisnis. UI/UX, web app, e-commerce. Fixed-price, fast delivery.",
  keywords: [
    "jasa pembuatan website Bali",
    "jasa pembuatan website Tabanan",
    "design agency Bali",
    "digital agency Tabanan",
    "UI UX designer Bali",
    "jasa desain aplikasi Bali",
    "brand strategy agency Bali",
    "jasa design system Bali",
    "jasa website startup Bali",
    "jasa bikin website profesional di Bali",
    "studio desain dan teknologi Bali",
    "agency website untuk startup Bali",
    "jasa pembuatan aplikasi mobile Bali",
    "web design agency Tabanan Bali",
    "Monnite Studio",
    "web design Bali",
    "web development Bali",
    "software development Bali",
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
    title: "Monnite Studio | Jasa Pembuatan Website & Design Agency Bali",
    description: "Monnite Studio — jasa pembuatan website profesional di Bali & Tabanan. Design agency untuk startup, brand, dan bisnis lokal maupun internasional.",
    siteName: "Monnite Studio",
    images: [
      {
        url: "/portfolio-01.webp",
        width: 1200,
        height: 630,
        alt: "Monnite Studio — Jasa Pembuatan Website & Design Agency Bali Tabanan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monnite Studio | Jasa Pembuatan Website & Design Agency Bali",
    description: "Monnite Studio — jasa pembuatan website profesional di Bali & Tabanan. Design agency untuk startup, brand, dan bisnis.",
    images: ["/portfolio-01.webp"],
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
