import React from "react";
import './AllEngineServices.css';

const AllEngineServices = () => {
  return (
    <section className="mt-36 mx-8">
        <h1 className="font-poppins text-center text-5xl font-bold mb-12">All Engine Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 justify-center items-center relative" src="/assets/image-gallery/Air-Conditioning-&-Evac.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Air Conditioning & Evac</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Break-Repair-&-Service.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Break Repair & Servicing</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Denting-&-Painting.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Denting & Painting Service</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Engine-Service-&-Repair.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Engine Service & Repair</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/General-Service-&-Washing.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">General Service & Washing</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Performance-upgrade.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Performance Upgrade</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Transmission-Service-&-Repair.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Transmission & Service</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Tyre-&-Wheels.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Tyre & Wheels Repairing</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Oil Changes.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Oil Changes Categories</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Ring-piston.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Ring Piston Changes Tools</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/HovenHorn.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Hoben Horn Acuarenc Pollishing</span>
        </div>


        <div className=" bg-gray-300 rounded-lg">
          <img className="myDiv rounded-lg p-1 relative" src="/assets/image-gallery/Mobil-Changes.jpg" alt="" />
          <span className="hide text-2xl text-white font-bold top-24 left-6 absolute cursor-pointer">Mobil Changes Adjustment</span>
        </div>
      </div>
    </section>
  );
};

export default AllEngineServices;
