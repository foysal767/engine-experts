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
    <section className="mb-6 lg:mb-28 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl lg:text-5xl font-bold font-poppins mb-12 text-[#383232]">
        Services that we Offer
      </h1>
      <div className="mt-9 mb-12 row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-poppins">
        {services.map((service: any) => (
          <div>
            <div className="card w-full h-[400px] bg-base-100 shadow-xl">
              <div className="w-full h-[80%] overflow-hidden">
                <figure>
                  <img
                    src={service?.image}
                    alt=""
                    className="w-full h-full rounded-xl hover:scale-110 transition-all duration-700"
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
              <h4 className="bg-[#E81C2E] relative text-center py-4 px-3 my-0 mx-8 -mt-8 font-bold text-white">
                {service?.name}
              </h4>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/services"} className="mt-14">
        <button className="getbtn">All Services</button>
      </Link>
    </section>
  );
};

export default Services;
