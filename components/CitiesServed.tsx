import React from "react";
import { CITIES, getWhatsAppLink } from "@/lib/constants";
import { MapPin, MessageCircle } from "lucide-react";

export default function CitiesServed() {
  return (
    <section className="py-16 sm:py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Service Locations in the <span className="gold-gradient-text">UAE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Our installation technicians provide on-site fitting across residential apartments, villas, and offices in Dubai, Sharjah, and Ajman.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CITIES.map((city) => {
            const cityWhatsappUrl = getWhatsAppLink(
              `Hi Arvo Interior, I live in ${city.name} and need an installation quote.`
            );

            return (
              <div
                key={city.name}
                className="group rounded-2xl glass-panel p-7 border border-white/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {city.name}
                  </h3>

                  <p className="text-xs text-gold-400 font-medium">
                    {city.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {city.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={cityWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Request {city.name} Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
