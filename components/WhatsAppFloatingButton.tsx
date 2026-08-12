"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I need an installation quote in Dubai/Sharjah/Ajman.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Badge */}
      <span className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-charcoal-900 text-gold-300 border border-gold-500/30 shadow-lg animate-bounce">
        💬 Chat for Instant Quote
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Arvo Interior"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-whatsapp text-white rounded-full whatsapp-glow hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-whatsapp opacity-75 animate-ping group-hover:animate-none"></span>

        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
