import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const AllOrders1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAdmin) {
    navigate("/");
  }

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://engine-experts-server-phi.vercel.app/bookings`
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
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
          <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border">
            <h2>1.</h2>
            <img
              src={order?.userImage}
              alt=""
              className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300"
            />

            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2>{order?.price}</h2>
            <select
              className="w-[160px] h-[45px] bg-transparent rounded border"
              name="options"
            >
              <option value="Pending" selected>
                Pending
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button className="bg-red-500 px-3 rounded-xl">Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllOrders1;
