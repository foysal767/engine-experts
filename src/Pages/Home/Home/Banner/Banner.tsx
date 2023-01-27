import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="w-full lg:px-14 md:px-8 px-4 h-screen relative overflow-hidden text-start bg-[#272935]">
      <div className="w-full h-full absolute top-0">
        <img
          className="absolute top-[52%] right-[27.8%] rotation  z-10 hidden lg:block"
          src="assets/circle4[90].png"
          alt=""
        />
        <div className="lg:w-[60%]  w-full grid place-items-center lg:h-full h-[70%] absolute lg:top-0 top-24 right-0 overflow-hidden bg-transparent">
          <img
            className="absolute h-full w-full md:w-[90%]"
            src="assets/final1[84].png"
            alt=""
          />
        </div>

        <div className="lg:w-[60%] w-full grid place-items-center lg:h-full h-[70%] absolute top-24 lg:top-0 right-0 overflow-hidden bg-transparent hover:hidden">
          <img
            className="absolute  h-full w-full md:w-[90%]"
            src="assets/slider-bg-005.png"
            alt=""
          />
        </div>

        <div className="w-full h-full absolute top-0  bg-black opacity-10 lg:hidden block"></div>

        <div className="h-full lg:w-[40%] w-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <h1 className="text-[3vw] lg:leading-[50px] font-semibold mb-6 text-[#FFFFFF]">
            A genuine solution to vehicle problems
          </h1>
          <p className="md:text-xl text-lg">
            Engine experts is one of the leading units speciliazing in providing
            car service and give a new look to your cars. Also specialize in
            modifying cars.
          </p>
          <div className="w-full flex items-start">
            <Link to="/services">
              <button className="getbtn mt-6">Get Service</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
