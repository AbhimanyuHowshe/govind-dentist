"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { useChatVisibility } from "@/lib/chat-visibility";
import { useKeyboardLikelyOpen } from "@/lib/use-keyboard-open";

export function WhatsAppButton() {
  const { chatOpen } = useChatVisibility();
  const keyboardOpen = useKeyboardLikelyOpen();

  if (!siteConfig.whatsappNumber) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed right-4 bottom-36 z-30 flex items-center gap-2 rounded-full bg-brand-emerald px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:right-6 md:bottom-28",
        (chatOpen || keyboardOpen) && "hidden sm:flex",
      )}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
