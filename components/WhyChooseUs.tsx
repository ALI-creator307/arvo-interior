import React from "react";
import { ShieldCheck, Award, Zap, ThumbsUp, Wrench, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, WHY_CHOOSE_US, getWhatsAppLink } from "@/lib/constants";

export default function WhyChooseUs() {
  const whatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I want to learn more about your installation service and get a quote.`
  );

  return (
    <section className="py-16 sm:py-24 bg-charcoal-900 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Why Installation-Only is Your <span className="gold-gradient-text">Biggest Advantage</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Instead of paying inflated bundle costs, you buy your preferred materials directly from Dragon Mart, IKEA, Danube, or online suppliers. We step in purely for precision fitting, laser alignment, and clean wall anchoring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-charcoal-950/80 border border-white/5 space-y-2"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gold-500 text-charcoal-950 font-bold text-sm hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/10"
              >
                Consult an Installation Specialist
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 space-y-5 border border-white/10">
              <h3 className="text-xl font-bold text-white">
                Our Workmanship Guarantee
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-bold">▸</span>
                  <span><strong>Zero Material Markup:</strong> You only pay clear, upfront labor fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-bold">▸</span>
                  <span><strong>Laser Precision:</strong> Perfect level alignment for TV mounts, wall panels, and curtain tracks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-bold">▸</span>
                  <span><strong>Secure Wall Anchoring:</strong> Specialized anchors for drywall, concrete, and hollow block walls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-bold">▸</span>
                  <span><strong>Clean Finish:</strong> Full cleanup of drill dust and packaging materials.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
