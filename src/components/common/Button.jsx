import React from "react";

const Button = ({ children, vari, className = "" }) => {
  const variable = {
    pri: "text-white bg-light-orange border-transparent",
    sec: " bg-transparent text-white border border-white ",
    dan: "bg-transparent text-black border border-black",
  };
  return (
    <button
      className={` group relative isolate overflow-hidden archivo font-normal border  cursor-pointer duration-300 transition-all uppercase md:text-base text-sm leading-100 md:py-3.75 sm:py-3 py-2.5 px-4 md:px-5 rounded-[31px] ${variable[vari]} ${className} `}
    >
      {/* PRI HOVER */}
      {vari === "pri" && (
        <span className=" pointer-events-none absolute inset-0 z-0 origin-down scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 " />
      )}
      {/* SEC HOVER */}
      {vari === "sec" && (
        <span className=" pointer-events-none absolute inset-0 z-0 origin-down scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 " />
      )}
      {/* DAN HOVER */}
      {vari === "dan" && (
        <span className=" pointer-events-none absolute inset-0 z-0 origin-down scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100 " />
      )}
      {/* CONTENT */}
      <span
        className={` relative z-10 flex items-center justify-center transition-colors duration-300 ${vari === "pri" ? "group-hover:text-light-orange" : ""} ${vari === "sec" ? "group-hover:text-light-orange" : ""} ${vari === "dan" ? "group-hover:text-white" : ""} `}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
