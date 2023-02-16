import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import "./WorkingEnvironment.css"

const WorkingEnvironment = () => {
  return (
    <section className="mb-12 lg:mb-28">
      <div className="mt-0">
        <div className="lg:flex justify-center">
          <img
            className="lg:w-1/2 w-full h-1/2"
            src="/assets/working.jpg"
            alt=""
          />
          <div className="bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] lg:w-1/2 w-full text-left pt-20 pb-5 pl-20">
            <h2 className="text-xl   font-bold mr-5 lg:mr-0 md:mr-0">
              CAR EXTERIOR CLEANING: BASIC DETAILING
            </h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 md:mb-5 mr-5 lg:mr-0 md:mr-0 ">
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
            {/* <button className="workBtn mt-7">Get more Info</button> */}
          </div>
        </div>
        <div className="lg:flex justify-center">
        <img
            className="lg:w-1/2 w-full h-1/2 lg:order-2"
            src="/assets/working-2.jpg"
            alt=""
          />
          <div className="bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] lg:w-1/2 w-full py-4 pt-20 pl-16">
            <h2 className="text-left text-xl   font-bold mr-5 lg:mr-0 md:mr-0">
              RUBBING, WAXING AND POLISHING
            </h2>
            <p className="text-left mt-3 md:mb-5 mr-5 lg:mr-0 md:mr-0">
              Our technicians have undergone the most extensive and stringent
              <br />
              car detail training program. And the only car that matters is
              yours
              <br /> because we will detail it to your complete satisfaction.
            </p>
            {/* <button className="workBtn mt-7">Get more Info</button> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkingEnvironment;
