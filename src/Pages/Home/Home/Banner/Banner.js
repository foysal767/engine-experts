import React from "react";

const Banner = () => {
  return (
    <div className="font-poppins">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/sQ0PXpy/360-F-308445331-ZZinys-Rse5x-OZac-NTno-Qq-G24-TAy7ft-Z5.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="lg:mr-96">
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold">
              We are ready to give service <br />
              To our customer <br />
              Anytime anywhere
            </h1>
            <p className="mb-5">
              We provide our best services to our customer. Our experts are well
              knowend in our country.
            </p>
            <button className="btn btn-warning">Go to all services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
