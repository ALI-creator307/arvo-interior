"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  const heroWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I am interested in getting a quote for installation in Dubai/Sharjah/Ajman.`
  );

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 bg-charcoal-950 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subheadline & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Main Dominant Heading - Explicit Mobile Base text-4xl */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-tight">
              Interior Installation Services in{" "}
              <span className="text-gold-500">Dubai, Sharjah & Ajman</span>
            </h1>

            {/* Visually Secondary Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-normal max-w-lg leading-relaxed mt-3">
              We specialize in installation labor — fitting TV wall units, accent wall paneling, window blinds, SPC vinyl flooring, and interior painting across the UAE. You supply the materials; we deliver clean, laser-aligned installation.
            </p>

            {/* Simple Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300 pt-1">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Laser level mounting & heavy anchors</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Upfront fixed labor pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prompt site visits in 3 cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean post-installation cleanup</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href={heroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-emerald-whatsapp text-white hover:bg-emerald-600 hover:scale-[1.02] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Free WhatsApp Quote</span>
              </a>

              <a
                href="/services"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-medium text-zinc-200 bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:text-white transition-all"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 text-gold-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Frame (Clean image display with caption below) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 shadow-xl">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80"
                  alt="TV Unit and Wall Installation in Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-zinc-400 text-left">
              TV Wall & Console Fitting • Serving Dubai, Sharjah & Ajman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
