import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./Navbar.css";
import Lottie from "lottie-react";
import navlogo from "./navlogo.json";

const Navbar = () => {
  const { user, logOut, accType, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut(navigate);
  };
  const menuItems = (
    <React.Fragment>
      <li className="font-semibold hover:text-[#E81C2E]">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold hover:text-[#E81C2E]">
        <Link to="/servicesAll">Services</Link>
      </li>
      <li className="font-semibold hover:text-[#E81C2E]">
        <Link to="/contactform">Contact Us</Link>
      </li>
      {user?.uid &&
        (accType === "Seller" ||
          accType === "User" ||
          isAdmin ||
          accType === "verifiedSeller") && (
          <li className="font-semibold hover:text-[#E81C2E]">
            <Link to="/dashboard1">Dashboard</Link>
          </li>
        )}

      {user?.uid ? (
        <li
          className="font-semibold hover:text-[#E81C2E]"
          onClick={handleLogOut}
        >
          <button>Logout</button>
        </li>
      ) : (
        <li className="font-semibold hover:text-[#E81C2E]">
          <Link to="/login">Login</Link>
        </li>
      )}
      {user?.uid && (
        <div
          className="tooltip lg:tooltip-bottom md:tooltip-right mt-1 dropdown dropdown-bottom dropdown-end"
          data-tip={user?.displayName}
        >
          <label>
            {user?.photoURL ? (
              <img
                className="w-[36px] h-[36px] rounded-full mr-5"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="w-[36px] h-[36px] rounded-full mr-5"
                src="assets/profile.png"
                alt=""
              />
            )}
          </label>
         
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar flex justify-between px-4 md:px-8 lg:px-12">
      <div className="navbar-start ">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Lottie
            className="w-[60px] h-[60px] "
            animationData={navlogo}
          />
          <Link
            to="/"
            className="btn btn-ghost font-semibold normal-case text-xl"
          >
            Engine Experts
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:block md:navbar-end md:block">
        <a href="tel:+8801929921987">
          <button className="navBtn uppercase font-bold">
            Make a call
          </button>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;