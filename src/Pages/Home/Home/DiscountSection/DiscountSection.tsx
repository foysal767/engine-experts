// const DiscountSection = () => {
//   return (
//     <section className="w-full px-4 md:px-8 lg:px-12 lg:mb-32">
//       <h2 className="font-poppins text-center text-5xl font-bold lg:mb-12">
//         Discount for our customer
//       </h2>
//       <div
//         data-aos="slide-up"
//         data-aos-easing="linear"
//         data-aos-duration="1000"
//         className="w-full grid font-poppins lg:grid-cols-3 md:grid-cols-2  gap-3 place-items-center"
//       >
//         <div className="h-[250px] w-full relative">
//           <img src="assets/car-washing.png" alt="" className="w-full h-full" />
//           <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
//           <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
//             <h1 className="text-red-600 text-sm">Limited time offer</h1>
//             <h2 className="text-white text-3xl font-semibold">
//               Car Washing Service
//             </h2>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
//             <h1 className="font-semibold m-0">
//               50<span className="text-sm">%</span>
//             </h1>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
//         </div>

//         <div className="h-[250px] w-full relative">
//           <img src="assets/tire-change.png" alt="" className="w-full h-full" />
//           <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
//           <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
//             <h1 className="text-red-600 text-sm">Limited time offer</h1>
//             <h2 className="text-white text-3xl font-semibold">
//               Performance upgrade
//             </h2>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
//             <h1 className="font-semibold m-0">
//               50<span className="text-sm">%</span>
//             </h1>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
//         </div>

//         <div className="h-[250px] w-full relative">
//           <img src="assets/engine repair.png" alt="" className="w-full h-full" />
//           <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
//           <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
//             <h1 className="text-red-600 text-sm">Limited time offer</h1>
//             <h2 className="text-white text-3xl font-semibold">
//               Car Washing Service
//             </h2>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
//             <h1 className="font-semibold m-0">
//               50<span className="text-sm">%</span>
//             </h1>
//           </div>
//           <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscountSection;

import React from "react";
import { AiFillStar } from "react-icons/ai";

const DiscountSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-12 mb-12">
      <div className="mx-auto bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section ">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 place-items-center w-full h-full mt-5 ">
          <h2 className="font-bold text-center ">
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
        <div className="card w-full bg-white rounded-sm shadow-xl pb-2">
          <p className="text-xs font-bold bg-red-600">-30%</p>
          <figure className="pt-6">
            <img
              src="/assets/service-1.1.jpg"
              alt="Shoes"
              className="rounded-sm px-5"
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
              Performance Upgrade
            </h2>
          </div>
          <div className="flex gap-2 ml-5 font-medium text-sm">
            <p className="text-black line-through">$120</p>
            <p className="text-red-600">$90</p>
          </div>
        </div>
        <div className="card w-full bg-white rounded-sm shadow-xl pb-2">
          <p className="text-xs font-bold bg-red-600">-30%</p>
          <figure className="pt-6">
            <img
              src="/assets/service-1.1.jpg"
              alt="Shoes"
              className="rounded-sm px-5"
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
              Performance Upgrade
            </h2>
          </div>
          <div className="flex gap-2 ml-5 font-medium text-sm">
            <p className="text-black line-through">$120</p>
            <p className="text-red-600">$90</p>
          </div>
        </div>
        <div className="card w-full bg-white rounded-sm shadow-xl pb-2">
          <p className="text-xs font-bold bg-red-600">-30%</p>
          <figure className="pt-6">
            <img
              src="/assets/service-1.1.jpg"
              alt="Shoes"
              className="rounded-sm px-5"
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
              Performance Upgrade
            </h2>
          </div>
          <div className="flex gap-2 ml-5 font-medium text-sm">
            <p className="text-black line-through">$120</p>
            <p className="text-red-600">$90</p>
          </div>
        </div>
        <div className="card w-full bg-white rounded-sm shadow-xl pb-2">
          <p className="text-xs font-bold bg-red-600">-30%</p>
          <figure className="pt-6">
            <img
              src="/assets/service-1.1.jpg"
              alt="Shoes"
              className="rounded-sm px-5"
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
              Performance Upgrade
            </h2>
          </div>
          <div className="flex gap-2 ml-5 font-medium text-sm">
            <p className="text-black line-through">$120</p>
            <p className="text-red-600">$90</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
