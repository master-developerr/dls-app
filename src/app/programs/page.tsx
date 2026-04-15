import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  { id: "neet", title: "NEET Coaching", duration: "1 Year", mode: "Hybrid", desc: "Comprehensive medical entrance preparation with structured study plans and regular assessments.", tag: "Most Popular" },
  { id: "jee", title: "JEE Main & Advanced", duration: "1 Year", mode: "Offline", desc: "Thorough engineering entrance preparation covering key concepts and problem-solving techniques." },
  { id: "keam", title: "KEAM Preparation", duration: "6 Months", mode: "Hybrid", desc: "Focused preparation for Kerala state engineering and pharmacy entrance exams." },
  { id: "foundation", title: "Foundation Program", duration: "1 Year", mode: "Online", desc: "Early academic preparation for Class 10 students building a strong base for future entrance exams." },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20 md:pt-24 pb-16 md:pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-8 md:mb-12 border-b border-border pb-8 md:pb-12">
        <FadeIn>
          <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">Academic Pathways</h1>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl">
            Programs Designed for <span className="italic text-primary">Progress</span>.
          </h2>
          <p className="mt-5 md:mt-8 text-base md:text-xl text-muted-foreground font-light max-w-2xl">
            Our programs are designed to provide consistent learning outcomes across all DLS centres and online platforms.
          </p>
        </FadeIn>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
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
                      View Details <ArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4"/>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
      </section>

    </div>
  );
}
