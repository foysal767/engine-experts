import { useQuery } from "@tanstack/react-query";
import React from "react";
import "./PopularService.css";

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
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full mb-6 lg:mb-28">
      <div className="px-4 md:px-8 lg:px-12 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] w-full lg:h-[350px] grid place-items-center">
        <div className="lg:flex lg:justify-around items-center md:justify-center w-full lg:h-full gap-6">
          <div className="lg:w-[30%] w-full lg:h-full flex flex-col justify-center gap-3">
            <h2 className="lg:text-start text-3xl font-bold font-poppins">
              Popular Services
            </h2>
            <p className="lg:text-start">
              This service are popular for our customer <br />
              so that they review it.
            </p>
            <button className="getbtn">Get All Service</button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 h-full w-full py-12">
            {popular?.map((service: any) => (
              <div className="w-full h-full relative">
                <img className="w-full h-full" src={service?.image} alt="" />
                <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
                <div className="w-full h-full absolute top-0 flex items-end p-3">
                  <h1 className="text-2xl text-start font-poppins font-semibold">
                    {service?.name}
                  </h1>
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
