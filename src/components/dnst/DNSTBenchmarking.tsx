import { DNST_BENCHMARKING_LEVELS } from "@/lib/dnst-data";

export function DNSTBenchmarking() {
  return (
    <section className="py-16 md:py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block">
            Comparative Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary">
            Academic Benchmarking Across 4 Tiers
          </h2>
          <p className="text-sm md:text-base text-text-secondary font-light">
            Students benchmark their conceptual standing across four distinct competitive tiers.
          </p>
        </div>

        {/* Divided Horizontal Progression */}
        <div className="border border-border bg-surface grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {DNST_BENCHMARKING_LEVELS.map((tier, idx) => (
            <div key={tier.level} className="p-6 md:p-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-accent">Stage 0{idx + 1}</span>
                {idx < 3 && <span className="text-text-muted hidden md:inline text-xs">→</span>}
              </div>
              <h3 className="text-xl font-serif font-bold text-text-primary">
                {tier.level} Level
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
