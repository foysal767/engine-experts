const AllUsers1 = () => {
  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <h1 className="text-2xl font-serif text-start mb-6">
        Total Active Users: 10
      </h1>
      <div className="w-full grid lg:grid-cols-3 gap-4">
        {/* Single card starts from here */}
        <div className="border flex justify-between gap-2 p-5 text-start ">
          <button className="w-[90px] h-[90px] rounded-full bg-gray-400 ">
            Image
          </button>
          <div className="flex flex-col justify-between">
            <h1 className="text-start text-2xl">Ariful Islam</h1>
            <h1 className="">
              Email:arif@gmail.com <br /> Address: arif villa
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button className="bg-blue-500 px-3 rounded-xl">Edit</button>
            <button className="bg-red-500 px-3 rounded-xl">Delete</button>
          </div>
        </div>
        {/* Single card starts from here */}
        <div className="border flex justify-between gap-2 p-5 text-start ">
          <button className="w-[90px] h-[90px] rounded-full bg-gray-400 ">
            Image
          </button>
          <div className="flex flex-col justify-between">
            <h1 className="text-start text-2xl">Ariful Islam</h1>
            <h1 className="">
              Email:arif@gmail.com <br /> Address: arif villa
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button className="bg-blue-500 px-3 rounded-xl">Edit</button>
            <button className="bg-red-500 px-3 rounded-xl">Delete</button>
          </div>
        </div>
        {/* Single card starts from here */}
        <div className="border flex justify-between gap-2 p-5 text-start ">
          <button className="w-[90px] h-[90px] rounded-full bg-gray-400 ">
            Image
          </button>
          <div className="flex flex-col justify-between">
            <h1 className="text-start text-2xl">Ariful Islam</h1>
            <h1 className="">
              Email:arif@gmail.com <br /> Address: arif villa
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button className="bg-blue-500 px-3 rounded-xl">Edit</button>
            <button className="bg-red-500 px-3 rounded-xl">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers1;
