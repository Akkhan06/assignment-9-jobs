import React from 'react';
import google from "../../assets/Logo/google-1-1 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

const SingleFeature = ({fe, giveIdHandler}) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, onsite} = fe



    return (
        <div>
             <div className="py-3 px-3   m-3 md:m-0 rounded-lg bg-base-100 border-2 border-[#E8E8E8] shadow-sm">
            <figure>
              <img className="w-[450px] rounded-lg flex justify-center h-36 "
                src={company_logo}
                alt="Shoes"
              />
            </figure>
            <div className="mt-10">
              <h2 className="card-title text-[#474747]">{job_title}</h2>
              <p className="my-3">{company_name}</p>
              <div className="btn w-auto justify-start border-2 border-[#E8E8E8] bg-transparent text-blue-400">
               {remote_or_onsite}
              </div>

              <div className="btn ml-2 w-auto justify-start border-2 border-[#E8E8E8] bg-transparent text-blue-400">
                {onsite}
              </div>

              <div className="md:flex m-2 gap-4 text-gray-500"> 
                <p> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>

                <p> <FontAwesomeIcon icon={faCircleDollarToSlot}/> {salary}</p>
              </div>
              <div className="card-actions">
              <Link to={`/details/${id}`} className="btn mt-3 border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            View Details
          </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SingleFeature;