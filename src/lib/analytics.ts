export type ConversionEvent =
  | { type: "form_submission"; course: string; source?: string }
  | { type: "whatsapp_click"; location: string }
  | { type: "cta_click"; label: string; page?: string };

export function trackConversion(event: ConversionEvent): void {
  if (typeof window !== "undefined") {
    // Log conversion event for analytics / debugging
    console.log("[Analytics Conversion Event]:", event);

    // If window.gtag or custom analytics script exists in the future
    if ("gtag" in window && typeof (window as unknown as { gtag: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", event.type, event);
    }
  }
}
