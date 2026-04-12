import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CalendarDays, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Mock data based on slug, in reality would fetch from Convex
  const courseData = {
    title: slug.toUpperCase().replace("-", " ") + " Track",
    duration: "1 Year Program",
    mode: "Hybrid Protocol",
    description: "An intensive architecture designed to provide you with the comprehensive knowledge and strategic problem-solving skills required to ace the most competitive entrance exams seamlessly.",
    features: [
      "Daily live interactive classes with expert faculty.",
      "Comprehensive study material aligned with the latest syllabus.",
      "Weekly mock tests powered by AI analytics.",
      "1-on-1 performance autopsy sessions."
    ],
    curriculum: [
      { subject: "Physics", topic: "Mechanics, Thermodynamics, Electromagnetism" },
      { subject: "Chemistry", topic: "Physical, Organic, Inorganic Chemistry" },
      { subject: "Biology/Maths", topic: "Complete NCERT coverage & Advanced concepts" }
    ],
    schedule: "Mon to Fri (4:00 PM - 8:00 PM) | Weekends (9:00 AM - 1:00 PM)"
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      {/* Detail Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 border-b border-border pb-12">
        <FadeIn>
          <Link href="/programs" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" /> Curriculum Return
          </Link>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">{courseData.mode}</span>
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">•</span>
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {courseData.duration}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-[1.1]">{courseData.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            {courseData.description}
          </p>
        </FadeIn>
      </section>

      {/* Main Content Editorial Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          
          <div className="md:col-span-8 space-y-16">
            <FadeIn>
              <h2 className="text-3xl font-serif mb-8 border-b border-border pb-4">Program Architecture</h2>
              <div className="flex flex-col border-b border-border">
                {courseData.features.map((feature, i) => (
                  <div key={i} className="border-t border-border p-6 flex flex-col hover:bg-muted transition-colors">
                    <span className="text-sm font-serif text-primary mb-2">0{i+1}</span>
                    <p className="text-foreground font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-serif mb-8 border-b border-border pb-4">Syllabus Breakdown</h2>
              <div className="flex flex-col border-b border-border">
                {courseData.curriculum.map((curr, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center py-6 border-t border-border hover:bg-muted transition-colors px-6">
                    <h4 className="text-xl font-serif font-medium text-foreground md:w-1/3 mb-2 md:mb-0">{curr.subject}</h4>
                    <p className="text-muted-foreground font-light md:w-2/3">{curr.topic}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Sticky Sidebar - Editorial Block */}
          <div className="md:col-span-4">
            <FadeIn delay={0.2} className="sticky top-24 bg-card border border-border p-10">
              <h3 className="text-2xl font-serif mb-8 border-b border-border pb-4">Enrollment</h3>
              
              <div className="space-y-6 mb-10">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block mb-2 flex items-center">
                    <CalendarDays className="w-4 h-4 text-primary mr-2" /> Schedule
                  </span>
                  <span className="text-sm text-foreground font-medium block leading-relaxed">{courseData.schedule}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block mb-2 flex items-center">
                    <MapPin className="w-4 h-4 text-primary mr-2" /> Location
                  </span>
                  <span className="text-sm text-foreground font-medium block leading-relaxed">Available at all DLS Centers & Online Infrastructure</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button className="w-full h-14 rounded-none bg-primary text-white hover:bg-primary/90 text-md font-medium">
                  Secure Your Seat
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background text-md font-medium">
                  Manifest Details (PDF)
                </Button>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
