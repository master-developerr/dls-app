import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Results", path: "/results" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logomark.png" alt="DLS Logomark" width={48} height={48} className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {routes.map((route) => (
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
          <SheetContent side="right" className="bg-background border-border">
            <div className="flex flex-col space-y-6 mt-6">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground link-underline"
                >
                  {route.name}
                </Link>
              ))}
              <hr className="border-border/40" />
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center bg-primary text-primary-foreground">
                Book Free Demo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
