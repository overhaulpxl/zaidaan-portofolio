const whatsappMessage =
  "Hello Zaidaan, I found your portfolio and would like to discuss an opportunity.";

export const siteConfig = {
  cvUrl: null as string | null,
  contact: {
    phoneDisplay: "+62 857-9371-9676",
    phoneInternational: "6285793719676",
    email: "zaidaan1337@gmail.com",
    website: "zaidaan.my.id",
    whatsappMessage,
    whatsappUrl: `https://wa.me/6285793719676?text=${encodeURIComponent(whatsappMessage)}`,
  },
  socials: {
    github: "https://github.com/overhaulpxl",
    linkedin: "https://www.linkedin.com/in/zaidaan-zalfaa-a09306291",
    linktree: "https://linktr.ee/zaidaaann",
  },
} as const;
