import React from "react";

const Gallery = () => {
  return (
    <section>
        <h1 className="font-poppins text-center text-5xl font-bold my-14">Service Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-1.png" alt="" />
        </div>
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-2.png" alt="" />
        </div>
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-3.png" alt="" />
        </div>
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-4.png" alt="" />
        </div>
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-5.png" alt="" />
        </div>
        <div className=" bg-gray-600 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/gallery-6.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
