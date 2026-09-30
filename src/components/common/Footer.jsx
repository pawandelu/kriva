import Image from "next/image";
import React from "react";
import Para from "./Para";
import Icon from "./Icon";

const footerColumns = [
  {
    title: "Quick Links",
    width: "md:w-38.75", // 155px
    items: ["Shop", "Learn", "About", "Education", "Products", "Transparency"],
  },
  {
    title: "Community Discounts",
    width: "md:w-63", // 252px
    items: ["Military", "Trainers", "Students"],
  },
  {
    title: "Legal Links",
    width: "md:w-39.25", // 157px
    items: ["Privacy Policy", "Terms & Conditions"],
  },
];

const Footer = () => {
  return (
    <div className="px-4 pb-3.5">
      <div className="max-w-353 relative mx-auto bg-navy-blue pt-56.25 rounded-3xl">
        <div className="max-w-293 px-4 mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-10">
          {/* LEFT SIDE */}
          <div className="max-w-77.75">
            <a href="#">
              <Image
                src={"/assets/images/webp/krivalogo.webp"}
                width={311}
                height={73.47}
                alt="logo"
                className="lg:max-w-77.75 md:max-w-65 max-w-50"
              ></Image>
            </a>
            <p className="font-normal md:text-xl text-base leading-145 text-white/80 md:mt-5 mt-3">
              “These statements have not been evaluated by the FDA…”
            </p>

            <h3 className="font-normal text-lg leading-120 text-white uppercase md:mt-9.5 mt-5 archivo">
              follow us
            </h3>
            <div className="flex flex-row items-center gap-4 md:mt-3 mt-2">
              <a
                href="https://www.facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 shrink-0 items-center justify-center transition duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:opacity-80 focus-visible:outline-none"
              >
                <span className="block h-6 w-6 shrink-0">
                  <Icon icon="facebook" className={"h-8.75 w-8.75 overflow-visible"} />
                </span>
              </a>

              <a
                href="https://www.instagram.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 shrink-0 items-center justify-center transition duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:opacity-80 focus-visible:outline-none"
              >
                <span className="block h-6 w-6 shrink-0">
                  <Icon icon="insta" className={"h-8.75 w-8.75 overflow-visible"} />
                </span>
              </a>

              <a
                href="https://www.youtube.com/@your-channel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 shrink-0 items-center justify-center transition duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:opacity-80 focus-visible:outline-none"
              >
                <span className="block h-6 w-6 shrink-0">
                  <Icon icon="youtube" className={"h-8.75 w-8.75 overflow-visible"} />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-wrap gap-x-10 md:gap-x-14.5 gap-y-10 ">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className={`w-[calc(50%-20px)] md:shrink-0 ${column.width}`}
              >
                <h3 className="font-normal md:text-lg text-sm leading-120 text-white uppercase archivo">
                  {column.title}
                </h3>
                <div className="md:mt-5 mt-3 flex flex-col md:gap-2 gap-1">
                  {column.items.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="relative w-fit font-normal md:text-lg text-sm leading-160 text-white/80 transition-colors duration-500 hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full focus-visible:after:w-full focus-visible:outline-none"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full text-center border-t border-transparent [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,#fff_50.48%,rgba(255,255,255,0)_100%)_1] md:mt-21 sm:mt-15 mt-10 pt-7.5 pb-7.25">
          <p className="font-normal md:text-base sm:text-sm text-xs  leading-160 text-white">
            Copyright © {new Date().getFullYear()} Kriva. All rights reserved.
            7338 26th St E, Fife WA 98424
          </p>
        </div>
        <Image
          src={"/assets/images/webp/kriva-logo.webp"}
          width={235}
          height={235}
          className=" absolute bottom-0 right-4.75 "
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
