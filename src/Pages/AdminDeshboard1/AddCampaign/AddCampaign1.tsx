import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const AddCampaign1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const location = useLocation();
  if (!isAdmin) {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
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
  const [originalPrice, setOriginalPrice] = useState();
  // const [startDate, setStartDate] = useState();
  const [endedDate, setEndedDate] = useState();
  const [campName, setCampName] = useState("");
  useEffect(() => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/service?id=${selectedService}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOriginalPrice(data?.data?.price);
          console.log(originalPrice);
        }
      });
  }, [selectedService, originalPrice]);

  const handleStartCam = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    // setStartDate(startDate);
    // setEndedDate(endDate);
    const date = {
      startDate,endDate
    }
    fetch("https://engine-experts-server-phi.vercel.app/startCamp", {
      method: "PATCH",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(date)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success(data?.message)
        }
      });
  };

  const handleAddCam = (e: any) => {
    e.preventDefault();
    // const campname = e.target.campname.value;
    const service = e.target.service.value;
    const discountprice = e.target.discountprice.value;
    const addCampService = {
      campName,
      service,
      discountprice,
      startDate: "",
      endedDate: "",
    };
    fetch("https://engine-experts-server-phi.vercel.app/campaign", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCampService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          refetch()
        } else {
          toast.error(data.message);
        }
      });
  };

  const { data: discount = [], refetch } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/campaign"
      );
      const data = await res.json();
      setCampName(data.data[0].campaignName);
      setEndedDate(data?.data[0]?.endDate)
      return data?.data[0];
    },
  });
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
        <button className="w-[180px] lg:h-[50px] rounded bg-blue-500 text-xl">
          Add New Campaign
        </button>
      </div>

      <div className="border flex flex-col gap-3 p-3">
        <div className="lg:flex justify-between items-center text-center">
          <h2 className="text-start mb-4">
            <span className="text-2xl">Campaign:</span>{" "}
            <input
              type="text"
              className="bg-white w-[200px] h-[35px] rounded-md text-black px-4 py-2"
              defaultValue={campName}
              onBlur={(e: any) => {
                setCampName(e.target.value);
              }}
            />
          </h2>
          <h2 className="text-xl font-poppins text-start mb-4">
            Total Products: {discount?.services?.length}
          </h2>
          <form onSubmit={handleStartCam} className="flex gap-3 items-center">
            <div className="flex flex-col items-start">
              <label htmlFor="start-date">Start date</label>
              <input
                type="date"
                name="startDate"
                id="start-date"
                className="w-[200px] h-[40px] bg-white rounded-md px-2"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="end-date">End date</label>
              <input
                type="date"
                name="endDate"
                id="end-date"
                defaultValue={endedDate}
                className="w-[200px] h-[40px] bg-white rounded-md px-2"
              />
            </div>
            <button
              type="submit"
              disabled={discount?.services?.length > 0 ? false : true}
              className="w-[150px] h-[40px] rounded bg-red-500 text-xl"
            >
              Start Campaign
            </button>
          </form>
        </div>
        {/* add campaign product from */}
        <form
          className="w-full grid lg:grid-cols-4 justify-between items-center gap-3 mb-5"
          onSubmit={handleAddCam}
        >
          {/* <input
            className="bg-white w-[168%] lg:w-full  h-[53px] rounded px-2"
            type="text"
            name="campname"
            placeholder="Campaign Name"
          /> */}
          <select
            className="h-[50px] w-[168%] lg:w-full rounded px-3 bg-white"
            name="service"
            placeholder="Select Service"
            onClick={(e: any) => setSelectedService(e.target.value)}
          >
            {services?.map((service: any, i: any) => (
              <option value={service?.name}>{service?.name}</option>
            ))}
          </select>
          <input
            className="bg-white w-[168%] lg:w-full h-[53px] rounded px-2"
            type="text"
            name="originalprice"
            placeholder="Original Price"
            defaultValue={originalPrice}
          />
          <input
            className="bg-white w-[168%] lg:w-full h-[53px] rounded px-2"
            type="text"
            name="discountprice"
            placeholder="Discount Price"
          />
          <button
            className="w-[168%] lg:w-full h-[53px] rounded bg-blue-500 text-xl"
            type="submit"
          >
            Add
          </button>
        </form>
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
        {discount?.services?.map((service: any, i: any) => (
          <div className="flex flex-col lg:flex-row gap-3 justify-between items-center px-4 py-2 text-xl bg-[#d9dee4] rounded border">
            <h2>{i + 1}</h2>
            <img
              className="w-[50px] h-[50px] hidden lg:block rounded-full bg-gray-300"
              alt=""
              src={service?.image}
            />
            <h2 className="text-start">{service?.name}</h2>
            <h2>{service?.price}</h2>
            <h2>{service?.discountPrice}</h2>
            <div className="flex gap-3 items-center">
              <button className="bg-green-500 px-3 rounded-xl lg:mb-2">
                Edit
              </button>
              <button className="bg-red-500 px-3 rounded-xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddCampaign1;
