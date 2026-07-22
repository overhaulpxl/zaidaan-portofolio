import type { Certification } from "@/types/portfolio";

export const certificates: Certification[] = [
  {
    title: "Goethe-Zertifikat B1",
    issuer: "Goethe-Institut",
    issuedLabel: "Jul 2025",
    level: "B1",
    documentUrl: "/documents/certificates/goethe-zertifikat-b1.pdf",
    published: true,
    sortOrder: 1,
  },
  {
    title: "Computer Network Development with MikroTik",
    issuer: "Karier.mu / LKP Bina Karya Mandiri",
    issuedLabel: "9 Sep 2023",
    scoreLabel: "Training Activity Score",
    scoreValue: "88",
    duration: "14h 56m",
    documentUrl: "/documents/certificates/mikrotik-network-development.pdf",
    published: true,
    sortOrder: 2,
  },
  {
    title: "TOEIC",
    issuer: "Educational Testing Service (ETS)",
    issuedLabel: "Aug 2022",
    documentUrl: "/documents/certificates/toeic.pdf",
    published: true,
    sortOrder: 3,
  },
];
