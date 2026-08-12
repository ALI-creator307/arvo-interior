import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { BUSINESS_INFO, SERVICES, CITIES, getWhatsAppLink } from "@/lib/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  const footerWhatsappUrl = getWhatsAppLink(
    `Hi ${BUSINESS_INFO.name}, I am contacting you from your website footer to get an installation quote.`
  );

  return (
    <footer className="bg-charcoal-950 text-zinc-400 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center text-charcoal-950 font-bold text-lg shadow-md">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  ARVO <span className="text-gold-500">INTERIOR</span>
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  Installation Specialists
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-300">
              &quot;{BUSINESS_INFO.tagline}&quot; — Specialized installation-only labor for modern interior upgrades across Dubai, Sharjah, and Ajman.
            </p>
          </div>

          {/* Col 2: Services List */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold-500 text-xs">▸</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Locations */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Locations Served
            </h3>
            <div className="flex flex-col gap-2.5">
              {CITIES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-semibold text-white">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={footerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-whatsapp/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-whatsapp hover:text-white transition-all font-semibold"
                >
                  <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                  <span>WhatsApp: {BUSINESS_INFO.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-gold-400 transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-gold-400 transition-colors text-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{BUSINESS_INFO.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-center md:text-right text-zinc-400">
            Professional Interior Installation Services • Dubai • Sharjah • Ajman
          </p>
        </div>
      </div>
    </footer>
  );
}
