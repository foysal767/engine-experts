import React from "react";
import Lottie from "lottie-react";
import hi from "./hi.json";
import { Link } from "react-router-dom";


const Booking = () => {

  return (
    <div className="text-[#383232] px-4 md:px-8 lg:px-12">
      <div className="flex items-center mt-2 justify-center ">
        <h2 className="text-2xl font-bold mt-20">Hi,</h2>
        <Lottie className="w-1/12" animationData={hi} />
        <h2 className="text-2xl font-bold mt-20">Welcome Jabed</h2>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-5 mx-auto border-b-2 py-3 border-b-red-600 bg-gray-200 rounded">
          <span>Image</span>
          <span>Service Name</span>
          <span>Price</span>
          <span>Payment</span>
          <span></span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5 bg-gray-200 rounded py-2">
          <span>
            <img
              className="lg:w-[80px] w-[50px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">
              Performance Upgrade
            </h2>
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">$100</h2>
          </span>
          <span>
            <label
              htmlFor="payment-modal"
              className="btn btn-success lg:btn-sm btn-xs"
            >
              Pay Now
            </label>
          </span>
          <span>
            <button className="btn bg-red-600 lg:btn-sm btn-xs border-none">
              Cancel
            </button>
          </span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5 bg-gray-200 rounded py-2">
          <span>
            <img
              className="lg:w-[80px] w-[50px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">
              Performance Upgrade
            </h2>
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">$100</h2>
          </span>
          <span>
            <Link to={'/booking/payment'}>
              <label
                htmlFor="payment-modal"
                className="btn btn-success lg:btn-sm btn-xs"
              >
                Pay Now
              </label>
            </Link>
          </span>
          <span>
            <button className="btn bg-red-600 lg:btn-sm btn-xs border-none">
              Cancel
            </button>
          </span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5 bg-gray-200 rounded py-2">
          <span>
            <img
              className="lg:w-[80px] w-[50px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">
              Performance Upgrade
            </h2>
          </span>
          <span>
            <h2 className="lg:text-xl text-sm font-bold">$100</h2>
          </span>
          <span>
            <label
              htmlFor="payment-modal"
              className="btn btn-success lg:btn-sm btn-xs"
            >
              Pay Now
            </label>
          </span>
          <span>
            <button className="btn bg-red-600 lg:btn-sm btn-xs border-none">
              Cancel
            </button>
          </span>
        </div>
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
            ✕
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
          <form >
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
                  className="input input-bordered w-full mt-1 bg-white border border-black"
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
  );
};

export default Booking;
