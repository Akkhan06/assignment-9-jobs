import React, { useEffect, useState } from "react";
import Featured from "../Featured/Featured";
import CetagoryCards from "../CetagoryCards/CetagoryCards";
import { Container } from "postcss";

const Main = () => {

  const [categorys, setCategory] = useState([])
  useEffect(() => {
    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])



 
  return (
    <div className="mt-24 flex justify-center">
      <div className="md:w-[1240px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Job Category List</h1>
          <p className="my-6 text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        
        <div className="md:flex gap-4 w-11/12 mx-auto justify-center">
        {
          categorys.map(category => <CetagoryCards category={category} key={category.id}></CetagoryCards>)
        }
        </div>

         {/* ==========Featured SECTION======== */}

      <Featured></Featured>
      </div>
    </div>
  );
};

export default Main;
