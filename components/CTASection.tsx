import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function CTASection() {
  const ctaWhatsappUrl = getWhatsAppLink(
    `Hi Arvo Interior, I would like to get a free installation quote for my property.`
  );

  return (
    <section className="py-12 sm:py-16 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Have an Installation Project? <span className="text-gold-500">Chat with Us</span>
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Send us a quick photo or project details on WhatsApp. We&apos;ll provide an upfront, transparent labor quote for your home in Dubai, Sharjah, or Ajman.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={ctaWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-whatsapp text-white hover:bg-emerald-600 transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Get WhatsApp Quote</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-200 bg-charcoal-950 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
          >
            <Phone className="w-4 h-4 text-gold-500" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
