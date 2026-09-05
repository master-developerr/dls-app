import { DNST_DIFFERENTIATORS } from "@/lib/dnst-data";

export function DNSTDifferentiators() {
  return (
    <section className="py-16 md:py-24 border-b border-border bg-surface-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block">
            Core Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary">
            What Makes DNST Different?
          </h2>
          <p className="text-sm md:text-base text-text-secondary font-light">
            Five institutional standards structured to evaluate talent and deliver actionable academic clarity.
          </p>
        </div>

        {/* Numbered Editorial Rows */}
        <div className="border-t border-border divide-y divide-border">
          {DNST_DIFFERENTIATORS.map((item, idx) => (
            <div
              key={item.id}
              className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-sm font-bold text-accent">0{idx + 1}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-lg md:text-xl font-serif font-bold text-text-primary">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
