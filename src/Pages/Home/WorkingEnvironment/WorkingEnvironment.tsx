import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";

const WorkingEnvironment = () => {
  return (
    <section className="mb-6 lg:mb-28">
      <div className="mt-10">
        <div className="lg:flex justify-center">
          <img
            className="lg:w-1/2 w-full h-1/2"
            src="/assets/working.jpg"
            alt=""
          />
          <div className="bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] lg:w-1/2 w-full text-left pl-5 py-4 pt-10">
            <h2 className="text-xl font-poppins font-bold">
              CAR EXTERIOR CLEANING: BASIC DETAILING
            </h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <span className="flex items-center space-x-1 my-2">
                <VscDebugBreakpointData></VscDebugBreakpointData>{" "}
                <p>SAME DAY SERVICE</p>
              </span>
              <span className="flex items-center space-x-1 my-2">
                <VscDebugBreakpointData></VscDebugBreakpointData>{" "}
                <p>ONLINE APPOINTMENT</p>
              </span>
              <span className="flex items-center space-x-1">
                <VscDebugBreakpointData></VscDebugBreakpointData>{" "}
                <p>CONVENIENT LOCATION</p>
              </span>
              <span className="flex items-center space-x-1">
                <VscDebugBreakpointData></VscDebugBreakpointData> <p>SHUTTLE</p>
              </span>
            </div>
            <button className="getbtn mt-7">Get more Info</button>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] lg:w-1/2 w-full py-4 pt-10 pl-5">
            <h2 className="text-left text-xl font-poppins font-bold">
              RUBBING, WAXING AND POLISHING
            </h2>
            <p className="text-left mt-3">
              Our technicians have undergone the most extensive and stringent
              <br />
              car detail training program. And the only car that matters is
              yours
              <br /> because we will detail it to your complete satisfaction.
            </p>
            <button className="getbtn mt-7">Get more Info</button>
          </div>
          <img
            className="lg:w-1/2 w-full h-1/2"
            src="/assets/working-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingEnvironment;
