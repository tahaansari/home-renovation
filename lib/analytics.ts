import { sendGAEvent } from "@next/third-parties/google";

export function trackWhatsAppClick(btnLocation: string) {
  sendGAEvent("event", "whatsapp_click", {
    button_location: btnLocation,
  });
}

export function trackSlideToForm(btnLocation: string) {
  sendGAEvent("event", "slide_to_form_clicked", {
    button_location: btnLocation,
  });
}
