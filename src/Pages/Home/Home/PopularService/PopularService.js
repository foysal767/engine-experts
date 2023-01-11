import React from "react";

const PopularService = () => {
  return (
    <div className="font-poppins">
        <h2 className="text-5xl font-bold text-center my-5">Our Popular Services</h2>
      <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/cXPtdv9/muscular-car-service-worker-repairing-vehicle-146671-19605.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Engine tune-up</h2>
            <p>Engine tune-ups include checking, diagnosing, and replacing bad spark plugs, spark plug wires, distributor caps, fuel filters, air filters, and oil filters.</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://s25180.pcdn.co/wp-content/uploads/2016/09/iStock_64263241_SMALL.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Replace air filter</h2>
            <p>Engine air filter is to prevent dust, dirt and other environmental contaminants from getting into the engine.</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://www.peruzzimazda.com/static/dealer-11863/Mechanic_Fixing_Tire_Close_Up.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">New tires</h2>
            <p>We are providing best tires which is import from Japan. Our experts check the quality and than adjust it on the car.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
