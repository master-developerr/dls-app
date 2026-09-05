"use client";

import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DNST_META, DNST_DIFFERENTIATORS } from "@/lib/dnst-data";
import { trackConversion } from "@/lib/analytics";

interface DNSTSectionProps {
  onRegisterClick?: () => void;
}

export function DNSTSection({ onRegisterClick }: DNSTSectionProps) {
  const handleCTAClick = (label: string) => {
    trackConversion({
      type: "cta_click",
      label,
      page: "/",
    });
    if (onRegisterClick) {
      onRegisterClick();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-secondary border-y border-border relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-accent-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-accent-muted/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <Badge className="bg-accent-light text-accent hover:bg-accent-light border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block text-accent" />
            National Assessment Flagship
          </Badge>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary tracking-tight">
            {DNST_META.title}
          </h2>

          <p className="text-xl md:text-2xl font-serif italic text-accent font-medium">
            &ldquo;{DNST_META.tagline}&rdquo;
          </p>

          <p className="text-sm md:text-base text-text-secondary uppercase tracking-widest font-semibold">
            {DNST_META.subtitle}
          </p>

          {/* Key Highlight Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-accent/30 text-accent font-semibold text-sm shadow-xs">
              <Trophy className="w-4 h-4 text-accent" />
              <span>{DNST_META.scholarshipPool}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border text-text-primary font-medium text-sm shadow-xs">
              <GraduationCap className="w-4 h-4 text-text-secondary" />
              <span>{DNST_META.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Content Box & 5 Differentiators Grid */}
        <div className="bg-surface rounded-2xl border border-border p-6 md:p-10 shadow-sm max-w-5xl mx-auto mb-10">
          <p className="text-base md:text-lg text-text-primary leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Every student deserves the opportunity to discover their strengths, unlock hidden potential, and receive the right guidance for future success. {DNST_META.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-border-light">
            {DNST_DIFFERENTIATORS.slice(0, 3).map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-background/50 border border-border-light space-y-2">
                <div className="flex items-center gap-2 font-semibold text-text-primary text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-sm text-text-secondary leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
            {DNST_DIFFERENTIATORS.slice(3).map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-background/50 border border-border-light space-y-2 md:col-span-1 lg:col-span-1">
                <div className="flex items-center gap-2 font-semibold text-text-primary text-base">
                  <Award className="w-5 h-5 text-accent shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-sm text-text-secondary leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dnst" onClick={() => handleCTAClick("Explore DNST & Syllabus")}>
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-6 shadow-sm w-full sm:w-auto">
              Explore DNST & Class Syllabus
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/contact?subject=DNST" onClick={() => handleCTAClick("Register for DNST")}>
            <Button size="lg" variant="outline" className="border-border text-text-primary hover:bg-surface-secondary font-medium px-6 w-full sm:w-auto">
              Register / Enquire Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
