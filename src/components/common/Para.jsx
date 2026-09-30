import React from "react";

const Para = ({ children, vari, className = "" }) => {
  const variable = {
    pri: " text-white/80 md:text-xl sm::text-lg text-base",
    sec: " text-dark-gray md:text-lg text-base",
  };
  return <p className={` robot font-normal leading-160 ${variable[vari]} ${className}`}>{children}</p>;
};

export default Para;
