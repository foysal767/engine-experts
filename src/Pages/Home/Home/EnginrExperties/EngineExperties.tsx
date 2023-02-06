import { Link } from "react-router-dom"
import "./EngineExperties.css"

const EngineExperties = () => {
  return (
    <section className="w-full h-[152vh] lg:h-[85vh] blog px-4 md:px-8 lg:px-12 mb-6 lg:mb-28">
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
            <Link to="/person1">
              <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-md hover:bg-red-200 cursor-pointer">
                <div className="flex items-center justify-between w-full text-black">
                  <h1 className="flex items-center gap-2">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full object-fill"
                        src="assets/team/arif.jpg"
                        alt=""
                      />
                    </div>
                    <span className="text-gray-600 font-semibold">
                      Ariful Islam
                    </span>
                  </h1>
                  <h2 className="text-gray-600 font-semibold">Experiance</h2>
                </div>
                <div className="font-bold text-xl text-gray-700">
                  <h1>
                    Common Engine Oil <br /> Problems and Solutions
                  </h1>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full h-[300px] relative">
            <img
              className="w-full h-full"
              src="/assets/image-gallery/Performance-upgrade.jpg"
              alt=""
            />
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-md hover:bg-red-200 cursor-pointer">
              <div className="flex items-center justify-between w-full text-black">
                <h1 className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-fill"
                    src="assets/team/faysal.jpg"
                    alt=""
                  />
                  <span className="text-gray-600 font-semibold">
                    Foysal Ahmed
                  </span>
                </h1>
                <h2 className="text-gray-600 font-semibold">Experiance</h2>
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
            <div className="absolute w-[90%] h-[40%] lg:h-[60%] left-[5%] bottom-0 lg:-bottom-20 bg-white p-5 flex-col gap-3 rounded-md hover:bg-red-200 cursor-pointer">
              <div className="flex items-center justify-between w-full text-black">
                <h1 className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-fill"
                    src="assets/team/javed.jpg"
                    alt=""
                  />
                  <span className="text-gray-600 font-semibold">
                    Sheik Jabed
                  </span>
                </h1>
                <h2 className="text-gray-600 font-semibold">Experiance</h2>
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
