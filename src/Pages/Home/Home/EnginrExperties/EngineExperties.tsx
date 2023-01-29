import "./EngineExperties.css"

const EngineExperties = () => {
  return (
    <section className="h-[120vh] md:h-[65vh] lg:h-[85vh] blog mb-6 lg:mb-28 px-4 md:px-8 lg:px-12 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] w-full grid place-items-center">
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
