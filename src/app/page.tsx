import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { CountUp } from "@/components/ui/count-up";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative selection:bg-primary selection:text-white">

      {/* --- HERO --- */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-10 pb-12 md:py-0 overflow-hidden border-b border-border">
        {/* Subtle background watermark logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
           <Image src="/logomark.png" alt="" width={800} height={800} className="object-contain w-auto h-[50vh] md:h-[80vh]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center text-[10px] sm:text-xs font-bold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-none mb-4 md:mb-10">
              Kerala · Tamil Nadu · UAE
            </span>
          </FadeIn>
          
          <FadeIn delay={0.15} className="w-full">
            <h1 className="text-[2.5rem] leading-[0.88] sm:text-6xl md:text-[8rem] lg:text-[10rem] font-serif text-foreground md:leading-[0.85] tracking-tight mb-3 md:mb-8">
              Diligence <br/> <span className="italic font-light text-primary">Learning.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-5 md:mb-12 px-2 sm:px-0">
              Structured learning across Kerala, Tamil Nadu, and UAE. A unified education system delivering consistent results through offline centres and hybrid learning.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="w-full max-w-md md:max-w-none">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Link href="/programs">
                <Button size="lg" className="h-13 sm:h-14 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-none bg-primary text-white hover:bg-primary/90 font-semibold w-full sm:w-auto shadow-lg shadow-primary/20">
                  View Programs
                </Button>
              </Link>
              <Link href="/contact" className="group flex items-center text-[10px] sm:text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mt-1 sm:mt-0">
                Book Free Demo <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Stats Ticker --- */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { label: "Students Trained", target: "2K+" },
              { label: "Centres", target: "10+" },
              { label: "Educators", target: "50+" },
              { label: "Regions", target: "3" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.05 * i} className="p-5 sm:p-8 md:p-14 text-center hover:bg-muted/50 transition-colors">
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2 md:mb-4">{stat.label}</p>
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-serif text-foreground">
                  <CountUp target={stat.target} />
                </h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- About DLS --- */}
      <section className="py-14 md:py-32 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">
            
            <div className="lg:col-span-5 relative">
               <div className="lg:sticky lg:top-32">
                 <FadeIn>
                   <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4 md:mb-6 flex items-center">
                     <span className="w-6 md:w-8 h-[1px] bg-primary mr-3 md:mr-4 block"></span> Why DLS
                   </span>
                   <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-[1.1] text-foreground mb-4 md:mb-8">
                     A system built <br className="hidden sm:block"/> for <span className="italic text-primary">consistency.</span>
                   </h2>
                   <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                     Diligence Learning Solutions brings together traditional classroom learning and modern digital systems to create a consistent academic experience across regions.
                   </p>
                 </FadeIn>
               </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-24">
              {[
                { title: "Hybrid Learning System", desc: "Offline centres supported by online tools and a centralized learning management system. Students get the best of both formats, regardless of location." },
                { title: "Multi-Region Presence", desc: "Operating across Kerala, Tamil Nadu, and UAE with a unified academic framework. The same standards, the same quality — everywhere." },
                { title: "Proven Results", desc: "Structured programs with consistent academic outcomes across all batches. Regular assessments and performance tracking help students stay on course." },
              ].map((feature, i) => (
                <FadeIn key={i} className="group flex flex-col hover-card p-5 sm:p-6 md:p-10 bg-card border border-transparent">
                  <span className="text-xl md:text-3xl font-serif text-primary mb-3 md:mb-6 block">0{i+1}</span>
                  <h4 className="text-xl md:text-3xl font-serif text-foreground mb-3 md:mb-6">{feature.title}</h4>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light">{feature.desc}</p>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- Programs & Academic Pathways --- */}
      <section className="py-14 md:py-32 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10 md:mb-20">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 md:mb-4 block">Academic Pathways</span>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-foreground">Programs & <span className="italic text-primary">Courses.</span></h3>
          </FadeIn>
          
          <div className="flex flex-col border-border border-b border-t">
            {[
              { title: "NEET Coaching", duration: "1 Year Program", desc: "Comprehensive preparation for medical entrance exams with structured study plans and regular assessments.", slug: "neet" },
              { title: "JEE Main & Advanced", duration: "1 Year Program", desc: "Thorough engineering entrance preparation covering all key concepts and problem-solving techniques.", slug: "jee" },
              { title: "Foundation Program", duration: "2 Year Program", desc: "Early preparation for students in Class 10, building a strong academic base for future entrance exams.", slug: "foundation" }
            ].map((prog, i) => (
              <FadeIn key={i} delay={0.03 * i}>
                <Link 
                  href={`/programs/${prog.slug}`}
                  className="group border-b border-border p-5 sm:p-6 md:p-12 pb-6 md:pb-14 bg-background flex flex-col md:flex-row md:items-end justify-between hover-card cursor-pointer border-x border-transparent active:scale-[0.98] transition-all duration-300 block"
                >
                  <div className="md:w-2/3 mb-4 md:mb-0">
                    <Badge variant="outline" className="rounded-none border-primary text-primary mb-3 md:mb-6 text-[10px] md:text-xs">{prog.duration}</Badge>
                    <h4 className="text-2xl md:text-4xl font-serif text-foreground mb-2 md:mb-4 group-hover:text-primary transition-colors">{prog.title}</h4>
                    <p className="text-sm md:text-lg text-muted-foreground font-light">{prog.desc}</p>
                  </div>
                  <div className="md:w-1/3 flex justify-start md:justify-end mt-2 md:mt-0">
                     <ArrowDownRight className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 md:mt-16 text-center">
            <Link href="/programs" className="text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors inline-flex items-center group link-underline pb-1">
              View All Programs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-48 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-[5rem] font-serif mb-6 md:mb-12 leading-[1.1] text-foreground">
              Start your <span className="italic text-primary">journey.</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-light mb-8 md:mb-12 max-w-2xl mx-auto">
              Begin your learning journey with DLS. Explore our programs or book a free demo to learn more about our approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/contact">
                <Button size="lg" className="h-12 sm:h-14 md:h-16 px-10 md:px-14 text-base md:text-lg rounded-none bg-primary text-white hover:bg-primary/90 font-medium w-full sm:w-auto">
                  Book Free Demo
                </Button>
              </Link>
            </div>
            <p className="mt-6 md:mt-10 text-muted-foreground/60 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest">
              Available across Kerala, Tamil Nadu & UAE
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
