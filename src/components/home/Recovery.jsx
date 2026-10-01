import React from "react";
import Image from "next/image";
import { Archivo_Black, Roboto } from "next/font/google";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Button from "../common/Button";

const display = Archivo_Black({ subsets: ["latin"], weight: "400" });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

const Recovery = () => {
  return (
    <div className={`${body.className} px-4`}>
      <div className="relative max-w-285 mx-auto mt-16 sm:mt-24 md:mt-29.5 md:-mb-41 -mb-40 z-20">

        <div className="bg-off-white rounded-2xl px-6 pt-10 pb-0 sm:px-10 sm:pt-12.5 md:min-h-75 md:py-12.5 md:pr-[46%]">
          <Heading vari={"sec"}>Make Recovery Your Advantage</Heading>

          <Para vari={"sec"} className="mt-4">
            Train harder. Rest better. Recover faster. Discover what your body
            can do with Kriva.
          </Para>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4.5">
            <Button vari={"pri"}>Shop Now</Button>
            <Button vari={"dan"}>Learn More</Button>
          </div>

          <div className="pointer-events-none relative mx-auto mt-8 -mb-10 w-56 sm:w-72 md:hidden">
            <Image
              src="/assets/images/webp/kriva-box.webp"
              alt="Kriva recovery"
              width={450.98}
              height={527}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute hidden md:block md:-top-10 md:right-0 md:w-[44%] lg:-top-24 lg:right-18.25 lg:h-131.75 lg:w-112.5">
          <Image
            src="/assets/images/webp/kriva-box.webp"
            alt="Kriva recovery"
            width={450.98}
            height={527}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Recovery;
