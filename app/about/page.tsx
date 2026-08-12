import React from "react";
import Image from "next/image";
import { BUSINESS_INFO, CITIES, getWhatsAppLink } from "@/lib/constants";
import { ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | UAE Installation-Only Interior Specialists",
  description:
    "Learn about Arvo Interior — Dubai, Sharjah, and Ajman's installation-only interior service. Specializing in wall mounting, paneling, blinds, flooring, and painting labor.",
};

export default function AboutPage() {
  const aboutWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I read your About page and would like to consult with an installation specialist.`
  );

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About <span className="gold-gradient-text">Arvo Interior</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            &quot;{BUSINESS_INFO.tagline}&quot; — Built on a singular commitment to craftsmanship, precision fitting, and customer satisfaction across the UAE.
          </p>
        </div>
      </section>

      {/* Story & Positioning Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why We Specialize in <span className="gold-gradient-text">Installation Labor Only</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              When property owners buy interior products in Dubai, Sharjah, or Ajman — from Dragon Mart wall panels to IKEA curtain tracks or SPC flooring planks — finding reliable, skilled installation handymen is often challenging.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              At Arvo Interior, we dedicated ourselves purely to the installation process. We do not push material sales or mark up supplier costs. You purchase the exact materials you love, and our experienced technicians install them with laser alignment and full site cleanup.
            </p>

            <div className="p-5 rounded-2xl bg-charcoal-900 border border-gold-500/30 space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-gold-500" />
                <span>Our Core Service Standards</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Upfront, fixed labor pricing provided before starting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Heavy-duty wall anchors tailored for concrete and drywall</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Punctual, respectful technicians across Dubai, Sharjah & Ajman</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-900">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Arvo Interior Installation Workmanship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-950/85 backdrop-blur-md border border-white/10 text-xs">
                  <p className="font-extrabold text-white text-base">Arvo Interior Installation Team</p>
                  <p className="text-gold-400 mt-0.5">Dubai • Sharjah • Ajman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Coverage Section */}
      <section className="py-16 bg-charcoal-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Service Locations
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Active installation coverage across the Northern and Central Emirates.
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
                <h3 className="text-xl font-bold text-white">{c.name}</h3>
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
