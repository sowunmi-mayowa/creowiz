"use client";

import { Logo } from "@/public/Logo";
import { Shop } from "@/public/Shop";
import React, { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import LogoMobile from "@/public/Logo-mobile.png";
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the Header component height (assuming it exists)
      const header =
        document.querySelector(".header") ||
        document.querySelector('[data-component="header"]');

      if (header) {
        const headerHeight = (header as HTMLElement).offsetHeight;
        setIsSticky(window.scrollY > headerHeight);
      } else {
        // Fallback: use a pixel value if header not found
        setIsSticky(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out z-50 ${
        isSticky
          ? "fixed top-0 left-0 right-0 backdrop-blur-md bg-black/80 border-b border-white/10"
          : "relative bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-4 md:mx-12 py-8 xl:mx-auto xl:max-w-6xl">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <Image src={LogoMobile} alt="logo" width={120} />
        <div className="hidden lg:block">
          <ul>
            <li className="inline-block px-8 text-lg">About</li>
            <li className="inline-block px-8 text-lg">Features</li>
            <li className="inline-block px-8 text-lg">FAQs</li>
            <li className="inline-block px-8 text-lg">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white text-black flex items-center overflow-hidden rounded-full p-0.5 relative group cursor-pointer">
            <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-black rounded-full w-8 md:w-12 group-hover:w-[calc(100%-4px)] transition-all duration-300 ease-in-out"></div>
            <div className="relative z-10 rounded-full w-8 h-8 md:h-12 md:w-12 flex justify-center items-center">
              <Shop className="w-6 h-6 md:w-8 md:h-8 text-[#166E4E]" />
            </div>
            <span className="pl-2 pr-4 relative z-10 group-hover:text-white transition-colors duration-300 font-bold text-xs md:text-lg">
              Try Now
            </span>
          </div>
          <RiMenu2Fill className="md:hidden w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
