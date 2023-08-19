import React, { useEffect, useState } from "react";
import CommonHeader from "../CommonHeader/CommonHeader";

import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../Utilise/Utilitis";
import Applieds from "../Applieds/Applieds";


const ApliedJob = () => {

  const data = useLoaderData()
  const [jobs, setJobs] = useState([])
  const [remote, setRemote] = useState([])

  useEffect(() => {
    setJobs(data)
    setRemote(data)
  },[])
  

  const remoteHandler = (type) =>{
    const setType = remote.filter(remotes => remotes.remote_or_onsite === type)
    setJobs(setType)
  }

  return (
    <div>
      <CommonHeader>Applied Jobs</CommonHeader>
      <div className="my-24 mx-auto w-10/12 md:w-7/12 text-right">

          <Applieds 
          jobs={jobs} 
          remote={remote} 
          // fullHandler={fullHandler} 
          remoteHandler={remoteHandler}
          >

          </Applieds>

      </div>
    </div>
  );
};

export default ApliedJob;
