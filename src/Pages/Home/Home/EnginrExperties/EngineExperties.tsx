import "./EngineExperties.css"

const EngineExperties = () => {
  return (
    <section className="h-[174vh] lg:h-[85vh] blog mb-6 lg:mb-28 px-4 md:px-8 lg:px-12 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] w-full grid place-items-center">
      <div className="w-full lg:w-[90%] mx-auto h-full relative ">
        <h1 className="cssStyle text-4xl font-bold text-left pt-6">
          Our Experties
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 absolute top-20 lg:top-28">
          <div className="w-full h-[300px] relative">
            <img
              className="w-full h-full"
              src="/assets/service-1.1.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-b-box hover:bg-red-200">
              <div className="flex items-center justify-between w-full text-black">
                <h1 className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-fill cursor-pointer"
                    src="assets/team/arif.jpg"
                    alt=""
                  />
                  <span className="text-gray-600 font-semibold cursor-pointer">
                    Ariful Islam
                  </span>
                </h1>
                <h2 className="text-gray-600 font-semibold cursor-pointer">
                  Experiance
                </h2>
                {/* <h1>
                  <FaUser className="inline mr-2 text-red-500"></FaUser>Ariful
                  Islam
                </h1> */}
                {/* <h1 className="flex items-center gap-2">
                  <FaServicestack className="inline mr-2 text-red-500 w-10 h-10 rounded-full"></FaServicestack>
                  <span className="text-gray-600 font-semibold">Details</span>
                </h1> */}
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
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-b-box hover:bg-red-200">
              <div className="flex items-center justify-between w-full text-black">
                <h1 className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-fill cursor-pointer"
                    src="assets/team/faysal.jpg"
                    alt=""
                  />
                  <span className="text-gray-600 font-semibold cursor-pointer">
                    Foysal Ahmed
                  </span>
                </h1>
                <h2 className="text-gray-600 font-semibold cursor-pointer">
                  Experiance
                </h2>
              </div>
              <div className="font-bold text-xl text-gray-700">
                <h1>
                  How and When to <br /> Reaplace Engine Cluster
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] relative">
            <img
              className="w-full h-full"
              src="/assets/image-gallery/Engine-Service-&-Repair.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-b-box hover:bg-red-200">
              <div className="flex items-center justify-between w-full text-black">
                <h1 className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-fill cursor-pointer"
                    src="assets/team/javed.jpg"
                    alt=""
                  />
                  <span className="text-gray-600 font-semibold cursor-pointer">
                    Sheik Jabed
                  </span>
                </h1>
                <h2 className="text-gray-600 font-semibold cursor-pointer">
                  Experiance
                </h2>
              </div>
              <div className="font-bold text-xl text-gray-700">
                <h1>
                  Electric Cur Issue <br />
                  Servicing and Repairs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineExperties

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
