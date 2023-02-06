import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const SellerOrder = () => {
  const { accType } = useContext(AuthContext);
  const location = useLocation();
  if (accType !== "Seller") {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
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
        <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border">
          <h2>1.</h2>
          <button className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>User Email</h2>
          <h2>1200</h2>
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
        {/* card starts from here */}
        <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border">
          <h2>1.</h2>
          <button className="w-[50px] hidden lg:block h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>User Email</h2>
          <h2>1200</h2>
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
      </div>
    </section>
  );
};

export default SellerOrder;
