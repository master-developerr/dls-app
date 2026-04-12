import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const primaryRoutes = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Results", path: "/results" },
  ];

  const secondaryRoutes = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const allRoutes = [...primaryRoutes, ...secondaryRoutes];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 max-w-screen-xl items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logomark.png" alt="DLS Logomark" width={48} height={48} className="h-7 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {allRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hidden lg:inline-flex border-border/40 text-foreground">
            Log in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            Book Free Demo
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" />}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-[85vw] sm:w-[350px] flex flex-col p-0">
            
            {/* Menu Header */}
            <div className="p-6 pb-4 border-b border-border/40">
              <Image src="/logomark.png" alt="DLS" width={40} height={40} className="h-8 w-auto object-contain" />
            </div>

            {/* Primary Navigation */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 pt-6 pb-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 block">Navigate</span>
                <div className="flex flex-col space-y-1">
                  {primaryRoutes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="text-xl font-serif text-foreground hover:text-primary transition-colors py-3 border-b border-border/20"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Secondary Navigation */}
              <div className="px-6 pt-2 pb-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 block">More</span>
                <div className="flex flex-col space-y-1">
                  {secondaryRoutes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Login */}
              <div className="px-6 pb-4">
                <Button variant="outline" className="w-full justify-center h-11 text-sm font-medium">
                  Log in
                </Button>
              </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="p-4 border-t border-border bg-card/80 backdrop-blur-sm mt-auto">
              <Button className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-lg shadow-primary/15 rounded-none">
                Book Free Demo
              </Button>
            </div>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
