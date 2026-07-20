import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    title: "Goethe-Zertifikat (B1)",
    issuer: "Goethe-Institut",
    issued: "Jul 2025",
    certificateUrl: "/documents/certificates/goethe-zertifikat-b1.pdf",
  },
  {
    title: "Computer Network Development with MikroTik",
    issuer: "Karier.mu / LKP Bina Karya Mandiri",
    issued: "Sep 2023",
    certificateUrl: "/documents/certificates/mikrotik-network-development.pdf",
    result: "Excellent",
    duration: "14 hours 56 minutes",
    activityScore: "88",
    competencies: [
      "LAN design",
      "UTP cabling",
      "Wireless networking",
      "Static TCP/IP configuration",
      "Internet gateway installation and configuration",
      "Network device administration",
      "Network system administration",
      "Testing and troubleshooting",
      "Network maintenance",
      "Network security monitoring and administration"
    ]
  },
  {
    title: "TOEIC",
    issuer: "Educational Testing Service (ETS)",
    issued: "Aug 2022",
    certificateUrl: "/documents/certificates/toeic.pdf",
  },
];
