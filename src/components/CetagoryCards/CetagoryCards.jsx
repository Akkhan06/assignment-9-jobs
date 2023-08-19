import React from "react";

const CetagoryCards = ({category}) => {
    const {category_name, jobs_available, category_logo} = category
  return (
    <div>
      <div className="cards ">
        <div className="bg-blue-50 mt-3 p-5 rounded-lg pr-20">
          <img src={category_logo} alt="" />
          <h1 className="mt-7 mb-2 text-2xl font-semibold">{category_name}</h1>
          <p className="text-gray-400">{jobs_available}+ Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CetagoryCards;
