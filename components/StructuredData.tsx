import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": BUSINESS_INFO.name,
    "image": `${BUSINESS_INFO.websiteUrl}/images/arvo-interior-hero.jpg`,
    "description": "Professional interior installation-only services in Dubai, Sharjah, and Ajman. TV unit wall mounting, wall panels, curtains & roller blinds, SPC flooring, and interior painting.",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "url": BUSINESS_INFO.websiteUrl,
    "sameAs": [BUSINESS_INFO.instagramUrl],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Dubai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sharjah"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ajman"
      }
    ],
    "priceRange": "$$",
    "knowsAbout": [
      "TV Unit Wall Installation",
      "Wall Panels Installation",
      "Curtains & Roller Blinds Installation",
      "SPC Flooring Installation",
      "Painting & Décor Finishing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
