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
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X, PhoneIncoming } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky  top-0 z-50 bg-white border-b-[0.2rem] border-yellow-500 ">
      <div className="flex items-center justify-between pl-[2rem] md:pl-[5rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative h-[4rem] w-[4rem] ">
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

        {/* Navigation Links for md and larger screens */}
        <div className="hidden lg:flex items-center gap-[3rem]">
          {/* Home */}
          <Link
            href="#home"
            className="hover:text-[#FFC432] text-[1.2rem] font-medium "
          >
            Home
          </Link>

          {/* Services (NavigationMenu from shadcn) */}
          <NavigationMenu gap="mt-7">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-[1.2rem]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 h-[20rem] w-[30rem]">
                    <Link
                      href="#detailing"
                      className="hover:text-[#FFC432] text-[1.2rem] font-medium "
                    >
                      Detailing
                    </Link>
                    <Link
                      href="#ceramic"
                      className="hover:text-[#FFC432] text-[1.2rem] font-medium "
                    >
                      Ceramic Coating
                    </Link>
                    <Link
                      href="#wash"
                      className="hover:text-[#FFC432] text-[1.2rem] font-medium "
                    >
                      Premium Car Wash
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* About */}
          <Link
            href="#about"
            className="hover:text-[#FFC432] text-[1.2rem] font-medium "
          >
            About
          </Link>

          {/* Reviews */}
          <Link
            href="#reviews"
            className="hover:text-[#FFC432] text-[1.2rem] font-medium "
          >
            Reviews
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-6">
            <Button className="border-[0.1rem] border-[#FFC432] bg-white text-black h-[3rem] w-[10rem] text-[1.2rem] cursor-pointer hover:bg-[#FFC432] hover:text-black transition-colors duration-300 ease-in-out">
              Book Now
            </Button>

            <Button
              variant="ghost"
              className="bg-[#FFC432] hover:bg-[#FFD84D] text-[#002147] h-[3rem] w-[12rem] text-[1.2rem] font-bold rounded-lg cursor-pointer animate-glow-pulse flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneIncoming className="h-5 w-5" />
              CALL US
            </Button>
          </div>
        </div>

        {/* Hamburger + Sheet */}
        <div className="block lg:hidden">
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
              className="w-[16rem] bg-white shadow-lg border-r lg:hidden"
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
      </div>
    </header>
  );
};
