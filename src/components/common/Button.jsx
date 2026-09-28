import React from "react";

const Button = ({ children, vari, className = "" }) => {
  const variable = {
    pri:"text-white bg-light-orange ",
    sec:" bg-transparent text-white border border-white",
    dan:" bg-transparent text-black border border-black",
  };
  return (
    <h2
      className={` archivo font-normal cursor-pointer uppercase md:text-base text-sm leading-107 md:py-3.75 py-3 px-4 md:px-5 rounded-[31px] ${variable[vari]} ${className}`}
    >
      {children}
    </h2>
  );
};

export default Button;