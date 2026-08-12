import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tv, Layers, Blinds, Grid, Paintbrush, MessageCircle, ArrowRight, Check } from "lucide-react";
import { SERVICES, getWhatsAppLink } from "@/lib/constants";

const ICON_MAP = {
  Tv: Tv,
  Layers: Layers,
  Blinds: Blinds,
  Grid: Grid,
  Paintbrush: Paintbrush,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header - No Eyebrow Badges */}
        <div className="max-w-2xl mb-12 space-y-3 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Installation <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We focus exclusively on fitting and assembly labor. Bring your materials — our UAE team handles the rest.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName];
            const whatsappUrl = getWhatsAppLink(service.whatsappMessage("Dubai / Sharjah / Ajman"));

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-charcoal-900 border border-white/10 hover:border-gold-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Category Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-charcoal-950/80 backdrop-blur-md text-gold-400 border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp Quote</span>
                    </a>

                    <Link
                      href={`/services#${service.slug}`}
                      className="p-3 rounded-xl bg-charcoal-800 text-zinc-300 hover:text-white hover:bg-charcoal-700 transition-colors flex items-center justify-center"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4 text-gold-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
