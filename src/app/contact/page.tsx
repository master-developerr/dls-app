import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 border-b border-border pb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h1 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">05 / Contact</h1>
            <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl">
              Initiate <span className="italic text-primary">Dialogue.</span>
            </h2>
          </div>
        </FadeIn>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <h3 className="text-3xl font-serif mb-8 border-b border-border pb-4">Direct Lines</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Toll Free</h4>
                    <p className="text-xl font-medium text-foreground">1800-XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-green-500 mt-1 mr-4" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">WhatsApp Connect</h4>
                    <p className="text-xl font-medium text-foreground mb-3">+91 98765 43210</p>
                    <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-green-500 hover:text-green-400 transition-colors">
                      Chat with Counselor <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</h4>
                    <p className="text-xl font-medium text-foreground">admissions@dls.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Headquarters</h4>
                    <p className="text-xl text-foreground font-light leading-relaxed">
                      DLS Tower, MG Road,<br/>
                      Ernakulam, Kerala - 682011
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form - Editorial Style */}
          <div>
            <FadeIn delay={0.2} className="bg-card p-10 md:p-12 border border-border">
              <h3 className="text-3xl font-serif mb-8">Formal Inquiry</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-lg"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Program of Interest</label>
                  <select className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-lg appearance-none cursor-pointer">
                    <option className="bg-background">NEET Target</option>
                    <option className="bg-background">JEE Main & Advanced</option>
                    <option className="bg-background">Foundation Track</option>
                  </select>
                </div>

                <Button className="w-full h-16 rounded-none bg-primary text-white text-lg font-medium hover:bg-primary/90 mt-8">
                  Submit Intelligence
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
