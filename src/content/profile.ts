import { siteConfig } from "@/content/site";
import type { ProfilePhoto } from "@/types/portfolio";

export const profile = {
  name: siteConfig.name,
  headline: "Supporting people. Streamlining operations. Building practical digital systems.",
  roles: "CUSTOMER SERVICE · OPERATIONS · DIGITAL SUPPORT",
  availability: "OPEN TO OPPORTUNITIES",
  introduction: "I’m Zaidaan Zalfaa, a Computer and Network Engineering graduate with hands-on experience in customer service, online transaction handling, order and website management, community operations, event facilitation, automation, and basic IT support.",
  opportunityNote: "Open to on-site, remote, and project-based opportunities.",
  opportunityModes: ["On-site", "Remote", "Project-based"],
  location: siteConfig.location.label,
  profilePhoto: null as ProfilePhoto | null,
  stats: [
    { label: "Buyer–Seller Transactions", value: "1,000+" },
    { label: "Academic GPA", value: "3.80 / 4.00" },
    { label: "Goethe-Zertifikat", value: "B1" },
    { label: "MikroTik Training Activity Score", value: "88" },
  ],
  about: [
    "I’m a Computer and Network Engineering graduate based in Cianjur, West Java, with hands-on experience across community operations, digital transactions, customer support, website and order management, automation, and basic IT support.",
    "My work includes managing buyer-seller transactions, helping resolve day-to-day customer and community issues, operating online services, and building practical Telegram and Discord bot systems."
  ],
  aiWorkflow: "I use modern tools, including AI-assisted workflows, to support research, development, documentation, and quality review.",
  aboutEvidence: "Through community middleman operations, I have completed 1,000+ buyer-seller transactions.",
  capabilityTags: [
    "Customer Service",
    "Community Operations",
    "Transaction Handling",
    "Event Facilitation",
    "Website Management",
    "IT Support"
  ],
};