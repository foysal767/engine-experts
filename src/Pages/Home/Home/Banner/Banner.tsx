import React from "react";

const Banner = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">

      <div className="lg:w-[60%] w-full lg:h-full h-[70%] absolute lg:top-0 top-24 right-0 overflow-hidden bg-transparent">
        <img
          className="absolute h-full w-full"
          src="assets/final1[84].png"
          alt=""
        />
      </div>

      <div className="lg:w-[60%] w-full lg:h-full h-[70%] absolute top-24 lg:top-0 right-0 overflow-hidden bg-transparent hover:hidden">
        <img
          className="absolute  h-full w-full"
          src="assets/slider-bg-005.png"
          alt=""
        />
      </div>

      <div className="w-full h-full absolute top-0 bg-black opacity-50 lg:hidden block"></div>

      <div className="h-full lg:w-[30%] w-full absolute top-0 left-0 flex items-center justify-center">
        <h1 className="text-5xl">
          Maintenace and <br /> repair service
        </h1>
      </div>
    </section>
  );
};

export default Banner;
