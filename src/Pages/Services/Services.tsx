import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold font-poppins text-left mt-10 mb-3">
        Services that we offer
        <span className="font-bold text-[#E81C2E]">___</span>
      </h1>
      <p className="text-left text-lg">
        We try to give our best for our customers. We provide various kinds of
        services which given on the page in a card.
        <br /> You can see details which service you needed by clicking the
        details button.
      </p>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* card 1 */}
        <div className="card w-96 bg-gray-700 shadow-xl transform hover:bg-gray-900 transition duration-700 hover:scale-110 rounded-sm">
          <div className="card-body">
            <p className="">Our Services</p>
            <h2 className="mb-2 text-3xl font-bold">Service 1</h2>
            <div className="card-actions">
              <Link to='/allservices' className="btn bg-[#E81C2E] border-none hover:bg-black transition-all duration-500 w-full">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
