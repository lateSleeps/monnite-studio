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
          "Bali-based design and development studio. We build brands, websites, apps, and digital products that grow with your business.",
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
          "Web Design",
          "Web Development",
          "UI/UX Design",
          "Brand Identity",
          "E-commerce Development",
          "Software Development",
          "Digital Product Design",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://monnitestudio.com/#localbusiness",
        name: "Monnite Studio",
        url: "https://monnitestudio.com",
        image: "https://monnitestudio.com/portfolio-01.webp",
        description:
          "Bali-based design and development studio. Fixed-price packages, fast delivery, real results.",
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
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design System" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Websites" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Strategy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultation" } },
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
