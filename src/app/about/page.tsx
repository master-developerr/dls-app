import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function AboutPage() {
  const faculty = [
    { name: "Dr Nadarsha S", subject: "Physics", image: "/faculty/nadarsha.png" },
    { name: "Prof Arun Babu", subject: "Chemistry", image: "/faculty/arun-b.png" },
    { name: "Mrs Priya S", subject: "Mathematics", image: "/faculty/mrs-priya.png" },
    { name: "Mr Ershad A", subject: "General Aptitude", image: "/faculty/ershad-a.png" },
    { name: "Prof Shaija Thomas", subject: "Biology", image: "/faculty/shaija-thomas.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Editorial Header */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-24 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 md:mb-6">About Us</h1>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
              <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1]">
                Building Consistency Since <span className="italic text-primary">2010.</span>
              </h2>
              <div className="pb-2 md:pb-4">
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed mb-5 md:mb-6">
                  DLS was founded with the idea of building a structured and consistent learning system. Today, it operates across multiple regions while maintaining the same academic standards.
                </p>
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif text-foreground">3</span>
                    <span className="text-[9px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1 md:mt-2">Regions</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif text-foreground">50+</span>
                    <span className="text-[9px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1 md:mt-2">Educators</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif text-foreground">10+</span>
                    <span className="text-[9px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1 md:mt-2">Centres</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Presence */}
      <section className="py-14 md:py-32 bg-muted border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10 md:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 md:mb-4 block">Our Presence</span>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-foreground mb-6 md:mb-8">Operating Across <span className="italic text-primary">Three Regions.</span></h3>
            <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A unified academic framework across Kerala, Tamil Nadu, and UAE — delivering the same quality of education at every centre.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0 border border-border">
            {[
              { region: "Kerala", detail: "Head Office — Trivandrum", desc: "Our founding region with multiple centres across the state. This is where DLS started and continues to grow." },
              { region: "Tamil Nadu", detail: "Kanyakumari · Nagercoil · Tirunelveli", desc: "Expanding across southern Tamil Nadu with the same structured programs and academic standards." },
              { region: "UAE", detail: "Dubai · Abu Dhabi", desc: "Extending structured learning to students in UAE through live hybrid programs and dedicated support." },
            ].map((loc, i) => (
              <FadeIn key={i} delay={0.05 * i} className="p-6 md:p-10 bg-background border-b md:border-b-0 md:border-r last:border-r-0 border-border">
                <span className="text-sm font-serif text-primary mb-3 block">0{i + 1}</span>
                <h4 className="text-2xl md:text-3xl font-serif text-foreground mb-2">{loc.region}</h4>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{loc.detail}</p>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{loc.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision - Magazine Quote Style */}
      <section className="py-14 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="text-4xl md:text-6xl font-serif text-primary opacity-50 block mb-4 md:mb-6">&quot;</span>
            <h3 className="text-xl sm:text-2xl md:text-5xl font-serif text-foreground leading-snug md:leading-tight max-w-3xl mx-auto mb-6 md:mb-10">
              Our vision is to build a personalized learning system that guides every student to discover their own <span className="italic text-primary">intuition</span> through repeated, tailored guidance.
            </h3>
            <span className="text-[10px] sm:text-sm uppercase tracking-widest font-bold text-muted-foreground">The DLS Vision</span>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Faculty */}
      <section className="py-14 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="mb-10 md:mb-16 pb-4 md:pb-6 border-b border-border flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">Our Team</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-foreground">Experienced Faculty</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-light max-w-sm mt-3 md:mt-0">Senior educators with strong academic backgrounds across all subjects.</p>
          </FadeIn>
          
          {/* Mobile: 2-col grid first row + full-width last, Desktop: 5-col */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-y border-border divide-x divide-border">
            {faculty.map((f, i) => (
              <FadeIn key={i} delay={0.05 * i} className="p-3 sm:p-5 md:p-6 group hover:bg-muted/50 transition-colors hover-card border-b md:border-b-0 border-border">
                <div className="aspect-square bg-muted w-full mb-3 md:mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-sm md:text-lg font-serif text-foreground mb-0.5 md:mb-1">{f.name}</h4>
                <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary">{f.subject}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
