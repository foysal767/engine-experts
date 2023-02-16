import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

type sellers = {
  expert: any;
  filter: any;
  map: any;
};
const AllOrders1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const [sellers, setSellers] = useState<sellers>();
  const [specificSellers, setSpecificSellers] = useState([]);
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
      getSeller();
      return data.data;
    },
  });
  console.log("all sellers", sellers);
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

  const getSeller = () => {
    fetch(`https://engine-experts-server-phi.vercel.app/getSeller`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSellers(data?.data);
        }
      });
  };

  const filterSeller = (name: any) => {
    const specificSeller = sellers?.filter(
      (seller: any) => seller.expert === name
    );
    setSpecificSellers(specificSeller);
  };

  const sendOrders = (email: any, id: any) => {
    const confirm = window.confirm(
      `Are you sure you want to slect ${email} for this service ${id}`
    );
    if (confirm) {
      fetch(
        `https://engine-experts-server-phi.vercel.app/getSeller?email=${email}&id=${id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data?.message);
          }
        });
    }
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
      <h1 className="text-2xl  text-start mb-6">
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
          <div
            key={i}
            className="grid lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1 px-4 gap-5 items-center bg-[#d9dee4] rounded border break-words"
          >
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
            {order?.seller ? (
              <h2>{order?.seller}</h2>
            ) : (
              <select
                className="w-[150px] bg-transparent rounded border text-black"
                name="options"
                onClick={() => filterSeller(order?.serviceName)}
                onBlur={(e: any) => sendOrders(e.target.value, order?._id)}
              >
                <option>Select Seller</option>
                {specificSellers?.map((seller: any) => (
                  <option key={seller?._id} value={seller.filter}>
                    {seller.email}
                  </option>
                ))}
              </select>
            )}

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
