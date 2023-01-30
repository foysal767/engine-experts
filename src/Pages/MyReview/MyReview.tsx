import React from "react";

const MyReview = () => {
  return (
    <section className="text-black mt-5 px-4 md:px-12 lg:px-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="shadow-xl mx-auto px-4 py-5">
          <h3 className="text-xl font-bold">Performance Upgrade</h3>
          <img
            className="w-[280px] my-2"
            src="/assets/service-1.1.jpg"
            alt=""
          />
          <h3 className="text-left text-lg font-bold">
            Review: <span className="text-sm">Thats my first review</span>
          </h3>
          <h3 className="text-left text-lg font-bold mb-2">Rating: Good</h3>
          <div className="flex justify-between items-center">
            <button className="btn bg-blue-600 lg:btn-sm btn-xs border-none text-white">
              Edit
            </button>
            <button className="btn bg-red-600 lg:btn-sm btn-xs border-none text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReview;
