import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DNSTSyllabus } from "@/components/dnst/DNSTSyllabus";
import { DNST_META } from "@/lib/dnst-data";

export const metadata = {
  title: "DNST Examination Syllabus (Classes I–XII) | DLS",
  description: "Official class-wise syllabus guidelines for the DLS National Scholarship Test covering Classes I through XII.",
};

export default function DNSTSyllabusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      {/* Editorial Header */}
      <section className="border-b border-border bg-surface-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link
              href="/dnst"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to DNST
            </Link>
          </div>

          <Badge variant="accent" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Official Academic Syllabus
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-text-primary tracking-tight leading-[1.1] mb-4">
            DNST Examination Syllabus
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            Class-wise assessment outlines for <strong className="text-text-primary font-semibold">Classes I through XII</strong>. Select your grade below to inspect syllabus topics, conceptual benchmarks, and examination parameters.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            <span className="inline-flex items-center gap-1.5 text-accent">
              <BookOpen className="w-4 h-4" /> 12 Classes Covered
            </span>
            <span>·</span>
            <span>{DNST_META.scholarshipPool}</span>
            <span>·</span>
            <span>Multi-Tier Benchmarking</span>
          </div>
        </div>
      </section>

      {/* Main Syllabus Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <DNSTSyllabus />

          {/* Bottom Conversion Prompt */}
          <div className="mt-12 p-8 border border-border bg-surface flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-text-primary">
                Ready to take the Scholarship Test?
              </h3>
              <p className="text-sm text-text-secondary">
                Registrations are currently open for all students from Classes I to XII.
              </p>
            </div>
            <Link href="/dnst/register">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-6 py-2.5 rounded-none shrink-0">
                Register for DNST <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
