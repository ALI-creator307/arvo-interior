"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ShieldCheck, MapPin, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  const heroWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I am interested in getting a free quote for installation in Dubai/Sharjah/Ajman.`
  );

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* City Badge - Replicating Meta Ads winning formula */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>{BUSINESS_INFO.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Expert Interior{" "}
              <span className="gold-gradient-text">Installation</span> Services in Dubai, Sharjah & Ajman
            </h1>

            {/* Tagline & Model Statement */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-medium">
              &quot;{BUSINESS_INFO.tagline}&quot; — Specialized{" "}
              <strong className="text-gold-400 font-semibold underline decoration-gold-500/50">installation-only</strong>{" "}
              craftsmanship for TV walls, paneling, blinds, SPC flooring & painting. You supply the materials, we fit them flawlessly.
            </p>

            {/* Trust points bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 pt-2 pb-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Precision Laser Leveling</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed Transparent Installation Rates</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same-Day Site Inspection Available</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean & Mess-Free Post Installation</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Get Free Installation Quote</span>
              </a>

              <a
                href="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </a>
            </div>

            {/* Installation-only disclaimer banner */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-charcoal-900/60 px-4 py-2 rounded-lg border border-gold-500/20">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>
                  <strong>Notice:</strong> Arvo Interior provides installation labor only (no material sales).
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Video / Image Placeholder Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl group border border-gold-500/30">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-charcoal-900 flex items-center justify-center">
                {/* Visual Media Placeholder - Structured for real phone video or project photo */}
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern interior installation project in Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-90" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md text-[11px] font-bold text-gold-400 border border-gold-500/30">
                    REAL PROJECT WORK
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 backdrop-blur-md text-[10px] font-bold">
                    ✓ Verified UAE Installation
                  </span>
                </div>

                {/* Center Video Play Button Mockup for authentic video content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/90 text-charcoal-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-3">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="text-white font-bold text-base drop-shadow-md">
                    TV Unit & Wall Panel Fitting
                  </span>
                  <span className="text-xs text-gold-300 font-medium mt-1">
                    Dubai • Sharjah • Ajman
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-lg bg-charcoal-950/90 backdrop-blur-md border border-white/10 text-xs text-zinc-300 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-white">Precision Wall Mounting</p>
                    <p className="text-[11px] text-gold-400">Arvo Installation Team</p>
                  </div>
                  <a
                    href={heroWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-whatsapp text-white font-bold text-[11px] hover:bg-emerald-600 transition-colors"
                  >
                    Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
