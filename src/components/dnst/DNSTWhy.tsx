import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DNSTWhy() {
  return (
    <section id="why-dnst" className="py-16 md:py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block">
              Assessment Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary leading-tight">
              Why DNST?
            </h2>
            <p className="text-base text-text-secondary font-light leading-relaxed">
              Every student deserves the opportunity to discover their strengths, unlock hidden potential, and receive the right academic guidance for future success.
            </p>
            <div className="pt-2">
              <Link
                href="/dnst/register"
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-dark inline-flex items-center"
              >
                Register for Examination <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Divided Content */}
          <div className="lg:col-span-7 divide-y divide-border border-t border-border">
            
            {/* Block 1: What students discover */}
            <div className="py-6 space-y-3">
              <h3 className="text-lg md:text-xl font-serif font-bold text-text-primary">
                What Students Discover
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                DNST helps students discover how they think, how they reason, how they solve problems, and how they perform academically.
              </p>
              <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Every participant receives valuable performance insights.
              </p>
            </div>

            {/* Block 2: Recognition & Rewards */}
            <div className="py-6 space-y-3">
              <h3 className="text-lg md:text-xl font-serif font-bold text-text-primary">
                Recognition & Rewards for Top Performers
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                Top performers become eligible for scholarships, awards, certificates, medals, and national recognition across the DLS network.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-text-secondary pt-1">
                <span className="font-semibold text-accent">Eligible Honours:</span>
                <span>Scholarships</span>
                <span className="text-border">·</span>
                <span>Awards</span>
                <span className="text-border">·</span>
                <span>Certificates</span>
                <span className="text-border">·</span>
                <span>Medals</span>
                <span className="text-border">·</span>
                <span>National Recognition</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
