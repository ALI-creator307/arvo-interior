import React from "react";
import { CITIES, getWhatsAppLink } from "@/lib/constants";
import { MapPin, MessageCircle } from "lucide-react";

export default function CitiesServed() {
  return (
    <section className="py-12 sm:py-20 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10 space-y-2 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Service Locations in the <span className="text-gold-500">UAE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Our installation technicians provide on-site fitting across residential apartments, villas, and offices in Dubai, Sharjah, and Ajman.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CITIES.map((city) => {
            const cityWhatsappUrl = getWhatsAppLink(
              `Hi Arvo Interior, I live in ${city.name} and need an installation quote.`
            );

            return (
              <div
                key={city.name}
                className="group rounded-xl bg-charcoal-950 p-6 border border-white/10 hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5 text-left">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-xs text-gold-400 font-medium">
                    {city.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {city.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10">
                  <a
                    href={cityWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-whatsapp text-white hover:bg-emerald-600 hover:scale-[1.02] transition-all"
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
