"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export function DNSTRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedClass: "Class 10",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      trackConversion({
        type: "form_submission",
        course: `DNST - ${formData.selectedClass}`,
      });
    }, 500);
  };

  const handleWhatsAppClick = () => {
    trackConversion({
      type: "whatsapp_click",
      location: "homepage_dnst_form",
    });
    const phone = "919447330561";
    const msg = encodeURIComponent(
      `Hi DLS, I want to register and enquire about the DNST National Scholarship Test for ${formData.selectedClass}.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-10 shadow-xs max-w-4xl mx-auto">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Context & WhatsApp */}
        <div className="md:col-span-5 space-y-5">
          <Badge className="bg-accent-light text-accent border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Direct Registration
          </Badge>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-primary leading-tight">
            Register for DNST 2025
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            Open for students from Classes I to XII. Register today to receive your examination schedule, benchmarking guidelines, and scholarship updates.
          </p>

          <div className="p-4 rounded-xl bg-surface-secondary border border-border space-y-3">
            <div className="flex items-center gap-2 font-semibold text-text-primary text-xs uppercase tracking-wider">
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              <span>Instant WhatsApp Inquiry</span>
            </div>
            <p className="text-xs text-text-muted leading-normal">
              Prefer speaking with an admissions counselor right now? Reach out on WhatsApp.
            </p>
            <Button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full bg-whatsapp hover:bg-whatsapp-dark text-whatsapp-foreground font-semibold text-xs md:text-sm py-2.5 rounded-lg shadow-xs"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Ask About DNST on WhatsApp
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-text-muted">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Scholarships Worth ₹25 Lakhs · Official DLS Portal</span>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:col-span-7 bg-background p-6 md:p-8 rounded-xl border border-border">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-success-light text-success flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-text-primary">
                Registration Inquiry Received!
              </h4>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-text-primary">{formData.name}</span>. Our academic coordinators will contact you shortly with syllabus guidelines and examination updates for <span className="font-semibold text-text-primary">{formData.selectedClass}</span>.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
                className="mt-2 border-border text-text-primary hover:bg-surface-secondary"
              >
                Register Another Student
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Student / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Student Class *
                  </label>
                  <select
                    value={formData.selectedClass}
                    onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                  >
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Trivandrum, UAE"
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold py-3 mt-2 rounded-lg shadow-xs"
              >
                {submitting ? "Processing..." : (
                  <>
                    Submit DNST Registration <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
