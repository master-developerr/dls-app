import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDownRight,
  MapPin,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { CountUp } from "@/components/ui/count-up";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">

      {/* --- SINGLE RESTRAINED DNST ENTRY POINT --- */}
      <aside aria-label="Announcement" className="border-b border-border bg-surface py-2 px-4 text-xs">
        <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-2 text-center text-text-secondary">
          <span className="font-bold text-accent uppercase tracking-widest text-[10px]">
            Announcement
          </span>
          <span className="text-border-strong hidden sm:inline">·</span>
          <span>
            DLS National Scholarship Test (DNST) 2025 is open for <strong className="text-text-primary font-semibold">Classes I–XII</strong>
          </span>
          <span className="text-border-strong hidden sm:inline">·</span>
          <Link
            href="/dnst"
            className="text-accent hover:text-accent-dark font-semibold inline-flex items-center group ml-1"
          >
            Explore DNST <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </aside>

      {/* --- DLS INSTITUTIONAL HERO --- */}
      <section className="border-b border-border bg-background pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
          
          {/* Eyebrow */}
          <div className="mb-4 md:mb-6">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Kerala · Tamil Nadu · UAE
            </span>
          </div>

          {/* Editorial Display Headline */}
          <div className="w-full">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-text-primary tracking-tight leading-[1.05] mb-4 md:mb-6">
              Diligence <br />
              <span className="italic font-light text-accent">Learning.</span>
            </h1>
          </div>

          {/* Subtitle & Core Narrative */}
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-8 md:mb-10">
              Structured learning across Kerala, Tamil Nadu, and UAE. A unified education system delivering consistent results through offline centres and hybrid learning.
            </p>
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="w-full max-w-md md:max-w-none">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/programs" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 md:h-13 px-8 text-sm md:text-base bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-none w-full sm:w-auto transition-colors shadow-none"
                >
                  View Programs <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 md:h-13 px-7 text-sm md:text-base border-border text-text-primary hover:bg-surface-secondary font-medium rounded-none w-full sm:w-auto shadow-none"
                >
                  Book Free Demo
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- CLASSROOM PHOTOGRAPHY --- */}
      <section className="border-b border-border bg-surface-secondary py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeIn>
            <div className="border border-border bg-surface">
              <Image
                src="/classroom.png"
                alt="Inside a DLS Classroom — structured learning in action"
                width={1920}
                height={700}
                className="w-full h-[220px] sm:h-[320px] md:h-[440px] object-cover object-center"
                priority
              />
              <div className="p-3.5 md:p-4 bg-surface border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs md:text-sm">
                <p className="font-semibold text-text-primary">
                  Inside a DLS Classroom · Physics Session
                </p>
                <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
                  Kerala · Tamil Nadu · UAE
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- VERIFIED STATS TICKER --- */}
      <section className="border-b border-border bg-surface">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {[
              { label: "Students Trained", target: "2K+" },
              { label: "Top Ranks", target: "150+" },
              { label: "Senior Educators", target: "50+" },
              { label: "Years Experience", target: "15" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.05 * i} className="p-6 md:p-8 text-center">
                <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest mb-1.5">
                  {stat.label}
                </p>
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary">
                  <CountUp target={stat.target} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: PHILOSOPHY --- */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block">
            About DLS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-text-primary leading-tight">
            Combining traditional coaching with modern digital learning for{" "}
            <span className="italic text-accent font-light">consistent outcomes.</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto pt-2">
            From foundation-level preparation to competitive entrance exams, DLS provides a structured academic experience. Our programs cover NEET, JEE, KEAM, and more — delivered through offline centres and online platforms with the same teaching approach across every location.
          </p>
        </div>
      </section>

      {/* --- SECTION: REGIONAL NETWORK ("One System. Multiple Regions.") --- */}
      <section className="py-16 md:py-24 border-b border-border bg-surface-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted block">
              Regional Network
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary">
              One System. <span className="italic text-accent">Multiple Regions.</span>
            </h2>
          </div>

          <div className="border border-border bg-surface grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                type: "Offline Centres",
                region: "Kerala",
                detail: "Head Office — Trivandrum",
                desc: "Our founding region with multiple centres across the state. The central hub for curriculum development and academic operations.",
              },
              {
                type: "Hybrid Centres",
                region: "Tamil Nadu",
                detail: "Kanyakumari · Nagercoil · Tirunelveli",
                desc: "Expanding across southern Tamil Nadu with the same structured programs and consistent academic standards.",
              },
              {
                type: "Digital Learning",
                region: "UAE",
                detail: "Dubai · Abu Dhabi",
                desc: "Extending structured learning to students in the UAE through live hybrid programs with dedicated regional coordination.",
              },
            ].map((loc, i) => (
              <div key={i} className="p-6 md:p-8 space-y-3">
                <div className="flex items-center gap-1.5 text-accent font-semibold text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{loc.type}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary">
                  {loc.region}
                </h3>
                <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  {loc.detail}
                </p>
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: WHY DLS ("A system built for consistency.") --- */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted block">
                Educational Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary leading-tight">
                A system built for <span className="italic text-accent">consistency.</span>
              </h2>
              <p className="text-base text-text-secondary font-light leading-relaxed">
                Every DLS centre follows the same curriculum, the same teaching methodology, and the same evaluation process. This consistency is what sets our outcomes apart.
              </p>
            </div>

            <div className="lg:col-span-7 border-t border-border divide-y divide-border">
              {[
                { title: "Structured Learning System", desc: "A well-defined curriculum with clear milestones, regular assessments, and structured study plans so students always know where they stand." },
                { title: "Hybrid Model", desc: "Offline centres for focused classroom coaching, supported by digital evaluation and structured study resources." },
                { title: "Consistent Curriculum", desc: "The same syllabus, teaching methods, and evaluation standards across all DLS centres in India and the UAE." },
                { title: "Regular Evaluation", desc: "Weekly tests, monthly assessments, and diagnostic performance reports keeping students and parents aligned on progress." },
                { title: "Experienced Faculty", desc: "Senior educators across Physics, Chemistry, Biology, and Mathematics with average teaching experience of 15+ years." },
              ].map((item, i) => (
                <div key={i} className="py-5 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-accent">0{i+1}</span>
                    <h3 className="text-lg font-serif font-bold text-text-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary font-light leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION: DLS PROGRAMS & ACADEMIC PATHWAYS --- */}
      <section id="programs" className="py-16 md:py-24 border-b border-border bg-surface-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted block">
              Academic Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary">
              Programs & <span className="italic text-accent">Courses.</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary font-light max-w-xl mx-auto">
              Available across all DLS centres and hybrid platforms, covering foundation to competitive entrance preparation.
            </p>
          </div>
          
          {/* Elegant List with Dividing Lines */}
          <div className="border border-border bg-surface divide-y divide-border">
            {[
              {
                title: "NEET Coaching",
                duration: "1 Year Program",
                desc: "Comprehensive preparation for medical entrance exams with structured study plans, NCERT mastery, and regular assessments.",
                slug: "neet",
              },
              {
                title: "JEE Main & Advanced",
                duration: "1 Year Program",
                desc: "Thorough engineering entrance preparation covering all key concepts and rigorous problem-solving techniques.",
                slug: "jee",
              },
              {
                title: "KEAM Preparation",
                duration: "6 Month Program",
                desc: "Focused preparation for Kerala state engineering and pharmacy entrance exams with mock drill series.",
                slug: "keam",
              },
              {
                title: "Foundation Program",
                duration: "2 Year Program",
                desc: "Early preparation for Class 8–10 students, building strong conceptual fundamentals in Science and Mathematics.",
                slug: "foundation",
              },
            ].map((prog, i) => (
              <Link 
                key={i}
                href={`/programs/${prog.slug}`}
                className="group p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface-secondary transition-colors cursor-pointer block"
              >
                <div className="md:w-3/4 mb-3 md:mb-0 space-y-2">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-accent border border-accent/20 px-2 py-0.5">
                    {prog.duration}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-text-primary group-hover:text-accent transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
                <div className="md:w-1/4 flex justify-start md:justify-end">
                  <ArrowDownRight className="w-7 h-7 text-text-muted group-hover:text-accent transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="text-xs font-bold uppercase tracking-widest text-text-primary hover:text-accent transition-colors inline-flex items-center"
            >
              View Full Programs Catalog <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION: UAE / INTERNATIONAL REACH --- */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted block">
            International Reach
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-text-primary leading-tight">
            Now available for students in{" "}
            <span className="italic text-accent">Dubai & Abu Dhabi.</span>
          </h3>
          <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Our accredited hybrid programs provide the same high quality education as our physical centres, tailored for NRI students following Indian curricula.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-dark inline-flex items-center"
            >
              Explore Gulf Programs <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CONVERSION CTA --- */}
      <section className="py-20 md:py-28 bg-surface-secondary border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-text-primary leading-tight">
            Start your <span className="italic text-accent">journey.</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light max-w-xl mx-auto">
            Connect with our academic advisors to find the right coaching program for your goals and grade level.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="h-11 md:h-12 px-8 text-sm md:text-base bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-none w-full sm:w-auto transition-colors">
                Book Free Demo
              </Button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-11 md:h-12 px-7 text-sm md:text-base border-border text-text-primary hover:bg-surface font-medium rounded-none w-full sm:w-auto">
                Explore Programs →
              </Button>
            </Link>
          </div>
          <p className="text-xs text-text-muted uppercase tracking-widest pt-4">
            Available across Kerala, Tamil Nadu & UAE
          </p>
        </div>
      </section>

    </div>
  );
}
