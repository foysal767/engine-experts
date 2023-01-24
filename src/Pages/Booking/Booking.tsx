import React from "react";
import Lottie from "lottie-react";
import hi from "./hi.json";

const Booking = () => {
  return (
    <div>
      <div className="flex items-center mt-2 justify-center">
        <h2 className="text-2xl font-bold mt-20">Hi,</h2>
        <Lottie className="w-1/12" animationData={hi} />
        <h2 className="text-2xl font-bold mt-20">Welcome Jabed</h2>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-5 mx-auto border-b-2 py-3 border-b-red-600">
          <span>Image</span>
          <span>Service Name</span>
          <span>Price</span>
          <span>Payment</span>
          <span></span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5">
          <span>
            <img
              className="w-[80px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="text-xl font-bold">Performance Upgrade</h2>
          </span>
          <span>
            <h2 className="text-xl font-bold">$100.00</h2>
          </span>
          <span>
            <label htmlFor="payment-modal" className="btn btn-success btn-sm">
              Pay Now
            </label>
          </span>
          <span>
            <button className="btn bg-red-600 btn-sm border-none">
              Cancel
            </button>
          </span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5">
          <span>
            <img
              className="w-[80px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="text-xl font-bold">Performance Upgrade</h2>
          </span>
          <span>
            <h2 className="text-xl font-bold">$100.00</h2>
          </span>
          <span>
            <button className="btn btn-disabled btn-sm">Paid</button>
          </span>
          <span>
            <button className="btn bg-red-600 btn-sm">Cancel</button>
          </span>
        </div>
        <div className="grid grid-cols-5 mx-auto items-center my-5">
          <span>
            <img
              className="w-[80px] mx-auto"
              src="/assets/service-1.1.jpg"
              alt=""
            />
          </span>
          <span>
            <h2 className="text-xl font-bold">Performance Upgrade</h2>
          </span>
          <span>
            <h2 className="text-xl font-bold">$100.00</h2>
          </span>
          <span>
            <button className="btn btn-success btn-sm">Pay Now</button>
          </span>
          <span>
            <button className="btn bg-red-600 btn-sm">Cancel</button>
          </span>
        </div>
      </div>
      {/* Put this part before </body> tag */}
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
            className="input input-bordered w-full"
          />
          <p className="text-black text-left">Country</p>
          <select className="select select-bordered w-full">
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
            className="input input-bordered w-full"
          />
          <p className="text-black text-left">Card Number</p>
          <form>
            <input
              type="text"
              placeholder="Card number"
              className="input input-bordered w-full relative"
            />
            <div className="flex space-x-6">
              <div>
                <p className="text-black text-left">Expiration Date</p>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p className="text-black text-left">Security Code</p>
                <input
                  type="password"
                  placeholder="CVV"
                  className="input input-bordered w-full mt-1"
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
