import { useQuery } from "@tanstack/react-query";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";

const AllUsers1 = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/users"
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
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        Total Active Users: {users?.length}
      </h1>
      <GoogleMaps></GoogleMaps>
      <div className="w-full grid lg:grid-cols-2 gap-4 lg:px-3">
        {/* Single card starts from here */}
        {users?.map((user: any, i: any) => (
          <div className="border flex justify-between gap-2 p-5 text-start ">
            <img
              src={user?.image}
              alt=""
              className="w-[90px] h-[90px] rounded-full bg-gray-400 "
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-start text-2xl">
                {user?.name ? user?.name : "Name Not Found"}
              </h1>
              <h1 className="">
                Email: {user?.email} <br /> Address: arif villa
              </h1>
            </div>
            <div className="flex flex-col justify-between items-center">
              <button className="bg-blue-500 px-3 rounded-xl">Edit</button>
              <button className="bg-red-500 px-3 rounded-xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllUsers1;
