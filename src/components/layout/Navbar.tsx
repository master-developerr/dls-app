"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const routes = [
    { name: "Programs", path: "/programs" },
    { name: "DNST 2025", path: "/dnst", highlight: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-16 md:h-20 max-w-screen-xl items-center justify-between px-4 mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src="/wordmark-logomark.png"
            alt="DLS — Diligence Learning Solutions"
            width={320}
            height={85}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`transition-colors py-1 ${
                route.highlight
                  ? "text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-1.5"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {route.highlight && <Sparkles className="w-3.5 h-3.5 text-accent" />}
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link href="/dnst/register">
            <Button
              size="sm"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-4 py-2 text-xs md:text-sm rounded-none shadow-none transition-colors"
            >
              Register for DNST
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-text-primary hover:bg-surface-secondary font-medium px-3.5 py-2 text-xs md:text-sm rounded-none"
            >
              Book Free Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link href="/dnst/register">
            <Button
              size="sm"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-3 py-1.5 text-xs rounded-none"
            >
              DNST
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-9 w-9 text-text-primary rounded-none" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface border-border w-[85vw] max-w-[360px] flex flex-col p-0">
              {/* Mobile Drawer Header */}
              <div className="p-6 border-b border-border">
                <Image
                  src="/wordmark-logomark.png"
                  alt="DLS"
                  width={280}
                  height={75}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                  Menu
                </div>
                <div className="flex flex-col space-y-1">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`text-xl font-serif py-3 border-b border-border-light transition-colors ${
                        route.highlight
                          ? "text-accent font-semibold flex items-center justify-between"
                          : "text-text-primary hover:text-accent"
                      }`}
                    >
                      <span>{route.name}</span>
                      {route.highlight && (
                        <span className="text-xs bg-accent-light text-accent px-2 py-0.5 rounded-full font-sans font-medium">
                          Scholarship
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Actions */}
              <div className="p-5 border-t border-border bg-surface-secondary space-y-2.5 mt-auto">
                <Link href="/dnst/register" className="block w-full">
                  <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold h-11 text-sm rounded-none">
                    Register for DNST
                  </Button>
                </Link>
                <Link href="/contact" className="block w-full">
                  <Button variant="outline" className="w-full border-border text-text-primary hover:bg-surface h-11 text-sm rounded-none">
                    Book Free Demo
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
