<<<<<<< HEAD
import Lottie from "lottie-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthProvider/AuthProvider"
import hi from "./hi.json"

const Booking = () => {
  const [bookings, setBookings] = useState([])
  const { user } = useContext(AuthContext)
  useEffect(() => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/bookings?email=${user?.email}`
    )
      .then(res => res.json())
      .then(data => {
=======
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import hi from "./hi.json";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut(navigate);
        }
        return res.json();
      })
      .then((data) => {
>>>>>>> 4b377dab5c9664f0eccf70a2d97ec4e85f12292c
        if (data.success) {
          setBookings(data.data)
        }
      })
  }, [user?.email])

  return (
    <div className="text-[#383232] px-4 md:px-8 lg:px-12">
      <div className="flex items-center mt-2 justify-center ">
        <h2 className="text-2xl font-bold mt-20">Hi,</h2>
        <Lottie className="w-1/12" animationData={hi} />
        <h2 className="text-2xl font-bold mt-20">
          Welcome {user?.displayName}
        </h2>
      </div>
      <div className="py-10">
        {bookings?.length >= 1 ? (
          <div className="grid grid-cols-6 mx-auto border-b-2 py-3 border-b-red-600 bg-gray-200 rounded">
            <span>Sl No.</span>
            <span>Service Name</span>
            <span>Booking Date</span>
            <span>Price</span>
            <span>Payment/Status</span>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl mb-8 text-red-600">
              No booking added yet.
            </h2>
          </div>
        )}
        {bookings?.map((booking: any, i: any) => (
          <div key={i}>
            <div className="grid grid-cols-6 gap-2 lg:gap-3 items-center my-5 bg-gray-200 rounded py-2 px-2 h-[80px]">
              <span>
                <p className="inline mr-2">{i + 1}</p>
              </span>
              <span className="text-start">
                <h2 className="lg:text-xl text-sm lg:font-bold break-words text-starts">
                  {booking?.serviceName}
                </h2>
              </span>
              <span className="text-start">
                <h2 className="lg:text-xl text-sm break-words text-center">
                  {booking?.date}
                </h2>
              </span>
              <span>
                <h2 className="lg:text-xl text-sm lg:font-bold">
                  {booking?.price}
                </h2>
              </span>
              {booking?.payment === "paid" ? (
                <span>
                  <label className="btn btn-disabled bg-gray-500 text-white lg:btn-sm btn-xs">
                    {booking?.status || "Pending"}
                  </label>
                </span>
              ) : (
                <span>
                  <Link to={`/booking/payment/${booking?._id}`}>
                    <label
                      htmlFor="payment-modal"
                      className="btn btn-success lg:btn-sm btn-xs"
                    >
                      Pay Now
                    </label>
                  </Link>
                </span>
              )}
              <span>
                <button
                  className={`btn ${
                    booking?.payment === "paid"
                      ? "btn-disabled bg-gray-500 text-white"
                      : "bg-red-600"
                  }  lg:btn-sm btn-xs border-none text-white`}
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Put this part before </body> tag */}
      {/* payment modal */}
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="payment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ???
          </label>
          <h3 className="text-2xl font-bold text-black">Payment Form</h3>
          <p className="text-black text-left">Full name</p>
          <input
            type="text"
            placeholder="Full name"
            className="input input-bordered w-full bg-white border border-black"
          />
          <p className="text-black text-left">Country</p>
          <select className="select select-bordered w-full bg-white border border-black">
            <option disabled selected>
              Bangladesh
            </option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>UK</option>
            <option>Uganda</option>
          </select>
          <p className="text-black text-left">Address</p>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full bg-white border border-black"
          />

          {/* Form */}
          <form>
            <p className="text-black text-left">Card Number</p>
            <input
              type="text"
              placeholder="Card number"
              className="input input-bordered w-full relative bg-white border border-black"
            />
            <div className="flex space-x-6">
              <div>
                <p className="text-black text-left">Expiration Date</p>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="input input-bordered w-full bg-white border border-black"
                />
              </div>
              <div>
                <p className="text-black text-left">Security Code</p>
                <input
                  type="password"
                  placeholder="CVV"
                  className="input input-bordered w-full bg-white border border-black"
                />
              </div>
            </div>
            <button className="btn bg-green-700 border-none w-full mt-3 rounded-full">
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
