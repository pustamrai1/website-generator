import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles, ArrowRight, Check } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-26">
      <div className="container ">
        <div className="flex flex-col justify-between items-center space-y-4">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit">
              <Sparkles className="w-3 h-3 mr-1" />
              No Code Required
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Build Stunning Websites <br />
              within Few Minutes.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
              Create professional websites in minutes. Simply add text, add
              components, and watch your vision come to life. No coding skills
              needed.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-16">
            <Button
              size="lg"
              className="h-12 px-8 bg-blue-500 text-gray-50 font-semibold hover:bg-blue-600 cursor-pointer"
            >
              Start your free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Free forever plan
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Zero tech skills needed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
