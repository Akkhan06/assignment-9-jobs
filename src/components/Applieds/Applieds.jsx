import React from 'react';
import google from "../../assets/All Images/netflix-4 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import SingleAplied from '../SingleAplied/SingleAplied';

const Applieds = ({jobs, remoteHandler,}) => {
    // const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, onsite} = jobs.map( x => x)

  // console.log(remote)
  // console.log(fullTime)
  // remote, fullHandler, fullTime

    return (
        <div>
            <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn bg-transparent text-gray-500 m-1">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            
            <li onClick={() => remoteHandler("Remote")}>
              <a>Remote</a>
            </li>

            <li onClick={() => remoteHandler("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
            {
                jobs.map(job => <SingleAplied job={job}></SingleAplied>)
            }
           
        </div>
    );
};

export default Applieds;