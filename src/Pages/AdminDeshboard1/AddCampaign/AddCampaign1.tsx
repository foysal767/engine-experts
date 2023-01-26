const AddCampaign1 = () => {
  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      <div className="flex justify-between items-center px-4 mb-5">
        <h1 className="text-2xl font-serif text-start mb-6">
          Campaigns are available here
        </h1>
        <button className="w-[180px] h-[50px] rounded bg-blue-500 text-xl">
          Add New Campaign
        </button>
      </div>
      <div className="w-full border grid lg:grid-cols-5 justify-between items-center gap-3 mb-5">
        <input
          className="bg-white w-full h-[53px] rounded px-2"
          type="text"
          name="campname"
          placeholder="Campaign Name"
        />
        <select
          className="h-[50px] rounded px-3 bg-white"
          name="product"
          placeholder="Select Product"
        >
          <option value="Product1">Product</option>
          <option value="Product2">Product1</option>
          <option value="Product3">Product2</option>
        </select>
        <input
          className="bg-white w-full h-[53px] rounded px-2"
          type="text"
          name="originalprice"
          placeholder="Original Price"
        />
        <input
          className="bg-white w-full h-[53px] rounded px-2"
          type="text"
          name="discountprice"
          placeholder="Discount Price"
        />
        <button
          className="w-full h-[53px] rounded bg-blue-500 text-xl"
          type="submit"
        >
          Add
        </button>
      </div>

      <div className="border flex flex-col gap-3 p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-poppins text-start mb-4">
            Campaign: Sprint Campaign
          </h2>
          <h2 className="text-xl font-poppins text-start mb-4">
            Total Products: 3
          </h2>
          <button className="w-[150px] h-[40px] rounded bg-red-500 text-xl">
            Stop Campaign
          </button>
        </div>
        <div className="w-full flex justify-between px-4">
          <h1>SL</h1>
          <h1>Image</h1>
          <h1>Service Name</h1>
          <h1>Original Price</h1>
          <h1>Discount Price</h1>
          <h1>Edit</h1>
          <h1>Delete</h1>
        </div>
        {/* card starts from here */}
        <div className="flex gap-3 justify-between items-center px-4 py-2 text-xl bg-[#d9dee4] rounded border">
          <h2>1.</h2>
          <button className="w-[50px] h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>1200</h2>
          <h2>1000</h2>
          <button className="bg-green-500 px-3 rounded-xl">Edit</button>
          <button className="bg-red-500 px-3 rounded-xl">Delete</button>
        </div>
        {/* card starts from here */}
        <div className="flex gap-3 justify-between items-center px-4 py-2 text-xl bg-[#d9dee4] rounded border">
          <h2>2.</h2>
          <button className="w-[50px] h-[50px] rounded-full bg-gray-300">
            Img
          </button>
          <h2>Service Name</h2>
          <h2>1200</h2>
          <h2>1000</h2>
          <button className="bg-green-500 px-3 rounded-xl">Edit</button>
          <button className="bg-red-500 px-3 rounded-xl">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default AddCampaign1;
