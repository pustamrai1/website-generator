import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* hero section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />
    </div>
  );
}
