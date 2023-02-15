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
    <section className="mb-12 lg:mb-20 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-5xl md:mt-10 sm:mt-10 lg:mt-0 services-heading  font-bold font-poppins pser text-[#383232]">
        Services that we Offer
      </h1>
      <div className="mt-9 mb-10 row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-poppins">
    <section className="mb-6 lg:mb-24 px-4 md:px-8 lg:px-12">
      <div className="lg:flex md:flex sm:block items-center justify-between">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold font-poppins text-[#383232] my-2">
          Services that we Offer
        </h1>
        <Link to={"/servicesAll"}>
          <button className="servicesBtn ">All Services</button>
        </Link>
      </div>
      <div className="mt-9 mb-12 row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-poppins">
        {services.slice(0, 3).map((service: any, i: any) => (
          <div key={i}>
            <div className="card rounded-md w-full h-[400px] bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] shadow-xl">
              <div className="w-full h-[80%] overflow-hidden">
                <figure className="w-full h-full">
                  <img
                    src={service?.image}
                    alt=""
                    className="w-full h-full hover:scale-110 transition-all duration-700"
                  />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="text-left pb-14">
                  {service?.details.slice(0, 66)}......
                </h2>
              </div>
            </div>
            <Link to={`/servicedetails/${service?.name}`}>
              <h4 className="bg-[#E81C2E] relative rounded-md hover:bg[initial] text-center py-4 px-3 my-0 mx-8 -mt-8 font-bold text-white">
                {service?.name}
              </h4>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/servicesAll"} className="mt-5">
        <button className="servicesBtn">All Services</button>
      </Link>
    </section>
  );
};

export default Services;
