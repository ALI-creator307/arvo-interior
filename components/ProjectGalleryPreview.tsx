"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_GALLERY, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, ArrowRight, X } from "lucide-react";

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
    <section className="py-12 sm:py-20 bg-charcoal-950 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Recent <span className="text-gold-500">Projects</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              A sample of recent installation work executed in Dubai, Sharjah, and Ajman properties.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-charcoal-950 font-bold"
                  : "bg-charcoal-900 text-zinc-300 border border-white/5 hover:bg-charcoal-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Clean image display with title & category BELOW image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
              </div>

              {/* Clean Caption BELOW Image */}
              <div className="p-4 space-y-1 bg-charcoal-900 text-left">
                <span className="text-[11px] uppercase font-semibold text-gold-400 block">
                  {project.service} • {project.city}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl rounded-2xl bg-charcoal-900 p-6 overflow-hidden border border-gold-500/40 space-y-5">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-950 text-zinc-300 hover:text-white hover:bg-gold-500/20 transition-colors z-20"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-950">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <span className="text-xs uppercase font-medium text-gold-400 tracking-wider">
                    {selectedProject.service} • {selectedProject.city}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <a
                  href={getWhatsAppLink(
                    `Hi Arvo Interior, I saw project "${selectedProject.title}" in ${selectedProject.city} and would like an installation quote.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-whatsapp text-white font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request Similar Quote</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
