import { FaServicestack, FaUser } from "react-icons/fa";
import "./EngineExperties.css";

const EngineExperties = () => {
  return (
    <section className="w-full h-[152vh] lg:h-[85vh] blog px-4 md:px-8 lg:px-12 mb-6 lg:mb-28">
      <div className="w-full lg:w-[90%] mx-auto h-full relative ">
        <h1 className="text-4xl font-bold text-left pt-6">Our Experties</h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 absolute top-20 lg:top-28">
          <div className="w-full h-[300px] relative ">
            <img
              className="w-full h-full"
              src="/assets/service-1.1.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex flex-col gap-3 ">
              <div className="flex justify-between w-full text-black">
                <h1>
                  <FaUser className="inline mr-2 text-red-500"></FaUser>by Admin
                </h1>
                <h1>
                  <FaServicestack className="inline mr-2 text-red-500"></FaServicestack>
                  Success
                </h1>
              </div>
              <div className="font-bold text-xl text-gray-700">
                <h1>
                  Common Engine Oil <br /> Problems and Solutions
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] relative">
            <img
              className="w-full h-full"
              src="/assets/image-gallery/Performance-upgrade.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex flex-col gap-3">
              <div className="flex justify-between w-full text-black">
                <h1>
                  <FaUser className="inline mr-2 text-red-500"></FaUser>by Admin
                </h1>
                <h1>
                  <FaServicestack className="inline mr-2 text-red-500"></FaServicestack>
                  Success
                </h1>
              </div>
              <div className="font-bold text-xl text-gray-700">
                <h1>
                  How and When to <br /> Replace Break Rotars
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] relative">
            <img
              className="w-full h-full"
              src="/assets/contact/contact3.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex flex-col gap-3">
              <div className="flex justify-between w-full text-black">
                <h1>
                  <FaUser className="inline mr-2 text-red-500"></FaUser>by Admin
                </h1>
                <h1>
                  <FaServicestack className="inline mr-2 text-red-500"></FaServicestack>
                  Success
                </h1>
              </div>
              <div className="font-bold text-xl text-gray-700">
                <h1>
                  Electric Car Maintennance <br /> Servicing & Repairs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineExperties;

/**
 * <section className="px-10 my-20 bg-red-700">
      <div className="mx-36">
        <h2 className="text-4xl text-left font-bold">Our Engine Experties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 justify-evenly">
          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/service-1.1.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/image-gallery/Performance-upgrade.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/contact/contact3.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 */
