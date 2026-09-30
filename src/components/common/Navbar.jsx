"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { products } from "@/utils/helper";

const currentLanguage = "English";

const languages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Arabic",
  "Chinese",
];

const LanguageDropdown = ({ openUp = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      const outside =
        e.type === "mousedown" && !ref.current?.contains(e.target);
      if (outside || e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="pt-[12.5px] pr-1 pb-[11.5px] pl-2.75 bg-off-white rounded-[63px] cursor-pointer"
      >
        <span className="font-normal text-base leading-100 robot flex items-center gap-0.5">
          {currentLanguage}
          <span
            className={`inline-flex transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <Icon icon={"downarrow"}></Icon>
          </span>
        </span>
      </button>

      <ul
        role="listbox"
        className={`absolute right-0 z-50 min-w-36 rounded-2xl bg-white shadow-lg border border-dark-gray/10 py-2 transition-all duration-300 ease-in-out ${
          openUp ? "bottom-full mb-2" : "top-full mt-2"
        } ${
          open
            ? "opacity-100 visible translate-y-0"
            : `opacity-0 invisible ${openUp ? "translate-y-2" : "-translate-y-2"}`
        }`}
      >
        {languages.map((lang) => (
          <li key={lang} role="option">
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="w-full text-left px-5 py-2.5 text-sm hover:bg-off-white hover:text-light-orange duration-300 transition-all cursor-pointer"
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const productsRef = useRef(null);

  const menuOpen = active === "menu";
  const searchOpen = active === "search";

  useEffect(() => {
    const close = (e) => {
      const outside =
        e.type === "mousedown" && !productsRef.current?.contains(e.target);
      if (outside || e.key === "Escape") setDesktopProductsOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-full bg-yellow-150 py-2 px-4 text-center xl:py-3 xl:px-0">
        <p className="font-medium text-sm leading-160 tracking-[5%] italic text-black md:text-base xl:text-lg">
          Limited-Time Offer: Free Shipping in the USA | Shop Now
        </p>
      </div>

      <div className="bg-white w-full">
        <div className="max-w-312 mx-auto flex flex-row justify-between items-center px-4 pt-3.75 pb-3.5 xl:px-0">
          <div className="flex flex-row gap-4 items-center">
            <a href="#" className="shrink-0">
              <Image
                src={"/assets/images/webp/blue-kriva.webp"}
                width={135}
                height={27}
                alt="Kriva"
                priority
                className="max-lg:w-27.5 h-auto "
              />
            </a>

            <ul className="hidden xl:flex items-center gap-6 text-base font-normal leading-160 text-blue-150">
              <li ref={productsRef} className="relative">
                <button
                  type="button"
                  onClick={() => setDesktopProductsOpen((prev) => !prev)}
                  aria-expanded={desktopProductsOpen}
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 hover:text-light-orange duration-500 transition-all cursor-pointer"
                >
                  Products
                  <span
                    className={`inline-flex transition-transform duration-300 ease-in-out ${
                      desktopProductsOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <Icon icon={"chevron"}></Icon>
                  </span>
                </button>

                <div
                  className={`absolute left-0 top-full z-50 mt-3 min-w-48 rounded-2xl bg-white shadow-lg border border-dark-gray/10 transition-all duration-300 ease-in-out ${
                    desktopProductsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <ul className="flex flex-col py-2">
                    {products.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          tabIndex={desktopProductsOpen ? 0 : -1}
                          onClick={() => setDesktopProductsOpen(false)}
                          className="block px-5 py-2.5 text-sm hover:bg-off-white hover:text-light-orange duration-300 transition-all"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="hover:text-light-orange duration-500 transition-all cursor-pointer">
                Education
              </li>
              <li className="hover:text-light-orange duration-500 transition-all cursor-pointer">
                About
              </li>
            </ul>
          </div>

          <div className="hidden xl:flex flex-row items-center gap-8.5">
            <div className="w-85.75 shrink-0 flex items-center border rounded-[29px] border-dark-gray/50 py-2.25 pl-4.5 pr-2.5">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full min-w-0 outline-none font-normal text-base leading-160 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
              />
              <Icon icon={"search"}></Icon>
            </div>

            <div className="flex flex-row items-center gap-3.5">
              <button className="bg-light-orange cursor-pointer group hover:bg-off-white hover:shadow-[0px_0px_4px_0px_#0000001F] duration-300 transition-all p-1.5 rounded-[49px] flex pr-2 items-center gap-1">
                <span className="bg-white group-hover:bg-light-orange group-hover:text-white whitespace-nowrap py-2.75 px-4 font-normal text-base uppercase leading-100 rounded-[31px] archivo text-light-orange duration-300 transition-all">
                  Contact Us
                </span>

                <span className="text-white group-hover:text-light-orange transition-colors duration-300">
                  <Icon
                    icon="rightarrow"
                    className={
                      "text-white group-hover:text-light-orange transition-colors duration-300"
                    }
                  />
                </span>
              </button>

              <div className="bg-off-white w-10.25 hover:scale-110 cursor-pointer duration-300 transition-all  scroll-smooth h-10.25 rounded-[63px] flex justify-center items-center">
                <Icon icon={"store"} className={"group-hover:scale-110"}></Icon>
              </div>

              <LanguageDropdown />
            </div>
          </div>

          <div className="flex items-center gap-2.5 xl:hidden">
            <button
              type="button"
              onClick={() => setActive(searchOpen ? null : "search")}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="bg-off-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Icon icon={"search"}></Icon>
            </button>

            <div className="bg-off-white w-10 h-10 rounded-full flex justify-center items-center">
              <Icon icon={"store"}></Icon>
            </div>

            <button
              type="button"
              onClick={() => setActive(menuOpen ? null : "menu")}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="bg-off-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <span className="relative block w-4.5 h-3.5">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`xl:hidden grid transition-all duration-300 ease-in-out ${
            searchOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pb-4">
              <div className="w-full flex border rounded-[29px] border-dark-gray/50 py-2.25 pl-4.5 pr-2.5">
                <input
                  type="search"
                  placeholder="Search for products..."
                  tabIndex={searchOpen ? 0 : -1}
                  className="w-full outline-none font-normal text-base leading-160"
                />
                <Icon icon={"search"}></Icon>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`xl:hidden grid transition-all duration-300 ease-in-out ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-dark-gray/10 px-4 pb-5">
              <ul className="flex flex-col text-base font-normal leading-160 text-blue-150">
                <li className="border-b border-dark-gray/10">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    aria-expanded={productsOpen}
                    tabIndex={menuOpen ? 0 : -1}
                    className="w-full flex items-center justify-between py-3 cursor-pointer"
                  >
                    <span>Products</span>
                    <span
                      className={`inline-flex transition-transform duration-300 ease-in-out ${
                        productsOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <Icon icon={"chevron"}></Icon>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      productsOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="pl-4 pb-3 flex flex-col gap-2 text-sm">
                        {products.map((item) => (
                          <li key={item.name}>
                            <a href={item.href}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="py-3 border-b border-dark-gray/10">Education</li>
                <li className="py-3 border-b border-dark-gray/10">About</li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  tabIndex={menuOpen ? 0 : -1}
                  className="bg-light-orange cursor-pointer duration-300 transition-all p-1.5 rounded-[49px] flex pr-2 items-center gap-1"
                >
                  <span className="bg-white whitespace-nowrap py-2.75 px-4 font-normal text-base uppercase leading-100 rounded-[31px] archivo text-light-orange">
                    Contact Us
                  </span>
                  <Icon icon={"rightarrow"}></Icon>
                </button>
                <LanguageDropdown openUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
