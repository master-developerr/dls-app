import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20 md:pt-24 pb-16 md:pb-20">
      
      {/* Editorial Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-8 md:mb-16 border-b border-border pb-8 md:pb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-[10px] sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3 md:mb-4">Contact Us</h1>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-foreground leading-[1.1] max-w-3xl">
                Get in <span className="italic text-primary">Touch.</span>
              </h2>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Main Layout */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-8 md:space-y-12">
            <FadeIn delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-serif mb-5 md:mb-8 border-b border-border pb-3 md:pb-4">Contact Details</h3>
              <div className="space-y-5 md:space-y-8">
                <div className="flex items-start">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">Phone</h4>
                    <p className="text-lg md:text-xl font-medium text-foreground">+91 94473 30561</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">WhatsApp</h4>
                    <p className="text-lg md:text-xl font-medium text-foreground mb-2 md:mb-3">+91 94473 30561</p>
                    <a href="https://wa.me/919447330561" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-green-500 hover:text-green-400 transition-colors">
                      Message Us <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">UAE Contact</h4>
                    <p className="text-lg md:text-xl font-medium text-foreground">+971 56 253 0561</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">Email</h4>
                    <p className="text-lg md:text-xl font-medium text-foreground">info@diligencelearning.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Regional Offices */}
            <FadeIn delay={0.15}>
              <h3 className="text-2xl md:text-3xl font-serif mb-5 md:mb-8 border-b border-border pb-3 md:pb-4">Our Centres</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">Kerala — Head Office</h4>
                    <p className="text-base md:text-lg text-foreground font-light leading-relaxed">
                      Trivandrum, Kerala
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">Tamil Nadu</h4>
                    <p className="text-base md:text-lg text-foreground font-light leading-relaxed">
                      Kanyakumari · Nagercoil · Tirunelveli
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 mr-3 md:mr-4 shrink-0" />
                  <div>
                    <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-1">UAE</h4>
                    <p className="text-base md:text-lg text-foreground font-light leading-relaxed">
                      Dubai · Abu Dhabi
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">+971 56 253 0561</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form - Editorial Style */}
          <div>
            <FadeIn delay={0.15} className="bg-card p-6 sm:p-8 md:p-12 border border-border">
              <h3 className="text-2xl md:text-3xl font-serif mb-5 md:mb-8">Send an Inquiry</h3>
              <form className="space-y-5 md:space-y-8">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg"
                  />
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Program of Interest</label>
                    <select className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg appearance-none cursor-pointer">
                      <option className="bg-background">NEET Coaching</option>
                      <option className="bg-background">JEE Main & Advanced</option>
                      <option className="bg-background">KEAM Preparation</option>
                      <option className="bg-background">Foundation Program</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Preferred Region</label>
                    <select className="w-full bg-transparent border-0 border-b border-border pb-2 focus:ring-0 focus:border-primary outline-none transition-colors text-foreground text-base md:text-lg appearance-none cursor-pointer">
                      <option className="bg-background">Kerala</option>
                      <option className="bg-background">Tamil Nadu</option>
                      <option className="bg-background">UAE</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full h-12 md:h-16 rounded-none bg-primary text-white text-base md:text-lg font-medium hover:bg-primary/90 mt-4 md:mt-8">
                  Submit Inquiry
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
