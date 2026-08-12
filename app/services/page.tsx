import React from "react";
import Image from "next/image";
import { SERVICES, BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, CheckCircle2, Tv, Layers, Blinds, Grid, Paintbrush } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Interior Installation Services | TV Units, Wall Panels, Blinds, Flooring & Paint",
  description:
    "Explore Arvo Interior's installation services in Dubai, Sharjah, and Ajman. Professional labor for TV units, wall panels, curtains & blinds, SPC flooring, and interior painting.",
};

const ICON_MAP = {
  Tv: Tv,
  Layers: Layers,
  Blinds: Blinds,
  Grid: Grid,
  Paintbrush: Paintbrush,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Installation <span className="gold-gradient-text">Services</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            From heavy TV wall mounting to gold-strip paneling and SPC flooring — we provide specialized labor and fitting expertise across Dubai, Sharjah, and Ajman.
          </p>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const IconComponent = ICON_MAP[service.iconName];
          const isEven = index % 2 === 0;
          const whatsappUrl = getWhatsAppLink(service.whatsappMessage("Dubai / Sharjah / Ajman"));

          return (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 hover:border-gold-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Text Content Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center border border-gold-500/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3 pt-1">
                    <h3 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                      Installation Capabilities:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="p-4 rounded-xl bg-charcoal-900/80 border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      What Our Labor Covers:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                      {service.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-gold-500">▸</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-emerald-whatsapp text-white whatsapp-glow text-sm hover:bg-emerald-600 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Request {service.title} Quote</span>
                    </a>
                  </div>
                </div>

                {/* Image Column - Unique per service */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer CTA */}
      <CTASection />
    </div>
  );
}
