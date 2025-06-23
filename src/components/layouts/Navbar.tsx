import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNavigation from "./MobileNavigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed z-10 left-5 right-5 md:left-20 md:right-20">
      <div className="container w-full   px-1">
        <div className="flex h-16 w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">YourLogo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#how-it-works"
            >
              How it Works
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#pricing"
            >
              Pricing
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {/* clerk */}
            <SignedOut>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Register
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile menu navigation */}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
}
