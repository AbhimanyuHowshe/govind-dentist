import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function WhatsAppButton() {
  if (!siteConfig.whatsappNumber) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-36 z-30 flex items-center gap-2 rounded-full bg-brand-emerald px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:right-6 md:bottom-28"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
