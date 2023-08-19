import google from "../../assets/All Images/netflix-4 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import React from 'react';

const SingleAplied = ({job}) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, onsite} = job
    return (
        <div>
            <div className="md:flex mt-3 pt-2 md:pt-0 text-start gap-3 items-center px-2 justify-center border-2 border-gray-400 mx-auto rounded-lg">
          <div className="bg-blue-50 w-1/2 h-1/2 px-3 rounded-lg py-12">
            <img src={company_logo} className="" alt="" />
          </div>

          <div className="md:flex py-3 md:py-0 justify-between w-full">
            <div className="">
              <h1 className="font-bold text-2xl text-[#474747]">
                {job_title}
              </h1>
              <h1 className="text-gray-400">{company_name}</h1>

              <div className="btn w-auto justify-start border-2 border-[#E8E8E8] bg-transparent text-blue-400">
                {remote_or_onsite}
              </div>

              <div className="btn ml-2 w-auto justify-start border-2 border-[#E8E8E8] bg-transparent text-blue-400">
                {fulltime_or_parttime}
              </div>

              <div className="md:flex m-2 gap-4 text-gray-500">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} /> {location}
                </p>

                <p>
                  {" "}
                  <FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}
                </p>
              </div>
            </div>
            <button>
              <Link to={`/details/${id}`} className="btn mt-3 border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                View Details
              </Link>
            </button>
          </div>
        </div>
        </div>
    );
};

export default SingleAplied;