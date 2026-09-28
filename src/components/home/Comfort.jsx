import React from "react";
import Icon from "@/components/common/Icon";
import { ComfortData } from "@/utils/helper";
import Heading from "../common/Heading";
import Para from "../common/Para";

const Comfort = () => {
  return (
    <div className="px-4 lg:py-35.5 md:py-22.5 sm:py-15 py-10 ">
      <div className="max-w-285 mx-auto flex lg:flex-row flex-col space-y-10  justify-between items-center">
        <div className="max-w-111.25 w-full">
          {ComfortData.map((item, index) => (
            <div key={item.id}>
             
              {index !== 0 && (
                <div className="h-px my-6.5 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)]" />
              )}

              <div className="flex gap-3.5">
                <div className="bg-off-white w-[70.93px] h-[70.93px] rounded-[83.13px] flex justify-center items-center">
                  <Icon icon={item.icon}></Icon>
                </div>
                <div className="flex flex-col max-w-85.5">
                  <h2 className="font-normal text-xl leading-120 text-black archivo ">
                    {item.title}
                  </h2>
                  <p className="font-normal text-lg leading-160 text-dark-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-140">
          <Heading vari={"sec"}>Comfort That Keeps You Moving</Heading>
          <Para vari={"sec"} className="mt-4">
            Kriva’s CBDA works quickly to ease soreness, release tension, and
            help your body stay steady, supported, and ready for what the day
            brings.{" "}
          </Para>
          <button className="bg-light-orange cursor-pointer hover:bg-light-orange duration-300 transition-all p-1.5 rounded-[49px] flex pr-2 items-center gap-1 mt-10.5">
            <span className="bg-white py-2.75 px-4  font-normal text-base uppercase  leading-100 rounded-[31px] archivo text-light-orange ">
              Find out why it works
            </span>
            <Icon icon={"rightarrow"}></Icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
