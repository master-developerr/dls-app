import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface mt-auto">
      <div className="container mx-auto max-w-screen-xl px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Image src="/wordmark-logomark.png" alt="DLS Wordmark" width={300} height={80} className="h-8 md:h-9 w-auto object-contain" />
            </div>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
              Structured learning across Kerala, Tamil Nadu, and UAE. Consistent academic standards at every centre.
            </p>
            <p className="text-xs text-text-muted mt-2">
              UAE: +971 56 253 0561
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-sm text-text-primary mb-4">Programs & Tests</h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-text-secondary">
              <li><Link href="/dnst/register" className="hover:text-accent font-semibold text-accent transition">DNST Scholarship Test</Link></li>
              <li><Link href="/programs/neet" className="hover:text-accent transition">NEET Coaching</Link></li>
              <li><Link href="/programs/jee" className="hover:text-accent transition">JEE Coaching</Link></li>
              <li><Link href="/programs/keam" className="hover:text-accent transition">KEAM Preparation</Link></li>
              <li><Link href="/programs/foundation" className="hover:text-accent transition">Foundation Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-sm text-text-primary mb-4">Company</h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-text-secondary">
              <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-sm text-text-primary mb-4">Stay Updated</h3>
            <p className="text-xs md:text-sm text-text-secondary mb-3 font-light">Subscribe for updates and announcements.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter email" className="bg-background border-border rounded-none text-xs h-10" />
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-none px-4 h-10 text-xs">Join</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 md:mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Diligence Learning Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
