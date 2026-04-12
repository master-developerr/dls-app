import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function AboutPage() {
  const faculty = [
    { name: "Dr. AN Sharma", subject: "Physics", exp: "20+ Years, Ex-Kota" },
    { name: "Prof. R Menon", subject: "Chemistry", exp: "15+ Years, HOD" },
    { name: "Dr. L Zachariah", subject: "Biology", exp: "18+ Years, MBBS" },
    { name: "Mr. V Pillai", subject: "Mathematics", exp: "22+ Years, Ex-IITian" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-24 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 md:mb-6">03 / Origin</h1>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
              <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1]">
                Forging Excellence Since <span className="italic text-primary">2010.</span>
              </h2>
              <div className="pb-2 md:pb-4">
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed mb-5 md:mb-6">
                  Diligence Learning Solutions was built on a singular premise: structure over chaos. We transform average effort into national ranks.
                </p>
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif text-foreground">15</span>
                    <span className="text-[9px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1 md:mt-2">Years Legacy</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif text-foreground">50+</span>
                    <span className="text-[9px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1 md:mt-2">Educators</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Mission - Magazine Quote Style */}
      <section className="py-14 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="text-4xl md:text-6xl font-serif text-primary opacity-50 block mb-4 md:mb-6">"</span>
            <h3 className="text-xl sm:text-2xl md:text-5xl font-serif text-foreground leading-snug md:leading-tight max-w-3xl mx-auto mb-6 md:mb-10">
              Our mission is not merely to educate, but to architect the mindset of a <span className="italic text-primary">relentless competitor</span>.
            </h3>
            <span className="text-[10px] sm:text-sm uppercase tracking-widest font-bold text-muted-foreground">The DLS Philosophy</span>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Faculty */}
      <section className="py-14 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="mb-10 md:mb-16 pb-4 md:pb-6 border-b border-border flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">The Vanguard</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-foreground">Elite Faculty</h3>
            </div>
          </FadeIn>
          
          {/* Mobile: 2-col grid, Desktop: 4-col */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-border divide-x divide-border">
            {faculty.map((f, i) => (
              <FadeIn key={i} delay={0.05 * i} className="p-4 sm:p-6 md:p-8 group hover:bg-muted/50 transition-colors hover-card border-b md:border-b-0 border-border">
                <div className="aspect-square bg-muted w-full mb-4 md:mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-sm md:text-xl font-serif text-foreground mb-0.5 md:mb-1">{f.name}</h4>
                <p className="text-[9px] md:text-sm font-bold uppercase tracking-widest text-primary mb-1 md:mb-3">{f.subject}</p>
                <p className="text-[10px] md:text-sm text-muted-foreground font-light hidden sm:block">{f.exp}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
