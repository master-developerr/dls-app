import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  { id: "neet", title: "NEET Target 2026", duration: "1 Year", mode: "Hybrid", desc: "For XII pass students focusing purely on competitive excellence.", tag: "Most Popular" },
  { id: "jee", title: "JEE Main & Advanced", duration: "1 Year", mode: "Offline", desc: "Rigorous engineering entrance prep." },
  { id: "keam", title: "KEAM Special Batch", duration: "6 Months", mode: "Hybrid", desc: "State level engineering & pharmacy entrance focus." },
  { id: "foundation", title: "Foundation (Class 10)", duration: "1 Year", mode: "Online", desc: "Build the raw analytical baseline for future entrances." },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20 md:pt-24 pb-16 md:pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-8 md:mb-12 border-b border-border pb-8 md:pb-12">
        <FadeIn>
          <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">The Curriculum</h1>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl">
            Syllabus Engineered for <span className="italic text-primary">Precision</span>.
          </h2>
          <p className="mt-5 md:mt-8 text-base md:text-xl text-muted-foreground font-light max-w-2xl">
            Filter through our curated selection of programs designed precisely for optimal competitive advantage.
          </p>
        </FadeIn>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Sidebar / Filters — collapsed on mobile */}
          <div className="md:col-span-3 space-y-6 md:space-y-8 hidden md:block">
            <div className="border-b border-border pb-4">
              <h3 className="flex items-center text-sm font-bold uppercase tracking-widest text-foreground">
                <Filter className="w-4 h-4 mr-2" /> 
                Refine Search
              </h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Duration</h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> 1 Year</label>
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> 2 Years</label>
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> 6 Months</label>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Mode</h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> Offline</label>
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> Online</label>
                  <label className="flex items-center gap-3 text-sm font-medium"><input type="checkbox" className="accent-primary"/> Hybrid</label>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile filter pills */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-1 shrink-0">Filter:</span>
            {["All", "1 Year", "6 Months", "Offline", "Online", "Hybrid"].map((f) => (
              <button key={f} className="shrink-0 px-3 py-1.5 border border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-card whitespace-nowrap">
                {f}
              </button>
            ))}
          </div>

          {/* Program List */}
          <div className="md:col-span-9 border-l-0 md:border-l md:border-t-0 border-border md:pl-12">
            <div className="flex flex-col divide-y divide-border">
              {programs.map((prog, i) => (
                <FadeIn key={prog.id} delay={0.03 * i}>
                  <Link 
                    href={`/programs/${prog.id}`}
                    className="py-6 md:py-10 group relative flex flex-col md:flex-row md:items-center justify-between hover:bg-muted/30 transition-all duration-300 px-4 -mx-4 active:scale-[0.99] cursor-pointer"
                  >
                    <div className="md:w-7/12 pr-0 md:pr-6">
                      {prog.tag && (
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary mb-2 md:mb-3 block">{prog.tag}</span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-serif text-foreground group-hover:text-primary transition-colors block mb-2 md:mb-4">
                        {prog.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed mb-4 md:mb-0">
                        {prog.desc}
                      </p>
                    </div>
                    <div className="md:w-5/12 flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-6 md:border-l border-border md:pl-8 text-left md:text-right">
                      <div className="flex flex-col items-start md:items-end gap-0.5 md:gap-1">
                        <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Format</span>
                        <span className="text-xs md:text-sm font-medium text-foreground">{prog.mode} | {prog.duration}</span>
                      </div>
                      <div className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-primary text-primary group-hover:bg-primary group-hover:text-white h-9 md:h-10 px-3 md:px-4 py-2 text-xs md:text-sm transition-all")}>
                        Explore <ArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4"/>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
