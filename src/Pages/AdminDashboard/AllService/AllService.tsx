import { useQuery } from "@tanstack/react-query";

import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AllService = () => {
  const { data: allServices = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/services"
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return (
      <div className="grid place-items-center flex-1 h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="flex-1 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        {allServices.map((service: any) => (
          <div
            className="flex items-center justify-center shadow-lg px-5 py-8 relative hover:border-l-4 hover:border-l-[#E81C2E] transition-all duration-300"
            key={service._id}
          >
            <h2 className="text-3xl font-bold font hover:text-[#E81C2E] cursor-pointer">
              {service.name}
            </h2>
            <img className="w-16 mx-6" src={service.image} alt="" />
            <div className="absolute right-7 text-3xl">
              <AiFillEdit className="my-7 text-blue-500 cursor-pointer"></AiFillEdit>
              <label htmlFor="delete-modal">
                <AiFillDelete className="my-7 text-red-600 cursor-pointer"></AiFillDelete>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllService;
