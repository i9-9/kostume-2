export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kostumeweb.net/#website",
    "url": "https://kostumeweb.net",
    "name": "KOSTÜME",
    "description": "Original Ready-to-Wear designed in Buenos Aires. Made in Argentina.",
    "publisher": {
      "@id": "https://kostumeweb.net/#organization"
    },
    "inLanguage": ["en-US", "es-AR"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eshop.kostumeweb.net/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
