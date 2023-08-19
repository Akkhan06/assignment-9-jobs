import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import logo from '../../assets/All Images/man.png';

const Header = () => {
  return (
      <div className="md:flex justify-center w-full items-center mx-auto mt-4">
        <div className="ml-3">
          <h1 className="text-4xl md:text-6xl font-bold">
          CareersDirect <br /> Your Path to <br /> <span className="text-[#7E90FE]">Professional</span>
          </h1>
          <p className="w-11/12 md:w-[400px] my-5 text-gray-400">
          Tech Solutions is seeking a software engineer to join our team information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <a className="btn border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Get Started
          </a>
        </div>
        <div className="">
            <img className="w-11/12 md:w-[630px]" src={logo} alt="" />
        </div>
      </div>
  );
};

export default Header;
