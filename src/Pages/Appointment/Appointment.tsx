import React from "react";
import Lottie from "lottie-react";
import appointment from "./appointment.json";

const Appointment = () => {
  return (
    <div>
      <h2 className="text-6xl font-extrabold my-5 text-black">
        Our Appointment is cooking for our customer
      </h2>
      <h3 className="text-5xl font-bold text-green-600">Coming soon...</h3>
      <div className="flex justify-center">
        <Lottie className="" animationData={appointment} />
      </div>
    </div>
  );
};

export default Appointment;
