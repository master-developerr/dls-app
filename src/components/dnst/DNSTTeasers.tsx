import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function DNSTSyllabusTeaser() {
  return (
    <section className="py-12 md:py-16 border-b border-border bg-surface-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent block">
              Curriculum Guidelines
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text-primary">
              Explore the DNST Syllabus
            </h3>
            <p className="text-sm md:text-base text-text-secondary font-light">
              View syllabus information and class-wise test blueprints for <strong className="text-text-primary font-semibold">Classes I through XII</strong>.
            </p>
          </div>
          <Link href="/dnst/syllabus" className="shrink-0">
            <Button
              variant="outline"
              className="h-11 px-6 text-sm font-medium border-border text-text-primary hover:bg-surface rounded-none shadow-none"
            >
              View Syllabus (Classes I–XII) <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DNSTRegistrationCTA() {
  return (
    <section className="py-16 md:py-24 border-b border-border bg-background text-center">
      <div className="container mx-auto px-4 max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent block">
          Registration Open · 2025
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary leading-tight">
          Ready to discover your potential?
        </h3>
        <p className="text-base text-text-secondary font-light max-w-lg mx-auto">
          Register for the DLS National Scholarship Test. Open for students from Classes I to XII with scholarships worth ₹25 Lakhs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/dnst/register" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="h-11 md:h-12 px-8 text-sm font-semibold bg-accent hover:bg-accent-dark text-accent-foreground rounded-none w-full sm:w-auto transition-colors shadow-none"
            >
              Register for DNST <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
          <a
            href="https://wa.me/919447330561?text=Hi%20DLS%2C%20I%20want%20to%20enquire%20about%20the%20DNST%20National%20Scholarship%20Test."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="h-11 md:h-12 px-6 text-sm font-medium border-border text-text-primary hover:bg-surface-secondary rounded-none w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-none"
            >
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
