import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
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
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="mb-20 mt-10 px-4 md:px-8 lg:px-12 lg:mb-32">
      <h1 className="text-5xl font-bold font-poppins mb-12">
        Services that we Offer
      </h1>
      <div className="mt-9 row grid grid-cols-1 md:grid-cols-2 gap-8 font-poppins">
        {services.map((service: any) => (
          <div className="content-1 text-white ">
            {/* subContent-1 */}
            <div className="subcontent-1 mb-5 shadow-2xl rounded-md">
              <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
                <Link to={`/servicedetails/${service?.name}`}>
                  <div>
                    <h1 className="text-xl font-bold">{service.name}</h1>
                    <p>{service?.details.slice(0, 20)}</p>
                  </div>
                </Link>
                <div className="car-parts- pl-5">
                  <img src={service?.image} alt="" className="w-20 " />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"} className="mt-8">
        <button>All Services</button>
      </Link>
    </section>
  );
};

export default Services;
