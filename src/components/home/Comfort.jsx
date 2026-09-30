import React from "react";
import Icon from "@/components/common/Icon";
import { ComfortData } from "@/utils/helper";
import Heading from "../common/Heading";
import Para from "../common/Para";

const Comfort = () => {
  return (
    <div className="px-4 lg:py-35.5 md:py-22.5 sm:py-15 py-10 overflow-hidden">
      <div className="max-w-285 mx-auto flex lg:flex-row flex-col-reverse gap-10 lg:gap-8 justify-between items-center">
        <div className="lg:max-w-111.25 w-full">
          {ComfortData.map((item, index) => (
            <div key={item.id}>
              {index !== 0 && (
                <div className="h-px my-4 sm:my-5 lg:my-6.5 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)]" />
              )}

              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                <div className="bg-off-white shrink-0 lg:w-[70.93px] lg:h-[70.93px] sm:w-15 sm:h-15 w-12 h-12 rounded-full flex justify-center items-center">
                  <Icon
                    icon={item.icon}
                    className={"max-lg:h-auto max-lg:w-auto"}
                  />
                </div>
                <div className="flex flex-col w-full lg:max-w-85.5 min-w-0">
                  <h2 className="font-normal md:text-xl text-base sm:text-lg leading-120 text-black archivo">
                    {item.title}
                  </h2>
                  <p className="font-normal md:text-lg sm:text-base text-sm leading-160 text-dark-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:max-w-140 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <Heading vari={"sec"}>Comfort That Keeps You Moving</Heading>
          <Para vari={"sec"} className="mt-3 sm:mt-4">
            Kriva’s CBDA works quickly to ease soreness, release tension, and
            help your body stay steady, supported, and ready for what the day
            brings.{" "}
          </Para>
          <button className="bg-light-orange cursor-pointer group hover:bg-off-white duration-300 transition-all p-1 sm:p-1.5 rounded-[49px] flex pr-1.5 sm:pr-2 items-center gap-1 mt-6 sm:mt-8 lg:mt-10.5 max-w-full">
            <span className="bg-white group-hover:bg-light-orange group-hover:text-white py-2 sm:py-2.75 px-3 sm:px-4 font-normal text-xs sm:text-base uppercase leading-100 rounded-[31px] archivo text-light-orange transition-all duration-300">
              Find out why it works
            </span>

            <Icon
              icon="rightarrow"
              className="text-white group-hover:text-light-orange transition-colors duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
