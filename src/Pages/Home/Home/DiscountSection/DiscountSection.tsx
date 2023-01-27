import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const DiscountSection = () => {
  const { data: discount = [], isLoading } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/campaign");
      const data = await res.json();
      console.log("camp", data.data[0].services);
      return data?.data[0]?.services;
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
    <section className="px-4 md:px-12 lg:px-12 mb-12">
      <div className="mx-auto bg-black bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section ">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 place-items-center w-full h-full mt-5">
          <h2 className="font-extrabold text-center text-xl">
            Hurry up! Discount up to 30%
          </h2>
          <div className="flex gap-x-5 justify-center mt-5">
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-lg font-bold">30</h2>
              <p className="text-xs">Day</p>
            </span>
            <span className="bg-red-600 px-3 py-1 rounded-md">
              <h2 className="text-lg font-bold">03</h2>
              <p className="text-xs">Hours</p>
            </span>
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-lg font-bold">08</h2>
              <p className="text-xs">Min</p>
            </span>
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-lg font-bold">03</h2>
              <p className="text-xs">Sec</p>
            </span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
        {discount?.map((service: any, i: any) => (
          <div className="card w-full bg-white rounded-sm shadow-xl pb-2">
            <p className="text-xs font-bold bg-red-600">-30%</p>
            <figure className="pt-6 w-full h-[200px]">
              <img
                src={service?.image}
                alt="Shoes"
                className="rounded-sm px-5 w-full h-full"
              />
            </figure>
            <div className="text-yellow-500 flex gap-x-0.5 ml-5 mt-3">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <div>
              <h2 className="text-xl text-left ml-5 font-medium text-black">
                {service?.name}
              </h2>
            </div>
            <div className="flex gap-2 ml-5 font-medium text-sm">
              <p className="text-black line-through">{service?.price}</p>
              <p className="text-red-600">{service?.discountPrice}$</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountSection;
