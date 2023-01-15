import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="w-full h-full absolute top-0">
        <img
          className="absolute top-[52%] right-[27.8%] rotation  z-10 hidden lg:block"
          src="assets/circle4[90].png"
          alt=""
        />

        <div className="lg:w-[60%] w-full lg:h-full h-[70%] absolute lg:top-0 top-24 right-0 overflow-hidden bg-transparent">
          <img
            className="absolute h-full w-full -z-10"
            src="assets/final1[84].png"
            alt=""
          />
        </div>

        <div className="lg:w-[60%] w-full lg:h-full h-[70%] absolute top-24 lg:top-0 right-0 overflow-hidden bg-transparent hover:hidden">
          <img
            className="absolute  h-full w-full -z-10"
            src="assets/slider-bg-005.png"
            alt=""
          />
        </div>

        <div className="w-full h-full absolute top-0 bg-black opacity-50 lg:hidden block"></div>

        <div className="h-full lg:w-[30%] w-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl">
            Maintenace and <br /> repair service
          </h1>
          <button className="getbtn">Get Service</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
