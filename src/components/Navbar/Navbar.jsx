import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-50 md:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <Link to={'/'} className="active:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to={'/chart'} className="active:text-blue-600">Statistics</Link>
              </li>
              <li tabIndex={0}>
                <Link to={'/applied'}>Applied Jobs</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Job Market</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to={''}>Home</Link>
            </li>
            <li>
                <Link to={'/chart'} className="active:text-blue-600">Statistics</Link>
              </li>
            <li tabIndex={0}>
              <Link to={'/applied'}>Applied Jobs</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none normal-case bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Star Applying</a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
