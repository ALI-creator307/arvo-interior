import React from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGalleryPreview from "@/components/ProjectGalleryPreview";
import CitiesServed from "@/components/CitiesServed";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectGalleryPreview />
      <CitiesServed />
      <CTASection />
    </div>
  );
}
