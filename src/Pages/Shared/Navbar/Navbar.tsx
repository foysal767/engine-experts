import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./Navbar.css";
import Lottie from "lottie-react";
import navlogo from "./navlogo.json";

const Navbar = () => {
  const { user, logOut, isAdmin, accType } = useContext(AuthContext);
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
        <Link to="/services">Services</Link>
      </li>
      {/* <li className="hover:text-[#E81C2E] font-semibold">
        <Link to="/booking">My Booking</Link>
      </li>
      <li className="hover:text-[#E81C2E] font-semibold">
        <Link to="/myreview">My Review</Link>
      </li> */}
      {user?.uid && (
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
        <li className="tooltip tooltip-left" data-tip={user?.displayName}>
          <img
            className="w-[65px] h-[65px] rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar flex justify-between">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center">
          <Lottie className="w-[60px] h-[60px] mr-[-10px] my-[-10px]" animationData={navlogo} />
          <Link
            to="/"
            className="btn btn-ghost font-semibold normal-case text-xl"
          >
            Engine Experts
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
