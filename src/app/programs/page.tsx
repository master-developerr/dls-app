import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  { id: "neet-target-2026", title: "NEET Target 2026", duration: "1 Year", mode: "Hybrid", desc: "For XII pass students focusing purely on competitive excellence.", tag: "Most Popular" },
  { id: "jee-main-adv", title: "JEE Main & Advanced", duration: "1 Year", mode: "Offline", desc: "Rigorous engineering entrance prep." },
  { id: "keam-special", title: "KEAM Special Batch", duration: "6 Months", mode: "Hybrid", desc: "State level engineering & pharmacy entrance focus." },
  { id: "foundation-10", title: "Foundation (Class 10)", duration: "1 Year", mode: "Online", desc: "Build the raw analytical baseline for future entrances." },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 border-b border-border pb-12">
        <FadeIn>
          <h1 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">The Curriculum</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl">
            Syllabus Engineered for <span className="italic text-primary">Precision</span>.
          </h2>
          <p className="mt-8 text-xl text-muted-foreground font-light max-w-2xl">
            Filter through our curated selection of programs designed precisely for optimal competitive advantage.
          </p>
        </FadeIn>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Sidebar / Filters */}
          <div className="md:col-span-3 space-y-8">
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

          {/* Program List */}
          <div className="md:col-span-9 border-l md:border-t-0 border-t border-border md:pl-12 pt-8 md:pt-0">
            <div className="flex flex-col divide-y divide-border">
              {programs.map((prog, i) => (
                <FadeIn key={prog.id} delay={0.05 * i} className="py-10 group relative flex flex-col md:flex-row md:items-center justify-between">
                  <div className="md:w-7/12 pr-6">
                    {prog.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">{prog.tag}</span>
                    )}
                    <Link href={`/programs/${prog.id}`}>
                      <h3 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors cursor-pointer block mb-4">
                        {prog.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground font-light text-base leading-relaxed mb-6 md:mb-0">
                      {prog.desc}
                    </p>
                  </div>
                  <div className="md:w-5/12 flex flex-col items-end gap-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 pl-0 md:pl-8 text-right">
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Format</span>
                      <span className="text-sm font-medium text-foreground">{prog.mode} | {prog.duration}</span>
                    </div>
                    <Link href={`/programs/${prog.id}`} className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-primary text-primary hover:bg-primary hover:text-white w-full md:w-auto h-10 px-4 py-2")}>
                      Explore <ArrowRight className="ml-2 w-4 h-4"/>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
