export interface DNSTDifferentiator {
  id: string;
  title: string;
  description: string;
}

export interface DNSTSyllabusClass {
  classId: string;
  className: string;
  category: "Primary" | "Middle" | "Secondary" | "Senior Secondary";
  placeholderText: string;
  subjects?: string[];
}

export const DNST_META = {
  title: "DLS National Scholarship Test (DNST)",
  tagline: "Discover Talent. Reward Excellence. Shape the Future.",
  subtitle: "India's Next-Generation Student Assessment Platform",
  scholarshipPool: "Scholarships Worth ₹25 Lakhs",
  eligibility: "Open for Students from Classes I to XII",
  description:
    "DNST combines a nationally designed scholarship examination with detailed performance analysis to help students, parents, and schools make informed academic decisions.",
  studentDiscovery:
    "DNST helps students discover how they think, how they reason, how they solve problems, and how they perform academically.",
  insightsClaim:
    "Every participant receives valuable performance insights. Top performers become eligible for scholarships, awards, certificates, medals, and national recognition.",
};

export const DNST_DIFFERENTIATORS: DNSTDifferentiator[] = [
  {
    id: "scholarship",
    title: "Scholarship Opportunities Worth ₹25 Lakhs",
    description: "Recognizing and rewarding exceptional academic talent across India.",
  },
  {
    id: "performance",
    title: "Comprehensive Performance Analysis",
    description: "Every student receives a detailed scorecard with performance insights.",
  },
  {
    id: "benchmarking",
    title: "Academic Benchmarking",
    description: "Compare student performance at School, District, State, and National levels.",
  },
  {
    id: "learning-insights",
    title: "Learning Insights",
    description: "Understand academic strengths and areas for improvement through structured reports.",
  },
  {
    id: "school-recognition",
    title: "School Excellence Recognition",
    description: "Participating schools receive institutional performance reports, benchmarking analytics, and recognition.",
  },
];

export const DNST_BENCHMARKING_LEVELS = [
  { level: "School", description: "Benchmarked against school peers" },
  { level: "District", description: "District-level academic standings" },
  { level: "State", description: "State-wide competitive comparison" },
  { level: "National", description: "National percentile & rank insights" },
];

export const DNST_SYLLABUS_CLASSES: DNSTSyllabusClass[] = [
  { classId: "class-1", className: "Class 1", category: "Primary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-2", className: "Class 2", category: "Primary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-3", className: "Class 3", category: "Primary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-4", className: "Class 4", category: "Primary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-5", className: "Class 5", category: "Primary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-6", className: "Class 6", category: "Middle", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-7", className: "Class 7", category: "Middle", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-8", className: "Class 8", category: "Middle", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-9", className: "Class 9", category: "Secondary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-10", className: "Class 10", category: "Secondary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-11", className: "Class 11", category: "Senior Secondary", placeholderText: "Syllabus details will be available soon." },
  { classId: "class-12", className: "Class 12", category: "Senior Secondary", placeholderText: "Syllabus details will be available soon." },
];
