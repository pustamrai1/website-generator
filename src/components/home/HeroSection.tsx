import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            <Star className="w-3 h-3 mr-1" />
            New features available
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Build Amazing
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Digital Experiences
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning websites and applications with our powerful
            platform. Fast, secure, and designed for the modern web.
          </p>
          {/* <p>Test ci</p> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
