"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECT_GALLERY, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, Eye, X } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Header Banner */}
      <section className="relative py-12 md:py-16 bg-charcoal-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Installation <span className="text-gold-500">Portfolio</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl leading-relaxed">
            Browse our recent TV wall mounting, gold strip wall panels, blackout roller blinds, SPC vinyl flooring, and paint work across Dubai, Sharjah, and Ajman.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-charcoal-950 font-bold"
                  : "bg-charcoal-900 text-zinc-300 border border-white/10 hover:bg-charcoal-800 hover:text-white"
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
              className="group relative rounded-xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-500/40 transition-all duration-300 cursor-pointer shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />

                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-charcoal-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gold-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-medium block">
                    {project.service} • {project.city}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
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
            <div className="relative w-full max-w-3xl rounded-2xl bg-charcoal-900 p-6 overflow-hidden border border-gold-500/40 space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-950 text-zinc-300 hover:text-white hover:bg-gold-500/20 transition-colors z-20"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-950 border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-medium text-gold-400 tracking-wider">
                    {selectedProject.service} • {selectedProject.city}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <a
                  href={getWhatsAppLink(
                    `Hi Arvo Interior, I saw project "${selectedProject.title}" in ${selectedProject.city} and would like a quote.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-whatsapp text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request Similar Quote</span>
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
