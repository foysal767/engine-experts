import React from "react";

const OurTeam = () => {
  return (
    <div>
        <h1 className="font-poppins text-center text-5xl font-bold my-14">Our Team</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/mcFz0dM/IMG-20221009-2232asd49-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Muhammad Jabed</h2>
            <p className="text-white">Engine experts</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/mcFz0dM/IMG-20221009-2232asd49-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Muhammad Jabed</h2>
            <p className="text-white">Engine experts</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/mcFz0dM/IMG-20221009-2232asd49-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Muhammad Jabed</h2>
            <p className="text-white">Engine experts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
