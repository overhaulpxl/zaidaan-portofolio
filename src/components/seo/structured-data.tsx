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
      description: siteConfig.seo.description,
      jobTitle: "Customer Service, Community Operations & IT Support Specialist",
      email: `mailto:${siteConfig.contact.email}`,
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SMKN 1 Pacet",
          description: "Vocational High School Graduate in Computer and Network Engineering (TKJ)",
        },
      ],
      memberOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universitas Terbuka",
          description: "Current Undergraduate Student in Information Systems",
        },
      ],
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
