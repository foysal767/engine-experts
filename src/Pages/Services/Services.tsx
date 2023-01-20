import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section className="mb-20 mt-10 px-4 md:px-8 lg:px-12 lg:mb-32">
      <h1 className="text-5xl font-bold font-poppins mb-12">
        Services that we Offer
      </h1>
      <div className="mt-9 row grid md:grid-cols-1 lg:grid-cols-3 font-poppins">
        {/* content-1 */}

        <div className="content-1 text-white ">
          {/* subContent-1 */}
          <div className="subcontent-1 mb-5 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <Link to={"/servicedetails/Performance Upgrade"}>
                <div>
                  <h1 className="text-xl font-bold">Performance Upgrade</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>

              <div className="car-parts- pl-5">
                <img
                  src="assets/car-parts/car-parts-1.png"
                  alt=""
                  className="w-20 "
                />
              </div>
            </div>
          </div>

          {/* subcontent-2 */}
          <div className="subcontent-2 mb-5 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <Link to={"/servicedetails/Glass Change"}>
                <div>
                  <h1 className="text-xl text-white font-bold">Glass Change</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
              <div className="car-parts-1 pl-5">
                <img
                  src="assets/car-parts/car-parts-2.png"
                  alt=""
                  className="w-20 "
                />
              </div>
            </div>
          </div>

          {/* subContent-3 */}
          <div className="subcontent-3 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row lg:text-end lg:gap-0 text-end items-center ">
              <Link to={"/servicedetails/Air Condition Repair"}>
                <div>
                  <h1 className="text-xl text-white font-bold">
                    Air Condition Repair
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
              <div className="car-parts-1 pl-5">
                <img
                  src="assets/car-parts/car-parts-3.png"
                  alt=""
                  className="w-20 "
                />
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
              <Link to={"/servicedetails/Tires Repair"}>
                <div>
                  <h1 className="text-xl text-white font-bold">Tires Repair</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
              <div className="car-parts-1 pl-5">
                <img
                  src="assets/car-parts/car-parts-4.png"
                  alt=""
                  className="w-20 "
                />
              </div>
            </div>
          </div>

          {/* subContent-5 */}
          <div className=" subcontent-5 mb-5 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row-reverse lg:text-start lg:gap-5 text-start items-center ">
              <Link to={"/servicedetails/Engine Lock"}>
                <div>
                  <h1 className="text-xl text-white font-bold">Engine Lock</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
              <div className="car-parts-1 pl-5">
                <img
                  src="assets/car-parts/car-parts-5.png"
                  alt=""
                  className="w-20 "
                />
              </div>
            </div>
          </div>

          {/* subContent-6 */}
          <div className=" subcontent-6 shadow-2xl rounded-md">
            <div className="content-info flex md:flex-col md:text-center md:gap-7 lg:flex-row-reverse lg:text-start lg:gap-5 text-start items-center ">
              <Link to={"/servicedetails/Pure Diagnostic"}>
                <div>
                  <h1 className="text-xl font-bold">Pure Diagnostic</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </Link>
              <div className="car-parts-1 pl-5">
                <img
                  src="assets/car-parts/car-parts-6.png"
                  alt=""
                  className="w-20 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
