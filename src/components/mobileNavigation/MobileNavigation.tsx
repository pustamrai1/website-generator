"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden ">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="cursor-pointer"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            {/* Buttons */}
            <div className="flex flex-col space-y-2   border-border">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="justify-start">
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNavigation;
