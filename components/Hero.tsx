"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  const heroWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I am interested in getting a free quote for installation in Dubai/Sharjah/Ajman.`
  );

  return (
    <section className="relative pt-10 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Interior Installation Services in{" "}
              <span className="gold-gradient-text">Dubai, Sharjah & Ajman</span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              We specialize strictly in installation labor — fitting TV wall units, accent wall paneling, window blinds, SPC vinyl flooring, and interior painting across the UAE. You supply the materials; we deliver flawless, laser-aligned installation.
            </p>

            {/* Practical feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Laser level alignment & heavy wall anchors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent, fixed labor rates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prompt site inspection across 3 cities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thorough cleanup after job completion</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-emerald-whatsapp text-white whatsapp-glow hover:bg-emerald-600 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Free Installation Quote</span>
              </a>

              <a
                href="/services"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2.5 shadow-2xl border border-white/10">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-xl overflow-hidden bg-charcoal-900">
                <Image
                  src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional TV Unit and Wall Installation in Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-charcoal-950/85 backdrop-blur-md border border-white/10 text-xs">
                  <p className="font-bold text-white text-sm">TV Unit & Media Wall Installation</p>
                  <p className="text-zinc-400 mt-0.5">Downtown Dubai • Al Majaz Sharjah • Ajman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
