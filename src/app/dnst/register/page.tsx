import Link from "next/link";
import { ArrowLeft, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DNSTRegistrationForm } from "@/components/dnst/DNSTRegistrationForm";
import { DNST_META } from "@/lib/dnst-data";

export const metadata = {
  title: "Register for DNST 2025 | DLS National Scholarship Test",
  description: "Official registration portal for the DLS National Scholarship Test (DNST). Open for students from Classes I to XII.",
};

export default function DNSTRegisterPage() {
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
            Official Registration Portal
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-text-primary tracking-tight leading-[1.1] mb-4">
            Register for DNST 2025
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            Take the first step toward academic benchmarking and scholarship recognition. Open for students across <strong className="text-text-primary font-semibold">Classes I to XII</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            <span className="inline-flex items-center gap-1.5 text-accent">
              <Trophy className="w-4 h-4" /> {DNST_META.scholarshipPool}
            </span>
            <span>·</span>
            <span>Classes I to XII</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Verified DLS Assessment
            </span>
          </div>
        </div>
      </section>

      {/* Main Registration Form Container */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <DNSTRegistrationForm />
        </div>
      </section>
    </div>
  );
}
