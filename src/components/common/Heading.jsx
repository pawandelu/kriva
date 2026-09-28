import React from "react";

const Heading = ({ children, vari, className = "" }) => {
  const variable = {
    pri: "text-white lg:text-custom-64 md:text-5xl text-4xl",
    sec: " text-black text-5xl",
  };
  return (
    <h2
      className={` archivo uppercase text text  font-normal leading-120  ${variable[vari]} ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
