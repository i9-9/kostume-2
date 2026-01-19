export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://kostumeweb.net/#store",
    "name": "KOSTÜME Store Palermo",
    "image": "https://kostumeweb.net/img/seo/kostume-og-main.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Honduras 4771",
      "addressLocality": "Palermo",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1414",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.5893",
      "longitude": "-58.4318"
    },
    "url": "https://kostumeweb.net",
    "telephone": "+54-9-11-5350-5298",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
