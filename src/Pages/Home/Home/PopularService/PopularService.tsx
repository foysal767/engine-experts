import React from "react";
import { AiFillStar } from 'react-icons/ai';

const PopularService = () => {
  return (
    <div className="font-poppins">
      <h2 className="text-5xl font-bold text-center my-14">
        Our Popular Services
      </h2>
      <div
        data-aos="slide-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center"
      >
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-full py-14">
          <figure>
            <img
              className="w-3/4"
              src="https://i.ibb.co/cXPtdv9/muscular-car-service-worker-repairing-vehicle-146671-19605.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">Engine tune-up</h2>
            <div className="mx-auto text-orange-500 flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-full py-12">
          <figure>
            <img
              className="w-3/4"
              src="https://s25180.pcdn.co/wp-content/uploads/2016/09/iStock_64263241_SMALL.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">
              Replace air filter
            </h2>
            <div className="mx-auto text-orange-500 flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-full py-12">
          <figure>
            <img
              className="w-3/4 rounded-none"
              src="https://www.peruzzimazda.com/static/dealer-11863/Mechanic_Fixing_Tire_Close_Up.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">New tires</h2>
          </div>
          <div className="mx-auto text-orange-500 flex">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
