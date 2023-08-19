import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import CommonHeader from "../CommonHeader/CommonHeader";
import { useLoaderData, useParams } from "react-router-dom";
import { setData } from "../Utilise/Utilitis";

const JobDetails = () => {
  const reciveId = useParams();


  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("/feature.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.find((single) => single.id == reciveId.id);
        setDetails(newData);
      });
  }, []);

  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    onsite,
  } = details;

  return (
    <div className="">
      <CommonHeader>Job Details</CommonHeader>

      <div className="mt-24 md:w-[1140px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="text-gray-400 mt-3">
              <span className="font-bold text-black">Job Description :</span>{" "}
              {job_description}
            </p>

            <p className="text-gray-400 mt-3">
              <span className="font-bold text-black">Job Responsibility :</span>{" "}
              {job_responsibility}
            </p>

            <p className="text-gray-400 mt-5 ">
              <span className="font-bold text-black">
                Educational Requirements
              </span>
            </p>
            <p className="mt-4 text-gray-400">{educational_requirements}</p>

            <p className="text-gray-400 mt-5 ">
              <span className="font-bold text-black">Experiences</span>
            </p>

            <p className="mt-4 text-gray-400">{experiences}</p>
          </div>
          <div className="">
            <div className="bg-blue-50 py-4 pl-4 rounded-lg">
              <h1 className="text-2xl border-b-2 border-gray-300 pb-3 font-bold">
                Job Details
              </h1>

              <p className="my-2 text-blue-400">
                {" "}
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary :
                </span>{" "}
                {salary}
              </p>

              <p className="mb-2 text-blue-400">
                {" "}
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faCalendarDays} /> Job Title :
                </span>{" "}
                {job_title}
              </p>

              <h1 className="text-2xl border-b-2 border-gray-300 pb-3 font-bold">
                Contact Information
              </h1>
              <p className="my-2 text-blue-400">
                <span className="font-semibold">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> Phone :
                </span>{" "}
                {contact_information ? contact_information.phone : "00 96 23"}{" "}
              </p>
              <p className="my-2 text-blue-400">
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faEnvelope} /> Email :
                </span>{" "}
                {contact_information
                  ? contact_information.email
                  : "anywhaye@gmail.com"}{" "}
              </p>

              <p className="text-gray-500">
                {" "}
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faLocationDot} /> Address :
                </span>{" "}
                {location}
              </p>
            </div>
            <a onClick={() => setData(id)} className="btn w-full my-4 border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
