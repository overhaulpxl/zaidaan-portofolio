export type SiteConfig = {
  url: string;
  name: string;
  applicationName: string;
  positioning: string;
  location: {
    label: string;
    locality: string;
    region: string;
    country: string;
  };
  locale: string;
  language: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  cvUrl: string | null;
  contact: {
    phoneDisplay: string;
    phoneInternational: string;
    email: string;
    website: string;
    whatsappMessage: string;
    whatsappUrl: string;
  };
  socials: {
    github: string;
    linkedin: string;
    linktree: string;
  };
};

const whatsappNumber = "6285793719676";
const whatsappMessage =
  "Hello Zaidaan, I found your portfolio and would like to discuss an opportunity.";

export const siteConfig: SiteConfig = {
  url: "https://zaidaan.my.id",
  name: "Zaidaan Zalfaa",
  applicationName: "Personal Portfolio",
  positioning: "Customer Service, Operations & Digital Support",
  location: {
    label: "Cianjur, West Java, Indonesia",
    locality: "Cianjur",
    region: "West Java",
    country: "Indonesia",
  },
  locale: "en_US",
  language: "en",
  seo: {
    title: "Zaidaan Zalfaa — Portfolio | Computer & Network Engineering Graduate & IS Student",
    description:
      "Personal portfolio of Zaidaan Zalfaa, Computer & Network Engineering graduate from SMKN 1 Pacet and Information Systems undergraduate at Universitas Terbuka, featuring middleman transaction services, digital products, community operations, and automation.",
    keywords: [
      "Zaidaan Zalfaa",
      "SMKN 1 Pacet",
      "Universitas Terbuka",
      "Computer and Network Engineering",
      "Teknik Komputer dan Jaringan",
      "Information Systems",
      "middleman transaction",
      "rekber",
      "customer service",
      "community operations",
      "digital transactions",
      "website management",
      "IT support",
      "Python automation",
      "Cianjur",
    ],
  },
  cvUrl: "/api/download/cv",
  contact: {
    phoneDisplay: "+62 857-9371-9676",
    phoneInternational: whatsappNumber,
    email: "me@zaidaan.my.id",
    website: "zaidaan.my.id",
    whatsappMessage,
    whatsappUrl: `https://wa.me/${whatsappNumber}`,
  },
  socials: {
    github: "https://github.com/overhaulpxl",
    linkedin: "https://www.linkedin.com/in/zaidaanzalfaa/",
    linktree: "https://linktr.ee/zaidaaann",
  },
};
