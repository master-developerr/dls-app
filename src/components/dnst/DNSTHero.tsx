import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DNST_META } from "@/lib/dnst-data";
import { FadeIn } from "@/components/ui/fade-in";

export function DNSTHero() {
  return (
    <section className="border-b border-border bg-background pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <FadeIn delay={0.02} className="mb-4 md:mb-5">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
            DLS National Scholarship Test 2025
          </span>
        </FadeIn>

        {/* Editorial Display Headline */}
        <FadeIn delay={0.06} className="w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-text-primary tracking-tight leading-[1.12] mb-4 md:mb-5">
            Discover Talent. Reward Excellence. <br />
            <span className="italic font-light text-accent">Shape the Future.</span>
          </h1>
        </FadeIn>

        {/* Subtitle & Core Description */}
        <FadeIn delay={0.1} className="max-w-2xl">
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed mb-3">
            <strong className="font-semibold text-text-primary">{DNST_META.subtitle}</strong> — {DNST_META.description}
          </p>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary mb-6 md:mb-8">
            <span className="text-accent">{DNST_META.scholarshipPool}</span>
            <span className="mx-2 text-border-strong">·</span>
            <span>{DNST_META.eligibility}</span>
          </p>
        </FadeIn>

        {/* Primary & Secondary Action CTAs */}
        <FadeIn delay={0.14} className="w-full max-w-md md:max-w-none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/dnst/register" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="h-11 md:h-12 px-8 text-sm md:text-base bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-none w-full sm:w-auto transition-colors shadow-none"
              >
                Register for DNST <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" />
              </Button>
            </Link>
            <Link href="/dnst/syllabus" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-11 md:h-12 px-7 text-sm md:text-base border-border text-text-primary hover:bg-surface-secondary font-medium rounded-none w-full sm:w-auto shadow-none transition-colors duration-150 ease-out"
              >
                View Syllabus (Classes I–XII)
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <Link
              href="#why-dnst"
              className="text-xs font-semibold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-150 ease-out inline-flex items-center gap-1"
            >
              Explore DNST Guidelines <span className="text-xs">↓</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
