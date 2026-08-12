"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I need an installation quote in Dubai/Sharjah/Ajman.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Bubble */}
      <div
        className={`hidden md:inline-flex items-center px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-charcoal-900 text-gold-300 border border-gold-500/30 shadow-xl transition-all duration-200 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span>WhatsApp</span>
      </div>

      {/* Clean Circular Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp with Arvo Interior"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-whatsapp text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
