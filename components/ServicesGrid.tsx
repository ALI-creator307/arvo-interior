import React from "react";
import Link from "next/link";
import { Tv, Layers, Blinds, Grid, Paintbrush, MessageCircle, ArrowRight, Check } from "lucide-react";
import { SERVICES, getWhatsAppLink, ServiceItem } from "@/lib/constants";

const ICON_MAP = {
  Tv: Tv,
  Layers: Layers,
  Blinds: Blinds,
  Grid: Grid,
  Paintbrush: Paintbrush,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            Specialized Installation Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Core <span className="gold-gradient-text">Installation</span> Offerings
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We specialize exclusively in precision fitting and assembly. Bring your materials — our UAE experts handle the rest.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName];
            const whatsappUrl = getWhatsAppLink(service.whatsappMessage("Dubai / Sharjah / Ajman"));

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-charcoal-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/5"
              >
                {/* Service Card Number */}
                <span className="absolute top-6 right-6 text-3xl font-extrabold text-white/10 group-hover:text-gold-500/20 transition-colors">
                  0{index + 1}
                </span>

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    href={`/services#${service.slug}`}
                    className="w-full sm:w-auto p-3 rounded-xl bg-charcoal-800 text-zinc-300 hover:text-white hover:bg-charcoal-700 transition-colors flex items-center justify-center"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 text-gold-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
