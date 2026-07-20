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
    titleTemplate: string;
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
  applicationName: "Zaidaan Zalfaa Portfolio",
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
    title: "Zaidaan Zalfaa — Customer Service, Operations & Digital Support",
    titleTemplate: "%s | Zaidaan Zalfaa",
    description:
      "Portfolio of Zaidaan Zalfaa, a Computer and Network Engineering graduate with experience in customer service, community operations, digital transactions, website management, IT support, and practical automation.",
    keywords: [
      "Zaidaan Zalfaa",
      "customer service",
      "community operations",
      "digital transactions",
      "website management",
      "IT support",
      "Python automation",
      "Cianjur",
    ],
  },
  cvUrl: "/documents/zaidaan-zalfaa-cv.pdf",
  contact: {
    phoneDisplay: "+62 857-9371-9676",
    phoneInternational: whatsappNumber,
    email: "zaidaan1337@gmail.com",
    website: "zaidaan.my.id",
    whatsappMessage,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  socials: {
    github: "https://github.com/overhaulpxl",
    linkedin: "https://linkedin.com/in/zaidaan-zalfaa-a09306291",
    linktree: "https://linktr.ee/zaidaaann",
  },
};
