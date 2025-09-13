"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesGrid = () => {
  const arrowVariants = {
    hidden: {
      x: -20,
      y: 20,
      opacity: 0,
      rotate: 0,
      scale: 0.5,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 4,
      transition: {
        type: "spring" as const,
        damping: 6,
        stiffness: 200,
        bounce: 0.6,
        duration: 0.6,
      },
    },
    exit: {
      x: -20,
      y: 20,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    },
  };

  const ArrowIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const FeatureBox = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <motion.div
        className={`bg-[#1C1C1C] p-6 rounded-lg relative cursor-pointer transition-colors duration-200 hover:border-[#166E4E] hover:border-2 ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {children}

        {/* Animated Arrow */}
        <div className="absolute top-4 right-4">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="text-white"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ArrowIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black text-white relative">
      <div className="mx-4 md:mx-12 py-16 xl:mx-auto xl:max-w-6xl">
        <div className="my-8">
          <p className="bg-[#166E4E] p-2 px-4 text-black rounded-full inline">
            Whats the best
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mt-4">Key Features</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-md leading-6">
            We are proud to announce with the features that empower creatives
            every day.
          </p>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 pb-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -900, right: 0 }}
              dragElastic={0.2}
              whileTap={{ cursor: "grabbing" }}
            >
              {/* Feature Box 1 */}
              <div className="min-w-[280px] flex-shrink-0">
                <FeatureBox>
                  <div className="h-48 flex items-end">
                    <div>
                      <h3 className="text-xl font-medium text-gray-300">
                        Feature
                      </h3>
                      <h3 className="text-xl font-medium text-gray-300">
                        Name
                      </h3>
                    </div>
                  </div>
                </FeatureBox>
              </div>

              {/* Feature Box 2 */}
              <div className="min-w-[280px] flex-shrink-0">
                <FeatureBox>
                  <div className="h-48 flex items-end">
                    <div>
                      <h3 className="text-xl font-medium text-gray-300">
                        Feature
                      </h3>
                      <h3 className="text-xl font-medium text-gray-300">
                        Name
                      </h3>
                    </div>
                  </div>
                </FeatureBox>
              </div>

              {/* Feature Box 3 */}
              <div className="min-w-[280px] flex-shrink-0">
                <FeatureBox>
                  <div className="h-48 flex items-end">
                    <div>
                      <h3 className="text-xl font-medium text-gray-300">
                        Feature
                      </h3>
                      <h3 className="text-xl font-medium text-gray-300">
                        Name
                      </h3>
                    </div>
                  </div>
                </FeatureBox>
              </div>

              {/* Feature Box 4 */}
              <div className="min-w-[280px] flex-shrink-0">
                <FeatureBox>
                  <div className="h-48 flex items-end">
                    <div>
                      <h3 className="text-xl font-medium text-gray-300">
                        Feature
                      </h3>
                      <h3 className="text-xl font-medium text-gray-300">
                        Name
                      </h3>
                    </div>
                  </div>
                </FeatureBox>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 grid-rows-4 gap-6 max-w-7xl mx-auto h-[1000px]">
            {/* Row 1 - Col 1: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 1 - Col 2: Empty */}
            <div></div>

            {/* Row 1 - Col 3: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 2 - Col 1: Empty */}
            <div></div>

            {/* Row 2 - Col 2: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 2 - Col 3: Empty */}
            <div></div>

            {/* Row 3 - Col 1: Empty */}
            <div></div>

            {/* Row 3 - Col 2: Empty */}
            <div></div>

            {/* Row 3 - Col 3: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 4 - Col 1: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 4 - Col 2: Feature */}
            <FeatureBox>
              <div className="h-full flex items-end">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">Feature</h3>
                  <h3 className="text-xl font-medium text-gray-300">Name</h3>
                </div>
              </div>
            </FeatureBox>

            {/* Row 4 - Col 3: Empty */}
            <div></div>

            {/* Special Text - Positioned absolutely to span the empty spaces */}
            <div className="absolute left-28 2xl:left-[720px] top-3/4 -bottom-20 transform -translate-y-1/2 max-w-md">
              <p className="text-4xl leading-tight text-white">
                Creative people worldwide rely on this app to craft ideas into{" "}
                <span className="text-[#166E4E]">digital magic</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
