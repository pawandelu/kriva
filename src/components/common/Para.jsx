import React from "react";

const Para = ({ children, vari, className = "" }) => {
  const variable = {
    pri: " text-white/80 sm:text-xl text-lg",
    sec: " text-dark-gray text-lg",
  };
  return <p className={` robot font-normal leading-160 ${variable[vari]} ${className}`}>{children}</p>;
};

export default Para;
