"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, SERVICES, CITIES, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, Mail } from "lucide-react";
import CTASection from "@/components/CTASection";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

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
      <section className="relative py-12 md:py-16 bg-charcoal-900 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact <span className="text-gold-500">Arvo Interior</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl leading-relaxed">
            Get a quick WhatsApp installation quote or contact us directly. We respond promptly during working hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-12 md:py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7 rounded-2xl bg-charcoal-900 p-6 sm:p-8 border border-white/10 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-current" />
                <span>WhatsApp Quote Request</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Select your service and location to send a pre-filled WhatsApp message.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">City / Location *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 text-sm"
                  >
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name} className="bg-charcoal-900 text-white">
                        {c.name} (UAE)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Installation Service *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white focus:outline-none focus:border-gold-500 text-sm"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-charcoal-900 text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Project Details (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="e.g. TV mounting and wall panel fitting in Downtown Dubai."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-whatsapp text-white font-bold text-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send via WhatsApp for Quote</span>
              </button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                Direct Contact
              </h3>

              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={getWhatsAppLink(`Hi Arvo Interior, I need an installation quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-whatsapp/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-whatsapp hover:text-white transition-all font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                    <div>
                      <p className="text-xs text-zinc-300">WhatsApp Support</p>
                      <p className="text-sm font-bold">{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-charcoal-950 border border-white/10 text-zinc-200 hover:text-gold-400 transition-all"
                  >
                    <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-xs text-zinc-400">Email Inquiry</p>
                      <p className="text-sm font-medium">{BUSINESS_INFO.email}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-charcoal-950 border border-white/10 text-zinc-200 hover:text-gold-400 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-xs text-zinc-400">Instagram</p>
                      <p className="text-sm font-medium">{BUSINESS_INFO.instagram}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
