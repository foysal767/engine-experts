import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
const AddCampaign1 = () => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/services"
      );
      const data = await res.json();
      return data.data;
    },
  });
  const [selectedService, setSelectedService] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/service?id=${selectedService}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOriginalPrice(data?.data?.price);
        }
      });
  }, [selectedService]);

  const handleAddCam = (e: any) => {
    e.preventDefault();
    const campname = e.target.campname.value;
    const service = e.target.service.value;
    const discountprice = e.target.discountprice.value;
    const addCampService = {
      campname,
      service,
      discountprice,
    };
    fetch("http://localhost:5000/campaign", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCampService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Add campaign Successfull");
        } else {
          toast.error(data.message)
        }
      });
  };

  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
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
      <form
        className="w-full border grid lg:grid-cols-5 justify-between items-center gap-3 mb-5"
        onSubmit={handleAddCam}
      >
        <input
          className="bg-white w-full h-[53px] rounded px-2"
          type="text"
          name="campname"
          placeholder="Campaign Name"
        />
        <select
          className="h-[50px] rounded px-3 bg-white"
          name="service"
          placeholder="Select Service"
          onClick={(e: any) => setSelectedService(e.target.value)}
        >
          {services?.map((service: any, i: any) => (
            <option value={service?.name}>{service?.name}</option>
          ))}
        </select>
        <input
          className="bg-white w-full h-[53px] rounded px-2"
          type="text"
          name="originalprice"
          placeholder="Original Price"
          defaultValue={originalPrice}
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
      </form>

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
