"use client";

import Star from "../../public/Star";

const Header = () => {
  return (
    <div>
      <div className="marquee bg-[#166E4E] overflow-hidden whitespace-nowrap p-4 text-lg">
        <div className="marquee-content inline-block animate-marquee">
          <div className="flex gap-8 items-center">
            <div className="flex gap-2 items-center">
              <Star />
              <span>Get one year FREE</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Only for limited users</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Join the launch event</span>
            </div>
            {/* Duplicate content for seamless loop */}
            <div className="flex gap-2 items-center">
              <Star />
              <span>Get one year FREE</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Only for limited users</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Join the launch event</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Get one year FREE</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Only for limited users</span>
            </div>
            <div className="flex gap-2 items-center">
              <Star />
              <span>Join the launch event</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
