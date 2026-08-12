import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tv, Layers, Blinds, Grid, Paintbrush, MessageCircle, ArrowRight } from "lucide-react";
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
    <section className="py-12 sm:py-20 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="max-w-xl mb-10 space-y-2 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Installation <span className="text-gold-500">Services</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We focus exclusively on fitting and assembly labor. Bring your materials — our UAE team handles the rest.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName];
            const whatsappUrl = getWhatsAppLink(service.whatsappMessage("Dubai / Sharjah / Ajman"));

            return (
              <div
                key={service.id}
                className="group relative rounded-xl bg-charcoal-900 border border-white/10 hover:border-gold-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-charcoal-950/80 backdrop-blur-md text-gold-400 border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold bg-emerald-whatsapp text-white hover:bg-emerald-600 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Quote</span>
                    </a>

                    <Link
                      href={`/services#${service.slug}`}
                      className="p-2.5 rounded-lg bg-charcoal-800 text-zinc-300 hover:text-white hover:bg-charcoal-700 transition-colors flex items-center justify-center"
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
