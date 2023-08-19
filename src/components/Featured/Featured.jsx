import React, { createContext, useContext, useEffect, useState } from "react";
import google from "../../assets/Logo/google-1-1 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { featur } from "../../App";
import SingleFeature from "../SingleFeature/SingleFeature";
import JobDetails from "../JobDetails/JobDetails";

const Featured = () => {
  const fes = useContext(featur);
  
  const [jobDetails, setJobDetails] =  useState([])

 useEffect(() => {
  const match = fes.slice(() => 0, 4)
    setJobDetails(match)
 }, [])

  const giveIdHandler = () => {
    setJobDetails(fes)
  }
  

  return (
    <div className="mt-24 mx-auto flex justify-center">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Featured Jobs</h1>
          <p className="my-6 text-gray-400">
          Discover Your Dream Career: Explore Job Openings, Company Reviews, Salaries, and More on CareerFinderNow
          </p>
        </div>
        {/*  */}
        <div className="md:grid py-2 grid-cols-2 gap-4 w-full">
          {
            jobDetails.map(fe => <SingleFeature fe={fe} key={fe.id}></SingleFeature>)
          }

        </div>
        <div className="flex justify-center">
          <a onClick={giveIdHandler} className={`${jobDetails.length >= 5 ? 'hidden' : ''} btn mt-3 border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]`}>
            See All Jobs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
