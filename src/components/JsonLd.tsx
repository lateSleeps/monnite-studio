export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://monnitestudio.com/#organization",
        name: "Monnite Studio",
        url: "https://monnitestudio.com",
        logo: {
          "@type": "ImageObject",
          url: "https://monnitestudio.com/Logo.svg",
        },
        description:
          "Monnite Studio — jasa pembuatan website profesional dan design agency di Bali, Tabanan. Spesialis UI/UX, web app, brand strategy, dan e-commerce untuk startup dan bisnis.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tabanan",
          addressRegion: "Bali",
          addressCountry: "ID",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Indonesian"],
        },
        sameAs: [
          "https://www.instagram.com/monnitestudio",
        ],
        areaServed: ["Bali", "Indonesia", "Australia", "International"],
        knowsAbout: [
          "Jasa Pembuatan Website Bali",
          "Jasa Pembuatan Website Tabanan",
          "Design Agency Bali",
          "UI/UX Design Bali",
          "Brand Strategy Bali",
          "Jasa Desain Aplikasi Bali",
          "E-commerce Development Bali",
          "Web Design Agency Tabanan",
          "Software Development Bali",
          "Digital Agency Indonesia",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://monnitestudio.com/#localbusiness",
        name: "Monnite Studio",
        url: "https://monnitestudio.com",
        image: "https://monnitestudio.com/portfolio-01.webp",
        description:
          "Jasa pembuatan website profesional dan design agency di Tabanan, Bali. Fixed-price, fast delivery. Melayani UI/UX design, web app, brand strategy, dan e-commerce.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tabanan",
          addressRegion: "Bali",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -8.5353,
          longitude: 115.1378,
        },
        priceRange: "$$",
        servesCuisine: undefined,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Design & Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa Pembuatan Website Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa Desain Aplikasi Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI UX Design Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Strategy Agency Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jasa Design System Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development Bali" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Agency Tabanan" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://monnitestudio.com/#website",
        url: "https://monnitestudio.com",
        name: "Monnite Studio",
        publisher: { "@id": "https://monnitestudio.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
