import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t">
      <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} web generator. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
