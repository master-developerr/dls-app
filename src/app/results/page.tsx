import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";

export default function ResultsPage() {
  const toppers = [
    { name: "Arjun Kumar", exam: "NEET", rank: "AIR 45", year: 2025 },
    { name: "Meenakshi S", exam: "JEE Adv", rank: "AIR 112", year: 2025 },
    { name: "Rahul V", exam: "KEAM", rank: "Rank 1", year: 2024 },
    { name: "Sara Abraham", exam: "NEET", rank: "AIR 89", year: 2024 },
    { name: "Mohammed Ali", exam: "JEE Main", rank: "99.98%ile", year: 2024 },
    { name: "Kavya Menon", exam: "NEET", rank: "AIR 150", year: 2024 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-20 md:pt-24 pb-16 md:pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-8 md:mb-16 border-b border-border pb-8 md:pb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
            <div className="max-w-3xl">
              <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">04 / The Legacy</h1>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-foreground leading-[1.1]">
                Hall of <span className="italic text-primary">Fame.</span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground font-light">
                Numbers do not lie. Behold the apex of competitive achievement.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-[9px] md:text-sm uppercase tracking-widest font-bold text-muted-foreground mb-1 md:mb-2 block">Total Selections</span>
              <span className="text-3xl md:text-4xl font-serif text-foreground">2000+</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Horizontal scroll cards on mobile, list on desktop */}
      <section className="container mx-auto px-4 max-w-6xl">

        {/* Mobile: Horizontal scroll cards */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-none">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {toppers.map((topper, i) => (
              <FadeIn key={i} delay={0.03 * i} className="w-[260px] shrink-0 bg-card border border-border p-5 flex flex-col justify-between">
                <div className="mb-4">
                  <span className="text-lg font-serif text-primary block mb-1">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-1">{topper.name}</h3>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground">{topper.year}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <Badge variant="outline" className="rounded-none border-primary text-primary px-3 py-0.5 text-[10px]">{topper.exam}</Badge>
                  <span className="text-xl font-serif font-medium text-foreground">{topper.rank}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/50 text-center mt-3">Swipe →</p>
        </div>

        {/* Desktop: Editorial list */}
        <div className="hidden md:flex flex-col border-border border-b">
          {toppers.map((topper, i) => (
            <FadeIn key={i} delay={0.03 * i} className="group border-b border-t border-border flex flex-row items-center justify-between p-8 hover-card bg-card/50">
              <div className="flex items-center gap-8 w-1/2">
                <span className="text-lg font-serif text-primary w-8">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{topper.name}</h3>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{topper.year}</span>
                </div>
              </div>
              <div className="w-1/4">
                <Badge variant="outline" className="rounded-none border-primary text-primary px-4 py-1">{topper.exam}</Badge>
              </div>
              <div className="w-1/4 text-right">
                <span className="text-3xl font-serif font-medium text-foreground">{topper.rank}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
