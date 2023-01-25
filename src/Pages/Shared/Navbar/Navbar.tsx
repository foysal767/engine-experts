import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
<<<<<<< HEAD

    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogout = () => {
        logOut()
            .then()
        // .catch(err => console.log(err));
    }
    return (
        <div className="px-4 z-index-0 py-5 font-poppins  mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"

                    className="inline-flex items-center"
                >
                    <h3 className='text-2xl  '>Expert Engine</h3>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/appointment"

                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Appointment
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"

                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/testimonial"

                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"

                            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            About Us
                        </Link>
                    </li>
                    {
                        user?.uid ?
                            <div className='flex justify-center items-center'>
                                <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                <button
                                    onClick={handleLogout}
                                    className="font-medium tracking-wide ml-10  px-2  rounded py-2  text-white transition-colors duration-200 "
                                >
                                    Log Out
                                </button>
                            </div>
                            :
                            <Link
                                to="/login"
                                className="font-medium tracking-wide transition-colors duration-200"
                            >
                                Log in
                            </Link>
                    }
                </ul>
                <div className="lg:hidden z-index-0">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-yellow-400" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-black border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"

                                            className="inline-flex items-center"
                                        >
                                            <h3 className='text-2xl '>Engine Expert</h3>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded  hover:text-black focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 " viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">

                                        <li>
                                            <Link
                                                to="/services"

                                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/service"

                                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                My Bookings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                My Reviews
                                            </Link>
                                        </li>
                                        {
                                            user?.uid ?
                                                <div className='flex justify-center items-center'>
                                                    <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="font-medium tracking-wide ml-10  hover:bg-black  px-2  rounded py-2  text-white transition-colors duration-200 "
                                                    >
                                                        Log Out
                                                    </button>
                                                </div>
                                                :
                                                <Link
                                                    to="/login"
                                                    className="font-medium tracking-wide transition-colors duration-200"
                                                >
                                                    Log in
                                                </Link>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
=======
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
        logOut(navigate);
      }
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to={'/login'} onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar flex justify-between bg-black">
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
<<<<<<< HEAD
              Appointment
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About Us
            </Link>
          </li>
          {user?.uid ? (
            <div className="flex justify-center items-center">
              <span className="">
                <img
                  src={user?.photoURL}
                  title={user?.displayName}
                  className=" ml-5 h-10 sm:h2 rounded-full"
                  alt=""
                />
              </span>
              <button
                onClick={handleLogout}
                className="font-medium tracking-wide ml-10  px-2  rounded py-2  text-white transition-colors duration-200 "
              >
                Log Out
              </button>
>>>>>>> edf2e7afd2ac706058cebdc2696e147b83787138
            </div>
          ) : (
            <Link
              to="/login"
              className="font-medium tracking-wide transition-colors duration-200"
            >
              Log in
            </Link>
          )}
        </ul>
        <div className="lg:hidden z-index-0">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-yellow-400" viewBox="0 0 24 24">
=======
>>>>>>> 27f7659a59c42d50ad9516de2d40ae4b55f9a0e8
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <AiOutlineDeploymentUnit className="text-4xl mx-2 text-green-500"></AiOutlineDeploymentUnit> Engine Experts
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;