import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CompleltedOrders = () => {
  const { accType, user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  if (accType !== "Seller") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/completedOrder?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut(navigate);
        }
        return res.json();
      })
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
            className="grid grid-cols-1 lg:grid-cols-5 gap-3 justify-between items-center py-3 text-xl bg-[#d9dee4] rounded border"
          >
            <h2>{i + 1}</h2>
            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2 className="ml-6">${order?.price}</h2>
            <button className="btn btn-sm w-[60%] border-none btn-disabled mx-auto text-white bg-blue-500 rounded-xl">Completed</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompleltedOrders;
