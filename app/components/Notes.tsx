"use client"; // Add this if using Next.js 13+ with app router

import React from "react";
import { motion } from "framer-motion";
import { NotesIcon } from "../../public/Notes";

const Notes = () => {
  return (
    <motion.div
      className="bg-black/90 text-white h-[80vh] md:h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of component is visible
    >
      <div className="h-full flex justify-center items-center flex-col">
        {/* Top text - slides from left to right */}
        <motion.p
          className="text-2xl lg:text-6xl max-w-xs md:max-w-xl text-center"
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8, // After icon animation
              },
            },
          }}
        >
          An extraordinary note for{" "}
          <span className="text-[#166E4E]">makers, creators..</span>
        </motion.p>

        {/* Notes Icon - drops down and bounces */}
        <motion.div
          className="my-8"
          variants={{
            hidden: { y: -200, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                bounce: 0.4,
                delay: 0.6,
              },
            },
          }}
        >
          <NotesIcon />
        </motion.div>

        {/* Bottom text - slides from right to left */}
        <motion.p
          className="text-xl max-w-xs md:max-w-sm text-center"
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 1.2, // After top text
              },
            },
          }}
        >
          Creators around the planet use this app for creating{" "}
          <span className="text-[#166E4E]">magic</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Notes;
