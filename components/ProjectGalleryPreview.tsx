"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_GALLERY, BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MapPin, MessageCircle, Eye, X, Play, ArrowRight } from "lucide-react";

export default function ProjectGalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECT_GALLERY[number] | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "tv-unit", label: "TV Units" },
    { id: "wall-panels", label: "Wall Panels" },
    { id: "curtains", label: "Curtains & Blinds" },
    { id: "flooring", label: "SPC Flooring" },
    { id: "painting", label: "Painting" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              Authentic UAE Installation Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="gold-gradient-text">Projects</span> & Gallery
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Explore recent installation work executed across residential apartments and villas in Dubai, Sharjah, and Ajman.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-charcoal-950 shadow-md font-bold"
                  : "bg-charcoal-900 text-zinc-300 border border-white/5 hover:bg-charcoal-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Image Container - Structured for real photo drop-in */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
                {/* {/* TODO: replace with real project photo */}
                <Image
                  src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* City badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-charcoal-950/90 backdrop-blur-md text-[10px] font-bold text-gold-400 border border-gold-500/20 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-500" />
                    {project.city}
                  </span>
                </div>

                {/* Quick view indicator */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-charcoal-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold-400" />
                </div>

                {/* Card Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
                    {project.service}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl rounded-2xl glass-panel p-6 overflow-hidden border border-gold-500/40 space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-900 text-zinc-300 hover:text-white hover:bg-gold-500/20 transition-colors z-20"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-900">
                {/* {/* TODO: replace with real project photo or video embed */}
                <Image
                  src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80`}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                    {selectedProject.service} • {selectedProject.city}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Professional Installation Service by Arvo Interior
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(
                    `Hi Arvo Interior, I saw project "${selectedProject.title}" in ${selectedProject.city} and would like a similar installation quote.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-whatsapp text-white font-bold text-xs flex items-center justify-center gap-2 whatsapp-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Similar Installation Quote</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
