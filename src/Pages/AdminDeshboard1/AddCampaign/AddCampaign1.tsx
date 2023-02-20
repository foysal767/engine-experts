import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

interface discount {
  services: any;
}
const AddCampaign1 = () => {
  const { isAdmin } = useContext(AuthContext);
  const location = useLocation();
  if (!isAdmin) {
    <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  const [selectedService, setSelectedService] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discount, setDiscount] = useState<discount>();
  const [loader, setLoader] = useState(false);
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
        }
      });
  }, [selectedService, originalPrice]);

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

  // const { data: discount = [], refetch } = useQuery({
  //   queryKey: ["discount"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://engine-experts-server-phi.vercel.app/campaign"
  //     );
  //     const data = await res.json();
  //     setCampName(data.data[0].campaignName);
  //     setEndedDate(data?.data[0]?.endDate);
  //     // setStartDate(data?.data[0]?.startDate);
  //     return data?.data[0];
  //   },
  // });

  useEffect(() => {
    fetch("https://engine-experts-server-phi.vercel.app/campaign")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCampName(data?.data?.campaignName);
          setEndedDate(data?.data?.endDate);
          setDiscount(data?.data);
        }
      });
  }, [loader]);

  const handleStartCam = (e: any) => {
    e.preventDefault();
    const form = e.target;
    // const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    // setStartDate(startDate);
    // setEndedDate(endDate);
    const date = {
      endDate,
    };
    fetch("https://engine-experts-server-phi.vercel.app/startCamp", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(date),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoader(!loader);
          toast.success(data?.message);
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
          setLoader(!loader);
          e.target.reset();
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      });
  };

  const stopCampaign = (e: any) => {
    e.preventDefault();
    fetch("https://engine-experts-server-phi.vercel.app/stopCampaign", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoader(!loader);
          toast.success(data?.message);
        }
      });
  };

  const handleDelete = (name: any) => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/campaignService?name=${name}&camp=${campName}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          setLoader(!loader);
        } else {
          toast.error(data?.message);
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
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] py-20 lg:mt-2 md:mt-4 sm:mt-20">
      <div className="flex justify-between items-center px-4 mb-5">
        <h1 className="text-2xl  text-start">Campaigns are available here</h1>
      </div>

      <div className="border flex flex-col gap-3 p-3">
        <div className="lg:flex justify-between items-center text-center">
          <div>
            <h2 className="text-start mb-4">
              <span className="text-2xl">Campaign: </span>
              <input
                type="text"
                className="bg-white w-[200px] h-[35px] rounded-md text-black px-4 py-2"
                defaultValue={campName}
                onChange={(e: any) => {
                  setCampName(e.target.value);
                }}
              />
            </h2>
            <h2 className="text-xl  text-start mb-4">
              Total Products: {discount?.services?.length}
            </h2>
          </div>
          <form
            onSubmit={handleStartCam}
            className="grid lg:grid-cols-2 grid-cols-1 gap-3 items-end justify-between"
          >
            <div className="flex flex-col items-start">
              <label htmlFor="end-date">End date</label>
              <input
                type="date"
                name="endDate"
                id="end-date"
                defaultValue={endedDate}
                className="w-[200px] h-[40px] bg-white rounded-md px-2"
                required
              />
            </div>
            <div className="flex flex-col items-end">
              {(Date.parse(`${endedDate}`) - Date.now()) /
                (1000 * 60 * 60 * 24) >
              0 ? (
                <button
                  className="w-full h-[40px] rounded bg-red-500 text-xl "
                  onClick={stopCampaign}
                >
                  Stop Campaign
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={discount?.services?.length > 0 ? false : true}
                  className="w-full h-[40px] rounded bg-blue-500 text-xl"
                >
                  Start Campaign
                </button>
              )}
            </div>
          </form>
        </div>
        {/* add campaign product from */}
        <form
          className="lg:w-full w-1/2 grid lg:grid-cols-4 items-center gap-3 mb-5"
          onSubmit={handleAddCam}
        >
          <select
            className="h-[50px] w-[168%] lg:w-full rounded px-3 bg-white"
            name="service"
            placeholder="Select Service"
            onClick={(e: any) => setSelectedService(e.target.value)}
          >
            {services?.map((service: any, i: any) => (
              <option key={i} value={service?.name}>
                {service?.name}
              </option>
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
            required
          />
          <button
            className="w-[168%] lg:w-full h-[53px] rounded bg-blue-500 text-xl"
            type="submit"
            disabled={campName ? false : true}
          >
            Add
          </button>
        </form>
        <div className="w-full hidden lg:grid lg:grid-cols-6 ">
          <h1>SL</h1>
          <h1>Image</h1>
          <h1>Service Name</h1>
          <h1>Original Price</h1>
          <h1>Discount Price</h1>
          <h1>Delete</h1>
        </div>
        {/* card starts from here */}
        {discount?.services?.map((service: any, i: any) => (
          <div
            key={i}
            className=" grid lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1 gap-3 items-center px-4 py-2 text-xl bg-[#d9dee4] rounded border"
          >
            <h2>{i + 1}</h2>
            <img
              className="w-[50px] h-[50px] hidden lg:block rounded-full bg-gray-300"
              alt=""
              src={service?.image}
            />
            <h2 className="lg:text-start text-center">{service?.name}</h2>
            <h2>${service?.price}</h2>
            <h2>${service?.discountPrice}</h2>
            <button
              className="bg-red-500 btn-sm rounded-xl"
              onClick={() => handleDelete(service?.name)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddCampaign1;
