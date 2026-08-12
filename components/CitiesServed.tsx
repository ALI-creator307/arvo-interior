import React from "react";
import { CITIES, getWhatsAppLink } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function CitiesServed() {
  return (
    <section className="py-20 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cities We <span className="gold-gradient-text">Serve</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Dedicated installation teams ready for prompt site visits across Dubai, Sharjah, and Ajman.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CITIES.map((city) => {
            const cityWhatsappUrl = getWhatsAppLink(
              `Hi Arvo Interior, I live in ${city.name} and need an installation quote for my home.`
            );

            return (
              <div
                key={city.name}
                className="group rounded-2xl glass-panel p-7 border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      Active Coverage
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {city.name} Installation Team
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {city.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>Same-day or next-day site visits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>Full installation labor guarantee</span>
                    </div>
                  </div>
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
