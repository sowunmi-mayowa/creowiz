"use client"; // Add this if using Next.js 13+ with app router

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import heroImg from "../../public/hero-img.png";
import heroImgMobile from "../../public/hero-mobile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero w-full">
      <Navbar />
      <div className="relative mx-4 md:mx-12 py-8 xl:mx-auto xl:max-w-6xl">
        <div className="hidden md:block">
          <div className="h-full flex justify-center items-center">
            {/* "Note Taking" - slides in from left */}
            <motion.h1
              className="text-3xl lg:text-5xl xl:text-6xl absolute top-32 left-12 xl:left-32"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              Note Taking
            </motion.h1>

            {/* "Redefined" - slides in from right */}
            <motion.h1
              className="text-3xl lg:text-5xl xl:text-6xl absolute bottom-56 right-18 xl:right-28 text-[#166E4E]"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              Redefined
            </motion.h1>

            {/* Hero image - optional fade in animation */}
            <motion.div
              className="flex justify-center items-center w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.6,
              }}
            >
              <Image src={heroImg} alt="hero" width={800} height={800} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full">
        <h1 className="text-5xl pl-4">
          Note Taking <br /> <span className="text-[#166E4E]">Redefined</span>
        </h1>
        <Image src={heroImgMobile} alt="hero" className="mt-8" />
      </div>
    </div>
  );
};

export default Hero;
