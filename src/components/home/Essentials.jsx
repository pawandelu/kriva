"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import { TABS, PRODUCTS, TAB_INFO } from "@/utils/helper";
import Image from "next/image";
import Icon from "../common/Icon";

const Essentials = () => {
  // index ki jagah ab id store hoti hai
  const [activeId, setActiveId] = useState(TABS[0].id);

  // progress bar ke liye index chahiye
  const activeIndex = TABS.findIndex((tab) => tab.id === activeId);

  // id se filter
  const products = PRODUCTS.filter((item) => item.tabId === activeId);
  const { heroImage, features } = TAB_INFO[activeId];
  const activeLabel = TABS[activeIndex].label;

  return (
    <div className="px-4 max-lg:py-20 max-md:py-15 max-sm:py-10">
      <div className="max-w-285 mx-auto flex justify-center flex-col items-center">
        <div className="text-center max-w-190.75">
          <Heading vari={"sec"}>Everyday Essentials for Active Bodies </Heading>
          <Para vari={"sec"} className="md:mt-4 mt-2">
            Simple, effective formulas that support movement, sleep, and daily
            performance.
          </Para>
        </div>

        {/* Tabs */}
        <div className="flex w-full lg:mt-14.5 md:mt-10 sm:mt-8 mt-6 mb-6.5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`w-1/4 text-center cursor-pointer font-normal text-base leading-107 uppercase archivo transition-opacity duration-300  `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-light-gray h-1.5 rounded-lg relative">
          <span
            className="bg-light-orange w-1/4 rounded-lg h-1.5 absolute top-0 left-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          ></span>
        </div>

        {/* Content */}
        <div
          key={activeId}
          className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3.75 w-full"
        >
          {/* Featured card */}
          <div className="rounded-2xl bg-[linear-gradient(151.73deg,#F8F3EA_14.11%,#FFFFFF_121.37%)]">
            <div className="mt-6 mx-6 w-56.25">
              <h2 className="font-normal uppercase text-custom-31 text-black leading-110 archivo">
                {activeLabel}
              </h2>
              <div className="flex flex-col gap-3 mt-6.75">
                {features.map((feature, i) => (
                  <p
                    key={i}
                    className="font-semibold text-lg leading-120 text-black robot"
                  >
                    ✓ {feature}
                  </p>
                ))}
              </div>
            </div>
            <Image
              src={heroImage}
              alt={activeLabel}
              width={273}
              height={282}
              className="mt-9.75 max-lg:w-full"
            />
          </div>

          {/* Products (key ab item.id hai) */}
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2.5 rounded-2xl shadow-[0_0_50px_0_#00000014]"
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={254}
                height={251}
                className="max-lg:w-full"
              />
              <div className="flex flex-col justify-between">
              <div className="max-w-62.5">
                <p className="font-normal text-lg leading-160 text-dark-gray mt-3 flex flex-row items-center gap-2 robot">
                  {item.number}
                  <span>
                    <Icon icon={"stars"} />
                  </span>
                </p>
                <h2 className="uppercase mt-3.5 robot font-semibold text-xl leading-120 text-black">
                  {item.heading}
                </h2>
                <p className="font-normal text-lg leading-160 text-dark-gray">
                  {item.para}
                </p>
              </div>
              <div className="flex justify-between items-center mt-12.75">
                <div className="flex items-center">
                  <p className="font-normal text-base leading-120 text-dark-gray archivo line-through decoration-1">
                    {item.amount}
                  </p>
                  <p className="font-normal text-xl leading-120 text-black archivo">
                    {item.less}
                  </p>
                </div>
                <div className="bg-light-orange w-10.75 h-10.75 rounded-[23px] flex justify-center items-center">
                  <Icon icon={"plus"} />
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essentials;
