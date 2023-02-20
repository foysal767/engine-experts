import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const SellerOrder = () => {
  const { accType, user } = useContext(AuthContext);
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  if (accType !== "Seller") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  useEffect(() => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/sellerOrder?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data?.data);
        }
      });
  }, [loader]);

  const handleCompleted = (id: any) => {
    fetch(`https://engine-experts-server-phi.vercel.app/sellerOrder/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          setLoader(!loader);
        }
      });
  };

  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] py-16">
      <h1 className="text-2xl text-start mb-6">
        {orders?.length <= 0
          ? "Orders Not Available"
          : `Your Active orders${orders?.length}`}
      </h1>
      <div className="w-full flex flex-col gap-4">
        {/* <select
          className="w-[160px] h-[45px] bg-white rounded px-3"
          name="options"
        >
          <option value="Active Orders" selected>
            Active Orders
          </option>
          <option value="Completed Orders">Completed Orders</option>
        </select> */}
        {/* card starts from here */}
        {orders?.map((order: any, i: any) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border"
          >
            <h2>{i + 1}</h2>
            {/* <button className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300">
              Img
            </button> */}
            <h2>{order?.serviceName}</h2>
            <h2>{order?.userEmail}</h2>
            <h2>${order?.price}</h2>
            {/* <select
              className="w-[160px] h-[45px] bg-transparent rounded border"
              name="options"
            >
              <option value="Pending" selected>
                Pending
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select> */}
            <Link to={"/dashboard1/orderdetails"}><button className="bg-green-600 rounded-xl text-white px-3">See Details</button></Link>
            <button
              className="bg-blue-500 px-3 rounded-xl"
              onClick={() => handleCompleted(order?._id)}
            >
              Complete
            </button>
            {/* <button className="bg-red-500 px-3 rounded-xl">Delete</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerOrder;
