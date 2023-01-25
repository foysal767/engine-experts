import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";

const WorkingEnvironment = () => {
  return (
    <section className="px-4 md:px-12 lg:px-12">
      <div>
        <div className="flex justify-center">
          <img
            className="w-[600px] h-[200px] opacity-60"
            src="/assets/working.jpg"
            alt=""
          />
          <div className="bg-black pr-24 pl-10 pt-8">
            <h2 className="text-xl font-poppins font-bold">
              CAR EXTERIOR CLEANING: BASIC DETAILING
            </h2>
            <div className="grid grid-cols-2">
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
                <VscDebugBreakpointData></VscDebugBreakpointData>{" "}
                <p>COMPLIMENTARY SHUTTLE</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-black pr-36 pl-9 pt-8">
            <h2 className="text-left text-xl font-poppins font-bold">
              RUBBING, WAXING AND POLISHING
            </h2>
            <p className="text-left mt-3">
              Our technicians have undergone the most extensive and stringent<br />
              car detail training program. And the only car that matters is yours<br /> because we
              will detail it to your complete satisfaction.
            </p>
          </div>
          <img
            className="w-[600px] h-[200px] opacity-60"
            src="/assets/working-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingEnvironment;
