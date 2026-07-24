import type { Education } from "@/types/portfolio";

export const education: readonly Education[] = [
  {
    institution: "Universitas Terbuka",
    program: "Incoming Undergraduate Student — Information Systems",
    startYear: "Starting 2026",
    endYear: "",
    description:
      "Officially enrolled and scheduled to begin undergraduate studies in Information Systems in 2026.",
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
    program: "Computer and Network Engineering",
    startYear: "2020",
    endYear: "2023",
    gradeLabel: "GPA",
    gradeValue: "3.80/4.00",
    sortOrder: 3,
  },
];