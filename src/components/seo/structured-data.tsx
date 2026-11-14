import { siteConfig } from "@/content/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const profilePageId = `${siteConfig.url}/#profile-page`;
const serviceId = `${siteConfig.url}/#middleman-service`;
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
      jobTitle: "Customer Service, Community Operations & Digital Support Specialist",
      email: `mailto:${siteConfig.contact.email}`,
      telephone: siteConfig.contact.phoneDisplay,
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SMKN 1 Pacet",
          description: "Vocational High School Graduate in Computer and Network Engineering (TKJ)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Rudi Russel Sprachschule",
          description: "Intensive German Language Course (Goethe-Zertifikat B1)",
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
      knowsAbout: [
        "Customer Service",
        "Community Operations",
        "Transaction Coordination",
        "Escrow Handling",
        "Dispute Resolution",
        "Computer and Network Engineering",
        "MikroTik",
        "Linux Administration",
        "Python Automation",
        "Next.js",
        "TypeScript",
        "Discord Bot Development",
      ],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Middleman Transaction Handling & Escrow Coordination",
      provider: {
        "@id": personId,
      },
      serviceType: "Escrow & Transaction Coordination",
      description:
        "Structured buyer–seller transaction coordination with verified records, responsive communication, and dispute mediation. Over 2,400+ completed transactions.",
      url: `${siteConfig.url}/middleman`,
      areaServed: "Worldwide",
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
