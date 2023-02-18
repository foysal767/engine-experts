import React from "react";
import GoogleMaps from "../../../GoogleMaps/GoogleMaps";

const OrderDetails = () => {
  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <GoogleMaps></GoogleMaps>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-gray-200 shadow-md w-full h-full py-10 px-4">
          <h2 className="text-2xl font-bold border-b-2 border-green-600 mb-2 pb-1">Engine Lock</h2>
          <h4 className="text-xl font-bold mb-2 text-left">Price: 500$</h4>
          <p className="text-left">
            <span className="font-bold">Serice Details:</span> The accumulation
            of dust, debris, and general gunk in your transmission system can
            interfere with the performance of your vehicle. The dirt will
            compromise the turning of the gears, hindering smooth shifting on
            the road. In addition, the gunk will increase the rate of internal
            wear. Therefore, as part of your transmission service and repair,
            you should check the color of the fluid during servicing. If the
            fluid is not red but dark, you should have the system flushed. You
            should also replace the transmission filters regularly to avoid
            recontamination. Immediate repair of your transmission is critical
            if the component is damaged through gradual deterioration or after
            an accident. Prompt restoration will prevent the escalation of the
            damage in the transmission. Therefore, the transmission service and
            repair process will be simpler and cheaper. In addition, you should
            remember that if the transmission is severely damaged, you might
            need to consider options such as rebuilding, remanufacturing, or
            replacement. Another key point in transmission service and repair is
            that you can avoid escalation of transmission damage by watching out
            for certain signs that indicate damage or degradation of the
            component. The symptoms will help you react promptly and conduct
            timely repairs.
          </p>
        </div>
        <div className="bg-gray-200 shadow-lg w-full h-full py-8 px-4">
            <img className="w-[200px] mx-auto mb-2" src="/assets/service-1.1.jpg" alt="" />
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Name: </span>Sk Pipul
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Email: </span>
            skpipul252@gmail.com
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Address: </span>Chittagong
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Model: </span>
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Phone No: </span>01862087905
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Booking Date: </span>12/12/2023
          </p>
          <div>
            <button className="w-full my-3 btn bg-green-600 border-none text-white font-semibold rounded-sm">Accept</button>
            <button className="w-full btn bg-red-600 border-none text-white font-semibold rounded-sm">Deny</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
