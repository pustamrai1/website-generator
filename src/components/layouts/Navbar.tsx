import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./MobileNavigation";


export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed z-10 left-20 right-20">
      {/* testing git branch */}
      <div className="container max-w-7xl  mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">YourLogo</span>
          </Link>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              asChild
              className="cursor-pointer hover:text-gray-800"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-gray-900 cursor-pointer">
              <Link href="/signup" className="text-gray-100">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile menu navigation */}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
}
