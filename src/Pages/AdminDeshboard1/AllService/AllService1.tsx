const AllService1 = () => {
  return (
    <section className="w-full lg:w-[80%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-2xl font-serif text-start mb-6">
          Total Available Services: 4
        </h1>
        <button className="w-[100px] h-[50px] rounded bg-blue-400">
          Add Service
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {/* Card Starts from here */}
        <div className="flex gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border">
          <h2>1.</h2>
          <button className="w-[50px] h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>1200</h2>
          <button className="bg-green-500 px-3 rounded-xl">Edit</button>
          <button className="bg-red-500 px-3 rounded-xl">Delete</button>
        </div>
        {/* Card Starts from here */}
        <div className="flex gap-3 justify-between items-center px-4 py-3 text-xl bg-[#d9dee4] rounded border">
          <h2>1.</h2>
          <button className="w-[50px] h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>1200</h2>
          <button className="bg-green-500 px-3 rounded-xl">Edit</button>
          <button className="bg-red-500 px-3 rounded-xl">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default AllService1;
