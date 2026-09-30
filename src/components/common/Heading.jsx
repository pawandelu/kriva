import React from "react";

const Heading = ({ children, vari, className = "" }) => {
  const variable = {
    pri: "text-white lg:text-custom-64 md:text-5xl sm:text-4xl text-3xl ",
    sec: " text-black lg:text-5xl md:text-4xl text-3xl",
  };
  return (
    <h2
      className={` archivo uppercase    font-normal leading-120  ${variable[vari]} ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
