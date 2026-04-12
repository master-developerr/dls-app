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
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 border-b border-border pb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-3xl">
              <h1 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">04 / The Legacy</h1>
              <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1]">
                Hall of <span className="italic text-primary">Fame.</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground font-light">
                Numbers do not lie. Behold the apex of competitive achievement.
              </p>
            </div>
            <div className="mt-8 md:mt-0 text-left md:text-right">
              <span className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2 block">Total Selections</span>
              <span className="text-4xl font-serif text-foreground">2000+</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Editorial Results List/Grid */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col border-border border-b">
          {toppers.map((topper, i) => (
            <FadeIn key={i} delay={0.05 * i} className="group border-b border-t border-border flex flex-col md:flex-row md:items-center justify-between p-8 hover-card bg-card/50">
              <div className="flex items-center gap-8 md:w-1/2 mb-6 md:mb-0">
                <span className="text-lg font-serif text-primary w-8">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{topper.name}</h3>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{topper.year}</span>
                </div>
              </div>
              
              <div className="md:w-1/4 mb-4 md:mb-0">
                <Badge variant="outline" className="rounded-none border-primary text-primary px-4 py-1">{topper.exam}</Badge>
              </div>

              <div className="md:w-1/4 text-left md:text-right">
                <span className="text-3xl font-serif font-medium text-foreground">{topper.rank}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
