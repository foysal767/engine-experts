import React from "react";
import './Gallery.css'

const Gallery = () => {
  return (
    <section className="my-24">
        <h1 className="font-poppins text-center text-5xl font-bold my-14">Service Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1 justify-center items-center" src="/assets/image-gallery/Air-Conditioning-&-Evac.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Break-Repair-&-Service.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Denting-&-Painting.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Engine-Service-&-Repair.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/General-Service-&-Washing.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Performance-upgrade.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Transmission-Service-&-Repair.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Tyre-&-Wheels.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Oil Changes.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Ring-piston.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/HovenHorn.jpg" alt="" />
        </div>
        <div className=" bg-gray-300 rounded-lg">
          <img className="rounded-lg p-1" src="/assets/image-gallery/Mobil-Changes.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
