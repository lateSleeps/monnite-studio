import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monnite Studio | Design & Development Studio Bali",
  description: "Bali-based design and development studio. We build brands, websites, apps, and digital products that grow with your business. Fixed-price, fast delivery, real results.",
  keywords: [
    "web design Bali",
    "web development Bali",
    "digital agency Bali",
    "product design studio",
    "brand identity Bali",
    "startup studio Indonesia",
    "UI UX design Bali",
    "website development Indonesia",
    "Monnite Studio",
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
    title: "Monnite Studio | Design & Development Studio Bali",
    description: "Bali-based design and development studio. We build brands, websites, apps, and digital products that grow with your business.",
    siteName: "Monnite Studio",
    images: [
      {
        url: "/portfolio-01.webp",
        width: 1200,
        height: 630,
        alt: "Monnite Studio — Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monnite Studio | Design & Development Studio Bali",
    description: "Bali-based design and development studio. We build brands, websites, apps, and digital products that grow with your business.",
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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
