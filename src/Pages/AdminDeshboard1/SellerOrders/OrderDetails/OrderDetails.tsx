import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "../../../GoogleMaps/GoogleMaps";

interface order {
  location: any;
  lat: string;
  long: string;
  userEmail: string;
  date: string;
  number: string;
  model: string;
  seller: string;
  price: string;
  userName: string;
  serviceName: string;
  userImage: any;
  payment: any;
}

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<order>();

  useEffect(() => {
    fetch(`https://engine-experts-server-phi.vercel.app/orderDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrder(data?.data);
        }
      });
  }, [id]);

  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <GoogleMaps></GoogleMaps>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-2 bg-gray-200 shadow-md w-full h-full py-10 px-4">
          <h2 className="text-2xl font-bold border-b-2 border-green-600 mb-2 pb-1">
            {order?.serviceName}
          </h2>
          <h4 className="text-xl font-bold mb-2 text-left">
            Price: {order?.price}$
          </h4>
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
          <img
            className="w-[150px] rounded-full mx-auto mb-4"
            src={order?.userImage}
            alt=""
          />
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Name: </span>
            {order?.userName}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Email: </span>
            {order?.userEmail}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Payment type: </span>
            {order?.payment}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Model: </span>
            {order?.model}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Phone No: </span>
            {order?.number}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Booking Date: </span>
            {order?.date}
          </p>
          <div>
            <button className="w-full my-3 btn bg-green-600 border-none text-white font-semibold rounded-sm">
              Accept
            </button>
            <button className="w-full btn bg-red-600 border-none text-white font-semibold rounded-sm">
              Deny
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
