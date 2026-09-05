import { Metadata } from "next";
import { DNSTHero } from "@/components/dnst/DNSTHero";
import { DNSTWhy } from "@/components/dnst/DNSTWhy";
import { DNSTDifferentiators } from "@/components/dnst/DNSTDifferentiators";
import { DNSTBenchmarking } from "@/components/dnst/DNSTBenchmarking";
import { DNSTSyllabusTeaser, DNSTRegistrationCTA } from "@/components/dnst/DNSTTeasers";

export const metadata: Metadata = {
  title: "DLS National Scholarship Test (DNST) 2025 | Diligence Learning Solutions",
  description:
    "India's next-generation student assessment platform. Scholarships worth ₹25 Lakhs for students from Classes I to XII across Kerala, Tamil Nadu & UAE.",
};

export default function DNSTPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      {/* 1. DNST Hero (First View) */}
      <DNSTHero />

      {/* 2. Why DNST? */}
      <DNSTWhy />

      {/* 3. What Makes DNST Different? */}
      <DNSTDifferentiators />

      {/* 4. Academic Benchmarking Across 4 Tiers */}
      <DNSTBenchmarking />

      {/* 5. Syllabus Teaser */}
      <DNSTSyllabusTeaser />

      {/* 6. Registration CTA */}
      <DNSTRegistrationCTA />
    </div>
  );
}
