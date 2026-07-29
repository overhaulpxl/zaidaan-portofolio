import { siteConfig } from "@/content/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const profilePageId = `${siteConfig.url}/#profile-page`;
const portraitUrl = `${siteConfig.url}/images/zaidaan-portrait.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      image: portraitUrl,
      description: "Digital product builder and community operations specialist based in Cianjur, Indonesia.",
      email: `mailto:${siteConfig.contact.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.locality,
        addressRegion: siteConfig.location.region,
        addressCountry: "ID",
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
      name: siteConfig.seo.title,
      url: `${siteConfig.url}/`,
      description: siteConfig.seo.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": personId,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: siteConfig.seo.title,
      url: `${siteConfig.url}/`,
      description: siteConfig.seo.description,
      inLanguage: siteConfig.language,
      mainEntity: {
        "@id": personId,
      },
      isPartOf: {
        "@id": websiteId,
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
