export interface Interview {
  id: string;
  userId: string;
  company: string;
  role: string;
  type: string;
  techstack: string[];
  level: string;
  questions: string[];
  score?: number;
  finalAssessment?: string; 
  createdAt: string;
}

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    company: "facebook",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    score: 85,
    finalAssessment: "Great job on the React questions! Your understanding of hooks is solid, but brush up on virtual DOM diffing.",
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    company:"tiktok",
    role: "Backend Developer",
    type: "System Design",
    techstack: ["Node.js", "PostgreSQL"],
    level: "Mid-Level",
    questions: [],
    createdAt: "2024-03-14T14:30:00Z",
  }
];