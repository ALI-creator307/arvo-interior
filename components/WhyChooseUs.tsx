import React from "react";
import Image from "next/image";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const whatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I want to learn more about your installation service and get a quote.`
  );

  return (
    <section className="py-12 sm:py-20 bg-charcoal-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Photography Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-950 border border-white/10 shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Precision Wall Paneling and Installation Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-zinc-400 mt-3 text-left">
              Precision Wall Paneling & Fitting • Arvo Interior UAE
            </p>
          </div>

          {/* Right Column: Editorial Narrative & Integrated List */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Why Installation-Only Works Best
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Rather than paying bundled contractor markups, you purchase your preferred materials directly from Dragon Mart, IKEA, Danube, or online vendors. We handle the labor, wall anchoring, laser leveling, and alignment.
              </p>
            </div>

            {/* Editorial Vertical Feature List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">100% Material Freedom</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    You choose and buy the exact panels, TV mounts, curtains, or flooring planks you love without middleman markup fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Upfront Fixed Labor Rates</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    Clear, transparent fitting rates agreed upon before work starts on your Dubai, Sharjah, or Ajman property.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Laser Precision & Heavy Anchors</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    Specialized wall anchors tailored for concrete, gypsum, and brick walls ensuring secure, level mounting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Complete Post-Installation Cleanup</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 leading-relaxed">
                    We clean up drill dust, packaging materials, and leave your space spotless before wrapping up.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-xs sm:text-sm hover:bg-gold-400 hover:scale-[1.02] transition-all shadow-md"
              >
                Consult an Installation Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
