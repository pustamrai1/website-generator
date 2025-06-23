import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Palette, Smartphone, Code, Globe } from "lucide-react";

function FeatureSection() {
  return (
    <section id="features" className="w-full  bg-muted/50">
      <div className="container ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline">Features</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything you need to build amazing websites
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powerful tools and components that make website building
              effortless and enjoyable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Zap className="h-10 w-10 text-primary" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription className="text-gray-600">
                Build websites in minutes, not hours. Our intuitive interface
                gets you from idea to live site instantly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Palette className="h-10 w-10 text-primary" />
              <CardTitle>Beautiful Components</CardTitle>
              <CardDescription className="text-gray-600">
                Choose from hundreds of pre-designed components. Headers, forms,
                galleries, and more.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Smartphone className="h-10 w-10 text-primary" />
              <CardTitle>Mobile Responsive</CardTitle>
              <CardDescription className="text-gray-600">
                Every website automatically looks perfect on desktop, tablet,
                and mobile devices.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Code className="h-10 w-10 text-primary" />
              <CardTitle>No Code Needed</CardTitle>
              <CardDescription className="text-gray-600">
                Visual editor means anyone can create professional websites
                without writing a single line of code.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Globe className="h-10 w-10 text-primary" />
              <CardTitle>Instant Publishing</CardTitle>
              <CardDescription className="text-gray-600">
                Publish your website with one click. Custom domains, SSL
                certificates, and hosting included.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-gray-300 hover:shadow-lg">
            <CardHeader>
              <Users className="h-10 w-10 text-primary" />
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription className="text-gray-600">
                Work together with your team. Real-time editing, comments, and
                version control built-in.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
