import React from "react";
import { MessageCircle, Phone, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function CTASection() {
  const ctaWhatsappUrl = getWhatsAppLink(
    `Hi Arvo Interior, I would like to get a free installation quote for my property.`
  );

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-gold-500/30 text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Direct WhatsApp Consultation
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Transform Your Space with <span className="gold-gradient-text">Precision Fitting</span>?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Send us a photo or measurements of your project on WhatsApp. Our Dubai, Sharjah & Ajman team will provide an instant, transparent installation labor quote.
          </p>

          {/* Guarantees row */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Average response time &lt; 15 mins</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>100% Installation Quality Guarantee</span>
            </div>
          </div>

          {/* WhatsApp Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={ctaWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <MessageCircle className="w-7 h-7 fill-current" />
              <span>Get Free WhatsApp Quote Now</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-base font-semibold text-zinc-200 bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
            >
              <Phone className="w-5 h-5 text-gold-500" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-zinc-500 pt-2">
            Serving Dubai • Sharjah • Ajman | No Material Sales — Pure Installation Expertise
          </p>
        </div>
      </div>
    </section>
  );
}
