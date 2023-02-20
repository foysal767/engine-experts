import { useContext, useEffect, useState } from "react";
import { FaBullhorn, FaCartArrowDown, FaUsers } from "react-icons/fa";
import { RiServiceFill, RiShoppingCart2Fill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Link, Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import "./AdminDeshboard.css";

const AdminDeshboard1 = () => {
  const { accType, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  const [payment, setPayment] = useState(0);
  const [payments, setPayments] = useState([]);
  const [active, setActive] = useState("");
  const sevenDaysAgo = new Date(
    new Date().getTime() - 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString();
  const [lastWeek, setLastWeek] = useState();
  // let taka = 0

  useEffect(() => {
    fetch(`https://engine-experts-server-phi.vercel.app/payments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPayments(data?.data);
          let taka = 0;
          let lastWeekPayment = 0;
          data?.data?.map((singlePrice: any) => {
            const price = parseFloat(singlePrice.price);
            taka = taka + price;

            if (sevenDaysAgo > singlePrice.date) {
              lastWeekPayment = lastWeekPayment + price;
            }
            return [setPayment(taka)];
          });
        }
      });
  }, []);

  if (!isAdmin && accType !== "Seller" && accType !== "User") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  return (
    <main className=" bg-[#FFFFFF] text-black w-full">
      <section className="w-full h-[83vh] lg:h-[85vh] relative ">
        <div className="w-full h-[68vh] adminbanner absolute top-0"></div>
        <div className="absolute top-0 w-full h-[7vh] lg:h-[13vh] text-white">
          <Navbar></Navbar>
        </div>
        <div className="w-full absolute top-24 lg:top-24">
          {isAdmin && (
            <>
              <div className="w-full lg:w-[80%] mx-auto flex justify-between items-center gap-4 lg:mt-8 px-3 lg:px-0">
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">{payment}$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">210$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">1500$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">900$</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] mx-auto mt-16 lg:mt-14">
                {/* Card one start from here */}
                <div
                  className={`maincard  h-[180px] rounded-lg hover:-skew-y-12 ${
                    active === "All Service" ? "-skew-y-12" : undefined
                  } relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/allservice1"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10  ${
                        active === "All Service"
                          ? "activeBg text-[#E5E7EB]"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("All Service")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <RiServiceFill className="text-2xl text-blue-400" />
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">All Service</h2>
                        <h1 className="text-2xl text-start ">15</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "All Service" ? "activedroping" : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">All Service</h1>
                  </div>
                </div>
                {/* Card one start from here */}
                <div
                  className={`maincard h-[180px] rounded-lg hover:-skew-y-12 ${
                    active === "All Users" ? "-skew-y-12" : undefined
                  } relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/allusers1"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 ${
                        active === "All Users"
                          ? "activeBg text-[#E5E7EB]"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("All Users")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaUsers className="text-2xl text-green-400" />
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">All Users</h2>
                        <h1 className="text-2xl text-start ">190</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "All Users" ? "activedroping" : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">All Users</h1>
                  </div>
                </div>
                {/* Card one start from here */}
                <div
                  className={`maincard h-[180px] rounded-lg hover:-skew-y-12 ${
                    active === "Add Campaign" ? "-skew-y-12" : undefined
                  } relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/addcampaign1"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 ${
                        active === "Add Campaign"
                          ? "activeBg text-[#E5E7EB]"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("Add Campaign")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaBullhorn className="text-2xl text-amber-400" />
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">Add Campaign</h2>
                        <h1 className="text-2xl text-start ">01</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "Add Campaign" ? "activedroping" : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">Add Campaign</h1>
                  </div>
                </div>
                {/* Card one start from here */}
                <div
                  className={`maincard h-[180px] rounded-lg hover:-skew-y-12 ${
                    active === "All Orders" ? "-skew-y-12" : undefined
                  } relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/allorders1"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 ${
                        active === "All Orders"
                          ? "activeBg text-[#E5E7EB]"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("All Orders")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaCartArrowDown className="text-2xl text-red-400" />
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">All Orders</h2>
                        <h1 className="text-2xl text-start ">130</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "All Orders" ? "activedroping" : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">All Orders</h1>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* unverified seller */}

          {accType === "Seller" && (
            <div className="mt-20">
              <h2 className="text-3xl text-white font-bold">
                Your request was send to Admin
              </h2>
              <p className="text-white">Please wait for response</p>
              <p className="text-white">
                If you have any urgent please{" "}
                <Link className="text-orange-400" to={"/contactform"}>
                  Contact us
                </Link>
              </p>
            </div>
          )}

          {accType === "verifiedSeller" && (
            <>
              <div className="w-full lg:w-[80%] mx-auto flex justify-between items-center gap-4 lg:mt-8 px-3 lg:px-0">
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">2100$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">210$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">1500$</span>
                </h1>
                <h1 className="text-start text-sm  text-slate-300">
                  Total Revenue <br />
                  <span className="text-2xl lg:text-3xl">900$</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 w-[80%] mx-auto mt-16 lg:mt-14">
                {/* Card one start from here */}
                <div
                  className={`maincard h-[180px] rounded-lg hover:scale-105 relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/sellerOrders"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10  ${
                        active === "All Orders"
                          ? "bg-gradient-to-l from-[#4d7084e7] to-[#204458] text-white"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("All Orders")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                          <RiShoppingCart2Fill className="text-2xl mx-auto text-red-600"></RiShoppingCart2Fill>
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">All Orders</h2>
                        <h1 className="text-2xl text-start ">130</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "All Orders" ? "activedroping" : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">All Orders</h1>
                  </div>
                </div>
                {/* Card one start from here */}
                <div
                  className={`maincard h-[180px] rounded-lg hover:scale-105 relative transition duration-700`}
                >
                  <NavLink to={"/dashboard1/completedOrders"}>
                    <div
                      className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10  ${
                        active === "Completed Orders"
                          ? "bg-gradient-to-l from-[#4d7084e7] to-[#204458] text-white"
                          : "bg-[#DFF6E5]"
                      } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                      onClick={(e: any) => setActive("Completed Orders")}
                    >
                      <div className="flex justify-between items-center">
                        <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                        <RiShoppingCart2Fill className="text-2xl mx-auto text-red-600"></RiShoppingCart2Fill>
                        </button>
                        <button className="bg-gray-200 h-7 px-2 rounded-full">
                          growth
                        </button>
                      </div>
                      <div className="">
                        <h2 className="text-sm text-start ">
                          Completed Orders
                        </h2>
                        <h1 className="text-2xl text-start ">130</h1>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className={`droping ${
                      active === "Completed Orders"
                        ? "activedroping"
                        : undefined
                    } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                  >
                    <h1 className="text-sm  text-center">Completed Orders</h1>
                  </div>
                </div>
              </div>
            </>
          )}

          {accType === "User" && (
            <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto mt-16 lg:mt-28">
              {/* Card one start from here */}
              <div
                className={`maincard h-[180px] rounded-lg hover:scale-105  relative transition duration-700`}
              >
                <NavLink to={"/dashboard1/booking"}>
                  <div
                    className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10  ${
                      active === "My Bookings"
                        ? "bg-gradient-to-l from-[#4d7084e7] to-[#204458] text-white"
                        : "bg-[#DFF6E5]"
                    } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                    onClick={(e: any) => setActive("My Bookings")}
                  >
                    <div className="flex justify-between items-center">
                      <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                        <BsFillBookmarkPlusFill className="text-2xl mx-auto text-red-600"></BsFillBookmarkPlusFill>
                      </button>
                      <button className="bg-gray-200 h-7 px-2 rounded-full">
                        growth
                      </button>
                    </div>
                    <div className="">
                      <h2 className="text-sm text-start ">My Bookings</h2>
                      <h1 className="text-2xl text-start ">130</h1>
                    </div>
                  </div>
                </NavLink>
                <div
                  className={`droping ${
                    active === "My Bookings" ? "activedroping" : undefined
                  } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                >
                  <h1 className="text-sm  text-center">My Bookings</h1>
                </div>
              </div>
              {/* Card one start from here */}
              <div
                className={`maincard h-[180px] rounded-lg hover:scale-105 relative transition duration-700`}
              >
                <NavLink to={"/dashboard1/myreview"}>
                  <div
                    className={`flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 ${
                      active === "My Reviews"
                        ? "bg-gradient-to-l from-[#4d7084e7] to-[#204458] text-white"
                        : "bg-[#DFF6E5]"
                    } bg-no-repeat bg-right bg-cover  rounded-lg p-8`}
                    onClick={(e: any) => setActive("My Reviews")}
                  >
                    <div className="flex justify-between items-center">
                      <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                        <MdRateReview className="text-2xl mx-auto text-green-600"></MdRateReview>
                      </button>
                      <button className="bg-gray-200 h-7 px-2 rounded-full">
                        growth
                      </button>
                    </div>
                    <div className="">
                      <h2 className="text-sm text-start ">My Reviews</h2>
                      <h1 className="text-2xl text-start ">130</h1>
                    </div>
                  </div>
                </NavLink>
                <div
                  className={`droping ${
                    active === "My Reviews" ? "activedroping" : undefined
                  } w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700`}
                >
                  <h1 className="text-sm  text-center">My Reviews</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Outlet></Outlet>
    </main>
  );
};

export default AdminDeshboard1;
