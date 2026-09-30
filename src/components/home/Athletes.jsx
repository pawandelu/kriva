"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Heading from "../common/Heading";
import Para from "../common/Para";
import { ATHLETES } from "@/utils/helper";
import Image from "next/image";
import Icon from "../common/Icon";

const Athletes = () => {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  return (
    <section className="sm:py-15 py-10 md:py-20 xl:pt-38.5 overflow-x-hidden">
      {/* heading row */}
      <div className="max-w-285 mx-auto px-4 xl:px-0 max-md:text-center flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Heading vari={"sec"} className="xl:max-w-[51%]">
          Trusted by Everyday Athletes
        </Heading>
        <Para vari={"sec"} className="md:max-w-94.5">
          From the gym to the trail to the weekend tournament, people everywhere
          are discovering recovery that actually works.
        </Para>
      </div>  

      {/* slider */}
      <div className="max-w-285 mx-auto px-4 xl:px-0 mt-8 md:mt-11.5">
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.activeIndex)}
          slidesPerView="auto"
          spaceBetween={16}
          breakpoints={{ 768: { spaceBetween: 24 } }}
          className="overflow-visible!" // next card ka bahar wala hissa dikhane ke liye
        >
          {ATHLETES.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-[88%]! sm:w-120! lg:w-139.5! h-auto! py-1"
            >
              <div className="h-full shadow-[0px_0px_4px_0px_#0000001F] bg-white rounded-2xl flex overflow-hidden">
                {/* left content */}
                <div className="flex-1 min-w-0 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={item.image}
                        width={67}  
                        height={67}
                        alt={item.heading}
                        className="w-12 h-12 sm:w-16.75 sm:h-16.75 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-normal text-base sm:text-xl leading-120 text-black archivo">
                          {item.heading}
                        </h4>
                        <p className="font-normal text-sm sm:text-lg leading-160 text-dark-gray">
                          {item.para}
                        </p>
                      </div>
                    </div>

                    <Icon
                      icon={"stars"}
                      className={"w-32 h-5 sm:w-44.75 sm:h-6.75 mt-4 sm:mt-5"}
                    />
                    <p className="font-normal lg:text-lg md:text-base sm:text-sm text-[12px] md:my-3.5 my-2  leading-160  text-dark-gray">{item.content}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-3.5 border-t border-dark-gray">
                    <div className="w-14 h-14 sm:w-19 sm:h-19 shrink-0 rounded-sm bg-off-white flex justify-center items-center">
                      <Image
                        src={item.image2}
                        width={item.width}
                        height={item.height}
                        alt={item.heading2}
                        className="max-w-full h-auto"
                      />
                    </div>
                    <h3 className="font-normal text-sm sm:text-lg leading-120 text-black uppercase archivo">
                      {item.heading2}
                    </h3>
                  </div>
                </div>

                {/* right product image */}
                <div className="relative w-[36%] sm:w-46.25 shrink-0">
                  <Image
                    src={item.image3}
                    alt={item.heading2}
                    fill
                    sizes="(max-width: 640px) 36vw, 185px"
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* pagination dashes */}
        <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
          {ATHLETES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiper?.slideTo(i)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                active === i ? "md:w-38.5 w-25 bg-light-orange" : "md:w-19.5 w-15 bg-[#DCDCDC]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Athletes;
