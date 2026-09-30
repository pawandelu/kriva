"use client";

import { KRIVA_TEAM } from "@/utils/helper";
import React, { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";
import Icon from "../common/Icon";

const Athletes = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const getActiveIndex = (swiper) => {
    const slidesPerView = swiper.params.slidesPerView;

    if (slidesPerView === 3) {
      return (swiper.realIndex + 1) % KRIVA_TEAM.length;
    }

    return swiper.realIndex;
  };

  return (
    <div className="px-4">
      <div className="max-w-323 mx-auto relative max-lg:pt-17.5">
        <div className=" text-center justify-items-center ">
          <Heading vari={"sec"}>The Kriva A Team</Heading>
          <Para vari={"sec"} className="max-w-150.25 mt-4">
            Kriva A-Team Trusted by everyday athletes - From the gym to the
            trail to the tournament court, people are discovering the benefits
            of CBDA.
          </Para>
        </div>
        <div className="max-w-306 sm:px-10.5 md:px-12 xl:px-10.5 mx-auto overflow-hidden mt-10.5">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".athletes-prev",
              nextEl: ".athletes-next",
            }}
            onSwiper={(swiper) => {
              setActiveIndex(getActiveIndex(swiper));
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(getActiveIndex(swiper));
            }}
            onBreakpoint={(swiper) => {
              setActiveIndex(getActiveIndex(swiper));
            }}
            slidesPerView={3}
            spaceBetween={24}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {KRIVA_TEAM.map((items, index) => (
              <SwiperSlide key={index} className="sm:w-91! w-85!  ">
                <div className="relative  max-w-91">
                  <Image
                    className=" rounded-2xl"
                    src={items.img}
                    width={364}
                    height={386}
                    alt="athlete"
                  />

                  {activeIndex === index && (
                    <div className="flex flex-col gap-2 absolute top-2.5 right-2.5">
                      <a
                        href={items.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 md:h-10.5 md:w-10.5 bg-[#D3DF56] rounded-full shadow-[0px_0px_4px_0px_#0000001F] flex items-center justify-center"
                      >
                        <Icon icon={"twitter"}></Icon>
                      </a>

                      {/* Facebook */}
                      <a
                        href={items.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 md:h-10.5 md:w-10.5 bg-[#D3DF56] rounded-full shadow-[0px_0px_4px_0px_#0000001F] flex items-center justify-center"
                      >
                        <Icon icon={"facebook2"}></Icon>
                      </a>

                      {/* Instagram */}
                      <a
                        href={items.instagrmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 md:h-10.5 md:w-10.5 bg-[#D3DF56] rounded-full shadow-[0px_0px_4px_0px_#0000001F] flex items-center justify-center"
                      >
                        <Icon icon={"insta2"}></Icon>
                      </a>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sm:top-[65%] sm:-translate-y-1/2 sm:absolute flex items-center max-sm:mt-6 max-sm:gap-5 max-sm:justify-center sm:justify-between w-full">
          <button
            type="button"
            className="athletes-prev cursor-pointer z-10 h-9 w-9 md:h-10.5 md:w-10.5 hover:bg-yellow-150 hover:border-yellow-150 transition-all duration-200 ease-linear bg-white border border-black rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]"
          >
            <Icon icon={"leftarow"}></Icon>
          </button>

          <button
            type="button"
            className="athletes-next cursor-pointer z-10 h-9 w-9 md:h-10.5 md:w-10.5 hover:bg-yellow-150 hover:border-yellow-150 transition-all duration-200 ease-linear bg-white border border-black rounded-full flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040]"
          >
            <Icon icon={"rightarow"}></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Athletes;
