import React from "react";

const Button = ({ children, vari, className = "" }) => {
  const variable = {
    pri:"text-white bg-light-orange border-transparent hover:bg-white hover:text-light-orange ",
    sec:" bg-transparent text-white border border-white hover:text-light-orange hover:bg-white",
    dan:"bg-transparent text-black border border-black hover:bg-black hover:text-white",
  };
  return (
    <button
      className={` archivo font-normal border  cursor-pointer duration-300 transition-all uppercase md:text-base text-sm leading-100 md:py-3.75 sm:py-3 py-2.5 px-4 md:px-5 rounded-[31px] ${variable[vari]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;