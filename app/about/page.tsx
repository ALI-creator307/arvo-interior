import React from "react";
import Image from "next/image";
import { BUSINESS_INFO, WHY_CHOOSE_US, CITIES, getWhatsAppLink } from "@/lib/constants";
import { ShieldCheck, Award, MapPin, MessageCircle, Sparkles, CheckCircle2, Wrench } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | UAE Installation-Only Interior Specialists",
  description:
    "Learn about Arvo Interior — Dubai, Sharjah, and Ajman's premier installation-only interior service. We specialize in precision wall mounting, paneling, blinds, flooring, and painting labor.",
};

export default function AboutPage() {
  const aboutWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I read your About page and would like to consult with an installation specialist.`
  );

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Our Story & Mission
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About <span className="gold-gradient-text">Arvo Interior</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            &quot;{BUSINESS_INFO.tagline}&quot; — Built on a singular commitment to craftsmanship, precision, and customer satisfaction across the UAE.
          </p>
        </div>
      </section>

      {/* Story & Positioning Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              Installation Specialization
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why We Are Strictly an <span className="gold-gradient-text">Installation-Only</span> Service
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              When homeowners buy interior products in Dubai, Sharjah, or Ajman — whether gold accent wall panels from Dragon Mart, IKEA curtains, or SPC vinyl floor planks — they often face poor installation quality from general handymen.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              At Arvo Interior, we focused entirely on perfecting the <strong>installation process</strong>. We do not sell materials or mark up retail prices. You buy the exact materials you love, and our dedicated team fits them with master precision, laser alignment, and clean post-job site cleanup.
            </p>

            <div className="p-5 rounded-2xl bg-charcoal-900 border border-gold-500/30 space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-gold-500" />
                <span>Our Core Operating Promise</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent fixed installation labor pricing before work begins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Heavy-duty wall anchors and stud locators for maximum safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Respectful, clean, and punctual technicians across Dubai, Sharjah & Ajman</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border border-gold-500/30 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-900">
                {/* {/* TODO: replace with real team / project photo */}
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Arvo Interior Installation Specialist at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-950/90 backdrop-blur-md border border-white/10 text-xs">
                  <p className="font-extrabold text-white text-base">Arvo Installation Team</p>
                  <p className="text-gold-400 mt-0.5">Serving Dubai • Sharjah • Ajman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage Section */}
      <section className="py-16 bg-charcoal-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Service Area & Regional Teams
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Fast, on-call installation teams dispatched across the Northern & Central Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CITIES.map((c) => (
              <div
                key={c.name}
                className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{c.name} Coverage</h3>
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
