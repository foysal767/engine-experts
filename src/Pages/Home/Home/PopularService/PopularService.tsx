import { useQuery } from "@tanstack/react-query";
import React from "react";


const PopularService = () => {

  const { data: popular = [], isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/popular"
      );
      const data = await res.json();
      return data.data;
    },
  });
  return (
    <section className="w-full px-4 md:px-8 lg:px-12">
      <h2 className="font-poppins text-center text-5xl font-bold mb-10">
        Popular Services
      </h2>
      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-500 rounded-md p-6 w-full lg:h-[350px] grid place-items-center">
        <div className="lg:flex lg:justify-around items-center md:justify-center w-full lg:h-full">
          <div className="lg:w-[30%] w-full lg:h-full flex flex-col justify-center gap-3 p-6">
            <h2 className="lg:text-start text-3xl font-bold font-poppins">
              Popular Services
            </h2>
            <p className="lg:text-start">
              This service are popular for our customer <br />
              so that they review it.
            </p>
            <button className="bg-red-600 py-2 rounded text-lg">
              Get All Service
            </button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 h-full w-full py-6">
            {popular?.map((service: any) => (
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full"
                  src={service?.image}
                  alt=""
                />
                <div className="w-full h-full absolute top-0 bg-black opacity-40">
                </div>
                <div className="w-full h-full absolute top-0 flex items-end p-3">
                  <h1 className="text-2xl text-start font-poppins font-semibold">{service?.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularService;
