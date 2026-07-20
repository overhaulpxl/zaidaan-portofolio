export interface Certificate {
  title: string;
  issuer: string;
  issued: string;
  result?: string;
  duration?: string;
  activityScore?: string;
  competencies?: string[];
  actionLabel?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Goethe-Zertifikat (B1)",
    issuer: "Goethe-Institut",
    issued: "Jul 2025",
    actionLabel: "View Certificate"
  },
  {
    title: "Computer Network Development with MikroTik",
    issuer: "Karier.mu / LKP Bina Karya Mandiri",
    issued: "Sep 2023",
    result: "Excellent",
    duration: "14 hours 56 minutes",
    activityScore: "88",
    actionLabel: "View Certificate",
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
    actionLabel: "View Certificate"
  }
];
