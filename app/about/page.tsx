import React from "react";
import Image from "next/image";
import { BUSINESS_INFO, CITIES } from "@/lib/constants";
import { Check, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | UAE Installation-Only Interior Specialists",
  description:
    "Learn about Arvo Interior — Dubai, Sharjah, and Ajman's installation-only interior service. Specializing in wall mounting, paneling, blinds, flooring, and painting labor.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-12 md:py-16 bg-charcoal-900 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gold-500">Arvo Interior</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl leading-relaxed">
            &quot;{BUSINESS_INFO.tagline}&quot; — Dedicated installation craftsmanship for residential and commercial properties across Dubai, Sharjah, and Ajman.
          </p>
        </div>
      </section>

      {/* Story & Positioning Section */}
      <section className="py-12 md:py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Specialized Installation Labor
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              When purchasing wall paneling, floating TV units, curtain tracks, or SPC vinyl floor planks in the UAE, getting accurate, clean fitting is essential.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Arvo Interior focuses exclusively on the installation process. We do not sell materials or mark up supplier prices. You purchase the exact materials you want, and our team handles the mounting, anchoring, and alignment.
            </p>

            <div className="p-4 rounded-xl bg-charcoal-900 border border-white/10 space-y-2.5">
              <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Our Work Standards:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed upfront labor rates agreed before work begins</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Laser level alignment & heavy-duty wall anchors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complete cleanup of drill dust and packaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Arvo Interior Installation Workmanship"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-charcoal-950/90 backdrop-blur-md border border-white/10 text-xs">
                  <p className="font-bold text-white text-sm">Arvo Interior Installation Team</p>
                  <p className="text-zinc-400 mt-0.5">Dubai • Sharjah • Ajman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage Section */}
      <section className="py-12 md:py-16 bg-charcoal-900 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Service Locations
            </h2>
            <p className="text-zinc-400 text-sm">
              On-site installation coverage across three key Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CITIES.map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-xl bg-charcoal-950 border border-white/10 space-y-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-500/10 text-gold-500 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">{c.name}</h3>
                <p className="text-xs text-gold-400 font-medium">{c.subtitle}</p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}
