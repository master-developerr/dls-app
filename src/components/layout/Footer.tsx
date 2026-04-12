import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card mt-auto">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Image src="/wordmark-logomark.png" alt="DLS Wordmark" width={300} height={80} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students across Kerala, Tamil Nadu, and UAE to achieve their medical and engineering dreams.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/programs/neet" className="hover:text-primary transition">NEET Coaching</Link></li>
              <li><Link href="/programs/jee" className="hover:text-primary transition">JEE Coaching</Link></li>
              <li><Link href="/programs/foundation" className="hover:text-primary transition">Foundation Program</Link></li>
              <li><Link href="/programs/crash-courses" className="hover:text-primary transition">Crash Courses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/results" className="hover:text-primary transition">Proven Results</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe for latest updates & tips.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter email" className="bg-background border-border/50" />
              <Button>Join</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Diligence Learning Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
