import React from "react";
import { Star, ShieldCheck, MapPin, Award, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function TrustBar() {
  const stats = [
    {
      label: "Projects Completed",
      value: `${BUSINESS_INFO.completedProjects}+`,
      editableTag: "{{EDITABLE}}",
      icon: CheckCircle,
    },
    {
      label: "UAE Experience",
      value: `${BUSINESS_INFO.experienceYears}+ Years`,
      editableTag: "{{EDITABLE}}",
      icon: Award,
    },
    {
      label: "Satisfaction Rating",
      value: `${BUSINESS_INFO.rating} ★`,
      editableTag: "{{EDITABLE}}",
      icon: Star,
    },
    {
      label: "Service Guarantee",
      value: "100% Guaranteed",
      editableTag: "{{EDITABLE}}",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-charcoal-900 border-y border-gold-500/20 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* City Coverage Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-gold-400 mb-8 uppercase tracking-widest text-center">
          <MapPin className="w-4 h-4 text-gold-500 animate-bounce" />
          <span>Professional Installation Coverage Across:</span>
          <span className="px-2.5 py-1 rounded bg-charcoal-950 text-white border border-gold-500/30">Dubai</span>
          <span className="px-2.5 py-1 rounded bg-charcoal-950 text-white border border-gold-500/30">Sharjah</span>
          <span className="px-2.5 py-1 rounded bg-charcoal-950 text-white border border-gold-500/30">Ajman</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-charcoal-950/80 border border-white/5 hover:border-gold-500/30 transition-all text-center group"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-gold-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
