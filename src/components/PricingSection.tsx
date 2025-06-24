import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

function PricingSection() {
  return (
    <section id="pricing" className="mt-10 w-full bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose the perfect plan for you
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start free and scale as you grow. All plans include our core
              website building features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {/* Free Plan */}
          <Card className="relative border-gray-300 bg-gray-100 shadow-md hover:shadow-lg">
            <CardHeader className="">
              <CardTitle className="text-2xl text-center">BASIC</CardTitle>
              <CardDescription className="text-gray-600">
                Perfect for personal projects and getting started
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">NPR 1000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full border-gray-400 hover:bg-gray-200"
              >
                Get Started Free
              </Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />1 website
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Basic components library
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  WebCraft subdomain
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Mobile responsive
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  SSL certificate
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Community support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-gray-300 bg-gray-100 shadow-md hover:shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-gray-900 text-gray-100">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-center">PREMIUM</CardTitle>
              <CardDescription className="text-gray-600">
                Best for professionals and growing businesses
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">NPR 5000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full border-gray-400 hover:bg-gray-200"
              >
                Start Pro Trial
              </Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  10 websites
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Premium components library
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Custom domain
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Advanced animations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  E-commerce integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Analytics dashboard
                </li>
                {/* <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Remove WebCraft branding
                </li> */}
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-gray-300 bg-gray-100 shadow-md hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">ENTERPRISE</CardTitle>
              <CardDescription className="text-gray-600">
                For teams and large scale organizations
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">NPR 10000</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full border-gray-400 hover:bg-gray-200"
                variant="outline"
              >
                Contact Sales
              </Button>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Unlimited websites
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Full components library
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  White-label solution
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Advanced integrations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Custom components
                </li>
                {/* <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Dedicated support
                </li> */}
                {/* <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  SLA guarantee
                </li> */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
