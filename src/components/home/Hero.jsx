import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Button from "../common/Button";
import Icon from "../common/Icon";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-navy-blue px-4 pt-2.5 overflow-hidden xl:h-182.5">
      <div className="max-w-360 mx-auto ">
        <div className="max-w-7xl  ml-auto flex xl:flex-row max-xl:pt-15 max-sm:pt-7.5 flex-col space-y-5 items-center justify-between ">
          <div className="max-w-168.25 w-full ">
            <Heading vari={"pri"}>
              Move better, sleep better, recover better. Naturally.
            </Heading>
            <div className="max-w-131.25 w-full sm:mt-4 mt-2">
              <Para vari={"pri"}>
                Clean, fast-acting CBDA that helps your body feel its best, day
                and night.
              </Para>
            </div>
            <div className="flex gap-4.5 lg:mt-12 md:mt-10 sm:mt-8 mt-5  ">
              <Button
                vari={"pri"}
                className="max-w-max flex-nowrap whitespace-nowrap"
              >
                Shop Recovery
              </Button>
              <Button vari={"sec"} className="max-w-max whitespace-nowrap">
                How it Works
              </Button>
            </div>

            <div className="flex xl:gap-5 gap-3 xl:mt-13 md:mt-10 sm:mt-8 mt-7 flex-wrap">
              <div className="flex  gap-2.5 items-center">
                <Icon icon={"check"}></Icon>
                <p className="font-normal md:text-custom-28 md:text-2xl sm:text-xl text-lg  leading-160 text-white italic robot">
                  Lab Tested
                </p>
              </div>
              <div className="flex  gap-2.5 items-center">
                <Icon icon={"check"}></Icon>
                <p className="font-normal md:text-custom-28 md:text-2xl sm:text-xl text-lg  leading-160 text-white italic robot">
                  Fast-Acting
                </p>
              </div>
              <div className="flex  gap-2.5 items-center">
                <Icon icon={"check"}></Icon>
                <p className="font-normal md:text-custom-28 md:text-2xl sm:text-xl text-lg  leading-160 text-white italic robot">
                  Athlete Trusted
                </p>
              </div>
            </div>
          </div>
          <Image
            src={"/assets/images/webp/Athlete-hero.webp"}
            width={600}
            height={744}
            alt="Running athlete"
            className="max-w-150 max-xl:w-full max-xl:h-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
