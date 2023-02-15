import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const AllOrders1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  const location = useLocation();
  if (!isAdmin) {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://engine-experts-server-phi.vercel.app/allBookings`
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handleOrderDelete = (id: any, name: any) => {
    const confirm = window.confirm(
      `Are you sure, want to delete this ${name}?`
    );
    if (confirm) {
      fetch(`https://engine-experts-server-phi.vercel.app/deleteOrder/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            refetch();
          }
        });
    }
  };

  const getSeller = (name: any) => {
    fetch(`https://engine-experts-server-phi.vercel.app/getSeller?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSellers(data?.data);
        }
      });
  };
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        All orders Available here
      </h1>
      <div className="w-full flex flex-col gap-4">
        <select
          className="w-[160px] h-[45px] bg-white rounded px-3"
          name="options"
        >
          <option value="Active Orders" selected>
            Active Orders
          </option>
          <option value="Completed Orders">Completed Orders</option>
        </select>
        {/* card starts from here */}
        {orders?.map((order: any, i: any) => (
          <div key={i} className="grid lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1 px-4 gap-5 items-center bg-[#d9dee4] rounded border">
            <div className="flex items-center gap-3 py-1">
              <h2>{i + 1}</h2>
              <img
                src={order?.userImage}
                alt=""
                className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300"
              />
            </div>

            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2 className="lg:ml-20">{order?.price}</h2>
            <select
              className="w-[150px] bg-transparent rounded border text-black"
              name="options"
              onClick={() => getSeller(order?.serviceName)}
            >
              {sellers?.map((seller: any) => (
                <option key={seller?._id} value="seller">{seller.email}</option>
              ))}
            </select>
            <button
              className="bg-red-500 btn-sm rounded-xl"
              onClick={() => handleOrderDelete(order?._id, order?.serviceName)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllOrders1;
