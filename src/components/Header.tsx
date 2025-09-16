// src/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-[3rem] w-[3rem]">
              <Image
                src="/mt-autoSpa.jpg"
                alt="Logo"
                fill
                sizes="(max-width: 768px) 4rem, (max-width: 1200px) 4rem, 4rem"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Hamburger + Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" aria-label="Toggle menu">
              {open ? (
                <X
                  size={25}
                  className="transition-all duration-300 ease-in-out rotate-180 opacity-100"
                />
              ) : (
                <Menu
                  size={25}
                  className="transition-all duration-300 ease-in-out rotate-0 opacity-80"
                />
              )}
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[16rem] bg-white shadow-lg border-r"
            aria-describedby={undefined}
          >
            <SheetHeader>
              {/* Hidden title & description for accessibility */}
              <VisuallyHidden>
                <SheetTitle>Main Navigation</SheetTitle>
                <SheetDescription>
                  Site menu with navigation links
                </SheetDescription>
              </VisuallyHidden>
            </SheetHeader>

            <nav className="flex flex-col gap-[1rem] py-[1.5rem] px-[1rem] text-[1.125rem]">
              <Link href="#home" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="#services" className="hover:text-blue-600">
                Services
              </Link>
              <Link href="#about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
