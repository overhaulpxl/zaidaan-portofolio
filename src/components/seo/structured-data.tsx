import { siteConfig } from "@/content/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.contact.email}`,
      jobTitle: siteConfig.positioning,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.locality,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "SMKN 1 Pacet",
      },
      sameAs: [
        siteConfig.socials.github,
        siteConfig.socials.linkedin,
        siteConfig.socials.linktree,
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.applicationName,
      url: siteConfig.url,
      description: siteConfig.seo.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": personId,
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
