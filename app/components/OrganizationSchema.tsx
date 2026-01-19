export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kostumeweb.net/#organization",
    "name": "KOSTÜME",
    "url": "https://kostumeweb.net",
    "logo": "https://kostumeweb.net/img/logo.svg",
    "description": "Original Ready-to-Wear designed in Buenos Aires. Made in Argentina.",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buenos Aires",
        "addressCountry": "AR"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-9-11-5350-5298",
      "contactType": "Customer Service",
      "email": "contacto@kostumeweb.net",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/kostumeba",
      "https://www.tiktok.com/@kostumeba"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
