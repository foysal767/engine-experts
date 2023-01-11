import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/sQ0PXpy/360-F-308445331-ZZinys-Rse5x-OZac-NTno-Qq-G24-TAy7ft-Z5.jpg"
          alt=""
        ></img>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            We are ready to give service <br />
            To our customer <br />
            Anytime anywhere
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            We provide our best services to our customer. Our experts are well
            knowend in our country.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Go to all service</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
