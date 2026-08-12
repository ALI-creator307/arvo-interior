import React from "react";
import { Star, ShieldCheck, MapPin, Award, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function TrustBar() {
  const stats = [
    {
      label: "Projects Installed",
      value: `${BUSINESS_INFO.completedProjects}+`,
      icon: CheckCircle,
    },
    {
      label: "UAE Experience",
      value: `${BUSINESS_INFO.experienceYears}+ Years`,
      icon: Award,
    },
    {
      label: "Satisfaction Rating",
      value: `${BUSINESS_INFO.rating} ★`,
      icon: Star,
    },
    {
      label: "Labor Guarantee",
      value: "100%",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-charcoal-900 border-y border-white/5 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-charcoal-950/60 border border-white/5 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
