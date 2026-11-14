import type { Education } from "@/types/portfolio";

export const education: readonly Education[] = [
  {
    institution: "Universitas Terbuka",
    program: "Undergraduate Student — Information Systems",
    startYear: "2026",
    endYear: "Present",
    description:
      "Currently pursuing an undergraduate degree in Information Systems, focusing on software development, systems analysis, and enterprise digital solutions.",
    sortOrder: 1,
  },
  {
    institution: "Rudi Russel Sprachschule",
    program: "Intensive Deutschkurs",
    startYear: "Oct 2023",
    endYear: "Apr 2024",
    description:
      "Completed a six-month intensive German language program focused on building a strong foundation in German.",
    sortOrder: 2,
  },
  {
    institution: "SMKN 1 Pacet",
    program: "Vocational High School Graduate — Computer and Network Engineering",
    startYear: "2020",
    endYear: "2023",
    gradeLabel: "GPA",
    gradeValue: "3.80/4.00",
    description:
      "Graduated with honors in Computer and Network Engineering (TKJ), specializing in computer networking, hardware troubleshooting, Linux system administration, and routing.",
    sortOrder: 3,
  },
];