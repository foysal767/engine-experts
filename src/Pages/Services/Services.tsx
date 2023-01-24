import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
<<<<<<< HEAD
  return (
    <section className="mb-20 px-4 md:px-8 lg:px-12 mt-36">
      <h1 className="text-4xl font-bold font-poppins mb-12">Services that we Offer</h1>
      <div className="mt-9 row grid md:grid-cols-1 lg:grid-cols-3 font-poppins">

        {/* content-1 */}

        <div className="content-1 text-white ">

          {/* subContent-1 */}
          <div className="subcontent-1 mb-5 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <div>
                <h1 className="text-xl font-bold">Body Color</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts- pl-5" >
                <img src="assets/car-parts/car-parts-1.png" alt="" className="w-20 " />
              </div>
            </div>
          </div>

          {/* subcontent-2 */}
          <div className="subcontent-2 mb-5 shadow-2xl rounded-md">

            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <div>
                <h1 className="text-xl text-white font-bold">Glass Change</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts-1 pl-5" >
                <img src="assets/car-parts/car-parts-2.png" alt="" className="w-20 " />
              </div>
            </div>

          </div>

          {/* subContent-3 */}
          <div className="subcontent-3 shadow-2xl rounded-md">

            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <div>
                <h1 className="text-xl text-white font-bold">Air Condition Repair</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts-1 pl-5" >
                <img src="assets/car-parts/car-parts-3.png" alt="" className="w-20 " />
              </div>
            </div>

          </div>
        </div>

        {/* content-2 */}

        <div className="content-2 text-center pb-7 pt-7 lg:p-0">
          <img src="assets/services.png" alt="" />
        </div>

          {/* content-3 */}

        <div className="content-3 ">

          {/* subContent-4 */}
          <div className=" subcontent-4 mb-5 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row-reverse lg:text-start lg:gap-5 text-start  items-center ">
              <div>
                <h1 className="text-xl text-white font-bold">Tires Repair</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts-1 pl-5" >
                <img src="assets/car-parts/car-parts-4.png" alt="" className="w-20 " />
              </div>
            </div>
          </div>

          {/* subContent-5 */}
          <div className=" subcontent-5 mb-5 shadow-2xl rounded-md">

            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row-reverse lg:text-start lg:gap-5 text-start items-center ">
              <div>
                <h1 className="text-xl text-white font-bold">Engine Lock</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts-1 pl-5" >
                <img src="assets/car-parts/car-parts-5.png" alt="" className="w-20 " />
              </div>
            </div>

          </div>

          {/* subContent-6 */}
          <div className=" subcontent-6 shadow-2xl rounded-md">

            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row-reverse lg:text-start lg:gap-5 text-start items-center ">
              <div>
                <h1 className="text-xl font-bold">Pure Diagnostic</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="car-parts-1 pl-5" >
                <img src="assets/car-parts/car-parts-6.png" alt="" className="w-20 " />
              </div>
            </div>

          </div>
        </div>

=======
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
>>>>>>> 8d652c9372d1031012412378664552c3f1b10361
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
