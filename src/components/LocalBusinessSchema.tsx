import { business, serviceAreas, services } from "@/lib/config";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      "Professional pressure cleaning in Adelaide for driveways, walkways, house exteriors and gutters.",
    url: business.domain,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.suburb,
      addressRegion: business.address.state,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    areaServed: serviceAreas.map((suburb) => ({
      "@type": "Place",
      name: suburb,
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
    sameAs: [business.social.facebook, business.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
