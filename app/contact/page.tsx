"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, SERVICES, CITIES, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, Phone, Mail, Instagram, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Dubai",
    service: SERVICES[0].title,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hi Arvo Interior, my name is ${formData.name || "Customer"}.
Phone: ${formData.phone || "Not provided"}
City: ${formData.city}
Requested Service: ${formData.service}
Details: ${formData.message || "I would like a quote for installation labor."}`;

    const waUrl = getWhatsAppLink(formattedMessage);
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Instant Quote Builder
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact <span className="gold-gradient-text">Arvo Interior</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get an instant WhatsApp installation quote or send us a inquiry. We respond within 15 minutes during UAE working hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-10 border border-gold-500/30 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-emerald-400 fill-current" />
                <span>WhatsApp Quote Request Form</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Fill out your job details below to generate a pre-formatted WhatsApp quote request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed Al-Maktoum"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">City / Location *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white focus:outline-none focus:border-gold-500 text-sm"
                  >
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name} className="bg-charcoal-900 text-white">
                        {c.name} (UAE)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Installation Service *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white focus:outline-none focus:border-gold-500 text-sm"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-charcoal-900 text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300">Project Details / Measurements (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="e.g. Wall size 3m x 2.7m, mounting 75 inch TV + floating console in Downtown Dubai apartment."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-whatsapp text-white font-bold text-base whatsapp-glow hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send via WhatsApp for Instant Quote</span>
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact Info & Map Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-gold-500/30 pb-3">
                Direct Contact Channels
              </h3>

              <ul className="space-y-5 text-sm">
                <li>
                  <a
                    href={getWhatsAppLink(`Hi Arvo Interior, I need an installation quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-whatsapp hover:text-white transition-all font-bold"
                  >
                    <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
                    <div>
                      <p className="text-xs text-zinc-300">Primary WhatsApp</p>
                      <p className="text-base">{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-charcoal-900 border border-white/10 text-zinc-200 hover:text-gold-400 hover:border-gold-500/40 transition-all"
                  >
                    <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-xs text-zinc-400">Official Email</p>
                      <p className="text-sm font-semibold">{BUSINESS_INFO.email}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-charcoal-900 border border-white/10 text-zinc-200 hover:text-gold-400 hover:border-gold-500/40 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-xs text-zinc-400">Instagram Portfolio</p>
                      <p className="text-sm font-semibold">{BUSINESS_INFO.instagram}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Map Frame Placeholder */}
            <div className="rounded-3xl glass-panel p-4 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-500" /> UAE Coverage Area
                </span>
                <span>Dubai • Sharjah • Ajman</span>
              </div>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-charcoal-900 border border-white/5 flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-gold-500 mx-auto animate-bounce" />
                  <p className="text-xs font-bold text-white">Service Area Map Frame</p>
                  <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                    On-site installation teams dispatched daily across Dubai, Sharjah, and Ajman residential & commercial properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
