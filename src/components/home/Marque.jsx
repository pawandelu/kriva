import { MARQUEE } from "@/utils/helper";
import React from "react";
import Marquee from "react-fast-marquee";

const Star = ({ color }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0L21.2073 12.7927L34 17L21.2073 21.2073L17 34L12.7927 21.2073L0 17L12.7927 12.7927L17 0Z"
        fill={color}
      />
    </svg>
  );
};

const MarqueeContent = ({ className, starColor }) => {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5">
      {MARQUEE.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <p
            className={`shrink-0 whitespace-nowrap text-base font-medium leading-120 uppercase sm:text-xl ${className}`}
          >
            {item}
          </p>

          <Star color={starColor} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Marque = () => {
  return (
    <div className="relative h-73.25 overflow-hidden mb-5">
      {/* Off-white Strip */}
      <div className="absolute left-1/2 top-[40%] md:top-[45%] xl:top-[66%] z-10 w-[110%] -translate-x-1/2 -translate-y-1/2 rotate-10 sm:rotate-4 bg-off-white py-4 sm:py-5">
        <Marquee
          direction="right"
          speed={45}
          gradient={false}
          pauseOnHover={false}
          autoFill
        >
          <MarqueeContent className="text-black" starColor="#3C59A2" />
        </Marquee>
      </div>

      {/* Blue Strip */}
      <div className="absolute left-1/2 top-[50%] sm:top-[45%]  md:top-[50%] w-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-10 sm:-rotate-8 bg-[#3C59A2] py-4 sm:py-5">
        <Marquee
          direction="left"
          speed={45}
          gradient={false}
          pauseOnHover={false}
          autoFill
        >
          <MarqueeContent className="text-white" starColor="#F37421" />
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
