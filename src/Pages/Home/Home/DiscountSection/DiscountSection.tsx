import React from "react";

const DiscountSection = () => {
  return (
    <section className="w-full">
      <h2 className="font-poppins text-center text-5xl font-bold my-14">
        Discount for our customer
      </h2>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="w-full grid font-poppins lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center"
      >
        <div className="card card-compact bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/cXPtdv9/muscular-car-service-worker-repairing-vehicle-146671-19605.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">
              Up to 10% on Engine tune-up service
            </h2>
            <div className="flex justify-between">
              <div className="text-base font-bold">
                <h3>
                  Regular Price: $<span>150</span>
                </h3>
                <h3>
                  Discount Price: $<span>135</span>
                </h3>
              </div>
              <button className="btn btn-success">Purchase Now</button>
            </div>
            <p className="text-orange-600">Expires on 12 feb 2023.</p>
          </div>
        </div>


        <div className="card card-compact bg-gray-600 p-2 shadow-xl rounded-md">
          <figure>
            <img
              src="https://i.ibb.co/cXPtdv9/muscular-car-service-worker-repairing-vehicle-146671-19605.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">
              Up to 15% on Replace air filter service
            </h2>
            <div className="flex justify-between">
              <div className="text-base font-bold">
                <h3>
                  Regular Price: $<span>250</span>
                </h3>
                <h3>
                  Discount Price: $<span>212</span>
                </h3>
              </div>
              <button className="btn btn-success">Purchase Now</button>
            </div>
            <p className="text-orange-600">Expires on 22 feb 2023.</p>
          </div>
        </div>


        <div className="card card-compact bg-gray-600 p-2 shadow-xl rounded-md">
        <figure>
            <img
              src="https://i.ibb.co/cXPtdv9/muscular-car-service-worker-repairing-vehicle-146671-19605.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">
              Up to 20% on New tires service
            </h2>
            <div className="flex justify-between">
              <div className="text-base font-bold">
                <h3>
                  Regular Price: $<span>120</span>
                </h3>
                <h3>
                  Discount Price: $<span>96</span>
                </h3>
              </div>
              <button className="btn btn-success">Purchase Now</button>
            </div>
            <p className="text-orange-600">Expires on 12 feb 2023.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
