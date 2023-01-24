const DiscountSection = () => {
  return (
<<<<<<< HEAD
    <section className="w-full px-4 md:px-8 lg:px-12 mt-36">
      <h2 className="font-poppins text-center text-5xl font-bold mb-12">
=======
    <section className="w-full px-4 md:px-8 lg:px-12 lg:mb-32">
      <h2 className="font-poppins text-center text-5xl font-bold lg:mb-12">
>>>>>>> 8d652c9372d1031012412378664552c3f1b10361
        Discount for our customer
      </h2>
      <div
        data-aos="slide-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="w-full grid font-poppins lg:grid-cols-3 md:grid-cols-2  gap-3 place-items-center"
      >
        <div className="h-[250px] w-full relative">
          <img src="assets/car-washing.png" alt="" className="w-full h-full" />
          <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
          <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
            <h1 className="text-red-600 text-sm">Limited time offer</h1>
            <h2 className="text-white text-3xl font-semibold">
              Car Washing Service
            </h2>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
            <h1 className="font-semibold m-0">
              50<span className="text-sm">%</span>
            </h1>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
        </div>

        <div className="h-[250px] w-full relative">
          <img src="assets/tire-change.png" alt="" className="w-full h-full" />
          <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
          <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
            <h1 className="text-red-600 text-sm">Limited time offer</h1>
            <h2 className="text-white text-3xl font-semibold">
              Performance upgrade
            </h2>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
            <h1 className="font-semibold m-0">
              50<span className="text-sm">%</span>
            </h1>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
        </div>



        <div className="h-[250px] w-full relative">
          <img src="assets/engine repair.png" alt="" className="w-full h-full" />
          <div className="w-full h-full absolute top-0 bg-black opacity-40"></div>
          <div className="w-full absolute bottom-5 flex flex-col text-start pl-7">
            <h1 className="text-red-600 text-sm">Limited time offer</h1>
            <h2 className="text-white text-3xl font-semibold">
              Car Washing Service
            </h2>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-600 absolute top-5 right-5 z-10">
            <h1 className="font-semibold m-0">
              50<span className="text-sm">%</span>
            </h1>
          </div>
          <div className="text-3xl rounded-full h-[70px] w-[70px] grid place-items-center bg-red-300 absolute top-6 right-4"></div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
