"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECT_GALLERY, BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MapPin, MessageCircle, Eye, X, Play, ShieldCheck, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECT_GALLERY[number] | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "tv-unit", label: "TV Units & Wall Mounts" },
    { id: "wall-panels", label: "Wall Panels (Foam, Gold, Steel)" },
    { id: "curtains", label: "Curtains & Roller Blinds" },
    { id: "flooring", label: "SPC Flooring" },
    { id: "painting", label: "Painting & Décor" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Work Portfolio
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Installation <span className="gold-gradient-text">Projects</span> Gallery
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Browse our recent TV unit wall installations, gold strip wall panels, blackout roller blinds, SPC vinyl flooring, and decorative paint work in Dubai, Sharjah, and Ajman.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-charcoal-950 shadow-lg font-bold scale-105"
                  : "bg-charcoal-900 text-zinc-300 border border-white/10 hover:bg-charcoal-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
                {/* {/* TODO: replace with real project photo or before/after video */}
                <Image
                  src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-charcoal-950/90 backdrop-blur-md text-[10px] font-bold text-gold-400 border border-gold-500/30 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-500" />
                    {project.city}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-charcoal-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
                    {project.service}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Arvo Installation Team
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-8 overflow-hidden border border-gold-500/40 space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-900 text-zinc-300 hover:text-white hover:bg-gold-500/20 transition-colors z-20"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-900 border border-white/10">
                {/* {/* TODO: replace with real project photo or video embed */}
                <Image
                  src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80`}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                    {selectedProject.service} • {selectedProject.city}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Installation Location: {selectedProject.city} • Executed by Arvo Installation Specialists
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(
                    `Hi Arvo Interior, I would like to get a quote for a similar installation like "${selectedProject.title}" in ${selectedProject.city}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-whatsapp text-white font-bold text-xs flex items-center justify-center gap-2 whatsapp-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Quote for Similar Project</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}
