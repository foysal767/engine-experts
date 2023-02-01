import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";

const AllUsers1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [type, setType] = useState("Seller");
  if (!isAdmin) {
    navigate("/");
  }
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", type],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users?type=${type}`);
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
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <GoogleMaps></GoogleMaps>
      <h1 className="text-2xl font-serif text-start mb-6">
        Total Active Users: {users?.length}
      </h1>
      <div className="w-full flex justify-start mb-4 px-4">
        <select
          onClick={(e: any) => setType(e.target.value)}
          name="userType"
          className="w-full lg:w-[25%] h-[53px] rounded-md bg-white border text-xl"
        >
          <option value="Seller">Seller</option>
          <option value="User">User</option>
        </select>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-4 lg:px-3">
        {/* Single card starts from here */}
        {users?.map((user: any, i: any) => (
          <div className="border flex justify-between items-center gap-2 p-5 text-start ">
            <img
              src={user?.image}
              alt=""
              className="w-[90px] h-[90px] rounded-full bg-gray-400 "
            />
            <div className="flex flex-col justify-between h-full">
              <h1 className="text-start text-2xl">
                {user?.name ? user?.name : "Name Not Found"}
              </h1>
              <h1 className="">
                Email: {user?.email} <br /> Address: arif villa
              </h1>
            </div>
            {type === "Seller" ? (
              <div className="flex flex-col justify-between items-center h-full">
                <select
                  name="verifyType"
                  className="h-[30px] w-[70px] rounded-md border px-1 text-xl bg-blue-600"
                >
                  <option>Pending</option>
                  <option>InProgress</option>
                  <option>Accept</option>
                </select>

                <button className="bg-red-500 h-[30px] px-3 rounded-md">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center h-full">
                <button className="bg-red-500 h-[30px] px-3 rounded-md">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllUsers1;
