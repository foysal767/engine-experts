import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AllService = () => {
  return (
    <div className="flex-1 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        <div className="flex items-center justify-center shadow-lg px-5 py-8 relative hover:border-l-4 hover:border-l-[#E81C2E] transition-all duration-300">
          <h2 className="text-3xl font-bold font hover:text-[#E81C2E] cursor-pointer">
            Service 1
          </h2>
          <img
            className="w-16 mx-6"
            src="/assets/car-parts/car-parts-1.png"
            alt=""
          />
          <div className="absolute right-7 text-3xl">
            <AiFillEdit className="my-7 text-blue-500 cursor-pointer"></AiFillEdit>
            <label htmlFor="delete-modal">
              <AiFillDelete className="my-7 text-red-600 cursor-pointer"></AiFillDelete>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center shadow-lg px-5 py-8 relative hover:border-l-4 hover:border-l-[#E81C2E] transition-all duration-300">
          <h2 className="text-3xl font-bold hover:text-[#E81C2E] cursor-pointer">
            Service 2
          </h2>
          <img
            className="w-16 mx-6"
            src="/assets/car-parts/car-parts-2.png"
            alt=""
          />
          <div className="absolute right-7 text-3xl">
            <AiFillEdit className="my-7 text-blue-500 cursor-pointer"></AiFillEdit>
            <AiFillDelete className="my-7 text-red-600 cursor-pointer"></AiFillDelete>
          </div>
        </div>
        <div className="flex items-center justify-center shadow-lg px-5 py-8 relative hover:border-l-4 hover:border-l-[#E81C2E] transition-all duration-300">
          <h2 className="text-3xl font-bold hover:text-[#E81C2E] cursor-pointer">
            Service 3
          </h2>
          <img
            className="w-16 mx-6"
            src="/assets/car-parts/car-parts-3.png"
            alt=""
          />
          <div className="absolute right-7 text-3xl">
            <AiFillEdit className="my-7 text-blue-500 cursor-pointer"></AiFillEdit>
            <AiFillDelete className="my-7 text-red-600 cursor-pointer"></AiFillDelete>
          </div>
        </div>
        <div className="flex items-center justify-center shadow-lg px-5 py-8 relative hover:border-l-4 hover:border-l-[#E81C2E] transition-all duration-300">
          <h2 className="text-3xl font-bold hover:text-[#E81C2E] cursor-pointer">
            Service 4
          </h2>
          <img
            className="w-16 mx-6"
            src="/assets/car-parts/car-parts-4.png"
            alt=""
          />
          <div className="absolute right-7 text-3xl">
            <AiFillEdit className="my-7 text-blue-500 cursor-pointer"></AiFillEdit>
            <AiFillDelete className="my-7 text-red-600 cursor-pointer"></AiFillDelete>
          </div>
        </div>
      </div>
      {/* modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal rounded-none">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this service?
          </h3>
          <p className="py-4">
            If you delete once this service will be removed permanantly.
          </p>
          <div className="modal-action">
            <button className="btn bg-red-600 mr-2 border-none">yes</button>
            <label htmlFor="delete-modal" className="btn bg-green-600 border-none">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
