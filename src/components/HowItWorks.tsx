import { Badge } from "@/components/ui/badge";

function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full mt-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline">How It Works</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Three simple steps to your dream website
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-gray-100 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold">Choose a Template</h3>
            <p className="text-gray-600">
              Start with a professional template or begin with a blank canvas.
              Over 100 templates to choose from.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-gray-100 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold">Add Components</h3>
            <p className="text-gray-600">
              Add text, images, buttons, forms, and more. Simply drag components
              where you want them and customize.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-gray-100 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold">Publish & Share</h3>
            <p className="text-gray-600">
              Hit publish and your website goes live instantly. Share with the
              world or keep it private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
