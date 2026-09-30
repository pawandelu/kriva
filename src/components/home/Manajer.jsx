"use client";

import { RIGHT_MAGNER } from "@/utils/helper";
import React, { useState, useEffect, useRef } from "react";
import Heading from "../common/Heading";
import Image from "next/image";
import Icon from "../common/Icon";

const PopupModal = ({ item, onClose }) => {
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-335 max-h-[90vh] overflow-y-auto p-6 relative"
      >
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="lg:max-w-83.5">
            <h3 className="text-2xl font-semibold text-off-black mb-4 leading-[140%]">
              {item.heading}
            </h3>
            <ul className="">
              {item.popup.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-150 text-lg leading-160"
                >
                  <span className="mt-2.75 shrink-0 w-1.25 h-1.25 rounded-full bg-gray-150" />
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              className="flex items-center max-w-max gap-1 group hover:translate-x-0.5 duration-300 transition-all  text-xl font-medium leading-100 mt-6"
              href=""
            >
              Learn More{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-300 ">
               <Icon icon={"righticon"}></Icon>
              </span>
            </a>
          </div>
          <div className="">
            {(() => {
              const imgObj = item.popup.images.find((x) => x.src);
              const specItems = item.popup.images.filter((x) => x.title);
              if (imgObj && specItems.length > 0) {
                // Flex layout: image left, specs right
                return (
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <Image
                      src={imgObj.src}
                      alt={imgObj.label || ""}
                      className="w-full sm:max-w-60 rounded-lg object-cover bg-[#f5f5f5] p-4"
                    />
                    <div className="flex flex-col gap-5">
                      {specItems.map((spec, i) => (
                        <div key={i}>
                          <p className="text-base font-semibold text-off-black leading-160 mb-2">
                            {spec.title}
                          </p>
                          <div className="flex flex-col gap-2">
                            {spec.about.map((point, j) => (
                              <p
                                key={j}
                                className="text-sm text-gray-150 leading-160"
                              >
                                {point}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              // Default grid layout
              return (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {item.popup.images.map((imgItem, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 w-full"
                    >
                      <p className="text-base text-center text-off-black font-medium leading-160">
                        {imgItem.label}
                      </p>
                      <img
                        src={imgItem.src}
                        alt={imgItem.label}
                        className="w-full max-sm:max-w-90 md:max-w-68.75 rounded-lg object-cover"
                      />
                      {imgItem.about && imgItem.about.length > 0 && (
                        <div className="w-full max-sm:max-w-90 md:max-w-68.75 flex flex-col gap-2 mt-2">
                          {imgItem.about.map((point, j) => (
                            <p
                              key={j}
                              className="text-sm text-gray-150 leading-160"
                            >
                              {point}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <>
      <div className="px-4  lg:pt-17.5 max-md:py-15 max-sm:py-10">
        <div className="max-w-335 mx-auto w-full flex flex-col items-center  justify-center">
          <Heading vari={"sec"} className="">
            Choose The RIght Magner
          </Heading>
          <p className="text-lg mt-4 font-normal leading-160 text-gray-150  ">
            Find the best TE solution for your motor or coil design.
          </p>

          <div className="max-sm:max-w-125 max-lg:max-w-200 max-lg:mx-auto mt-12.5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {RIGHT_MAGNER.map((items, index) => (
              <div
                key={index}
                className="border border-black/8  bg-white p-4 rounded-xl flex flex-col justify-between "
              >
                <div>
                  <Image
                    className="rounded-lg h-57 object-cover object-center w-full"
                    src={items.img}
                    alt={items.heading}
                    width={285}
                    height={228}
                  />
                  <h4 className="font-medium mt-6 text-lg leading-160 text-off-black">
                    {items.heading}
                  </h4>
                  <p className="text-gray-150 leading-158 mt-3">{items.para}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActivePopup(items)}
                    className="text-orangr-150 hover:text-orangr-150/70 group font-medium text-base duration-300 transition-all leading-132 flex items-center gap-1 max-w-max cursor-pointer"
                  >
                    {items.link}

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      <Icon icon={"right"}></Icon>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {activePopup && (
        <PopupModal item={activePopup} onClose={() => setActivePopup(null)} />
      )}
    </>
  );
};

export default Team;
