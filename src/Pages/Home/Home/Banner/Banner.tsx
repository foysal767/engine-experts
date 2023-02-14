import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="md:h-[40vh] w-[100%] lg:px-14 md:px-8 px-4 h-[70vh] lg:h-screen relative overflow-hidden text-start bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] mb-6 lg:mb-28">
      <div className="w-full h-full flex">
        <div className="h-full w-full lg:w-[40%] flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-[3vw] lg:leading-[50px] font-semibold mb-6 text-[#FFFFFF] md:text-4xl ">
            A genuine solution to vehicle problems
          </h1>
          <p className="md:text-xl text-lg">
            Engine experts is one of the leading units speciliazing in providing
            car service and give a new look to your cars. Also specialize in
            modifying cars.
          </p>
          <div className="w-full flex items-start">
            <Link to="/servicesAll">
              <button className="bannerBtn mt-6">Get Service</button>
            </Link>
          </div>
        </div>
        <div className="w-full hidden lg:w-[60%] lg:grid place-items-center h-full bannerCar  relative">
          <img
            className="h-[94%] w-full absolute top-0 bannerImg"
            src="assets/slider-bg-005.png"
            alt=""
          />
          <img
            className="h-[94%] w-full absolute top-0 bannerLightImg"
            src="assets/final1[84].png"
            alt=""
          />
          <img
            className="absolute top-[48.6%] right-[46.2%] rotation  z-10 hidden lg:block"
            src="assets/circle4[90].png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
