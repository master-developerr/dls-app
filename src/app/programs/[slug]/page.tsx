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

  // Course data based on slug
  const courseMap: Record<string, {
    title: string;
    duration: string;
    mode: string;
    description: string;
    features: string[];
    curriculum: { subject: string; topic: string }[];
    schedule: string;
    availability: string;
  }> = {
    neet: {
      title: "NEET Coaching",
      duration: "1 Year Program",
      mode: "Hybrid",
      description: "A comprehensive program designed to build strong conceptual understanding and exam readiness for medical entrance exams. Delivered across all DLS centres and online platforms.",
      features: [
        "Structured daily classes with experienced faculty.",
        "Study material aligned with the latest NEET syllabus.",
        "Regular mock tests with detailed performance reports.",
        "One-on-one mentoring and doubt-clearing sessions."
      ],
      curriculum: [
        { subject: "Physics", topic: "Mechanics, Thermodynamics, Electromagnetism, Optics" },
        { subject: "Chemistry", topic: "Physical, Organic, and Inorganic Chemistry" },
        { subject: "Biology", topic: "Complete NCERT coverage with advanced topics" }
      ],
      schedule: "Mon to Fri (4:00 PM - 8:00 PM) | Weekends (9:00 AM - 1:00 PM)",
      availability: "Available at all DLS centres in Kerala, Tamil Nadu & UAE"
    },
    jee: {
      title: "JEE Main & Advanced",
      duration: "1 Year Program",
      mode: "Offline",
      description: "A structured program for engineering entrance preparation, covering all key concepts with a focus on problem-solving techniques and consistent practice.",
      features: [
        "In-depth concept sessions by experienced educators.",
        "Comprehensive study material covering JEE syllabus.",
        "Weekly tests with performance tracking and analysis.",
        "Dedicated doubt-clearing and revision sessions."
      ],
      curriculum: [
        { subject: "Physics", topic: "Mechanics, Waves, Electrodynamics, Modern Physics" },
        { subject: "Chemistry", topic: "Physical, Organic, and Inorganic Chemistry" },
        { subject: "Mathematics", topic: "Algebra, Calculus, Coordinate Geometry, Trigonometry" }
      ],
      schedule: "Mon to Fri (4:00 PM - 8:00 PM) | Weekends (9:00 AM - 1:00 PM)",
      availability: "Available at all DLS centres in Kerala, Tamil Nadu & UAE"
    },
    keam: {
      title: "KEAM Preparation",
      duration: "6 Month Program",
      mode: "Hybrid",
      description: "Focused preparation for the Kerala Engineering and Medical entrance exams, designed to cover the full syllabus efficiently within a shorter timeframe.",
      features: [
        "Accelerated syllabus coverage with clear milestones.",
        "Targeted practice sessions for KEAM-specific patterns.",
        "Regular assessments to track progress.",
        "Access to online resources and recorded sessions."
      ],
      curriculum: [
        { subject: "Physics", topic: "Complete Plus Two syllabus with additional topics" },
        { subject: "Chemistry", topic: "Physical, Organic, and Inorganic Chemistry" },
        { subject: "Mathematics", topic: "Algebra, Calculus, and Coordinate Geometry" }
      ],
      schedule: "Mon to Sat (5:00 PM - 8:00 PM)",
      availability: "Available at DLS centres in Kerala"
    },
    foundation: {
      title: "Foundation Program",
      duration: "2 Year Program",
      mode: "Online & Offline",
      description: "An early preparation program for Class 10 students, building a strong academic foundation for future competitive entrance exams like NEET and JEE.",
      features: [
        "Concept-focused classes aligned with school curriculum.",
        "Introduction to competitive exam patterns and thinking.",
        "Regular assessments and progress reports for parents.",
        "Flexible scheduling to balance school and preparation."
      ],
      curriculum: [
        { subject: "Physics", topic: "Fundamentals of mechanics, heat, and electricity" },
        { subject: "Chemistry", topic: "Basic concepts, periodic table, and reactions" },
        { subject: "Biology/Maths", topic: "Core concepts building towards entrance-level understanding" }
      ],
      schedule: "Weekends (10:00 AM - 1:00 PM) | Weekdays (Online sessions)",
      availability: "Available across all DLS centres and online platforms"
    }
  };

  const courseData = courseMap[slug] || {
    title: slug.toUpperCase().replace("-", " "),
    duration: "1 Year Program",
    mode: "Hybrid",
    description: "A structured program designed to build strong conceptual understanding and exam readiness. Delivered across all DLS centres and online platforms.",
    features: [
      "Structured daily classes with experienced faculty.",
      "Study material aligned with the latest syllabus.",
      "Regular mock tests with detailed performance reports.",
      "One-on-one mentoring and doubt-clearing sessions."
    ],
    curriculum: [
      { subject: "Physics", topic: "Complete syllabus coverage with practice" },
      { subject: "Chemistry", topic: "Physical, Organic, and Inorganic Chemistry" },
      { subject: "Biology/Maths", topic: "Comprehensive preparation with advanced topics" }
    ],
    schedule: "Mon to Fri (4:00 PM - 8:00 PM) | Weekends (9:00 AM - 1:00 PM)",
    availability: "Available at all DLS centres in Kerala, Tamil Nadu & UAE"
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      {/* Detail Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 border-b border-border pb-12">
        <FadeIn>
          <Link href="/programs" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
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
              <h2 className="text-3xl font-serif mb-8 border-b border-border pb-4">Program Highlights</h2>
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
              <h2 className="text-3xl font-serif mb-8 border-b border-border pb-4">Syllabus Overview</h2>
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
              <h3 className="text-2xl font-serif mb-8 border-b border-border pb-4">Enroll Now</h3>
              
              <div className="space-y-6 mb-10">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block mb-2 flex items-center">
                    <CalendarDays className="w-4 h-4 text-primary mr-2" /> Schedule
                  </span>
                  <span className="text-sm text-foreground font-medium block leading-relaxed">{courseData.schedule}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block mb-2 flex items-center">
                    <MapPin className="w-4 h-4 text-primary mr-2" /> Availability
                  </span>
                  <span className="text-sm text-foreground font-medium block leading-relaxed">{courseData.availability}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button className="w-full h-14 rounded-none bg-primary text-white hover:bg-primary/90 text-md font-medium">
                  Book Free Demo
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background text-md font-medium">
                  Download Brochure
                </Button>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
