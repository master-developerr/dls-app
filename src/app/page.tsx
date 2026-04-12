import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative selection:bg-primary selection:text-white">

      {/* --- HERO: Cover Page Style --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-border">
        {/* Subtle background watermark logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <Image src="/logomark.png" alt="" width={800} height={800} className="object-contain w-auto h-[80vh]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-none mb-10">
              The New Standard 2026
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full">
            <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-serif text-foreground leading-[0.85] tracking-tight mb-8">
              Diligence <br/> <span className="italic font-light text-primary">Learning.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-12">
              We architect the mindset of relentless competitors. Uncompromising pedagogy for medical and engineering entrances.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-16 px-10 text-lg rounded-none bg-primary text-white hover:bg-primary/90 font-medium">
                Commence Journey
              </Button>
              <Link href="/programs" className="group flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors link-underline pb-1">
                Explore Curriculum <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Stats Ticker / Minimal Data --- */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { label: "Selections", value: "2K+" },
              { label: "Top Ranks", value: "150+" },
              { label: "Educators", value: "50+" },
              { label: "Years Legacy", value: "15" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i} className="p-10 md:p-14 text-center hover:bg-muted/50 transition-colors">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">{stat.label}</p>
                <h3 className="text-6xl md:text-7xl font-serif text-foreground">{stat.value}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAPTER I: The Method (Sticky Layout) --- */}
      <section className="py-24 md:py-32 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-5 relative">
               <div className="lg:sticky lg:top-32">
                 <FadeIn>
                   <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-6 flex items-center">
                     <span className="w-8 h-[1px] bg-primary mr-4 block"></span> Chapter I
                   </span>
                   <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-foreground mb-8">
                     We do not leave <br/> <span className="italic text-primary">success</span> <br/> to chance.
                   </h2>
                   <p className="text-lg text-muted-foreground font-light leading-relaxed">
                     Success in premier entrance examinations is not a product of casual study. It is engineered through brutal consistency, raw structural planning, and absolute clarity.
                   </p>
                 </FadeIn>
               </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12 md:gap-24">
              {[
                { title: "Hybrid Architecture", desc: "Combining the immersive focus of elite offline coaching centers with the limitless, 24/7 reach of our proprietary digital learning edge. You are always connected to the curriculum." },
                { title: "Elite Pedagogy", desc: "The educators leading DLS are seasoned veterans. Department heads and ex-IITians who have structurally produced the top national ranks for over a decade. They don't just teach; they reverse-engineer the exams." },
                { title: "Analytic Feedback", desc: "Every mock test, every assessment is torn apart by our performance analytics engine. We isolate your weaknesses in physics mechanics or organic chemistry down to the actual chapter, forcing improvement." },
              ].map((feature, i) => (
                <FadeIn key={i} className="group flex flex-col hover-card p-10 bg-card border border-transparent">
                  <span className="text-3xl font-serif text-primary mb-6 block">0{i+1}</span>
                  <h4 className="text-3xl font-serif text-foreground mb-6">{feature.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">{feature.desc}</p>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- CHAPTER II: The Matrix --- */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Chapter II</span>
            <h3 className="text-5xl md:text-6xl font-serif text-foreground">Curriculum <span className="italic text-primary">Matrix.</span></h3>
          </FadeIn>
          
          <div className="flex flex-col border-border border-b border-t">
            {[
              { title: "NEET Target 2026", duration: "1 Year Track", desc: "For XII pass students focusing purely on medical competitive excellence." },
              { title: "JEE Main & Advanced", duration: "1 Year Track", desc: "Rigorous engineering entrance prep crossing the limits of NCERT." },
              { title: "Foundation Focus", duration: "2 Year Track", desc: "Build the raw analytical baseline required for future entrances early." }
            ].map((prog, i) => (
              <FadeIn key={i} delay={0.05 * i} className="group border-b border-border p-8 md:p-12 pb-14 bg-background flex flex-col md:flex-row md:items-end justify-between hover-card cursor-pointer border-x border-transparent">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <Badge variant="outline" className="rounded-none border-primary text-primary mb-6">{prog.duration}</Badge>
                  <h4 className="text-4xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">{prog.title}</h4>
                  <p className="text-lg text-muted-foreground font-light">{prog.desc}</p>
                </div>
                <div className="md:w-1/3 flex justify-start md:justify-end">
                   <ArrowDownRight className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center">
            <Link href="/programs" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors inline-flex items-center group link-underline pb-1">
              View Complete Syllabus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 md:py-48 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-6xl md:text-[5rem] font-serif mb-12 leading-[1.1] text-foreground">
              Define your <span className="italic text-primary">future.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-16 px-14 text-lg rounded-none bg-primary text-white hover:bg-primary/90 font-medium">
                Reserve Evaluation
              </Button>
            </div>
            <p className="mt-10 text-muted-foreground/60 text-sm font-medium uppercase tracking-widest">
              Limited Intake per batch ensuring elite focus.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
