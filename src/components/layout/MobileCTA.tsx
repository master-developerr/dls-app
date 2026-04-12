"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky Bottom CTA Bar — mobile only */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <a
            href="tel:+919447330561"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-r border-border"
          >
            <Phone className="w-4 h-4" />
            Book Demo
          </a>
          <a
            href="https://wa.me/919447330561"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#1FB855] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button — desktop only (mobile has the bar) */}
      <a
        href="https://wa.me/919447330561"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
