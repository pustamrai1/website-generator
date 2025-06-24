import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* hero section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
}
