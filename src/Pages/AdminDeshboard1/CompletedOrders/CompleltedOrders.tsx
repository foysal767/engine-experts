import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CompleltedOrders = () => {
  const { accType, user } = useContext(AuthContext);
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  if (accType !== "Seller") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  useEffect(() => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/completedOrder?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data?.data);
        }
      });
  }, []);
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] py-16">
      <h1 className="text-2xl  text-start mb-6">All orders Available here</h1>
      <div className="w-full flex flex-col gap-4">
        {orders?.map((order: any, i: any) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border"
          >
            <h2>{i + 1}</h2>
            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2>${order?.price}</h2>
            <button className="bg-blue-500 px-3 rounded-xl">Completed</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompleltedOrders;
