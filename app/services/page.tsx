import React from "react";
import Metadata from "next";
import Image from "next/image";
import { SERVICES, BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, CheckCircle2, ShieldCheck, MapPin, Tv, Layers, Blinds, Grid, Paintbrush, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Interior Installation Services | TV Units, Wall Panels, Blinds, Flooring & Paint",
  description:
    "Explore Arvo Interior's 5 core installation services in Dubai, Sharjah, and Ajman. Professional installation-only service for TV units, 3D/gold wall panels, curtains & roller blinds, SPC flooring, and interior painting.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            Installation-Only Expertise
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Interior <span className="gold-gradient-text">Installation</span> Services
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From heavy TV wall mounting to gold-strip paneling and SPC flooring — we provide specialized labor and fitting expertise across Dubai, Sharjah, and Ajman.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-500" /> No Material Supply (Labor Only)
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold-500" /> Serving Dubai, Sharjah & Ajman
            </span>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
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
                    <div>
                      <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-sm font-bold text-gold-400 uppercase tracking-wider">
                      Key Installation Capabilities:
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
                      What&apos;s Included in Our Installation Labor:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                      {service.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-gold-500">▸</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs text-zinc-400 space-y-1">
                    <strong className="text-zinc-300">Ideal For:</strong> {service.idealFor.join(" • ")}
                  </div>

                  {/* WhatsApp CTA for this specific service */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold bg-emerald-whatsapp text-white whatsapp-glow text-sm hover:bg-emerald-600 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Book {service.title} Quote on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Image / Visual Column */}
                <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 group">
                    {/* {/* TODO: replace with real project photo */}
                    <Image
                      src={`https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-charcoal-950/90 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                      <p className="font-bold text-white">{service.title}</p>
                      <p className="text-[11px] text-gold-400">Dubai • Sharjah • Ajman Installation</p>
                    </div>
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
