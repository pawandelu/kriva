"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import { Lotion_Data, TABS } from "@/utils/helper";

const Essentials = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="px-4">
      <div className="max-w-285 mx-auto flex justify-center flex-col items-center">
        <div className="text-center max-w-190.75">
          <Heading vari={"sec"}>Everyday Essentials for Active Bodies </Heading>
          <Para vari={"sec"} className="mt-4">
            Simple, effective formulas that support movement, sleep, and daily
            performance.
          </Para>
        </div>

        <div className="flex w-full mt-14.5 mb-6.5">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`w-1/4 text-center cursor-pointer font-normal text-base leading-107 uppercase archivo transition-opacity duration-300 `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full bg-light-gray h-1.5 rounded-lg relative">
          <span
            className="bg-light-orange w-1/4 rounded-lg h-1.5 absolute top-0 left-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${active * 100}%)` }}
          ></span>
        </div>
        <div className="mt-10">
          {Lotion_Data.map((item, index) => (
            <div key={index} className="">

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essentials;
