import React from "react";
import { ShieldCheck, Award, Zap, ThumbsUp, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, WHY_CHOOSE_US, getWhatsAppLink } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Zap,
  ThumbsUp,
};

export default function WhyChooseUs() {
  const whatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I want to learn more about your installation-only service and get a quote.`
  );

  return (
    <section className="py-20 bg-charcoal-900 border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Why Arvo Interior
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Why <span className="gold-gradient-text">Installation-Only</span> is Your Biggest Advantage
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Unlike traditional contractors who push expensive material bundles, Arvo Interior gives you 100% material freedom. You buy what you love from Dragon Mart, IKEA, Danube, or online vendors — and we deliver flawless, precision installation.
            </p>

            {/* Grid of 4 key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon] || Wrench;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-charcoal-950/70 border border-white/5 hover:border-gold-500/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-500 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-sm hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 text-center"
              >
                Discuss Your Installation Project
              </a>
            </div>
          </div>

          {/* Right Column: Feature Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass-panel p-8 space-y-6 relative border border-gold-500/30">
              <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-charcoal-950 font-bold">
                <Wrench className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Our Guarantee to Homeowners in Dubai, Sharjah & Ajman
              </h3>

              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Material Hidden Costs:</strong> Clear, upfront labor rates provided before work starts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Laser Precision:</strong> Perfect level alignment for TV mounts, wall panels, and curtain tracks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Damage-Free Anchoring:</strong> Specialized wall anchors tailored for concrete, gypsum, and brick walls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Tidy Workplace:</strong> We clean up drill dust, packaging materials, and leave your space spotless.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                  Tagline: &quot;{BUSINESS_INFO.tagline}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
