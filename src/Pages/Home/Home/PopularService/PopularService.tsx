import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
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
      <div className="mb-4 lg:flex md:flex sm:block justify-between items-center gap-3 lg:px-12 md:px-6">
            <h2 className="lg:text-start text-center lg:text-4xl md:text-4xl text-3xl font-bold font-poppins text-[#383232] my-2">
              Popular Services
            </h2>
              <Link to='/servicesAll'>
                <button className="popularBtn">Get All Service</button>
              </Link>
          </div>
      <div className="px-4 md:px-8 lg:px-12 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] w-full lg:h-[400px] grid place-items-center">
        <div className="lg:flex lg:justify-around items-center md:justify-center w-full lg:h-full gap-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 h-full w-full py-6">
            {popular?.map((service: any, i: any) => (
              <div key={i} className="group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-full w-full">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={service?.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">{service?.name}</h1>
                  <Link className="rounded-full bg-[#E81C2E] backdrop-blur-lg py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5 font-bold" to={`/servicedetails/${service?.name}`}>See Details</Link>
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
