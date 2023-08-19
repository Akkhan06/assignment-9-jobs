import React from "react";
import image1 from "../../assets/All Images/Vector-1.png";
import image2 from "../../assets/All Images/Vector.png";

const CommonHeader = ({children}) => {
  return (
    <div>
      <div className="bg-blue-50 relative h-32 md:h-96 w-full flex justify-center items-center">
        <img src={image1} className="absolute -top-16 right-0" alt="" />
        <img src={image2} className="absolute bottom-0 left-0" alt="" />
        <h1 className="text-3xl md:text-4xl font-bold">{children}</h1>
      </div>
    </div>
  );
};

export default CommonHeader;
