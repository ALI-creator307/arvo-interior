import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function CTASection() {
  const ctaWhatsappUrl = getWhatsAppLink(
    `Hi Arvo Interior, I would like to get a free installation quote for my property.`
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-gold-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Have an Installation Project in Mind? <span className="gold-gradient-text">Chat with Us</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Send us a quick photo or project details on WhatsApp. We&apos;ll provide an upfront, transparent labor quote for your home in Dubai, Sharjah, or Ajman.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={ctaWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all shadow-xl"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Get Instant WhatsApp Quote</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
            >
              <Phone className="w-5 h-5 text-gold-500" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
